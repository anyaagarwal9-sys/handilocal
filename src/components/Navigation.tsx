import { Link, useLocation } from "react-router-dom";
import { Menu, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";


const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = "https://handilocal.com";

  const copyToClipboard = async (text: string) => {
    const nav = typeof window !== "undefined" ? window.navigator : undefined;

    // Modern clipboard API
    if (nav?.clipboard?.writeText) {
      await nav.clipboard.writeText(text);
      return;
    }

    // Fallback for environments where clipboard API isn't available
    if (typeof document !== "undefined") {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const handleShare = async () => {
    try {
      // Prefer native share where available, but ALWAYS copy as well.
      const nav = typeof window !== "undefined" ? window.navigator : undefined;
      if (nav && typeof (nav as any).share === "function") {
        await (nav as any).share({ title: "HandiLocal", url: shareUrl });
      }

      await copyToClipboard(shareUrl);
      toast({ title: "Link copied", description: shareUrl });
    } catch {
      // Silent fail: user asked to avoid error messaging.
    }
  };
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/artisans", label: "Artisans" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground tracking-tight font-heading">
              Handi<span className="text-primary">Local</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-heading ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="rounded-full px-4"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Link to="/artisans">
              <Button className="rounded-full px-6">Find Artisans</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background">
              <div className="flex flex-col gap-2 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all font-heading ${
                      isActive(link.to)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/artisans" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 rounded-full">
                    Find Artisans
                  </Button>
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-full"
                  onClick={async () => {
                    await handleShare();
                    setIsOpen(false);
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
