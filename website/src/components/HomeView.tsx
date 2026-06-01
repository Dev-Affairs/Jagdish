"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Factory,
  Milestone,
  Home as HomeIcon,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  HardHat,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Award,
  Calendar,
  Clock,
  Send,
  Check,
} from "lucide-react";
import { PROJECTS_DATA, TESTIMONIALS_DATA } from "../data";
import LogoIcon from "./LogoIcon";

interface HomeViewProps {
  onNavigate: (tab: "home" | "quote" | "projects" | "contact") => void;
  onOpenQuickContact: () => void;
}

export default function HomeView({
  onNavigate,
  onOpenQuickContact,
}: HomeViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const heroSlides = [
    {
      image: "https://arneshconstruction.com/images/b1.jpg",
      title: "Luxury Living Redefined",
      excerpt:
        "Discover handpicked residential penthouses and smart-designed villas across Odisha's prime locations.",
    },
    {
      image: "https://arneshconstruction.com/images/b2.jpg",
      title: "Grade-A Business Spaces",
      excerpt:
        "Premium corporate office towers, IT parks, and high-footfall commercial plazas for lease and purchase.",
    },
    {
      image: "https://arneshconstruction.com/images/b3.jpg",
      title: "Smart Real Estate Investments",
      excerpt:
        "Maximize your portfolio yield with pre-leased commercial assets and RERA-approved plots.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  // Auto sliding for hero banner
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % filteredProjects.length);
    setActiveImageIdx(0);
  };

  const handlePrevProject = () => {
    setActiveProjectIdx(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length,
    );
    setActiveImageIdx(0);
  };

  const currentProjectImages = filteredProjects[activeProjectIdx]?.images || [
    filteredProjects[activeProjectIdx]?.image,
  ];

  const handleNextProjectImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % currentProjectImages.length);
  };

  const handlePrevProjectImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx(
      (prev) =>
        (prev - 1 + currentProjectImages.length) % currentProjectImages.length,
    );
  };

  return (
    <div className="relative pb-10">
      {/* Side Contact Tab - Sticky Widget on Desktop / Right Edge */}
      <div
        onClick={onOpenQuickContact}
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 bg-accent-red text-white px-3 py-6 rounded-l-lg flex-col items-center gap-2 z-40 cursor-pointer shadow-lg active:scale-95 transition-all hover:bg-white hover:text-safety-blue border border-r-0 border-safety-blue/20"
        title="Quick Inquiry Form"
        id="side-contact-tab"
      >
        <Mail className="w-5 h-5 animate-bounce" />
        <span className="font-sans text-xs [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest font-bold">
          CONTACT US
        </span>
      </div>

      {/* Hero Banner Slider Section */}
      <section
        className="relative h-[65vh] sm:h-[80vh] w-full overflow-hidden bg-slate-950"
        id="hero-section"
      >
        {/* Slides */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full"
            >
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].title}
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-safety-blue/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start text-left px-6 sm:px-12 md:px-20 lg:px-32 z-10 bg-gradient-to-r from-zinc-950/70 via-zinc-950/20 to-transparent">
          <div className="max-w-2xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-red text-[10px] font-extrabold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-accent-red rounded-full animate-pulse" />
                  Premium Curation
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-white font-sans">
                  {heroSlides[activeSlide].title}
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl font-light leading-relaxed">
                  {heroSlides[activeSlide].excerpt}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => onNavigate("quote")}
                    className="bg-caution-yellow text-white px-8 py-3.5 font-extrabold text-xs tracking-widest uppercase rounded shadow-lg shadow-caution-yellow/15 hover:bg-white hover:text-safety-blue transition-all duration-300 cursor-pointer border-0"
                  >
                    Browse Listings
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="border border-white/20 text-white px-8 py-3.5 font-extrabold text-xs tracking-widest uppercase rounded bg-white/5 hover:bg-white hover:text-safety-blue transition-all duration-300 cursor-pointer"
                  >
                    Book Site Tour
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Banner Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/10 hover:border-caution-yellow bg-zinc-950/40 text-white hover:text-caution-yellow flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/10 hover:border-caution-yellow bg-zinc-950/40 text-white hover:text-caution-yellow flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* BENTO GRID OF STATS & VISION */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 -mt-10 sm:-mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Vision (Spans 2 columns on lg screens) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-caution-yellow/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-caution-yellow uppercase tracking-widest bg-caution-yellow/10 px-3.5 py-1 rounded-full">
                Core Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-safety-blue uppercase tracking-tight leading-snug">
                Find Your Premium Property Space
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                Jagdish Estates integrates legal title transparency with premium
                lifestyle locations to deliver elite residential and commercial
                projects that appreciate.
              </p>
            </div>
            <button
              onClick={() => onNavigate("contact")}
              className="mt-6 self-start text-xs font-bold text-caution-yellow flex items-center gap-1.5 uppercase tracking-wider group/btn cursor-pointer bg-transparent border-0 p-0"
            >
              Contact Developer Desk
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Card 2: Stats - Years */}
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-caution-yellow/10 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-2">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl border border-white/10 text-caution-yellow">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest block pt-2">
                Proven Track Record
              </span>
            </div>
            <div className="pt-6">
              <span className="text-4xl sm:text-5xl font-black text-white block tracking-tight">
                15+
              </span>
              <span className="text-xs text-zinc-300 font-light mt-1 block">
                Years of Infrastructure Asset Ownership
              </span>
            </div>
          </div>

          {/* Card 3: Stats - Deliveries */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-caution-yellow/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-2">
              <div className="w-10 h-10 bg-safety-blue/5 flex items-center justify-center rounded-xl border border-zinc-100 text-caution-yellow">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest block pt-2">
                Scale & Curation
              </span>
            </div>
            <div className="pt-6">
              <span className="text-4xl sm:text-5xl font-black text-safety-blue block tracking-tight">
                120+
              </span>
              <span className="text-xs text-zinc-500 font-light mt-1 block">
                Premium Projects Managed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white" id="about-section">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold text-safety-blue uppercase tracking-wide relative pb-3 border-b-4 border-accent-red inline-block font-sans">
                We Are Jagdish Estates
              </h2>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
                <p>
                  <strong>JAGDISH INFRAHEIGHTS PRIVATE LIMITED</strong>,
                  incorporated in the year 2012, is a front runner in the
                  Bhubaneswar construction and real estate scene on both the
                  residential and commercial front. We are a company that is
                  solely driven by the lasting principles of commitment to
                  customer satisfaction. Based on a strong second-to-none
                  approach, we have established for Odisha, a solid reputation
                  for exceeding expectations on all fronts.
                </p>
                <p>
                  Elegance of design and a strong commitment to quality form the
                  core principles behind our reputation. We live by our pledge
                  to have your home designed by experts in the field, which
                  leaves no room for compromise.
                </p>
                <p>
                  We ensure that we don't leave any brick unturned to bring you
                  the best returns for your investments. As established builders
                  and property developers, we provide mission transparency,
                  direct developer pricing, and high structural standards.
                </p>
              </div>

              <button
                onClick={() => onNavigate("contact")}
                className="bg-safety-blue text-white hover:bg-caution-yellow hover:text-white px-8 py-3.5 font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer border-0"
              >
                READ MORE
              </button>
            </div>

            {/* Right Column Images */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4 items-center relative">
                {/* Image 2 (Background Layer) */}
                <div className="col-span-7 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-50 relative z-10 transition-transform duration-300 hover:scale-102">
                  <img
                    src="https://arneshconstruction.com/images/about-img-2.jpg"
                    alt="About visual 2"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Image 1 (Foreground Layer) */}
                <div className="col-span-5 -ml-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-20 transition-transform duration-300 hover:scale-105">
                  <img
                    src="https://arneshconstruction.com/images/about-img-1.jpeg"
                    alt="About visual 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS CAROUSEL SECTION */}
      <section
        className="py-16 bg-safety-blue text-white"
        id="projects-section"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold uppercase tracking-wider relative pb-3 inline-block text-white font-sans">
                PROJECTS
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent-red" />
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {["All", "Residential", "Commercial", "Investment"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setActiveProjectIdx(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                    activeFilter.toLowerCase() === cat.toLowerCase()
                      ? "bg-caution-yellow border-caution-yellow text-white shadow-md"
                      : "border-white/10 text-slate-300 hover:text-white hover:border-white/30 bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slide arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrevProject}
                className="w-10 h-10 border border-white/20 hover:border-caution-yellow bg-white/5 hover:text-caution-yellow rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Property"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextProject}
                className="w-10 h-10 border border-white/20 hover:border-caution-yellow bg-white/5 hover:text-caution-yellow rounded-full flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Property"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active project layout details */}
          <div className="bg-slate-900/60 rounded-lg overflow-hidden border border-white/10 shadow-2xl min-h-[420px]">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key={`${activeFilter}-${activeProjectIdx}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Left Column Image */}
                  <div className="lg:col-span-5 h-64 sm:h-80 lg:h-[420px] w-full overflow-hidden relative group">
                    <img
                      src={currentProjectImages[activeImageIdx]}
                      alt={filteredProjects[activeProjectIdx].title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {currentProjectImages.length > 1 && (
                      <>
                        {/* Image Navigation Arrows */}
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <button
                            onClick={handlePrevProjectImage}
                            className="bg-black/40 hover:bg-caution-yellow text-white p-2 m-2 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <button
                            onClick={handleNextProjectImage}
                            className="bg-black/40 hover:bg-caution-yellow text-white p-2 m-2 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                        {/* Image Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {currentProjectImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIdx(idx);
                              }}
                              className={`h-1.5 rounded-full transition-all ${activeImageIdx === idx ? "w-4 bg-caution-yellow" : "w-1.5 bg-white/60"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <span className="absolute top-4 left-4 bg-caution-yellow text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-wider shadow z-10">
                      {filteredProjects[activeProjectIdx].status}
                    </span>
                  </div>

                  {/* Right Column details */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[10px] font-extrabold bg-caution-yellow/20 text-caution-yellow px-2.5 py-1 rounded uppercase tracking-widest border border-caution-yellow/10">
                          {filteredProjects[activeProjectIdx].category}
                        </span>
                        <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                          <MapPin className="w-4 h-4 text-caution-yellow" />
                          {filteredProjects[activeProjectIdx].location}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                        {filteredProjects[activeProjectIdx].title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                        {filteredProjects[activeProjectIdx].description}
                      </p>

                      <div className="border-t border-white/10 pt-4 space-y-2">
                        <h4 className="text-[10px] font-extrabold uppercase text-caution-yellow tracking-wider">
                          Key Property Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {filteredProjects[activeProjectIdx].highlights.map(
                            (h, i) => (
                              <li
                                key={i}
                                className="text-xs text-slate-200 flex items-center gap-2 font-light"
                              >
                                <span className="w-1.5 h-1.5 bg-caution-yellow rounded-full shrink-0" />
                                <span>{h}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                      <div>
                        <span className="text-slate-400 text-[9px] uppercase tracking-wider block font-bold">
                          Built-up Area
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-white">
                          {filteredProjects[activeProjectIdx].area}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[9px] uppercase tracking-wider block font-bold">
                          Project Status
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-white">
                          {filteredProjects[activeProjectIdx].duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="p-12 text-center text-slate-400">
                  No projects found.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        className="py-16 bg-white border-b border-slate-100"
        id="testimonials-section"
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-safety-blue uppercase tracking-wider relative pb-3 inline-block">
              TESTIMONIALS
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent-red" />
            </h2>
          </div>

          <div className="relative min-h-[160px] flex flex-col justify-center">
            <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed font-light max-w-2xl mx-auto">
              &ldquo;{TESTIMONIALS_DATA[activeTestimonialIdx].text}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center font-black text-white text-sm shrink-0 shadow">
              {TESTIMONIALS_DATA[activeTestimonialIdx].avatarChar}
            </div>
            <div className="text-left">
              <h4 className="font-bold text-safety-blue text-sm sm:text-base">
                {TESTIMONIALS_DATA[activeTestimonialIdx].author}
              </h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                {TESTIMONIALS_DATA[activeTestimonialIdx].role},{" "}
                <span className="text-safety-blue">
                  {TESTIMONIALS_DATA[activeTestimonialIdx].company}
                </span>
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-2">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${idx === activeTestimonialIdx ? "bg-caution-yellow w-6" : "bg-gray-200 hover:bg-gray-300"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="bg-safety-blue py-14 px-4 text-center text-white border-t-2 border-caution-yellow"
        id="cta-section"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-wide text-white font-sans">
            We’ll identify your needs and help you find your dream property.
          </h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("quote")}
            className="bg-caution-yellow text-white px-8 py-4 font-bold text-xs tracking-widest rounded-xl hover:bg-white hover:text-safety-blue transition-all uppercase cursor-pointer border-0"
            id="quote-cta-request-btn"
          >
            CALCULATE LOAN & BOOK VISIT
          </motion.button>
        </div>
      </section>



      {/* BOTTOM INFO CARDS */}
      <section className="py-12 bg-white relative z-10" id="bottom-info-cards">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-slate-100 hover:border-accent-red/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shrink-0">
                <Phone className="w-5 h-5 text-accent-red" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  CALL US NOW
                </h4>
                <p className="text-sm font-extrabold text-safety-blue font-sans">
                  +91 9437307086
                </p>
                <p className="text-[10px] text-gray-500 font-light">
                  Monday to Saturday: 8:30 AM - 6:30 PM
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-slate-100 hover:border-caution-yellow/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shrink-0">
                <MapPin className="w-5 h-5 text-caution-yellow" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  COME VISIT US
                </h4>
                <p className="text-sm font-extrabold text-safety-blue font-sans">
                  Plot No-9, Vip colony
                </p>
                <p className="text-[10px] text-gray-500 font-light font-sans">
                  IRC Village, Bhubaneswar, Pin-751015, odisha
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-slate-100 hover:border-accent-red/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shrink-0">
                <Mail className="w-5 h-5 text-accent-red" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  SEND US A MESSAGE
                </h4>
                <p className="text-sm font-extrabold text-safety-blue font-sans">
                  jagdishinfraheights@gmail.com
                </p>
                <p className="text-[10px] text-gray-500 font-light">
                  General questions & inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
