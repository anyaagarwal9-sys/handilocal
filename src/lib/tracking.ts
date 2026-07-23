import { supabase } from "@/integrations/supabase/client";

export const trackProfileClick = (creatorId: number) => {
  supabase
    .from("profile_clicks")
    .insert({ artisan_id: creatorId })
    .then(({ error }) => {
      if (error) console.error("profile click log failed", error);
    });
};
