import heroImage from "@/assets/ajr-hero2.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] max-h-[950px] overflow-hidden">
      {/* Full-bleed hero image */}
      <img
        src={heroImage}
        alt="Rider and grey horse jumping at Wellington"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Cinematic gradient overlay — dark left fading to clear right */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />

      {/* Subtle bottom vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 lg:px-20 max-w-3xl">
        <p className="font-body text-pure-white text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6">
          MADE BY RIDERS. FOR RIDERS.
        </p>
        <h1 className="font-heading text-pure-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-4 sm:mb-6">
          AJR Sport
        </h1>
        <p className="font-body text-pure-white/90 text-base sm:text-lg lg:text-xl font-light mb-8 sm:mb-10">
          Precision tack for the serious hunter/jumper.
        </p>
        <div>
          <a
            href="https://dapperhorse.com/collections/ajr-sport"
            className="inline-block font-body text-pure-white border border-pure-white px-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-pure-white hover:text-charcoal"
          >
            Shop AJR Sport
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
