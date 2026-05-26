"use client";

import React, { useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFileText } from 'react-icons/fi';
import gsap from 'gsap';

export default function ContactPage() {
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
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-image/hero-image-02.jpg"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f172a]/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <h1 className="hero-elem text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Contact Us
            </h1>
            <div className="hero-elem text-white font-bold tracking-wide text-sm md:text-lg drop-shadow-md">
              Home / Contact Us
            </div>
          </div>
        </section>

        {/* Google Maps Embed */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] bg-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.41013778544!2d85.73805193910931!3d20.296058699195325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33c12!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-10">

              {/* Company Brochure Button */}
              <button className="w-full bg-[#0f172a] hover:bg-slate-800 text-white py-4 px-6 flex items-center justify-center gap-3 transition-colors rounded-sm">
                <FiFileText className="text-xl" />
                <span className="font-bold tracking-wide">Company Brochure</span>
              </button>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Contact Info</h3>
                <div className="w-8 h-1 bg-[#fbbf24] mb-8"></div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2 uppercase tracking-wide">Head Office</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      JAGDISH INFRA HEIGHTS PVT. LTD,<br />
                      PLOT NO.:- 9, VIP Area,<br />
                      IRC Village, Bhubaneswar.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#0f172a]"><FiPhone className="text-lg" /></div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      +91 - 9338307086 / 9437307086
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2 uppercase tracking-wide">Email Us</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      jagdishinfraheights@gmail.com
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#0f172a]"><FiClock className="text-lg" /></div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      Mon - Sat 10:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight">Let's Discuss Your Project</h2>
              <div className="w-20 h-[3px] bg-[#10b981] my-6"></div>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Jagadish Infra Heights Pvt. Ltd. is dedicated to delivering excellence in construction and engineering services across Odisha. Contact us to discuss your project requirements or request a quote.
              </p>

              <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Contact Details</h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name..."
                    className="w-full bg-[#f4f5f7] border-none px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 rounded-sm"
                  />
                  <input
                    type="text"
                    placeholder="Enter Address..."
                    className="w-full bg-[#f4f5f7] border-none px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 rounded-sm"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject..."
                  className="w-full bg-[#f4f5f7] border-none px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 rounded-sm"
                />

                <textarea
                  placeholder="Write message"
                  rows={6}
                  className="w-full bg-[#f4f5f7] border-none px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 rounded-sm resize-none"
                ></textarea>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#0f172a] font-bold uppercase tracking-wider text-sm px-8 py-3.5 transition-colors rounded-sm"
                  >
                    Ask A Quote
                  </button>
                </div>
              </form>

              <p className="text-xs text-slate-400 font-medium mt-6 md:mt-8">
                Note: Jagadish Infra Heights Pvt. Ltd. is committed to delivering top-notch construction and engineering services with excellence and integrity.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
