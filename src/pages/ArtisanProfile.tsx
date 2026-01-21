import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, MapPin, Globe } from "lucide-react";
import { artisans } from "@/data/artisans";

const ArtisanProfile = () => {
  const { id } = useParams();
  const artisanId = Number(id);
  const artisan = artisans.find((a) => a.id === artisanId);

  if (!artisan) {
    return (
      <div className="min-h-screen py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-foreground">Artisan not found</h1>
          <p className="mt-2 text-muted-foreground">
            The artisan profile you’re looking for doesn’t exist.
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
            to="/artisans"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            aria-label="Back to artisan directory"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to directory
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={artisan.image}
              alt={artisan.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-foreground">{artisan.name}</h1>
            {(artisan.craft || artisan.products) && (
              <p className="text-2xl text-primary mb-4">
                {artisan.craft ?? artisan.products}
              </p>
            )}
            {artisan.story && (
              <p className="text-muted-foreground mb-6 leading-relaxed">{artisan.story}</p>
            )}
            
            <div className="space-y-3 mb-8">
              {(artisan.workLocation || artisan.location || artisan.homeVillage) && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {artisan.workLocation ?? artisan.location ?? artisan.homeVillage}
                  </span>
                </div>
              )}
              {artisan.email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{artisan.email}</span>
                </div>
              )}
              {artisan.phone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{artisan.phone}</span>
                </div>
              )}
              {artisan.website && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>{artisan.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Details</h2>

          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {artisan.age !== undefined && (
              <div>
                <dt className="text-sm font-medium text-foreground">Age</dt>
                <dd className="text-muted-foreground">{artisan.age}</dd>
              </div>
            )}
            {artisan.homeVillage && (
              <div>
                <dt className="text-sm font-medium text-foreground">Home / Village</dt>
                <dd className="text-muted-foreground">{artisan.homeVillage}</dd>
              </div>
            )}
            {artisan.educationBackground && (
              <div>
                <dt className="text-sm font-medium text-foreground">Education</dt>
                <dd className="text-muted-foreground">{artisan.educationBackground}</dd>
              </div>
            )}
            {artisan.family && (
              <div>
                <dt className="text-sm font-medium text-foreground">Family</dt>
                <dd className="text-muted-foreground">{artisan.family}</dd>
              </div>
            )}
            {artisan.products && (
              <div>
                <dt className="text-sm font-medium text-foreground">Products</dt>
                <dd className="text-muted-foreground">{artisan.products}</dd>
              </div>
            )}
            {artisan.businessName && (
              <div>
                <dt className="text-sm font-medium text-foreground">Business name</dt>
                <dd className="text-muted-foreground">{artisan.businessName}</dd>
              </div>
            )}
            {artisan.workingYears && (
              <div>
                <dt className="text-sm font-medium text-foreground">Working years</dt>
                <dd className="text-muted-foreground">{artisan.workingYears}</dd>
              </div>
            )}
            {artisan.timings && (
              <div>
                <dt className="text-sm font-medium text-foreground">Timings</dt>
                <dd className="text-muted-foreground">{artisan.timings}</dd>
              </div>
            )}
            {artisan.priceRange && (
              <div>
                <dt className="text-sm font-medium text-foreground">Price range</dt>
                <dd className="text-muted-foreground">{artisan.priceRange}</dd>
              </div>
            )}
            {artisan.materials && (
              <div>
                <dt className="text-sm font-medium text-foreground">Materials</dt>
                <dd className="text-muted-foreground">{artisan.materials}</dd>
              </div>
            )}
            {artisan.howTheyStarted && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">How they started</dt>
                <dd className="text-muted-foreground">{artisan.howTheyStarted}</dd>
              </div>
            )}
            {artisan.reasonForDoingThisWork && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Reason for doing this work</dt>
                <dd className="text-muted-foreground">{artisan.reasonForDoingThisWork}</dd>
              </div>
            )}
            {artisan.challengesFaced && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Challenges faced</dt>
                <dd className="text-muted-foreground">{artisan.challengesFaced}</dd>
              </div>
            )}
            {artisan.goals && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-foreground">Goals</dt>
                <dd className="text-muted-foreground">{artisan.goals}</dd>
              </div>
            )}
          </dl>
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
