"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiSearch, FiMenu, FiX, FiChevronUp, FiMail } from 'react-icons/fi';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and trigger GSAP transitions when mobile menu opens/closes
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Animate overlay and drawer in
      gsap.killTweensOf([drawerRef.current, overlayRef.current]);
      
      gsap.set(overlayRef.current, { display: 'block', opacity: 0 });
      gsap.set(drawerRef.current, { display: 'block', xPercent: -100 });

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' });
      gsap.to(drawerRef.current, { 
        xPercent: 0, 
        duration: 0.35, 
        ease: 'power3.out' 
      });
    } else {
      document.body.style.overflow = '';
      
      // Animate overlay and drawer out
      gsap.killTweensOf([drawerRef.current, overlayRef.current]);

      gsap.to(overlayRef.current, { 
        opacity: 0, 
        duration: 0.3, 
        ease: 'power2.in',
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = 'none';
        }
      });
      gsap.to(drawerRef.current, { 
        xPercent: -100, 
        duration: 0.3, 
        ease: 'power3.in',
        onComplete: () => {
          if (drawerRef.current) drawerRef.current.style.display = 'none';
        }
      });
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', hasDropdown: false, href: '/' },
    { label: 'ABOUT', hasDropdown: false, href: '/about' },
    { label: 'PROJECTS', hasDropdown: false, href: '/projects' },
    { label: 'GALLERY', hasDropdown: false, href: '/gallery' },
    { label: 'CONTACT', hasDropdown: false, href: '/contact' },
  ];

  return (
    <header className={`${scrolled ? 'fixed top-0 bg-white shadow-md border-b border-zinc-200' : 'absolute top-0 lg:top-[40px] bg-transparent'} left-0 w-full z-40 transition-all duration-300`}>
      
      {/* Premium Horizontal Scroll Progress Indicator */}
      <div 
        style={{ width: `${scrollProgress}%` }} 
        className="absolute top-0 left-0 h-[2px] bg-[#FFC107] transition-all duration-75 z-50"
      ></div>



      <div className="flex h-20 max-w-[1920px] mx-auto">
        {/* Brand Logo & Title */}
        <div className="w-auto flex-shrink-0 flex items-center pl-4 md:pl-8 lg:pl-16 xl:pl-32">
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 mr-4 rounded transition-colors duration-200 ${scrolled ? 'text-zinc-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>

          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <img src="/logo/logo-Rs.png" alt="Jagdish Infra Heights Logo" className="h-9 md:h-12 w-auto object-contain cursor-pointer" />
          </Link>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Link href="/" className={`text-lg sm:text-xl md:text-2xl font-black tracking-tighter leading-none cursor-pointer ${scrolled ? 'text-slate-800' : 'text-white'}`}>JAGDISH INFRA HEIGHTS</Link>
              {/* Brand Accent Dots */}
              <div className="flex gap-[3px] ml-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#10b981] rounded-full"></span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ef4444] rounded-full"></span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 md:mt-1">
              <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest uppercase leading-none ${scrolled ? 'text-slate-500' : 'text-white/80'}`}><span className="opacity-80">Pvt. Ltd.</span></span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex-grow flex justify-end ml-8 relative z-10 h-full">
          <div className={`hidden lg:flex items-center justify-end pl-10 pr-4 lg:pr-16 xl:pr-32 h-full transition-colors duration-300 ${!scrolled ? 'bg-[#FFC107]' : 'bg-transparent'}`}>
            <nav className="flex items-center gap-6 xl:gap-8 text-[11px] font-extrabold uppercase tracking-widest h-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.label} href={item.href || '#'} className={`relative group/nav cursor-pointer h-full flex items-center transition-colors gap-1 ${scrolled ? (isActive ? 'text-[#FFC107]' : 'text-zinc-800 hover:text-[#FFC107]') : 'text-zinc-900 hover:text-white'}`}>
                    <span className="flex items-center select-none">
                      {item.label}
                    </span>
                    {item.hasDropdown && <FiChevronDown className="text-[8px] ml-0.5 transition-transform duration-300 group-hover/nav:rotate-180" />}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

      </div>

      {/* Side Contact Widget */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        <Link href="/contact" className="bg-[#FFC107] text-white p-3 shadow-lg hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center gap-2 group">
          <FiMail className="text-xl" />
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>CONTACT</span>
        </Link>
      </div>

      {/* Scroll to Top Button */}
      {scrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#FFC107] text-white p-3 rounded-sm shadow-xl z-50 hover:bg-white hover:text-black transition-all border border-transparent cursor-pointer"
        >
          <FiChevronUp className="text-xl" />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      <div 
        ref={overlayRef}
        style={{ display: 'none' }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden pointer-events-auto"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        ref={drawerRef}
        style={{ display: 'none' }}
        className="fixed top-0 left-0 w-[280px] sm:w-[320px] h-screen bg-white border-r border-slate-100 shadow-2xl z-50 overflow-y-auto lg:hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo/logo-Rs.png" alt="Logo" className="h-8 w-auto object-contain" />
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href || '#'} 
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 px-3 text-sm font-semibold transition-all duration-200 border-b border-slate-50 uppercase tracking-wider ${
                  isActive ? 'text-[#10b981] bg-slate-50/50' : 'text-slate-700 hover:text-[#10b981] hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>}
                  <span>{item.label}</span>
                </span>
                {item.hasDropdown && <FiChevronDown className="text-xs text-slate-400" />}
              </Link>
            );
          })}

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4">
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-[#10b981] cursor-pointer transition-colors">
              <FiSearch className="text-lg" />
              <span className="text-sm font-semibold uppercase tracking-wider">Search</span>
            </div>
            <button className="bg-[#10b981] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#059669] active:scale-[0.98] transition-all duration-200 shadow-sm w-full">
              Get Quote
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
