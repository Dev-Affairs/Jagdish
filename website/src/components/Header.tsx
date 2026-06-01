"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, Award, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.766.213 2.47.483.73.28 1.392.686 1.947 1.24.55.556.963 1.22 1.24 1.95.27.7.435 1.44.48 2.479.045 1 .054 1.355.054 3.795 0 2.43-.01 2.78-.054 3.792-.047 1.03-.213 1.766-.48 2.47-.28.73-.686 1.392-1.24 1.947-.556.55-1.22.963-1.95 1.24-.7.27-1.44.435-2.479.48-1 .045-1.355.054-3.795.054-2.43 0-2.78-.01-3.792-.054-1.03-.047-1.766-.213-2.47-.48-.73-.28-1.392-.686-1.947-1.24-.55-.556-.963-1.22-1.24-1.95-.27-.7-.435-1.44-.48-2.479C2 14.812 2 14.458 2 12.02c0-2.43.01-2.784.056-3.796.047-1.03.213-1.766.483-2.47.28-.73.686-1.392 1.24-1.947.556-.55 1.22-.963 1.95-1.24.7-.27 1.44-.435 2.479-.481 1-.045 1.355-.054 3.795-.054zM12 5.765c-3.46 0-6.235 2.775-6.235 6.235s2.775 6.235 6.235 6.235 6.235-2.775 6.235-6.235S15.46 5.765 12 5.765zm0 10.37c-2.283 0-4.135-1.852-4.135-4.135S9.717 7.895 12 7.895s4.135 1.852 4.135 4.135-1.852 4.135-4.135 4.135zm5.022-10.45a1.107 1.107 0 100 2.215 1.107 1.107 0 000-2.215z" clipRule="evenodd" />
  </svg>
);

const Pinterest = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled past top
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <motion.div
        animate={{ y: isHidden ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-colors duration-300 ${pathname === '/' && !isScrolled ? '' : 'bg-slate-800 shadow-md'}`}
      >
        {/* TOPBAR (Desktop only) */}
        <div className="hidden lg:block w-full text-white py-3 text-[11px] font-medium bg-gradient-to-b from-black/60 to-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="italic tracking-wide">Kapila Prasad , Old Town , Bhubaneswar</span>
            </div>
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-5 border-r border-white/20 pr-6">
                <li><Link href="/contact" className="hover:text-caution-yellow transition-colors bg-transparent border-0 p-0 font-medium tracking-wide cursor-pointer block">Give Feedback</Link></li>
                <li><Link href="/contact" className="hover:text-caution-yellow transition-colors bg-transparent border-0 p-0 font-medium tracking-wide cursor-pointer block">Contact</Link></li>
              </ul>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-caution-yellow transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-caution-yellow transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-caution-yellow transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-caution-yellow transition-colors"><Pinterest className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER / NAVBAR */}
        <header className="w-full mt-1">
          <div className="w-full mx-auto flex items-stretch h-[72px] pl-4 md:pl-8 lg:pl-[max(2rem,calc(50vw-40rem))]">
            {/* Logo area */}
            <div className="flex items-center pr-8 lg:pr-12 w-auto bg-transparent shrink-0">
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden p-2.5 mr-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center text-white cursor-pointer"
                aria-label="Toggle Side Drawer"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="shrink-0 flex items-center justify-center">
                  <img
                    src="/logo/logo-Rs.png"
                    alt="Jagdish Infraheights Logo"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <div className="block">
                  <span className="font-extrabold text-[14px] sm:text-xl tracking-tight text-white block uppercase leading-none font-sans">
                    JAGDISH
                  </span>
                  <span className="text-[9px] sm:text-[11px] text-white font-medium tracking-[0.2em] uppercase block mt-1 font-sans">
                    Infraheights
                  </span>
                </div>
              </Link>
            </div>

            {/* Nav area (Yellow background) */}
            <nav className="hidden lg:flex flex-grow items-center justify-start xl:justify-center px-10 bg-[#ffc107] text-black font-extrabold text-[11px] xl:text-[12px] uppercase tracking-[0.1em] gap-6 xl:gap-8 shadow-lg transition-all duration-300">
              <Link href="/" className={`hover:opacity-60 transition-opacity bg-transparent border-0 cursor-pointer uppercase font-black tracking-widest ${isActive('/') ? 'opacity-100' : 'opacity-80'}`}>Home</Link>
              <Link href="/about" className={`hover:opacity-60 transition-opacity bg-transparent border-0 cursor-pointer uppercase font-black tracking-widest ${isActive('/about') ? 'opacity-100' : 'opacity-80'}`}>About</Link>
              <div className="relative group py-4">
                <Link href="/projects" className={`hover:opacity-60 transition-opacity bg-transparent border-0 cursor-pointer uppercase font-black tracking-widest flex items-center gap-1 ${isActive('/projects') ? 'opacity-100' : 'opacity-80'}`}>
                  Projects
                  {/* <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" /> */}
                </Link>
                {/* <div className="absolute top-full left-0 w-52 bg-white text-gray-800 shadow-xl border-t-2 border-accent-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 z-50">
                  <Link href="/projects/completed" className="px-5 py-2.5 hover:bg-slate-50 hover:text-safety-blue font-extrabold tracking-widest uppercase text-[10px]">Completed Projects</Link>
                  <Link href="/projects/ongoing" className="px-5 py-2.5 hover:bg-slate-50 hover:text-safety-blue font-extrabold tracking-widest uppercase text-[10px]">Ongoing Projects</Link>
                </div> */}
              </div>
              <Link href="/contact" className={`hover:opacity-60 transition-opacity bg-transparent border-0 cursor-pointer uppercase tracking-widest font-black ${isActive('/contact') ? 'opacity-100' : 'opacity-80'}`}>Contact</Link>
            </nav>
          </div>
        </header>
      </motion.div>

      {/* LEFT NAVIGATION DRAWER (Mobile Drawer) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[60] flex">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Side Drawer Body */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-80 max-w-[85vw] h-full bg-[#18181b] text-white flex flex-col justify-between overflow-y-auto outline-none shadow-2xl z-10 p-6 border-r border-white/5"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo/logo-Rs.png"
                      alt="Logo"
                      className="h-10 w-auto object-contain bg-white/5 p-1 rounded"
                    />
                    <div>
                      <span className="font-extrabold text-white text-xs block uppercase tracking-wide">JAGDISH INFRAHEIGHTS</span>
                      <span className="text-[9px] text-caution-yellow font-extrabold tracking-widest uppercase block">Pvt. Ltd.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1.5 text-slate-300 hover:text-white rounded cursor-pointer bg-transparent border-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">

                  {/* Brand Overview */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Our Foundation</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      Jagdish Estates (under Jagdish Infraheights Pvt. Ltd.) is a RERA-licensed builder, developer, and infrastructure owner. We specialize in developing luxury residential complexes, building Grade-A commercial leasing assets, and crafting title-cleared community layouts.
                    </p>
                  </div>

                  {/* Nav Links */}
                  <div className="space-y-2 flex flex-col">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Navigation</h4>
                    <Link
                      href="/"
                      onClick={() => setIsDrawerOpen(false)}
                      className="w-full text-left p-2 hover:bg-white/5 rounded text-xs font-semibold text-slate-200 bg-transparent border-0 block"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setIsDrawerOpen(false)}
                      className="w-full text-left p-2 hover:bg-white/5 rounded text-xs font-semibold text-slate-200 bg-transparent border-0 block"
                    >
                      About Jagdish Estates
                    </Link>

                    <div className="space-y-3">
                      <Link
                        href="/projects"
                        onClick={() => setIsDrawerOpen(false)}
                        className={`text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-1.5 ${isActive('/projects') ? 'text-caution-yellow' : 'text-slate-300 hover:text-white'}`}
                      >
                        Landmark Projects
                        {/* <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> */}
                      </Link>
                      {/* <div className="pl-4 space-y-3 border-l border-white/10 ml-2">
                        <Link
                          href="/projects/completed"
                          onClick={() => setIsDrawerOpen(false)}
                          className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
                        >
                          Completed Projects
                        </Link>
                        <Link
                          href="/projects/ongoing"
                          onClick={() => setIsDrawerOpen(false)}
                          className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
                        >
                          Ongoing Projects
                        </Link>
                      </div> */}
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setIsDrawerOpen(false)}
                      className="w-full text-left p-2 hover:bg-white/5 rounded text-xs font-semibold text-slate-200 bg-transparent border-0 block"
                    >
                      Contact Inquiry
                    </Link>
                  </div>

                  {/* Operational Nodes */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Core Pillars</h4>

                    <div className="flex items-start gap-2 text-xs">
                      <ShieldCheck className="w-4.5 h-4.5 text-caution-yellow shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Engineering Rigor</span>
                        <span className="text-slate-300 text-[11px] font-light">TMT-550D rebar and M-class concrete grade audits.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs">
                      <Award className="w-4.5 h-4.5 text-caution-yellow shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Odisha Pride</span>
                        <span className="text-slate-300 text-[11px] font-light">Employing over 200 local laborers and technical designers.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs">
                      <Clock className="w-4.5 h-4.5 text-caution-yellow shrink-0" />
                      <div>
                        <span className="font-bold text-white block">Punctual Delivery</span>
                        <span className="text-slate-300 text-[11px] font-light">Completing 95% of sites inside original timeline estimates.</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-white/10 pt-4 mt-6 text-[11px] text-slate-400 space-y-1">
                <p>Jagdish Infraheights Pvt. Ltd.</p>
                <p>Odisha RERA Reg: PR/154293A</p>
                <p className="text-[10px] text-slate-500 mt-2">v1.2.0 • Build Year 2026</p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
