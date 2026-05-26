"use client";

import React, { useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesGrid from '@/components/home/ServicesGrid';
import CTABanner from '@/components/home/CTABanner';
import gsap from 'gsap';

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-[#020617]">
      <div className="bg-white">
        <TopBar />
        <Navbar />
      </div>
      
      <main className="flex-grow bg-transparent">
        
        {/* Cinematic Hero Section */}
        <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax effect */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-image/hero-image-03.jpg" 
              alt="Our Services" 
              className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-[#020617]/40 backdrop-blur-[3px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="hero-elem inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase">Expertise</span>
            </div>
            <h1 className="hero-elem text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Do</span>
            </h1>
            <div className="hero-elem w-24 h-1 bg-gradient-to-r from-[#10b981] to-transparent mx-auto mb-8"></div>
            <p className="hero-elem text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              From residential marvels to massive industrial powerhouses, we deliver end-to-end engineering and construction solutions. We combine advanced technology with decades of experience to ensure every project is executed flawlessly.
            </p>
          </div>
        </section>

        {/* Integrated Services Grid */}
        <div className="bg-white relative z-20 shadow-xl pb-10">
          <div className="pt-8">
            <ServicesGrid />
          </div>
        </div>

        {/* Our Working Process (Informative Timeline) */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ METHODOLOGY ]</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-6">Our Working Process</h2>
              <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed">
                We believe that a systematic, transparent approach is the key to delivering complex engineering projects on time and perfectly on budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-100 -z-10"></div>
              
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-slate-300 group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-300 mb-6 shadow-sm">01</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-wide">Consultation</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">Initial site surveys, requirement gathering, and feasibility studies to set a solid foundation.</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-slate-300 group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-300 mb-6 shadow-sm">02</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-wide">Planning & Design</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">Architectural drafting, structural engineering calculations, and obtaining necessary legal permits.</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-slate-300 group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-300 mb-6 shadow-sm">03</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-wide">Construction</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">Executing the build with strict adherence to safety protocols, quality control, and timelines.</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center group">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-slate-300 group-hover:border-[#10b981] group-hover:text-[#10b981] transition-all duration-300 mb-6 shadow-sm">04</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3 uppercase tracking-wide">Final Delivery</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-4">Rigorous final inspections, client walkthroughs, and handing over the completed masterpiece.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Capabilities / FAQ */}
        <section className="py-20 md:py-28 bg-transparent">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ WHY CHOOSE US ]</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] uppercase tracking-tight mb-8">Uncompromising Standard Of Excellence</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-lg font-bold text-[#0f172a] mb-2">Advanced Equipment</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">We utilize state-of-the-art heavy machinery and modern construction technologies to ensure precision, speed, and safety on every job site, minimizing human error and maximizing efficiency.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-lg font-bold text-[#0f172a] mb-2">Sustainable Practices</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Our engineering models prioritize eco-friendly materials and energy-efficient designs. We aim to minimize the environmental footprint of our projects without compromising structural integrity.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-lg font-bold text-[#0f172a] mb-2">Dedicated Safety Officers</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Every site is monitored by certified safety professionals. We boast a 100% compliance rate with international OSHA standards, guaranteeing the wellbeing of our workers and clients.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/hero-image/hero-image-01.jpg" alt="Construction Quality" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0f172a]/20"></div>
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-2xl">15+</div>
                    <div>
                      <h4 className="font-bold text-[#0f172a]">Years of Trust</h4>
                      <p className="text-xs text-slate-500">Delivering quality consistently.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-white relative z-20">
          <CTABanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
