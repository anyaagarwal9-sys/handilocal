const Impact = () => {
  const whatWellDo = [
    "Identify and contact 5–10 local producers who make non-perishable handmade goods.",
    "Interview them about their products, challenges, and sales experiences.",
    "Build a simple website (using node.js/tailwind starter).",
    "Upload their photos, descriptions, prices, and contact details (with their permission).",
    "Promote the page through school events, WhatsApp groups, and housing societies.",
    "Track results through analytics and feedback: how many people visited, contacted producers, and whether producers saw increased visibility or sales.",
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Our Journey
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Building a bridge between local artisans and buyers—without becoming a marketplace.
        </p>

        <div className="space-y-10">
          <section className="bg-card rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">Our Goal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a simple digital platform that connects local artisans and small business owners to
              buyers—serving as a bridge, not a marketplace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">What the Website Does</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The website allows creators to list their products, contact details, and short stories so that
                interested buyers can reach them directly.
              </p>
              <p>
                We do not handle any money or transactions ourselves; instead, we help improve visibility and
                digital inclusion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">What We’ll Do</h2>
            <ul className="space-y-3">
              {whatWellDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impact;
