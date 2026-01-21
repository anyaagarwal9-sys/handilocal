import { motion } from "framer-motion";
import { Search, UserPlus, MessageCircle, Handshake, User } from "lucide-react";

import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import aboutElephants from "@/assets/about-elephants.jpg";

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
    name: "Anya Agarwal",
    age: 14,
    role: "Web Developer, Tech and Communications Lead",
    bio: "Builds the website and coordinates producer outreach and interviews. With strong programming and robotics skills, she handles technical tasks smoothly and keeps the team organized and ahead.",
    image: team1
  },
  {
    name: "Vaahini Bajoria",
    age: 14,
    role: "Documentation and Design Lead",
    bio: "Keeps detailed meeting minutes and documents decisions clearly. She gathers producer stories during interviews to support the team and the website content.",
    image: team2
  },
  {
    name: "Shivnandini Dhaul",
    age: 15,
    role: "Photographer and Design Lead",
    bio: "Leads photography and compiles photos/videos from interviews and meetings for the evidence section. She also supports the website design.",
    image: team3
  },
  {
    name: "Neesah Kant Sharma",
    age: 14,
    role: "Creative & Coordination Head",
    bio: "Communicates with artisans and builds genuine connections. She manages schedules, responsibilities, and interviews, keeping everyone aligned and on time.",
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
      {/* Hero Section - Two Column Layout */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={aboutElephants}
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - About HandiLocal */}
            <motion.div 
              className="text-left"
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
            </motion.div>

            {/* Divider - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            {/* Right Column - Description */}
            <motion.div 
              className="text-left md:pl-8 md:border-l border-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe in the power of human connection and the beauty of handcrafted goods. 
                Our platform was born from a simple idea: to create a space where talented local 
                artisans can share their stories and connect with people who appreciate authentic craftsmanship.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                We're not a marketplace — we're a bridge. We never handle transactions or take commissions. 
                Every artisan keeps 100% of their earnings, always.
              </p>
            </motion.div>
          </div>
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
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[50%_22%]"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-12 h-12 text-primary/50" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">Age: {member.age}</p>
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
