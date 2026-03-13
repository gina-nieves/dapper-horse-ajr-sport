import heroImage from "@/assets/ajr-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="Rider and grey horse jumping at Wellington"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 lg:px-20 max-w-7xl">
        <p className="font-body text-pure-white text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6">
          MADE BY RIDERS. FOR RIDERS.
        </p>
        <h1 className="font-heading text-pure-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-4 sm:mb-6 max-w-2xl">
          The Tack Your Horse Has Been Waiting For
        </h1>
        <p className="font-body text-pure-white/90 text-base sm:text-lg lg:text-xl font-light max-w-xl mb-8 sm:mb-10 leading-relaxed">
          Precision-engineered bits and anatomical leather — crafted for the serious hunter/jumper.
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
