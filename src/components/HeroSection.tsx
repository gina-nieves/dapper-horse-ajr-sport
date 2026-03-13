import heroImage from "@/assets/ajr-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[450px] max-h-[750px] overflow-hidden">
      {/* Right side image */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          src={heroImage}
          alt="Rider and grey horse jumping at Wellington"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Left side dark background */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-charcoal" />
      {/* Gradient blend between left and image */}
      <div className="absolute inset-y-0 left-[40%] w-[20%] bg-gradient-to-r from-charcoal to-transparent z-[1]" />

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
