const TrustBar = () => {
  const items = [
    "Ships from New York",
    "Designed by a Rider",
    "Crafted for Performance",
  ];

  return (
    <section className="w-full bg-charcoal py-4">
      <div className="flex items-center justify-center gap-4 sm:gap-8 px-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-8">
            <span className="font-body text-pure-white text-xs sm:text-sm tracking-[0.1em]">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="text-pure-white/30">|</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
