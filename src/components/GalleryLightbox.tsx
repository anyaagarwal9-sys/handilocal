import * as React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type GalleryLightboxProps = {
  images: string[];
  title: string;
  className?: string;
};

export function GalleryLightbox({ images, title, className }: GalleryLightboxProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const safeImages = React.useMemo(() => images.filter(Boolean), [images]);

  const openAt = React.useCallback((i: number) => {
    if (safeImages.length === 0) return;
    setIndex(Math.max(0, Math.min(i, safeImages.length - 1)));
    setOpen(true);
  }, [safeImages.length]);

  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  }, [safeImages.length]);

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % safeImages.length);
  }, [safeImages.length]);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, next, prev]);

  if (safeImages.length === 0) return null;

  const current = safeImages[index];

  return (
    <>
      <div className={className ?? "grid grid-cols-2 md:grid-cols-3 gap-4"}>
        {safeImages.map((img, i) => (
          <button
            key={`${img}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="group overflow-hidden rounded-lg border border-border bg-card"
            aria-label={`Open image ${i + 1} of ${safeImages.length}`}
          >
            <img
              src={img}
              alt={`${title} gallery image ${i + 1}`}
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{title} Gallery</DialogTitle>
          </DialogHeader>

          <div className="relative bg-background">
            <img
              src={current}
              alt={`${title} enlarged image ${index + 1}`}
              className="block w-full max-h-[80vh] object-contain bg-background"
            />

            <div className="absolute top-3 right-3 flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-full bg-background/85 border border-border text-xs text-foreground">
                {index + 1} / {safeImages.length}
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="bg-background/85"
                onClick={() => setOpen(false)}
                aria-label="Close gallery"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {safeImages.length > 1 && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/85"
                  onClick={prev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/85"
                  onClick={next}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
