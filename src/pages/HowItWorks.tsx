import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, UserPlus, MessageCircle, Handshake, Package, Users, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const steps = [{
  icon: Search,
  title: "Browse Artisans",
  description: "Explore our directory of talented local artisans and small business owners. Filter by craft, location, or specialty.",
  detail: "We've carefully curated a collection of skilled creators from Noida, Delhi Haat, and surrounding areas."
}, {
  icon: UserPlus,
  title: "Learn Their Story",
  description: "Read about each artisan's journey, their craft techniques, and what makes their work unique.",
  detail: "Every artisan has a story — from years of experience to the challenges they've overcome."
}, {
  icon: MessageCircle,
  title: "Connect Directly",
  description: "Use the contact information provided to reach out directly to the artisan via WhatsApp or call.",
  detail: "No middlemen, no complicated forms — just direct human connection."
}, {
  icon: Handshake,
  title: "Support Local",
  description: "Build a direct relationship with the artisan. 100% of your payment goes straight to them.",
  detail: "We never handle transactions or take commissions. Your support goes directly to the creator."
}];
const quickSteps = [{
  icon: Package,
  title: "Browse",
  description: "Explore our curated collection of local artisans"
}, {
  icon: Users,
  title: "Discover",
  description: "Read their stories and view their handmade products"
}, {
  icon: MessageCircle,
  title: "Connect",
  description: "Reach out directly via WhatsApp or call"
}, {
  icon: HandHeart,
  title: "Support",
  description: "Buy directly — 100% goes to the artisan"
}];
const HowItWorks = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Image with Overlay (matches Home hero style) */}
        <div className="absolute inset-0">
          <img src="/images/hero-crafts.png" alt="" className="w-full h-full object-cover sepia-[0.25] saturate-[1.2] brightness-[1.12] contrast-[0.98] opacity-55" />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Simple Process
          </motion.span>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            How <span className="text-primary">HandiLocal</span> Works
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-lg md:text-xl max-w-2xl mx-auto font-serif text-slate-600">
            Connecting you with local artisans in four simple steps — no middlemen, no fees, just direct connection.
          </motion.p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {quickSteps.map((step, index) => <motion.div key={step.title} className="relative" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <div className="text-center p-6">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Step by Step Guide</h2>
            <p className="text-lg text-muted-foreground">
              Here's exactly how you can start supporting local artisans today
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => <motion.div key={step.title} className="flex flex-col md:flex-row gap-6 items-start p-8 bg-card rounded-3xl border border-border/50" initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center relative">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background border-3 border-primary flex items-center justify-center text-lg font-bold text-primary shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-3">{step.description}</p>
                  <p className="text-muted-foreground/80 italic">{step.detail}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {["No transaction fees or commissions", "Direct communication between artisans and buyers", "Focus on storytelling and authentic connections", "Supporting local communities and economies", "Preserving traditional crafts and techniques", "100% of earnings go to the artisan"].map((item, index) => <motion.div key={index} className="flex items-center gap-3 p-3 bg-background rounded-xl" initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }}>
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Support Local Artisans?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start browsing our directory and discover the talented creators in your community.
            </p>
            <Link to="/artisans">
              <Button size="lg" className="gap-2 rounded-full px-8 text-base shadow-lg shadow-primary/25">
                Discover Artisans <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default HowItWorks;