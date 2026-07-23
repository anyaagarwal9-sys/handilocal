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

const Impact = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
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

    setTotalVisitors(visitors.length);
    setTotalClicks(clicks.length);
    setFirstVisit(visitors[0]?.visited_at ?? null);

    // Group visitors by day
    const byDay = new Map<string, number>();
    visitors.forEach((v) => {
      const day = v.visited_at.slice(0, 10);
      byDay.set(day, (byDay.get(day) ?? 0) + 1);
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
