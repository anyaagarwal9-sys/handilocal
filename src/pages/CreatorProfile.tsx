import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";
import { creators } from "@/data/creators";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { trackProfileClick } from "@/lib/tracking";

const CreatorProfile = () => {
  const { slug } = useParams();
  const creator = creators.find((a) => a.slug === slug || String(a.id) === slug);

  useEffect(() => {
    if (creator) trackProfileClick(creator.id);
  }, [creator?.id]);

  if (!creator) {
    return (
      <div className="min-h-screen py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-foreground">Creator not found</h1>
          <p className="mt-2 text-muted-foreground">
            The creator profile you’re looking for doesn’t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-6">
          <Link
            to="/creators"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            aria-label="Back to creator directory"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to directory
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={creator.image}
              alt={creator.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-foreground">{creator.name}</h1>
            {(creator.craft || creator.products) && (
              <p className="text-2xl text-primary mb-4">
                {creator.craft ?? creator.products}
              </p>
            )}
            {creator.story && (
              <p className="text-muted-foreground mb-6 leading-relaxed">{creator.story}</p>
            )}
            
            <div className="space-y-3 mb-8">
              {(creator.workLocation || creator.location || creator.homeVillage) && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {creator.workLocation ?? creator.location ?? creator.homeVillage}
                  </span>
                </div>
              )}
              {creator.email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{creator.email}</span>
                </div>
              )}
              {creator.phone && (() => {
                const waNumber = creator.phone.replace(/\D/g, "");
                const profileUrl = `${window.location.origin}/creator/${creator.slug ?? creator.id}`;
                const message = `Namaste ${creator.name} ji 🙏, maine aapka profile HandiLocal par dekha (${profileUrl}) aur mujhe aapka kaam bahut pasand aaya. `;
                const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                return (
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe57] text-white"
                  >
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackProfileClick(creator.id)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                );
              })()}
              {creator.website && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>{creator.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Details</h2>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {creator.age !== undefined && (
              <div>
                <dt className="text-sm font-medium text-foreground">Age</dt>
                <dd className="text-muted-foreground">{creator.age}</dd>
              </div>
            )}
            {creator.homeVillage && (
              <div>
                <dt className="text-sm font-medium text-foreground">Home / Village</dt>
                <dd className="text-muted-foreground">{creator.homeVillage}</dd>
              </div>
            )}
            {creator.educationBackground && (
              <div>
                <dt className="text-sm font-medium text-foreground">Education</dt>
                <dd className="text-muted-foreground">{creator.educationBackground}</dd>
              </div>
            )}
            {creator.family && (
              <div>
                <dt className="text-sm font-medium text-foreground">Family</dt>
                <dd className="text-muted-foreground">{creator.family}</dd>
              </div>
            )}
            {creator.products && (
              <div>
                <dt className="text-sm font-medium text-foreground">Products</dt>
                <dd className="text-muted-foreground">{creator.products}</dd>
              </div>
            )}
            {creator.businessName && (
              <div>
                <dt className="text-sm font-medium text-foreground">Business name</dt>
                <dd className="text-muted-foreground">{creator.businessName}</dd>
              </div>
            )}
            {creator.workingYears && (
              <div>
                <dt className="text-sm font-medium text-foreground">Working years</dt>
                <dd className="text-muted-foreground">{creator.workingYears}</dd>
              </div>
            )}
            {creator.timings && (
              <div>
                <dt className="text-sm font-medium text-foreground">Timings</dt>
                <dd className="text-muted-foreground">{creator.timings}</dd>
              </div>
            )}
            {creator.priceRange && (
              <div>
                <dt className="text-sm font-medium text-foreground">Price range</dt>
                <dd className="text-muted-foreground">{creator.priceRange}</dd>
              </div>
            )}
            {creator.materials && (
              <div>
                <dt className="text-sm font-medium text-foreground">Materials</dt>
                <dd className="text-muted-foreground">{creator.materials}</dd>
              </div>
            )}
            {creator.howTheyStarted && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">How they started</dt>
                <dd className="text-muted-foreground">{creator.howTheyStarted}</dd>
              </div>
            )}
            {creator.reasonForDoingThisWork && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Reason for doing this work</dt>
                <dd className="text-muted-foreground">{creator.reasonForDoingThisWork}</dd>
              </div>
            )}
            {creator.challengesFaced && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Challenges faced</dt>
                <dd className="text-muted-foreground">{creator.challengesFaced}</dd>
              </div>
            )}
            {creator.goals && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Goals</dt>
                <dd className="text-muted-foreground">{creator.goals}</dd>
              </div>
            )}
          </dl>
        </Card>

        {creator.gallery && creator.gallery.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <GalleryLightbox images={creator.gallery} title={creator.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorProfile;
