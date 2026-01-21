import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Users } from "lucide-react";
import { z } from "zod";
import { useMemo, useState, type FormEvent } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email.").max(255, "Email is too long."),
  subject: z.string().trim().min(1, "Please enter a subject.").max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(2000, "Message is too long."),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof typeof form, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof typeof form;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});

    const to = team[0]?.email ?? "";
    const cc = team
      .slice(1)
      .map((m) => m.email)
      .filter(Boolean)
      .join(",");
    const subject = parsed.data.subject;
    const body = [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      "",
      parsed.data.message,
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(to)}?cc=${encodeURIComponent(
      cc
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
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
              <p className="text-muted-foreground mb-4">
                We're always looking to add talented creators to our directory. Feel free to reach out to
                connect—or to share other artisans who should get this opportunity.
              </p>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more..." 
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                When you click <span className="font-medium text-foreground">Send Message</span>, your
                email app will open so you can send this directly to our team.
              </p>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
