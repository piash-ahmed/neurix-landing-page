"use client";

export default function LogoSlider() {
  const logos = [
    "/bitget.png",
    "/kucoin.png",
    "/bybit.png",
    "/dextool.png",
    "/bitmart.png",
  ];

  const infiniteLogos = Array(10).fill(logos).flat();
  return (
    <div className="relative overflow-hidden bg-transparent top-16 md:top-26">
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to right, #000 15%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to left, #000 15%, transparent 100%)",
        }}
      />

      <div className="flex gap-12 infinite-slider w-max">
        {infiniteLogos.map((logo, index) => (
          <div
            key={index}
            className="min-w-[150px] flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-24 md:h-30 w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <p className="text-sm md:text-lg text-[#FFFFFF99] text-center">
        Trusted by Countless Global Brands
      </p>
    </div>
  );
}
