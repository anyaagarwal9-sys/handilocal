import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Store, TrendingDown, Wifi, ShoppingBag } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Bridging the Digital Gap</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Connecting Local <span className="text-primary">Artisans</span><br />
            to the Digital World
          </h1>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering handicraft makers and home-run businesses in Noida and nearby villages 
            to reach customers directly — no middlemen, no commissions, just pure connection.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/artisans">
              <Button size="lg" className="gap-2 rounded-full px-8 text-base">
                Discover Artisans <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The Problem We're Solving</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thousands of skilled artisans remain invisible to digital consumers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Wifi className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Digital Exclusion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over <strong className="text-foreground">70% of small business owners</strong> lack the digital skills 
                needed to sell products online, according to NITI Aayog (2023).
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Middlemen Exploitation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Artisans depend on middlemen who take <strong className="text-foreground">up to 40% commissions</strong>, 
                drastically reducing their hard-earned income.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Platform Barriers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Requirements like GST registration, professional packaging, and complex logistics 
                keep artisans off platforms like Amazon and Meesho.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">The Noida Reality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the Noida and Greater Noida region, around <strong className="text-foreground">1,800 artisans</strong> are 
                  registered under the ODOP (One District One Product) scheme, but <strong className="text-foreground">fewer 
                  than 300</strong> have any online presence. That's a massive digital inequality gap — many skilled 
                  creators remain invisible to a market that increasingly prefers online shopping.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-background rounded-xl p-6 shadow-sm min-w-[180px]">
                <span className="text-5xl font-bold text-primary">83%</span>
                <span className="text-sm text-muted-foreground mt-1">Artisans without<br/>online presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How We Bridge the Gap</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not a marketplace — we're a bridge connecting artisans directly to buyers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Direct Connection</h3>
              <p className="text-muted-foreground">
                Connect directly with artisans. No transaction fees, no commissions — 
                they keep 100% of their earnings.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Their Stories</h3>
              <p className="text-muted-foreground">
                Discover the people behind the craft — their journey, passion, 
                and the traditions they preserve.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Support Local</h3>
              <p className="text-muted-foreground">
                Every connection strengthens your local community and helps 
                preserve traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Discover Local Talent?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Browse our directory of skilled artisans and find unique, handcrafted products
          </p>
          <Link to="/artisans">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-base">
              Explore Artisan Directory
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
