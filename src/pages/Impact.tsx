const Impact = () => {
  const stats = [
    { number: "500+", label: "Artisans Connected" },
    { number: "10K+", label: "Buyer Connections Made" },
    { number: "50+", label: "Cities Represented" },
    { number: "$2M+", label: "Direct Revenue to Artisans" },
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Our Impact
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Together, we're building stronger local communities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-foreground">Economic Impact</h2>
            <p className="text-lg text-muted-foreground mb-4">
              By connecting buyers directly with artisans, we've helped facilitate over $2 million 
              in direct revenue—money that goes straight to the makers without any platform fees. 
              This supports not just individual artisans, but entire local economies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-foreground">Community Building</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We've fostered thousands of meaningful connections between artisans and buyers, 
              creating a network of people who value quality craftsmanship and authentic relationships. 
              Many of these connections have blossomed into long-term partnerships and friendships.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-foreground">Preserving Traditions</h2>
            <p className="text-lg text-muted-foreground mb-4">
              By providing visibility for traditional crafts and techniques, we're helping preserve 
              cultural heritage and artisanal knowledge. Many of our featured artisans are passing 
              down skills that have been in their families for generations.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Success Stories</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "This platform helped me reach customers I never would have found on my own. 
                  I've been able to grow my business while staying true to my craft."
                </p>
                <footer className="text-sm font-semibold">— Elena R., Textile Artist</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-muted-foreground italic mb-2">
                  "I love knowing exactly who made the furniture in my home and being able to 
                  communicate directly with the craftsperson. It makes everything more meaningful."
                </p>
                <footer className="text-sm font-semibold">— Michael T., Buyer</footer>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impact;
