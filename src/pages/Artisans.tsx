import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { artisans, productCategories, ProductCategory } from "@/data/artisans";

const Artisans = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  const filteredArtisans = selectedCategory
    ? artisans.filter((artisan) => artisan.categories?.includes(selectedCategory))
    : artisans;

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Artisan Directory</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover talented creators in your community
        </p>
        
        {/* Category Filter */}
        <div className="mb-10">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {productCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? "s" : ""}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map((artisan) => (
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

        {filteredArtisans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No artisans found in this category.
            </p>
            <Button
              variant="link"
              onClick={() => setSelectedCategory(null)}
              className="mt-2"
            >
              View all artisans
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artisans;
