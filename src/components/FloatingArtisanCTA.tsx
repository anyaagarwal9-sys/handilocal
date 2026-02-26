import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingArtisanCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <Link to="/artisans">
            <Button
              size="lg"
              className="rounded-full px-6 py-6 text-base gap-2 shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Discover Artisans
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingArtisanCTA;
