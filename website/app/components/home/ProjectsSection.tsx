"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

const ProjectCard = ({ proj, itemsToShow }: { proj: any, itemsToShow: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  useEffect(() => {
    gsap.set(contentWrapperRef.current, { height: 0 });
    gsap.set(lineRef.current, { width: 0 });
    gsap.set(textRef.current, { y: 15, opacity: 0 });
  }, []);

  const handleMouseEnter = contextSafe(() => {
    gsap.killTweensOf([contentWrapperRef.current, lineRef.current, textRef.current]);

    gsap.to(contentWrapperRef.current, { height: "auto", duration: 0.4, ease: "power3.out" });
    
    gsap.fromTo(lineRef.current, 
      { width: 0 }, 
      { width: 48, duration: 0.4, delay: 0.1, ease: "power3.out" }
    );
    
    gsap.to(textRef.current, { y: 0, opacity: 1, duration: 0.4, delay: 0.2, ease: "power3.out" });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.killTweensOf([contentWrapperRef.current, lineRef.current, textRef.current]);

    gsap.to(textRef.current, { y: 15, opacity: 0, duration: 0.2, ease: "power2.in" });
    gsap.to(lineRef.current, { width: 0, duration: 0.2, ease: "power2.in" });
    gsap.to(contentWrapperRef.current, { height: 0, duration: 0.3, delay: 0.1, ease: "power2.in" });
  });

  return (
    <div 
      className="relative group overflow-hidden cursor-pointer flex-shrink-0 h-[280px] sm:h-[350px] md:h-[400px] rounded-none transform-gpu"
      style={{ width: `calc((100% - ${(itemsToShow - 1) * 16}px) / ${itemsToShow})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
      
      {/* Single Transparent Black Container */}
      <div 
        className="absolute bottom-0 -left-6 -right-6 bg-black/75 px-10 sm:px-12 pt-5 sm:pt-6 pb-4 sm:pb-5 flex flex-col justify-end pointer-events-none"
      >
        <h3 className="text-white font-bold text-sm sm:text-lg md:text-xl tracking-wide mb-1">{proj.title}</h3>
        
        <div ref={contentWrapperRef} className="overflow-hidden" style={{ height: 0 }}>
          <div className="pt-2">
            <div 
              ref={lineRef} 
              style={{ width: 0 }}
              className="flex-shrink-0 h-[2px] bg-[#FFC107] mb-3 sm:mb-4"
            ></div>
            <p 
              ref={textRef} 
              style={{ opacity: 0, transform: 'translateY(15px)' }}
              className="text-gray-300 text-xs sm:text-[13px] leading-relaxed pb-1"
            >
              {proj.desc || "Our architectural projects redefine innovation, incorporating sustainable materials, modern aesthetics, and environmentally-friendly techniques."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(4);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  
  const projects = [
    { img: '/project-image/project-img-1.jpg', title: 'Building Construction' },
    { img: '/project-image/project-img-2.jpg', title: 'Architecture Design' },
    { img: '/project-image/project-img-3.jpg', title: 'Commercial Building' },
    { img: '/project-image/project-img-4.jpg', title: 'Interior Design' },
    { img: '/project-image/project-img-5.jpg', title: 'Residential Project' },
    { img: '/project-image/project-img-6.jpg', title: 'Industrial Complex' },
    { img: '/project-image/project-img-7.jpg', title: 'Urban Planning' },
    { img: '/project-image/project-img-8.jpg', title: 'Bridge Construction' },
    { img: '/project-image/project-img-9.jpg', title: 'Road Infrastructure' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsToShow);

  const animateTo = useCallback((index: number) => {
    if (trackRef.current && trackRef.current.children[0]) {
      const slideWidth = (trackRef.current.children[0] as HTMLElement).offsetWidth;
      const gap = 16; // 1rem gap
      const distance = (slideWidth + gap) * index;
      
      gsap.to(trackRef.current, {
        x: -distance,
        duration: 0.8,
        ease: 'power3.inOut'
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => {
        const next = prev + 1;
        animateTo(next);
        return next;
      });
    }
  }, [currentIndex, maxIndex, animateTo]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => {
        const next = prev - 1;
        animateTo(next);
        return next;
      });
    }
  }, [currentIndex, animateTo]);

  // Touch/swipe handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  }, [handleNext, handlePrev]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
       setCurrentIndex(maxIndex);
       animateTo(maxIndex);
    } else {
       animateTo(currentIndex);
    }
  }, [itemsToShow, maxIndex, currentIndex, animateTo]);

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-black">
      {/* Background Image Overlay to match dark theme */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/hero-image/hero-image-01.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto max-w-[1600px] px-12 sm:px-16 md:px-24 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-3">PROJECTS</h2>
          <div className="w-12 sm:w-16 h-[3px] bg-[#FFC107] mx-auto rounded-none"></div>
        </div>

        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
           {/* Navigation arrows */}
           <div 
             onClick={handlePrev}
             className={`absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#FFC107] flex items-center justify-center cursor-pointer text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition z-20 bg-black ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
           >
              <FiChevronLeft className="text-xl sm:text-2xl" />
           </div>
           <div 
             onClick={handleNext}
             className={`absolute -right-10 sm:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#FFC107] flex items-center justify-center cursor-pointer text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition z-20 bg-black ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
           >
              <FiChevronRight className="text-xl sm:text-2xl" />
           </div>

           <div className="overflow-hidden px-1 py-2">
             <div ref={trackRef} className="flex gap-4 w-full">
                 {projects.map((proj, idx) => (
                   <ProjectCard key={idx} proj={proj} itemsToShow={itemsToShow} />
                 ))}
             </div>
           </div>

           {/* Mobile slide indicator dots */}
           <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
             {projects.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => {
                   setCurrentIndex(idx > maxIndex ? maxIndex : idx);
                   animateTo(idx > maxIndex ? maxIndex : idx);
                 }}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
                   idx === currentIndex ? 'bg-[#10b981] w-5' : 'bg-slate-300'
                 }`}
                 aria-label={`Go to project ${idx + 1}`}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
