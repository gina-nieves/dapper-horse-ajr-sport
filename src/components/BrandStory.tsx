import brandImage from "@/assets/ajr-brand-story.jpg";

const BrandStory = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[400px] md:min-h-[600px]">
        <img
          src={brandImage}
          alt="Close-up of premium leather saddle with bit detail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="bg-cream flex items-center">
        <div className="px-8 sm:px-12 lg:px-16 py-12 md:py-16 max-w-xl">
          <p className="font-body text-burgundy text-xs tracking-[0.3em] uppercase mb-4">
            THE CRAFT BEHIND THE BIT
          </p>
          <h2 className="font-heading text-charcoal text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 leading-snug">
            Built on a Lifetime in the Saddle
          </h2>
          <p className="font-body text-charcoal/80 text-base leading-relaxed mb-4">
            AJR Sport was born from one rider's frustration with bits that didn't perform. Founder Adam Rittenberg — a lifelong rider and bit specialist — set out to engineer something better: tack that works with the horse, not against it.
          </p>
          <p className="font-body text-charcoal/80 text-base leading-relaxed">
            From anatomical leather bridles to proprietary mouthpiece materials like Silomorph and Siloflex, AJR Sport is the choice of riders who refuse to compromise. Now available at Dapper Horse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
