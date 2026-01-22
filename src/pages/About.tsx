import { motion } from "framer-motion";
import { User } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import aboutElephants from "@/assets/about-elephants.jpg";
const fadeInUp = {
  initial: {
    opacity: 0,
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
      staggerChildren: 0.15,
    },
  },
};
const teamMembers = [
  {
    name: "Anya Agarwal",
    age: 14,
    role: "Web Developer, Tech and Communications Lead",
    bio: "Builds the website and coordinates producer outreach and interviews. With strong programming and robotics skills, she handles technical tasks smoothly and keeps the team organized and ahead.",
    image: team1,
  },
  {
    name: "Neesah Kant Sharma",
    age: 14,
    role: "Creative & Coordination Head",
    bio: "Communicates with artisans and builds genuine connections. She manages schedules, responsibilities, and interviews, keeping everyone aligned and on time.",
    image: team4,
  },
  {
    name: "Shivnandini Dhaul",
    age: 15,
    role: "Photographer and Design Lead",
    bio: "Leads photography and compiles photos/videos from interviews and meetings for the evidence section. She also supports the website design.",
    image: team3,
  },
  {
    name: "Vaahini Bajoria",
    age: 14,
    role: "Documentation and Design Lead",
    bio: "Keeps detailed meeting minutes and documents decisions clearly. She gathers producer stories during interviews to support the team and the website content.",
    image: team2,
  },
];
const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Two Column Layout */}
      <section className="relative py-12 md:py-16 px-4 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src={aboutElephants} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - About HandiLocal */}
            <motion.div className="text-left" initial="initial" animate="animate" variants={staggerContainer}>
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
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mx-0 py-[30px]">
                We believe in the power of human connection and the beauty of handcrafted goods. Our platform was born
                from a simple idea: to create a space where talented local artisans can share their stories and connect
                with people who appreciate authentic craftsmanship.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
                We're not a marketplace — we're a bridge. We never handle transactions or take commissions. Every
                artisan keeps 100% of their earnings, always.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-4 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
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
            <span className="inline-block py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 px-[16px] text-left">
              The People Behind HandiLocal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Our Team</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                }}
              >
                <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[50%_22%]"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-16 h-16 text-primary/50" />
                  )}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}, {member.age}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default About;
