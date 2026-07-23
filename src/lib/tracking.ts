import { supabase } from "@/integrations/supabase/client";

export const trackProfileClick = (artisanId: number) => {
  supabase
    .from("profile_clicks")
    .insert({ artisan_id: artisanId })
    .then(({ error }) => {
      if (error) console.error("profile click log failed", error);
    });
};
