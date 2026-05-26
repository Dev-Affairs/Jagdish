"use client";

import React, { useState, useRef, useEffect } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import gsap from 'gsap';

const galleryImages = [
  '/gallery-page-image/galleryimg-1.jpeg',
  '/gallery-page-image/galleryimg-2.jpeg',
  '/gallery-page-image/galleryimg-3.jpeg',
  '/gallery-page-image/galleryimg-4.jpeg',
  '/gallery-page-image/galleryimg-5.jpeg',
  '/gallery-page-image/galleryimg-6.jpeg',
  '/gallery-page-image/galleryimg-7.jpeg',
  '/gallery-page-image/galleryimg-8.jpeg',
  '/gallery-page-image/galleryimg-9.jpeg',
  '/gallery-page-image/galleryimg-10.jpeg',
  '/gallery-page-image/galleryimg-11.jpeg',
  '/gallery-page-image/galleryimg-12.jpeg',
  '/gallery-page-image/galleryimg-13.jpeg',
  '/gallery-page-image/galleryimg-14.jpeg',
  '/gallery-page-image/galleryimg-15.jpeg',
  '/gallery-page-image/galleryimg-16.jpeg',
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Touch handlers for swipe
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-elem", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation & close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  // Handle browser back button via hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash !== '#gallery-view' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    window.history.pushState(null, '', window.location.pathname + '#gallery-view');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (window.location.hash === '#gallery-view') {
      window.history.back();
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage(); // swipe left
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevImage(); // swipe right
    }
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current && imageRef.current) {
      // Opening animation
      gsap.killTweensOf([modalRef.current, imageRef.current]);
      gsap.set(modalRef.current, { display: 'flex', opacity: 0 });
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });

      gsap.to(modalRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(imageRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 });
    } else if (!isModalOpen && modalRef.current && imageRef.current) {
      // Closing animation
      gsap.killTweensOf([modalRef.current, imageRef.current]);
      gsap.to(imageRef.current, { scale: 0.8, opacity: 0, duration: 0.2, ease: 'power2.in' });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex(null);
          document.body.style.overflow = '';
          if (modalRef.current) modalRef.current.style.display = 'none';
        }
      });
    } else if (!isModalOpen) {
      // Safety reset
      document.body.style.overflow = '';
      if (modalRef.current) modalRef.current.style.display = 'none';
      setCurrentIndex(null);
    }
  }, [isModalOpen]);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <TopBar />
      <Navbar />

      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-image/hero-image-02.jpg"
              alt="Gallery Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f172a]/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <h1 className="hero-elem text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Gallery
            </h1>
            <div className="hero-elem text-white font-bold tracking-wide text-sm md:text-lg drop-shadow-md">
              Home / Gallery
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
                onClick={() => openModal(idx)}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* GSAP Modal */}
      <div
        ref={modalRef}
        style={{ display: 'none' }}
        className="fixed inset-0 z-[100] bg-[#1a1a1a]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        onClick={closeModal}
      >
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-[101]">
          <div className="text-white/60 font-semibold text-lg ml-2 md:ml-6 tracking-wide">Our Gallery</div>
          <button
            className="text-white/70 hover:text-white transition-colors p-2 mr-2 md:mr-6"
            onClick={closeModal}
          >
            <FiX className="text-3xl" />
          </button>
        </div>

        {/* Prev & Next Area */}
        {currentIndex !== null && (
          <div 
            className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 z-[101] pointer-events-none"
          >
            <button
              onClick={prevImage}
              className="w-10 h-10 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all pointer-events-auto shadow-lg"
            >
              <FiChevronLeft className="text-2xl sm:text-4xl pr-1" />
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all pointer-events-auto shadow-lg"
            >
              <FiChevronRight className="text-2xl sm:text-4xl pl-1" />
            </button>
          </div>
        )}

        {currentIndex !== null && (
          <div 
            className="w-full h-full flex items-center justify-center relative z-[100]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src={galleryImages[currentIndex]}
              alt={`Expanded gallery view ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
