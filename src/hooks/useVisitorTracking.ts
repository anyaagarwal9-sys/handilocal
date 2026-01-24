import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useVisitorTracking = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      // Track this visit
      await supabase.from("site_visitors").insert({
        user_agent: navigator.userAgent,
        page_path: window.location.pathname,
      });
    };

    const fetchVisitorCount = async () => {
      const { count, error } = await supabase
        .from("site_visitors")
        .select("*", { count: "exact", head: true });

      if (!error && count !== null) {
        setVisitorCount(count);
      }
      setLoading(false);
    };

    // Only track once per session
    const hasTracked = sessionStorage.getItem("visitor_tracked");
    if (!hasTracked) {
      trackVisit();
      sessionStorage.setItem("visitor_tracked", "true");
    }

    fetchVisitorCount();

    // Subscribe to realtime updates for visitor count
    const channel = supabase
      .channel("site_visitors_count")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "site_visitors" },
        () => {
          setVisitorCount((prev) => (prev !== null ? prev + 1 : 1));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { visitorCount, loading };
};

export const trackProfileClick = async (artisanId: number) => {
  await supabase.from("profile_clicks").insert({ artisan_id: artisanId });
};
