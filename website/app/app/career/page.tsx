"use client";

import React, { useEffect, useRef, useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';
import { FiBriefcase, FiMapPin, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaHeartbeat, FaGraduationCap, FaShieldAlt, FaChartLine } from 'react-icons/fa';

// Dummy open positions
const jobOpenings = [
  {
    id: 1,
    title: "Senior Structural Engineer",
    department: "Engineering",
    location: "New York, USA",
    type: "Full-Time",
    experience: "7+ Years",
    description: "We are seeking a highly experienced Senior Structural Engineer to lead complex commercial and industrial projects. You will be responsible for structural analysis, design modeling, and ensuring compliance with international safety standards."
  },
  {
    id: 2,
    title: "Construction Project Manager",
    department: "Management",
    location: "London, UK",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Looking for a dynamic Project Manager to oversee large-scale residential developments from inception to handover. Must have a proven track record of managing budgets, timelines, and cross-functional site teams."
  },
  {
    id: 3,
    title: "Site Safety Inspector",
    department: "Health & Safety",
    location: "Dubai, UAE",
    type: "Contract",
    experience: "3+ Years",
    description: "Ensure that our 100% safety compliance rating is maintained. The Site Safety Inspector will conduct daily site audits, enforce OSHA protocols, and lead weekly safety training sessions for all site personnel."
  },
  {
    id: 4,
    title: "Junior Architect",
    department: "Architecture",
    location: "New York, USA",
    type: "Full-Time",
    experience: "1-3 Years",
    description: "An exciting opportunity for a creative Junior Architect to join our design studio. You will assist senior architects in drafting blueprints, creating 3D renderings, and exploring sustainable design alternatives."
  }
];

// Perks data
const perks = [
  { icon: FaHeartbeat, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: FaChartLine, title: "Career Growth", desc: "Clear progression pathways, mentorship programs, and performance bonuses." },
  { icon: FaGraduationCap, title: "Continuous Learning", desc: "Annual stipend for industry certifications, workshops, and further education." },
  { icon: FaShieldAlt, title: "Unmatched Safety", desc: "We invest heavily in the safest gear and protocols to ensure you go home safe." }
];

export default function CareerPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });

      gsap.from(".perk-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".perks-section",
          start: "top 80%"
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-transparent">
      <div className="bg-white">
        <TopBar />
        <Navbar />
      </div>
      
      <main className="flex-grow">
        
        {/* Cinematic Hero */}
        <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-image/hero-image-02.jpg" 
              alt="Career at Arnesh" 
              className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-[3px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="hero-elem text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ JOIN THE ELITE ]</span>
            <h1 className="hero-elem text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Legacy</span>
            </h1>
            <div className="hero-elem w-24 h-1 bg-gradient-to-r from-[#10b981] to-transparent mx-auto mb-8"></div>
            <p className="hero-elem text-slate-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
              We are always looking for passionate engineers, visionary architects, and dedicated professionals to help us shape the skylines of tomorrow.
            </p>
          </div>
        </section>

        {/* Why Join Us (Perks) */}
        <section className="perks-section py-20 md:py-28 bg-white relative z-20 shadow-xl -mt-8 rounded-t-[2.5rem] border-b border-slate-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ OUR CULTURE ]</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight">Why Choose Arnesh?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {perks.map((perk, idx) => (
                <div key={idx} className="perk-card p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-[#10b981]/10 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#10b981] text-2xl mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <perk.icon />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">{perk.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions (Job Board) */}
        <section className="py-20 md:py-28 bg-transparent">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ OPEN ROLES ]</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tight">Current Opportunities</h2>
            </div>

            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id} 
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden bg-white ${
                    expandedJob === job.id ? 'border-[#10b981] shadow-lg shadow-[#10b981]/10' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Job Header (Clickable) */}
                  <div 
                    className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-widest uppercase rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0f172a]">{job.title}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/3">
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                        <FiMapPin className="text-[#10b981]" />
                        {job.location}
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        expandedJob === job.id ? 'bg-[#10b981] text-white' : 'bg-slate-50 text-slate-400'
                      }`}>
                        {expandedJob === job.id ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    </div>
                  </div>

                  {/* Job Details (Expandable) */}
                  <div 
                    className={`transition-all duration-500 ease-in-out border-t border-slate-100 bg-slate-50/50 ${
                      expandedJob === job.id ? 'max-h-[500px] opacity-100 py-6 md:py-8 px-6 md:px-8' : 'max-h-0 opacity-0 overflow-hidden py-0 px-6 md:px-8 border-t-0'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-[#0f172a] mb-3">Role Overview</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{job.description}</p>
                      </div>
                      
                      <div className="md:w-1/4 flex flex-col gap-4">
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1">Experience Required</span>
                          <span className="flex items-center gap-1.5 text-sm font-medium text-[#0f172a]">
                            <FiClock className="text-[#10b981]" />
                            {job.experience}
                          </span>
                        </div>
                        <button className="w-full py-3 bg-[#0f172a] hover:bg-[#10b981] text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-colors duration-300 mt-auto">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-white border border-slate-200 rounded-2xl">
              <h4 className="font-bold text-[#0f172a] mb-2">Don't see a perfect fit?</h4>
              <p className="text-sm text-slate-500 mb-4">Send us your resume and we'll keep you in mind for future openings.</p>
              <a href="mailto:careers@arneshconstruction.com" className="inline-flex items-center gap-2 text-[#10b981] font-bold text-sm hover:text-[#0f172a] transition-colors">
                <FiBriefcase />
                Submit General Application
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
