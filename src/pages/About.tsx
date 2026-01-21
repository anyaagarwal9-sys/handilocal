import { motion } from "framer-motion";
import { Search, UserPlus, MessageCircle, Handshake, Heart, Users, Store, User } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Co-Founder",
    bio: "Passionate about connecting artisans with their community. Add your introduction here.",
    image: null
  },
  {
    name: "Team Member 2",
    role: "Co-Founder",
    bio: "Dedicated to preserving traditional crafts and empowering local creators. Add your introduction here.",
    image: null
  },
  {
    name: "Team Member 3",
    role: "Co-Founder",
    bio: "Believes in the power of human connection and authentic storytelling. Add your introduction here.",
    image: null
  },
  {
    name: "Team Member 4",
    role: "Co-Founder",
    bio: "Committed to bridging the digital divide for local artisans. Add your introduction here.",
    image: null
  }
];

const steps = [
  {
    icon: Search,
    title: "Browse Artisans",
    description: "Explore our directory of talented local artisans and small business owners. Filter by craft, location, or specialty."
  },
  {
    icon: UserPlus,
    title: "Learn Their Story",
    description: "Read about each artisan's journey, their craft techniques, and what makes their work unique."
  },
  {
    icon: MessageCircle,
    title: "Connect Directly",
    description: "Use the contact information provided to reach out directly to the artisan via WhatsApp or call."
  },
  {
    icon: Handshake,
    title: "Support Local",
    description: "Build a direct relationship with the artisan. 100% of your payment goes straight to them."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Our Story
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
            >
              About <span className="text-primary">HandiLocal</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              We believe in the power of human connection and the beauty of handcrafted goods. 
              Our platform was born from a simple idea: to create a space where talented local 
              artisans can share their stories and connect with people who appreciate authentic craftsmanship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Heart,
                title: "Our Mission",
                description: "To empower local artisans by providing them with visibility and direct connections to their community."
              },
              {
                icon: Users,
                title: "Our Vision",
                description: "A world where every local artisan can thrive without barriers, connecting directly with those who value their craft."
              },
              {
                icon: Store,
                title: "Our Promise",
                description: "We never handle transactions or take commissions. Artisans keep 100% of their earnings, always."
              }
            ].map((item) => (
              <motion.div 
                key={item.title}
                className="text-center p-6"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              The People Behind HandiLocal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-primary/50" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Connecting you with local artisans in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className="flex gap-4 items-start p-6 bg-background rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center relative">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "No transaction fees or commissions",
                "Direct communication between artisans and buyers",
                "Focus on storytelling and authentic connections",
                "Supporting local communities and economies",
                "Preserving traditional crafts and techniques",
                "100% of earnings go to the artisan"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-background rounded-xl"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
