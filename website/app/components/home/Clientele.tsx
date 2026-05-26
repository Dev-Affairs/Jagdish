import React from 'react';

export default function Clientele() {
  const brands = [
    "KRAFT ARCHITECTS",
    "MATRIX BUILDERS",
    "VERTEX DEVELOPERS",
    "ORION PROJECTS",
    "APEX CORP",
    "NEXUS DESIGN"
  ];

  // Triple the array to provide an uninterrupted continuous scroll
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white border-t border-slate-100 overflow-hidden relative select-none">
      {/* Luxury Left & Right Transparent Vignette Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="w-full overflow-hidden flex">
        <div className="flex gap-10 sm:gap-16 md:gap-24 animate-marquee whitespace-nowrap font-mono">
          {marqueeBrands.map((brand, index) => (
            <div 
              key={index} 
              className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-slate-350 hover:text-[#10b981] transition-colors duration-300 font-extrabold cursor-pointer uppercase py-1"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* Styled JSX for ultra-fluid CSS marquee hardware acceleration */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
