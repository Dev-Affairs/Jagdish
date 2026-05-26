"use client"
import React, { useRef, useEffect } from 'react';
import { FiClock, FiMessageCircle, FiLink } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const newsItems = [
  {
    id: 1,
    img: '/blog-image/blog-1.jpg',
    title: 'Jagdish Infra Heights Bags Major Highway Construction Contract in Odisha',
    date: 'Feb 15, 2025',
    comments: '4 Comments'
  },
  {
    id: 2,
    img: '/blog-image/blog-2.jpg',
    title: 'Successful Completion of Bhubaneswar Road Maintenance Project',
    date: 'Jan 30, 2025',
    comments: '7 Comments'
  },
  {
    id: 3,
    img: '/blog-image/blog-3.jpg',
    title: 'Jagdish Infra Heights Collaborates with Odisha Govt for Infrastructure Development',
    date: 'Dec 10, 2024',
    comments: '3 Comments'
  }
];

const NewsCard = ({ item }: { item: typeof newsItems[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  useEffect(() => {
    gsap.set(filterRef.current, { opacity: 0 });
    gsap.set(iconRef.current, { opacity: 0, scale: 0.5, rotation: -15 });
    gsap.set(lineRef.current, { width: 0 });
    gsap.set(imageRef.current, { scale: 1 });
  }, []);

  const handleMouseEnter = contextSafe(() => {
    gsap.killTweensOf([filterRef.current, iconRef.current, lineRef.current, imageRef.current]);
    gsap.to(filterRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(iconRef.current, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.5)" });
    gsap.to(lineRef.current, { width: "100%", duration: 0.4, ease: "power3.out" });
    gsap.to(imageRef.current, { scale: 1.05, duration: 0.4, ease: "power2.out" });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.killTweensOf([filterRef.current, iconRef.current, lineRef.current, imageRef.current]);
    gsap.to(filterRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(iconRef.current, { opacity: 0, scale: 0.5, rotation: -15, duration: 0.3, ease: "power2.in" });
    gsap.to(lineRef.current, { width: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(imageRef.current, { scale: 1, duration: 0.3, ease: "power2.in" });
  });

  return (
    <div 
      ref={cardRef} 
      className="bg-white flex flex-col group cursor-pointer relative pb-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden mb-4 relative">
        <img ref={imageRef} src={item.img} alt={item.title} className="w-full h-[240px] sm:h-[220px] md:h-[240px] object-cover" />
        
        {/* Yellow Filter Overlay */}
        <div ref={filterRef} className="absolute inset-0 bg-[#FFC107]/80 flex items-center justify-center pointer-events-none">
          {/* Attach Icon */}
          <div ref={iconRef} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="px-1 flex flex-col flex-grow">
        <h3 className="text-base sm:text-[17px] font-medium text-slate-700 mb-3 leading-snug">{item.title}</h3>
        
        <div className="flex gap-4 text-xs text-slate-400 mt-auto font-sans">
          <div className="flex items-center gap-1.5"><FiClock className="text-sm" /> {item.date}</div>
          <div className="flex items-center gap-1.5"><FiMessageCircle className="text-sm" /> {item.comments}</div>
        </div>
      </div>

      {/* Bottom Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200"></div>
      <div ref={lineRef} className="absolute bottom-0 left-0 h-[2px] bg-[#FFC107] z-10"></div>
    </div>
  );
};

export default function RecentNews() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-[1400px] px-8 sm:px-16 md:px-24">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mb-4">RECENT NEWS</h2>
          <div className="w-10 sm:w-12 h-1 bg-[#FFC107] mx-auto rounded-none"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
