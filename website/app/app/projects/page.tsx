"use client";

import React, { useState, useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';
import { FiMapPin, FiMaximize2, FiArrowRight, FiFilter, FiSearch } from 'react-icons/fi';

// Dummy project data
const allProjects = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Project Name 0${(i % 5) + 1}`,
  category: i % 2 === 0 ? "Residential" : (i % 3 === 0 ? "Commercial" : "Industrial"),
  location: i % 2 === 0 ? "New York, USA" : "London, UK",
  size: `${(i + 1) * 1200} sq ft`,
  image: `/hero-image/hero-image-0${(i % 3) + 1}.jpg`,
}));

const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Paginate projects
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = allProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Hero Animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
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

  // Grid Animation on filter or pagination change
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [currentPage]);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-transparent">
      <div className="bg-white">
        <TopBar />
        <Navbar />
      </div>
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-image/hero-image-01.jpg" 
              alt="Our Projects" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f172a]/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <h1 className="hero-elem text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Projects
            </h1>
            <div className="hero-elem text-white font-bold tracking-wide text-sm md:text-lg drop-shadow-md">
              Home / Projects
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-8 lg:gap-12">
              
              {/* Project Grid */}
              <div className="w-full">
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {paginatedProjects.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#10b981]/10 transition-all duration-500 relative">
                      
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#10b981] shadow-sm">
                          {project.category}
                        </div>
                        
                        {/* Hover-enabled Glassmorphism Action Button */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <button className="w-14 h-14 bg-white/20 backdrop-blur-lg border border-white/40 rounded-full flex items-center justify-center text-white hover:bg-[#10b981] hover:border-[#10b981] hover:scale-110 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                            <FiMaximize2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="p-6 relative">
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2 uppercase tracking-tight group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                        
                        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6">
                          <div className="flex items-center gap-1.5">
                            <FiMapPin className="text-[#10b981]" />
                            {project.location}
                          </div>
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                          <div>{project.size}</div>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                          <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">View Details</span>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0f172a] group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300">
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* GSAP Animated Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-16">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                      const pageNum = idx + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                            currentPage === pageNum
                              ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/30 -translate-y-1"
                              : "bg-white text-slate-500 border border-slate-200 hover:border-[#10b981] hover:text-[#10b981]"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div >
  );
}
