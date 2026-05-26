"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import gsap from 'gsap';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const testimonials = [
    { name: "Ananya Mishra", role: "Balasore Infrastructure Pvt. Ltd.", text: `"Their commitment to quality and safety in bridge construction is impressive. The project was completed seamlessly and within the projected timeline."` },
    { name: "Ravi Patnaik", role: "Cuttack Developers", text: `"Jagdish Infra Heights' expertise in residential and commercial projects is evident from their impressive portfolio. Our partnership with them has been incredibly successful."` },
    { name: "Michael Johnson", role: "Global Real Estate", text: `"A fantastic experience from start to finish. The team was professional, timely, and delivered exactly what was promised with exceptional quality."` },
    { name: "Emily Davis", role: "Design Studio", text: `"Working with Jagdish Infra Heights has been a breath of fresh air. Their attention to detail and commitment to safety is unparalleled in the industry."` },
    { name: "Robert Wilson", role: "Logistics Inc", text: `"They handled our industrial project with incredible efficiency. Highly recommend their services for anyone looking for reliable construction partners."` },
    { name: "Sarah Taylor", role: "Private Homeowner", text: `"Our residential project was completed ahead of schedule and the craftsmanship is simply outstanding. We couldn't be happier with our new home."` }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else setItemsToShow(2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const animateTo = useCallback((index: number) => {
    if (trackRef.current && trackRef.current.children[0]) {
      const slideWidth = (trackRef.current.children[0] as HTMLElement).offsetWidth;
      const computedGap = window.innerWidth < 768 ? 16 : 32;
      const distance = (slideWidth + computedGap) * index;

      gsap.to(trackRef.current, {
        x: -distance,
        duration: 0.8,
        ease: 'power3.inOut'
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => {
      const next = prev >= maxIndex ? 0 : prev + 1; // loop back to 0
      animateTo(next);
      return next;
    });
  }, [maxIndex, animateTo]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => {
      const next = prev <= 0 ? maxIndex : prev - 1; // loop to max
      animateTo(next);
      return next;
    });
  }, [maxIndex, animateTo]);

  // Touch/swipe handlers
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
      if (diff > 0) handleNext();
      else handlePrev();
    }
  }, [handleNext, handlePrev]);

  // Auto carousel with hover pause
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
      animateTo(maxIndex);
    } else {
      animateTo(currentIndex);
    }
  }, [itemsToShow, maxIndex, currentIndex, animateTo]);

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-8 sm:px-16 md:px-24">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mb-4">TESTIMONIALS</h2>
          <div className="w-10 sm:w-12 h-1 bg-[#FFC107] mx-auto rounded-none"></div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <div className="hidden sm:block">
            <div
              onClick={handlePrev}
              className="absolute -left-4 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#FFC107] rounded-none flex items-center justify-center cursor-pointer text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors duration-300 z-10 bg-white"
            >
              <FiChevronLeft className="text-xl" />
            </div>
            <div
              onClick={handleNext}
              className="absolute -right-4 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#FFC107] rounded-none flex items-center justify-center cursor-pointer text-[#FFC107] hover:bg-[#FFC107] hover:text-white transition-colors duration-300 z-10 bg-white"
            >
              <FiChevronRight className="text-xl" />
            </div>
          </div>

          <div className="overflow-hidden py-4 px-2">
            <div ref={trackRef} className="flex gap-4 md:gap-8 w-full">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(itemsToShow - 1) * (itemsToShow === 1 ? 16 : 32)}px) / ${itemsToShow})` }}
                >
                  <div className="relative bg-white flex flex-col justify-start h-full px-2 sm:px-4">
                    <div className="mb-6">
                      <h4 className="text-[#FFC107] font-bold text-lg sm:text-xl tracking-wide">{t.name}</h4>
                      <p className="text-slate-400 text-sm mt-1">{t.role}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base pr-4">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation dots */}
          <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border-2 border-[#FFC107] rounded-none flex items-center justify-center text-[#FFC107] bg-white active:bg-[#FFC107] active:text-white transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#FFC107] w-5' : 'bg-slate-200'}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 border-2 border-[#FFC107] rounded-none flex items-center justify-center text-[#FFC107] bg-white active:bg-[#FFC107] active:text-white transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
