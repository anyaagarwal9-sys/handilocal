import { Button } from "@/components/ui/button";
import { MessageSquare, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+919971461494";
  const whatsappMessage = encodeURIComponent(
    "Hi HandiLocal team, I wanted to get in touch with you."
  );

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">Contact Us</h1>
        <p className="text-xl text is text-muted-foreground text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="bg-card p-8 rounded-2xl border border-border/50 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Send Us Feedback</h3>
            <p className="text-muted-foreground mb-6">
              Have feedback, questions, or want to suggest a creator? Click below to chat with us on WhatsApp.
            </p>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border/50">
            <h3 className="font-semibold mb-2 text-foreground">Are you a creator or home-run business?</h3>
            <p className="text-muted-foreground">
              We're always looking to add talented local creators, home-run businesses, and women-led ventures to our
              directory. Feel free to reach out to connect—or to share others who should get this opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
