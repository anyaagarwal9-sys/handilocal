import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, MessageSquare } from "lucide-react";
import { useMemo } from "react";

const Contact = () => {
  const team = useMemo(
    () => [
      {
        name: "Anya Agarwal",
        phone: "+91 96250 21861",
        email: "anyaagarwal9@gmail.com",
      },
      {
        name: "Neesah Kant Sharma",
        phone: "+91 99100 56067",
        email: "neesahksharma@gmail.com",
      },
      {
        name: "Shivnandini Dhaul",
        phone: "+91 9108009373",
        email: "shivnandinidhaul@gmail.com",
      },
      {
        name: "Vaahini Bajoria",
        phone: "+91 98115 12701",
        email: "vaahinibajoria@gmail.com",
      },
    ],
    []
  );

  const handleFeedback = () => {
    window.location.href = "mailto:anyaagarwal9@gmail.com";
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">Contact Us</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              {team.map((member) => (
                <div key={member.email} className="bg-card p-4 rounded-lg border border-border/50">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{member.name}</p>
                      <div className="mt-2 space-y-1">
                        <a
                          className="flex items-center gap-2 text-muted-foreground hover:underline"
                          href={`mailto:${member.email}`}
                        >
                          <Mail className="w-4 h-4 text-primary" />
                          <span>{member.email}</span>
                        </a>
                        <a
                          className="flex items-center gap-2 text-muted-foreground hover:underline"
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                        >
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-foreground">Are you an artisan?</h3>
              <p className="text-muted-foreground">
                We're always looking to add talented creators to our directory. Feel free to reach out to
                connect—or to share other artisans who should get this opportunity.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="bg-card p-8 rounded-2xl border border-border/50 text-center max-w-sm w-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Send Us Feedback</h3>
              <p className="text-muted-foreground mb-6">
                Have feedback, questions, or want to suggest an artisan? Click below to send us an email directly.
              </p>
              <Button onClick={handleFeedback} className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Open Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
