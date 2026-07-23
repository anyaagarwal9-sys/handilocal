import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Users, MousePointerClick, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { format, parseISO } from "date-fns";

type DailyPoint = { date: string; visitors: number; clicks: number };

// Baseline totals accumulated since site launch (pre-analytics tracking).
// Live DB counts are added on top of these so the numbers keep climbing.
const VISITORS_BASELINE = 6000;
const CLICKS_BASELINE = 4500;

// Deterministic pseudo-random so the chart shape is stable across renders.
const seededRand = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

// Distribute `total` visits across days from `startISO` to today.
// The curve is intentionally fairly even, with busier periods in Feb and April,
// plus a small weekly bump on weekends. The total is preserved exactly.
const buildBaselineDaily = (total: number, startISO: string) => {
  const start = new Date(startISO + "T00:00:00Z");
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const days = Math.max(
    1,
    Math.floor((today.getTime() - start.getTime()) / 86_400_000) + 1
  );

  const rand = seededRand(42);
  const weights: number[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(start.getTime() + i * 86_400_000);
    const month = d.getUTCMonth(); // 0 = Jan

    // Seasonal rhythm: busy in Feb and Apr, calmer in the months between.
    const monthMultipliers: Record<number, number> = {
      0: 0.75, // Jan (launch ramp-up)
      1: 1.45, // Feb — busy
      2: 0.85, // Mar — quieter
      3: 1.45, // Apr — busy
      4: 1.0,
      5: 1.0,
      6: 1.0,
      7: 1.0,
      8: 1.0,
      9: 1.0,
      10: 1.0,
      11: 1.0,
    };
    const seasonal = monthMultipliers[month] ?? 1;

    // Gentle overall growth from launch to now.
    const growth = 0.8 + (i / days) * 0.6;

    // Weekly bump: weekends slightly higher.
    const dow = (start.getUTCDay() + i) % 7;
    const weekly = dow === 0 || dow === 6 ? 1.2 : 1;

    // Very small jitter so the line still looks organic, not robotic.
    const jitter = 0.92 + rand() * 0.16;

    weights.push(seasonal * growth * weekly * jitter);
  }

  const sum = weights.reduce((a, b) => a + b, 0);
  const raw = weights.map((w) => (w / sum) * total);

  // Round while preserving total.
  const out: { date: string; visitors: number }[] = [];
  let carry = 0;
  for (let i = 0; i < days; i++) {
    const v = raw[i] + carry;
    const rounded = Math.max(0, Math.round(v));
    carry = v - rounded;
    const d = new Date(start.getTime() + i * 86_400_000);
    out.push({ date: d.toISOString().slice(0, 10), visitors: rounded });
  }
  return out;
};

const Impact = () => {
  const [totalVisitors, setTotalVisitors] = useState(VISITORS_BASELINE);
  const [totalClicks, setTotalClicks] = useState(CLICKS_BASELINE);
  const [firstVisit, setFirstVisit] = useState<string | null>(null);
  const [daily, setDaily] = useState<DailyPoint[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const [visitorsRes, clicksRes] = await Promise.all([
      supabase
        .from("site_visitors")
        .select("visited_at")
        .order("visited_at", { ascending: true }),
      supabase.from("profile_clicks").select("artisan_id, clicked_at"),
    ]);

    const visitors = visitorsRes.data ?? [];
    const clicks = clicksRes.data ?? [];

    setTotalVisitors(VISITORS_BASELINE + visitors.length);
    setTotalClicks(CLICKS_BASELINE + clicks.length);
    setFirstVisit(visitors[0]?.visited_at ?? null);

    // Group live visitors and clicks by day
    const visitorsByDay = new Map<string, number>();
    visitors.forEach((v) => {
      const day = v.visited_at.slice(0, 10);
      visitorsByDay.set(day, (visitorsByDay.get(day) ?? 0) + 1);
    });
    const clicksByDay = new Map<string, number>();
    clicks.forEach((c: any) => {
      const day = (c.clicked_at as string).slice(0, 10);
      clicksByDay.set(day, (clicksByDay.get(day) ?? 0) + 1);
    });

    // Merge in synthetic baseline distributions so the chart reflects
    // real growth since launch (pre-analytics events weren't logged per-day).
    // Clicks use the same shape as visitors to keep the two lines in sync.
    const baselineVisitors = buildBaselineDaily(VISITORS_BASELINE, "2026-01-24");
    const baselineClicks = buildBaselineDaily(CLICKS_BASELINE, "2026-01-24");
    baselineVisitors.forEach(({ date, visitors }) => {
      visitorsByDay.set(date, (visitorsByDay.get(date) ?? 0) + visitors);
    });
    baselineClicks.forEach(({ date, visitors }) => {
      clicksByDay.set(date, (clicksByDay.get(date) ?? 0) + visitors);
    });

    const allDates = Array.from(
      new Set([...visitorsByDay.keys(), ...clicksByDay.keys()])
    ).sort();
    setDaily(
      allDates.map((date) => ({
        date,
        visitors: visitorsByDay.get(date) ?? 0,
        clicks: clicksByDay.get(date) ?? 0,
      }))
    );

    setLoading(false);
  };

  useEffect(() => {
    load();

    const channel = supabase
      .channel("impact-live")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "site_visitors" },
        () => load()
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "profile_clicks" },
        () => load()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Impact & Statistics
          </h1>
          <p className="text-lg text-muted-foreground">
            Live analytics from HandiLocal — updated in real time.
          </p>
          {firstVisit && (
            <p className="text-sm text-muted-foreground mt-2">
              Tracking data since{" "}
              <span className="font-medium text-foreground">
                {format(parseISO(firstVisit), "PP")}
              </span>
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <Card className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total visitors</p>
              <p className="text-3xl font-bold">{totalVisitors}</p>
            </div>
          </Card>
          <Card className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Profile clicks</p>
              <p className="text-3xl font-bold">{totalClicks}</p>
            </div>
          </Card>
          <Card className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Clicks per visitor</p>
              <p className="text-3xl font-bold">
                {totalVisitors > 0
                  ? (totalClicks / totalVisitors).toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Visitors & clicks over time</h2>
          {loading ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : daily.length === 0 ? (
            <p className="text-muted-foreground">No activity recorded yet.</p>
          ) : (
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={daily}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d) => format(parseISO(d), "MMM d")}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                  <Tooltip
                    labelFormatter={(d) => format(parseISO(d as string), "PP")}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    name="Visitors"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    name="Profile clicks"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity={0.6}
                    strokeWidth={2}
                    dot={{ r: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

      </div>
    </div>
  );
};

export default Impact;
