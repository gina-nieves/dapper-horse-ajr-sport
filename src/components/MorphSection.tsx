const MorphSection = () => {
  return (
    <section className="w-full bg-cream py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto bg-[hsl(30,10%,93%)] rounded-2xl p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="max-w-xl">
          <p className="font-body text-burgundy text-xs tracking-[0.3em] uppercase mb-4">
            INNOVATION IN THE MOUTHPIECE
          </p>
          <h2 className="font-heading text-charcoal text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 leading-snug">
            What Is the Morph Mouthpiece?
          </h2>
          <p className="font-body text-charcoal/80 text-base leading-relaxed mb-4">
            The Morph is a shape-and-reshape mouthpiece built around a flexible internal metal wire core.
          </p>
          <p className="font-body text-charcoal/80 text-base leading-relaxed mb-6">
            Unlike fixed anatomical bits, the Morph is a customizable mouthpiece with a shape-holding internal core that lets the rider fine-tune the fit before riding.
          </p>

          <p className="font-body text-charcoal text-sm font-medium tracking-wide uppercase mb-3">
            Once adjusted:
          </p>
          <ul className="font-body text-charcoal/80 text-base leading-relaxed space-y-2 mb-8 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              The wire holds its position
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              The mouthpiece maintains the customized contour
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              Contact becomes more individualized
            </li>
          </ul>

          <h3 className="font-heading text-charcoal text-xl sm:text-2xl font-normal mb-4">
            Why That Matters
          </h3>
          <p className="font-body text-charcoal/80 text-base leading-relaxed mb-3">
            No two horses are identical:
          </p>
          <ul className="font-body text-charcoal/80 text-base leading-relaxed space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              Tongue thickness
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              Bar sensitivity
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              Palate height
            </li>
            <li className="flex items-start gap-2">
              <span className="text-burgundy mt-1.5 text-[6px]">●</span>
              Mouth width
            </li>
          </ul>
        </div>

        {/* Video */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="/videos/AJRLeatherCoveredMorphDBit.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorphSection;
