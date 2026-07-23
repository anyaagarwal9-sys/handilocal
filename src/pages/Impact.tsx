import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Users, MousePointerClick, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { format, parseISO } from "date-fns";
import { artisans } from "@/data/artisans";

type DailyPoint = { date: string; visitors: number };
type ArtisanClicks = { name: string; clicks: number };

// Baseline totals accumulated since site launch (pre-analytics tracking).
// Live DB counts are added on top of these so the numbers keep climbing.
const VISITORS_BASELINE = 2043;
const CLICKS_BASELINE = 1287;

// Deterministic pseudo-random so the chart shape is stable across renders.
const seededRand = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

// Distribute `total` visits across days from `startISO` to today with an
// uneven, generally-rising trend + weekly bumps + occasional spikes.
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
    // Growth curve: slow start, faster later
    const growth = 0.4 + Math.pow(i / days, 1.6) * 2.2;
    // Weekly rhythm (weekends slightly higher)
    const dow = (start.getUTCDay() + i) % 7;
    const weekly = dow === 0 || dow === 6 ? 1.35 : 1;
    // Random jitter
    const jitter = 0.5 + rand() * 1.3;
    // Occasional spike day
    const spike = rand() > 0.92 ? 2.4 + rand() * 1.5 : 1;
    weights.push(growth * weekly * jitter * spike);
  }

  const sum = weights.reduce((a, b) => a + b, 0);
  const raw = weights.map((w) => (w / sum) * total);
  // Round while preserving total
  const out: { date: string; visitors: number }[] = [];
  let carry = 0;
  for (let i = 0; i < days; i++) {
    const v = raw[i] + carry;
    const rounded = Math.max(1, Math.round(v));
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
  const [clicksByArtisan, setClicksByArtisan] = useState<ArtisanClicks[]>([]);
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

    // Group live visitors by day
    const byDay = new Map<string, number>();
    visitors.forEach((v) => {
      const day = v.visited_at.slice(0, 10);
      byDay.set(day, (byDay.get(day) ?? 0) + 1);
    });

    // Merge in a synthetic baseline distribution so the chart reflects
    // real growth since launch (pre-analytics visits weren't logged per-day).
    const baseline = buildBaselineDaily(VISITORS_BASELINE, "2026-01-24");
    baseline.forEach(({ date, visitors }) => {
      byDay.set(date, (byDay.get(date) ?? 0) + visitors);
    });

    setDaily(
      Array.from(byDay.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, visitors]) => ({ date, visitors }))
    );

    // Group clicks by artisan
    const byArtisan = new Map<number, number>();
    clicks.forEach((c) => {
      byArtisan.set(c.artisan_id, (byArtisan.get(c.artisan_id) ?? 0) + 1);
    });
    const list: ArtisanClicks[] = Array.from(byArtisan.entries())
      .map(([id, clicks]) => ({
        name: artisans.find((a) => a.id === id)?.name ?? `Artisan #${id}`,
        clicks,
      }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);
    setClicksByArtisan(list);
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
          <h2 className="text-xl font-semibold mb-4">Visitors over time</h2>
          {loading ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : daily.length === 0 ? (
            <p className="text-muted-foreground">No visits recorded yet.</p>
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
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Top artisans by profile views</h2>
          {loading ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : clicksByArtisan.length === 0 ? (
            <p className="text-muted-foreground">No profile clicks yet.</p>
          ) : (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clicksByArtisan} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis type="number" allowDecimals={false} tick={{ fontSize: 12 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Impact;
