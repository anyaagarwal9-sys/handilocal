import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const ArtisanProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=600&h=600&fit=crop"
              alt="Artisan"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-foreground">Sarah Chen</h1>
            <p className="text-2xl text-primary mb-4">Pottery & Ceramics</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in pottery and ceramics, I create functional 
              art pieces that bring beauty to everyday life. Each piece is handcrafted with 
              care, inspired by natural forms and traditional techniques passed down through 
              generations.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Portland, OR</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>sarah.chen@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary" />
                <span>sarahchenceramics.com</span>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto">
              Contact Sarah
            </Button>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I discovered my passion for pottery during a college art class and never looked back. 
              What started as a hobby quickly became my life's work. After apprenticing with master 
              ceramicists in Japan and studying traditional techniques, I returned home to establish 
              my own studio.
            </p>
            <p>
              My work focuses on creating pieces that blend functionality with artistic expression. 
              I believe that the objects we use daily should bring us joy and beauty. Each bowl, 
              mug, and vase I create is meant to be used, cherished, and passed down through generations.
            </p>
            <p>
              When I'm not at the wheel, you'll find me teaching pottery workshops in the community, 
              sharing the therapeutic and creative joy of working with clay.
            </p>
          </div>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-${1578749556568 + i}-d91c8c818e33?w=400&h=400&fit=crop`}
                alt={`Work ${i}`}
                className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
