"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Layers,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  Building2,
  Phone
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';

interface ProjectDetailViewProps {
  projectId: string;
}

export default function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  const router = useRouter();
  console.log("projectId==", projectId)
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  console.log("project==", project)
  const [activeImg, setActiveImg] = useState(0);

  if (!project) {
    return (
      <div className="py-20 text-center">
        <p>Project not found.</p>
        <button onClick={() => router.push('/projects')} className="mt-4 text-safety-blue font-bold">Go Back</button>
      </div>
    );
  }

  const images = project.images || [project.image];

  const nextImg = () => {
    setActiveImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setActiveImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white min-h-screen pb-20">

      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push('/projects')}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-safety-blue transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </button>
          <span className="text-[10px] font-bold uppercase tracking-widest text-caution-yellow bg-caution-yellow/10 px-3 py-1 rounded-full">
            {project.category} Asset
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT COLUMN: Project Information & Media */}
          <div className="lg:col-span-8 space-y-10">

            {/* Title & Location Header */}
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-safety-blue tracking-tight uppercase mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-caution-yellow" />
                <span className="font-medium">{project.location}</span>
              </div>
            </div>

            {/* Main Image Slider */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 group shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[activeImg]}
                    alt={`${project.title} - View ${activeImg + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-caution-yellow hover:text-black cursor-pointer border-0"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-caution-yellow hover:text-black cursor-pointer border-0"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer border-0 ${activeImg === idx ? 'w-6 bg-caution-yellow' : 'w-2 bg-white/50'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Key Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                <Layers className="w-6 h-6 text-safety-blue mb-2" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Area</span>
                <span className="text-sm font-bold text-safety-blue">{project.area}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                <Calendar className="w-6 h-6 text-safety-blue mb-2" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status/Timeline</span>
                <span className="text-sm font-bold text-safety-blue">{project.duration}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                <Building2 className="w-6 h-6 text-safety-blue mb-2" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Category</span>
                <span className="text-sm font-bold text-safety-blue">{project.category}</span>
              </div>
              <div className="bg-caution-yellow/10 p-4 rounded-xl border border-caution-yellow/20 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-6 h-6 text-caution-yellow mb-2" />
                <span className="text-[10px] font-bold text-caution-yellow uppercase tracking-widest mb-1">Verification</span>
                <span className="text-sm font-bold text-safety-blue">Title Cleared</span>
              </div>
            </div>

            {/* Description & Highlights */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-safety-blue mb-4">Project Overview</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                  <br /><br />
                  Strategically situated in one of the most promising growth corridors, this property is designed to provide immense value appreciation and a superior lifestyle or business environment. We have integrated advanced architectural planning with top-tier construction materials to ensure long-lasting durability and aesthetic excellence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-safety-blue mb-4">Core Highlights & Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((hlt, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-caution-yellow" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium leading-relaxed">{hlt}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-caution-yellow" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium leading-relaxed">24/7 Multi-tier Security & Surveillance</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-caution-yellow" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium leading-relaxed">Dedicated power backup for common areas</span>
                  </div>
                </div>
              </div>

              {/* Floor Plans */}
              {project.floorPlans && project.floorPlans.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-safety-blue mb-4">Floor Plans</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {project.floorPlans.map((plan, idx) => (
                      <div key={idx} className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
                        <div className="relative w-full h-auto bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center">
                          <img 
                            src={plan} 
                            alt={`${project.title} Floor Plan ${idx + 1}`} 
                            className="w-full h-auto object-contain transition-transform duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Contact Form */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 bg-zinc-900 rounded-2xl p-6 shadow-2xl border border-zinc-800 text-white">
              <h3 className="text-xl font-bold text-white mb-2">Interested in this property?</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Schedule a site visit or request a detailed pricing brochure for <strong className="text-caution-yellow">{project.title}</strong> directly from our sales team.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Full Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-caution-yellow transition-colors" placeholder="e.g. Arnesh Mohanty" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-caution-yellow transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">Your Inquiry</label>
                  <textarea rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-caution-yellow transition-colors resize-none" defaultValue={`I would like to know more about ${project.title}. Please send me the brochure and pricing details.`}></textarea>
                </div>
                <button type="submit" className="w-full bg-caution-yellow text-safety-blue font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer border-0 mt-2">
                  <Send className="w-4 h-4" />
                  Request Details
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Or Call Us Directly</span>
                <a href="tel:+919937000000" className="inline-flex items-center gap-2 text-white font-bold hover:text-caution-yellow transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 99370 00000
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
