"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Link from 'next/link';

const slides = [
  {
    image: '/hero-image/hero-image-01.jpg',
    title: 'Excellence In Infrastructure',
    subtitle: 'Delivering top-quality infrastructure solutions for residential'
  },
  {
    image: '/hero-image/hero-image-02.jpg',
    title: 'Excellence In Infrastructure',
    subtitle: 'Delivering top-quality infrastructure solutions for residential'
  },
  {
    image: '/hero-image/hero-image-03.jpg',
    title: 'Excellence In Infrastructure',
    subtitle: 'Delivering top-quality infrastructure solutions for residential'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateText = contextSafe(() => {
    // Reveal the text elements sequentially from bottom to top
    if (textContainerRef.current) {
      gsap.killTweensOf(textContainerRef.current.children);
      gsap.fromTo(textContainerRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  });

  const nextSlide = contextSafe(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  });

  const prevSlide = contextSafe(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  });

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
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, [nextSlide, prevSlide]);

  // Trigger text animation whenever slide changes
  useEffect(() => {
    animateText();
  }, [currentIndex, animateText]);

  // Master Slide Transition Synchronization
  useEffect(() => {
    // Cinematic Image reveal: Animate the active image to scale down to fit (1.12 to 1.0) over 6 seconds
    if (imagesContainerRef.current) {
      const activeSlideContainer = imagesContainerRef.current.children[currentIndex] as HTMLDivElement;
      const activeImg = activeSlideContainer?.querySelector('img');
      if (activeImg) {
        gsap.killTweensOf(activeImg);
        gsap.fromTo(activeImg,
          { scale: 1.12 },
          { scale: 1.0, duration: 6, ease: "power1.out" }
        );
      }
    }

    // Clear any active auto-transition timeout and schedule a fresh one
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
    }

    autoTimerRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);

    // Cleanup timer when component unmounts or active slide shifts
    return () => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
      }
    };
  }, [currentIndex, nextSlide]);

  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      <div className="w-full flex justify-center">
        {/* Aesthetic Square/Framed Window Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[95vh] bg-slate-900 overflow-hidden select-none group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background Cinematic Images with scale down reveal */}
          <div ref={imagesContainerRef} className="absolute overflow-hidden inset-0 z-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="absolute inset-0 bg-slate-950/45 z-10 pointer-events-none"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Technical Watermark Stamp */}
          {/* <div className="absolute left-4 md:left-8 top-4 md:top-8 text-white/40 font-mono text-[8px] md:text-[9px] select-none pointer-events-none tracking-widest font-bold z-20 hidden md:block">
            [ SYSTEM OVERLAY // GRID: AR-NYC-08 ]
          </div> */}

          {/* Slide Index Tracker */}
          <div className="absolute left-4 md:left-8 bottom-32 md:bottom-8 z-20 flex items-center gap-3 md:gap-6 font-mono text-xs select-none">
            <div className="flex gap-[6px] items-center text-[#10b981] font-bold">
              <span>0{currentIndex + 1}</span>
              <span className="w-6 md:w-10 h-[1px] bg-[#10b981]"></span>
              <span className="text-white/40">0{slides.length}</span>
            </div>
            <div className="text-white/20 tracking-widest font-bold hidden md:block">
              [ SYSTEM / OPERATIONAL_ACTIVE ]
            </div>
          </div>

          {/* Mobile Dot Indicators */}
          <div className="absolute bottom-32 right-4 z-20 flex md:hidden gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#10b981] scale-110' : 'bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Ultra-Minimal floating arrow triggers anchored cleanly at the sides of the viewport */}
          <div
            onClick={prevSlide}
            className="absolute left-8 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2 text-white hover:text-[#FFC107] border-2 border-white/20 hover:border-[#FFC107] bg-white/5 backdrop-blur-sm transition-all duration-300 z-20 text-xl cursor-pointer hover:bg-white/10 w-12 h-12 flex items-center justify-center rounded-sm"
          >
            <FiChevronLeft />
          </div>
          <div
            onClick={nextSlide}
            className="absolute right-14 sm:right-16 lg:right-20 top-1/2 -translate-y-1/2 text-white hover:text-[#FFC107] border-2 border-white/20 hover:border-[#FFC107] bg-white/5 backdrop-blur-sm transition-all duration-300 z-20 text-xl cursor-pointer hover:bg-white/10 w-12 h-12 flex items-center justify-center rounded-sm"
          >
            <FiChevronRight />
          </div>

          {/* Centered Typography Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none p-4 sm:p-6 md:p-8 pb-24 sm:pb-32 lg:pb-40">
            <div key={currentIndex} ref={textContainerRef} className="pointer-events-auto max-w-4xl mx-auto text-center">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-xl leading-none tracking-tight text-white font-sans">
                {slides[currentIndex].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-10 drop-shadow-md text-white/90 max-w-2xl mx-auto leading-relaxed font-medium px-2">
                {slides[currentIndex].subtitle}
              </p>
            </div>

            <div className="pointer-events-auto flex flex-row justify-center gap-4 mt-2">
              <button className="bg-[#FFC107] text-[#111827] px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm font-black hover:bg-white transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm">
                LEARN MORE
              </button>
              <Link href="/contact" className="bg-[#111827] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm font-bold hover:bg-white hover:text-[#111827] transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm flex items-center justify-center">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
