const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Us</h1>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            We believe in the power of human connection and the beauty of handcrafted goods. 
            Our platform was born from a simple idea: to create a space where talented local 
            artisans and small business owners can share their stories and connect with people 
            who appreciate authentic, quality craftsmanship.
          </p>
          
          <p>
            Unlike traditional marketplaces, we don't handle transactions or take commissions. 
            Instead, we serve as a bridge—a digital showcase that brings visibility to talented 
            makers while allowing them to maintain complete control over their business relationships.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Mission</h2>
          <p>
            To empower local artisans and small business owners by providing them with a platform 
            to share their craft, tell their stories, and connect directly with interested buyers 
            in their community and beyond.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why We're Different</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>No transaction fees or commissions</li>
            <li>Direct communication between artisans and buyers</li>
            <li>Focus on storytelling and authentic connections</li>
            <li>Supporting local communities and economies</li>
            <li>Preserving traditional crafts and techniques</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
