const BASE = "https://dapperhorse.com";

const products = [
  {
    name: "Anatomic Double Bridle with Flash, Jumper",
    price: "$445",
    href: "/products/ajr-sport-anatomic-double-bridle-with-flash-noseband-jumper-collection",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportAnatomicDoubleBridlewithFlashNosebandJumperCollection01.png?v=1771285669&width=600",
  },
  {
    name: "Anatomic Jumper Bridle",
    price: "$339",
    href: "/products/ajr-sport-anatomic-jumper-bridle",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportAnatomicJumperBridle01.png?v=1771285698&width=600",
  },
  {
    name: "Wide Noseband Hunter Bridle",
    price: "$317",
    href: "/products/ajr-sport-wide-noseband-hunter-bridle",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportWideNosebandHunterBridle01.png?v=1771285727&width=600",
  },
  {
    name: "Golden Ease Loose Ring Bit",
    price: "$100",
    href: "/products/ajr-sport-double-jointed-golden-ease-loose-ring-bit",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportDoubleJointedGoldenEaseLooseRingBit01.png?v=1771139025&width=600",
  },
  {
    name: "Intuflex Eggbutt Bit",
    price: "$110",
    href: "/products/ajr-sport-intuflex-eggbutt-bit",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportIntuflexEggbuttBit02.png?v=1771143174&width=600",
  },
  {
    name: "Rubber Block Morph Loose Ring Bit",
    price: "$145",
    href: "/products/ajr-sport-rubber-block-morph-loose-ring-bit",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportRubberBlockMorphLooseRingBit02.png?v=1771165818&width=600",
  },
  {
    name: "Sweet Iron Waterford Full Cheek Bit",
    price: "$185",
    href: "/products/ajr-sport-sweet-iron-waterford-full-cheek-bit",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportSweetIronWaterfordFullCheekBit01.png?width=600",
  },
  {
    name: "Leather Covered Morph D Bit",
    price: "$185",
    href: "/products/ajr-sport-leather-covered-morph-d-bit",
    image: "https://dapperhorse.com/cdn/shop/files/AJRSportLeatherCoveredMorphDBit02.png?v=1771168577&width=600",
  },
];

const ProductGrid = () => {
  return (
    <section className="w-full bg-pure-white py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-body text-burgundy text-xs tracking-[0.3em] uppercase mb-3">
            THE COLLECTION
          </p>
          <h2 className="font-heading text-charcoal text-2xl sm:text-3xl lg:text-4xl font-normal">
            Shop AJR Tack &amp; Bits
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {products.map((product, i) => (
            <a
              key={i}
              href={`${BASE}${product.href}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-pure-white mb-3 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-charcoal text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1">
                AJR
              </p>
              <p className="font-body text-charcoal text-sm sm:text-base leading-snug mb-1">
                {product.name}
              </p>
              <p className="font-body text-charcoal/70 text-sm">
                {product.price}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href={`${BASE}/collections/ajr-sport`}
            className="inline-block font-body text-charcoal border border-charcoal px-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-charcoal hover:text-pure-white"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
