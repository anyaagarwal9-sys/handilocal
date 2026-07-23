import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { artisans, productCategories, ProductCategory } from "@/data/artisans";
import prince3 from "@/assets/prince-3.jpg";

const Artisans = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const filteredArtisans = artisans.filter((artisan) => {
    const matchesCategory = selectedCategory
      ? artisan.categories?.includes(selectedCategory)
      : true;
    if (!matchesCategory) return false;
    if (!query) return true;
    const haystack = [
      artisan.name,
      artisan.craft,
      artisan.products,
      artisan.workLocation,
      artisan.location,
      ...(artisan.categories ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Heading / Hero */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt=""
            className="w-full h-full object-cover object-[50%_72%] sepia-[0.2] saturate-[1.15] brightness-[1.08] contrast-[0.98] opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/35 to-background/85" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Artisan Directory</h1>
          <p className="text-xl text-foreground/85 font-semibold max-w-2xl">
            Discover talented creators in your community
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search by artisan name, craft or product…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                aria-label="Search artisans"
              />
            </div>
          </div>

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
            {query && ` matching "${searchQuery.trim()}"`}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtisans.map((artisan) => (
              <Link
                key={artisan.id}
                to={`/artisan/${artisan.id}`}
                className="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{artisan.name}</h3>
                    {(artisan.craft || artisan.products) && (
                      <p className="text-primary font-medium mb-2">{artisan.craft ?? artisan.products}</p>
                    )}
                    {(artisan.workLocation || artisan.location) && (
                      <p className="text-sm text-muted-foreground">{artisan.workLocation ?? artisan.location}</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full pointer-events-none" tabIndex={-1}>
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
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
                    <p className="text-primary font-medium mb-2">{artisan.craft ?? artisan.products}</p>
                  )}
                  {(artisan.workLocation || artisan.location) && (
                    <p className="text-sm text-muted-foreground">{artisan.workLocation ?? artisan.location}</p>
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
              <p className="text-muted-foreground text-lg">No artisans found in this category.</p>
              <Button variant="link" onClick={() => setSelectedCategory(null)} className="mt-2">
                View all artisans
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Artisans;
