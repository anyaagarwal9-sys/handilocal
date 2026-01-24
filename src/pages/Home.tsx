import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Store,
  TrendingDown,
  Wifi,
  ShoppingBag,
  Sparkles,
  HandHeart,
  MessageCircle,
  MapPin,
  Package,
  BadgeCheck,
  Eye,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

// Import artisan images for the gallery
import aratnaBose1 from "@/assets/aratna-bose-1.jpg";
import aratnaBose2 from "@/assets/aratna-bose-2.jpg";
import jitendra3 from "@/assets/jitendra-3.jpg";
import jitendra5 from "@/assets/jitendra-5.jpg";
import sonu2 from "@/assets/sonu-2.jpg";
import sonu5 from "@/assets/sonu-5.jpg";
import salman3 from "@/assets/salman-3.jpg";
import nomaan2 from "@/assets/nomaan-2.jpg";
import heroCrafts from "@/assets/hero-crafts.png";
const fadeInUp = {
  initial: {
    opacity: 20,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
  },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0.5,
  },
};

// Gallery images for carousel
const galleryImages = [
  {
    src: heroCrafts,
    alt: "Handcrafted items",
  },
  {
    src: aratnaBose1,
    alt: "Aratna Bose's textiles",
  },
  {
    src: aratnaBose2,
    alt: "Beautiful fabric work",
  },
  {
    src: jitendra3,
    alt: "Jitendra's puppets",
  },
  {
    src: jitendra5,
    alt: "Traditional puppetry",
  },
  {
    src: sonu2,
    alt: "Sonu's craft work",
  },
  {
    src: sonu5,
    alt: "Handmade products",
  },
  {
    src: salman3,
    alt: "Salman's creations",
  },
  {
    src: nomaan2,
    alt: "Nomaan's artwork",
  },
];
const Home = () => {
  const { visitorCount, loading } = useVisitorTracking();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden md:py-[50px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroCrafts}
            alt=""
            className="w-full h-full object-cover sepia-[0.15] saturate-[1.1] brightness-[1.05] opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground drop-shadow-md leading-tight"
            >
              Discover the Hands{" "}
              <span className="text-primary relative">
                Behind
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-secondary/30 -z-10 rounded"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                />
              </span>{" "}
              Your Community
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-8 text-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
            >
              Beautiful handmade products exist just minutes from your home — yet local artisans remain invisible
              because we choose <span className="text-foreground font-bold">convenience over community</span>.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold mb-10 text-foreground drop-shadow-md"
            >
              <span className="text-primary">HandiLocal</span> changes that.
            </motion.p>

            {/* Key Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
              {[
                {
                  number: "21+",
                  label: "Creators",
                },
                {
                  number: "100+",
                  label: "Products",
                },
                {
                  number: "0",
                  label: "Commissions",
                },
                {
                  number: loading ? "..." : (visitorCount ?? 0).toLocaleString(),
                  label: "Visitors",
                  icon: Eye,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary flex items-center justify-center gap-2">
                    {stat.icon && <stat.icon className="w-8 h-8 md:w-10 md:h-10" />}
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
              <Link to="/artisans">
                <Button
                  size="lg"
                  className="gap-2 rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Discover Artisans <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                    Watch Our Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">The HandiLocal Story</DialogTitle>
                    <DialogDescription className="pt-4 text-base leading-relaxed">
                      We partnered with 20-25 local artisans making handmade goods, interviewed them about their
                      products and challenges, and built this platform to showcase their incredible work.
                      <br />
                      <br />
                      Our mission is simple: <strong>connect buyers directly to creators</strong> — no money handling,
                      no commissions, just pure connection.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <Link to="/about">
                      <Button className="w-full rounded-full">Learn More About Us</Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Crafts Carousel */}
      <section className="py-8 px-4 bg-card border-y border-border/50 md:py-[10px]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-6"
          >
            <h3 className="text-lg font-semibold text-foreground my-0 md:text-2xl">Glimpses of Local Craftsmanship</h3>
          </motion.div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    className="aspect-square rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{
                      scale: 1.02,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover sepia-[0.15] saturate-[1.1] brightness-[1.05]"
                      loading="lazy"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10 border-dotted"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-2xl md:text-3xl font-bold text-primary-foreground"
          >
            Bridging communities, one artisan at a time.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-card relative md:py-[20px]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">The Problem We're Solving</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Thousands of skilled artisans remain invisible to digital consumers
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {[
              {
                icon: Wifi,
                title: "Digital Exclusion",
                description:
                  "Over 70% of small business owners lack the digital skills needed to sell products online, according to NITI Aayog (2023).",
                highlight: "70%",
              },
              {
                icon: TrendingDown,
                title: "Middlemen Exploitation",
                description:
                  "Artisans depend on middlemen who take up to 40% commissions, drastically reducing their hard-earned income.",
                highlight: "40%",
              },
              {
                icon: ShoppingBag,
                title: "Platform Barriers",
                description:
                  "Requirements like GST registration, professional packaging, and complex logistics keep artisans off major platforms.",
                highlight: "GST",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-8 hover-lift cursor-default group py-[20px]"
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Noida Stats */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Noida and Delhi NCR</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">The Local Reality</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Around <strong className="text-foreground">1,800 artisans</strong> are registered under the ODOP (One
                  District One Product) scheme, but <strong className="text-foreground">fewer than 300</strong> have any
                  online presence. That's a massive digital inequality gap.
                </p>
              </div>
              <div className="flex gap-6">
                <motion.div
                  className="text-center bg-background rounded-2xl p-6 shadow-lg min-w-[140px]"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <span className="text-4xl md:text-5xl font-bold text-primary">1,800</span>
                  <span className="text-sm text-muted-foreground block mt-1">
                    Registered
                    <br />
                    Artisans
                  </span>
                </motion.div>
                <motion.div
                  className="text-center bg-background rounded-2xl p-6 shadow-lg min-w-[140px]"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <span className="text-4xl md:text-5xl font-bold text-destructive">83%</span>
                  <span className="text-sm text-muted-foreground block mt-1">
                    No Online
                    <br />
                    Presence
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Products Section - What You'll Find */}
      <section className="py-12 px-4 bg-background md:py-[30px]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Handcrafted With Love
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">What You'll Find</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Non-perishable, handmade treasures from your community
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {[
              "Rajasthani Puppets",
              "Handwoven Textiles",
              "Handcrafted Jewellery",
              "Artisan Bags",
              "Home Decor",
              "Art & Paintings",
              "Hand-crafted Oud",
            ].map((product, index) => (
              <motion.div
                key={product}
                className="px-6 py-3 bg-card border border-border/50 rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
              >
                {product}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - How We Bridge the Gap */}
      <section className="py-12 px-4 bg-card relative md:py-[30px]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How We Bridge the Gap</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're not a marketplace — we're a bridge connecting artisans directly to buyers
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {[
              {
                icon: Heart,
                title: "Direct Connection",
                description:
                  "Connect directly with artisans. No transaction fees, no commissions — they keep 100% of their earnings.",
              },
              {
                icon: Users,
                title: "Their Stories",
                description:
                  "Discover the people behind the craft — their journey, passion, and the traditions they preserve.",
              },
              {
                icon: Store,
                title: "Support Local",
                description:
                  "Every connection strengthens your local community and helps preserve traditional craftsmanship.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 rounded-3xl hover:bg-background transition-colors duration-300 group"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  <item.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-10 px-4 bg-background md:py-[40px]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            {[
              {
                icon: BadgeCheck,
                title: "Verified Artisans",
                description: "Every artisan is personally interviewed and verified",
              },
              {
                icon: HandHeart,
                title: "Zero Fees",
                description: "We don't handle money — ever",
              },
              {
                icon: MessageCircle,
                title: "Direct Contact",
                description: "Talk to creators directly via WhatsApp or phone",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-18 px-4 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Support Local Artisans?
            </h2>
            <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
              Browse our directory of skilled creators and find unique, handcrafted products made with love in your
              community
            </p>
            <Link to="/artisans">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explore Artisan Directory
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Home;
