import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { artisans } from "@/data/artisans";

const Artisans = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Artisan Directory</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover talented creators in your community
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-semibold mb-1">{artisan.name}</h3>
                {(artisan.craft || artisan.products) && (
                  <p className="text-primary font-medium mb-2">
                    {artisan.craft ?? artisan.products}
                  </p>
                )}
                {(artisan.workLocation || artisan.location) && (
                  <p className="text-sm text-muted-foreground">
                    {artisan.workLocation ?? artisan.location}
                  </p>
                )}
                {artisan.timings && (
                  <p className="text-sm text-muted-foreground">{artisan.timings}</p>
                )}
              </CardContent>
              <CardFooter>
                <Link to={`/artisan/${artisan.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artisans;
