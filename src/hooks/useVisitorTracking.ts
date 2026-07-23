import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "hl_visitor_logged";

export const useVisitorTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");

    supabase
      .from("site_visitors")
      .insert({
        page_path: location.pathname,
        user_agent: window.navigator.userAgent,
      })
      .then(({ error }) => {
        if (error) console.error("visitor log failed", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
