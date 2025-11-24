import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const artisans = [
  {
    id: 1,
    name: "Sarah Chen",
    craft: "Pottery & Ceramics",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    craft: "Woodworking",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    craft: "Textile Art",
    location: "Santa Fe, NM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Kim",
    craft: "Jewelry Making",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Amara Patel",
    craft: "Glass Blowing",
    location: "Denver, CO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "James Wilson",
    craft: "Leatherwork",
    location: "Nashville, TN",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

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
                <p className="text-primary font-medium mb-2">{artisan.craft}</p>
                <p className="text-sm text-muted-foreground">{artisan.location}</p>
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
