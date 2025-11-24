import { Search, UserPlus, MessageCircle, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Artisans",
      description: "Explore our directory of talented local artisans and small business owners. Filter by craft, location, or specialty to find exactly what you're looking for."
    },
    {
      icon: UserPlus,
      title: "Learn Their Story",
      description: "Read about each artisan's journey, their craft techniques, and what makes their work unique. Get to know the person behind the products."
    },
    {
      icon: MessageCircle,
      title: "Connect Directly",
      description: "Use the contact information provided to reach out directly to the artisan. Discuss your needs, ask questions, or place a custom order."
    },
    {
      icon: Handshake,
      title: "Support Local",
      description: "Build a direct relationship with the artisan. No middlemen, no commissions—just authentic connections supporting local talent."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">How It Works</h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Connecting you with local artisans in four simple steps
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Why We Don't Handle Transactions</h2>
          <p className="text-muted-foreground mb-4">
            We believe in empowering artisans by letting them maintain complete control over their 
            business relationships. By not handling transactions, we ensure:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>No commission fees cutting into artisan earnings</li>
            <li>Direct, personal relationships between buyers and makers</li>
            <li>Flexibility for custom orders and special requests</li>
            <li>Authentic connections built on trust and communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
