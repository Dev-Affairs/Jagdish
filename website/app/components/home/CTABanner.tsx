import React from 'react';

export default function CTABanner() {
  return (
    <section className="bg-[#0e4428] py-8 sm:py-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-8 sm:px-16 md:px-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-[26px] font-bold text-center md:text-left leading-tight max-w-3xl">
          We'll identify your needs and enhance your business growth.
        </h2>
        <button className="bg-[#0f172a] text-white hover:bg-black px-8 sm:px-10 py-3.5 sm:py-4 font-bold rounded-sm transition-colors duration-300 whitespace-nowrap uppercase tracking-wide text-[11px] sm:text-xs md:text-sm">
          REQUEST A QUICK QUOTE
        </button>
      </div>
    </section>
  );
}
