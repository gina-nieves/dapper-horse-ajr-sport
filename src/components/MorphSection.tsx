import { useEffect } from "react";

const MorphSection = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (!(window as any).FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="w-full bg-cream py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

        {/* Facebook Embed */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100063978872875"
            data-tabs="timeline"
            data-width="500"
            data-height="700"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/profile.php?id=100063978872875"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/profile.php?id=100063978872875">
                Follow on Facebook
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorphSection;
