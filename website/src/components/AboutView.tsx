"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  Target,
  ChevronRight
} from 'lucide-react';

export default function AboutView() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Header Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-semibold text-xs text-safety-blue tracking-[0.2em] uppercase mb-2 block">
          OUR FOUNDATION
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-safety-blue">
          Redefining Urban Landscapes
        </h2>
        <div className="w-20 h-1.5 bg-caution-yellow mx-auto mt-6 rounded-full" />
        <p className="text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
          Jagdish Estates (under Jagdish Infraheights Pvt. Ltd.) is an esteemed, RERA-licensed builder, developer, and infrastructure owner. We specialize in developing luxury residential complexes, building Grade-A commercial leasing assets, and crafting title-cleared community layouts across Odisha.
        </p>
      </div>

      {/* Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full aspect-[4/3] sm:aspect-video md:aspect-[21/7] rounded-2xl overflow-hidden mb-20 relative group"
      >
        <img 
          src="https://arneshconstruction.com/images/b1.jpg" 
          alt="Jagdish Infraheights Team" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-safety-blue/80 via-transparent to-transparent flex items-end p-8">
          <div className="text-white max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Building Trust Since Inception</h3>
            <p className="text-sm text-slate-200">A legacy of architectural durability, safety parameters, and expert engineering craftsmanship.</p>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-caution-yellow/30 transition-colors">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="w-32 h-32 text-safety-blue" />
          </div>
          <h3 className="text-xl font-bold text-safety-blue mb-4 relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-caution-yellow/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-caution-yellow" />
            </div>
            Our Mission
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed relative z-10">
            To deliver world-class residential and commercial spaces that elevate the standard of living and business operations. We strive to integrate innovative design, sustainable building practices, and uncompromising quality in every project we undertake.
          </p>
        </div>

        <div className="bg-safety-blue text-white p-8 md:p-10 rounded-2xl border border-safety-blue relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-32 h-32 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Users className="w-5 h-5 text-caution-yellow" />
            </div>
            Our Vision
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed relative z-10">
            To be the most trusted and sought-after real estate developer in Odisha, recognized for our commitment to excellence, transparency, and timely delivery. We aim to shape communities that foster growth, happiness, and prosperity for generations to come.
          </p>
        </div>
      </div>

      {/* Core Pillars Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-safety-blue mb-4">Our Core Pillars</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">The foundational values that drive our daily operations and ensure our continued success in the competitive real estate market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-caution-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-7 h-7 text-caution-yellow" />
            </div>
            <h4 className="text-lg font-bold text-safety-blue mb-3">Engineering Rigor</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We mandate TMT-550D rebar and M-class concrete grade audits. Our structural integrity checks are stringent, ensuring every building stands the test of time and environmental factors.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-safety-blue/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-7 h-7 text-safety-blue" />
            </div>
            <h4 className="text-lg font-bold text-safety-blue mb-3">Odisha Pride</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Deeply rooted in the local culture, we are proud to employ over 200 local laborers, skilled tradesmen, and technical designers, contributing significantly to the regional economy.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
          >
            <div className="w-14 h-14 bg-caution-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-caution-yellow" />
            </div>
            <h4 className="text-lg font-bold text-safety-blue mb-3">Punctual Delivery</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Time is money. We pride ourselves on completing 95% of our sites inside or ahead of original timeline estimates, ensuring our clients can move in or start operations without delay.
            </p>
          </motion.div>
        </div>
      </div>

      {/* RERA and Compliance Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
          <div className="bg-white p-3 rounded shadow-sm border border-gray-100">
            <Building2 className="w-8 h-8 text-safety-blue" />
          </div>
          <div>
            <h4 className="font-bold text-safety-blue text-sm uppercase tracking-wide">Fully RERA Compliant</h4>
            <p className="text-xs text-gray-500 mt-1">Registration No: PR/154293A | 100% Legal Title Clearance</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-full lg:w-auto">
          <div className="text-right">
            <span className="block text-2xl font-extrabold text-caution-yellow">500+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Happy Families</span>
          </div>
          <div className="w-px bg-gray-200 h-10 my-auto" />
          <div className="text-left">
            <span className="block text-2xl font-extrabold text-safety-blue">15+</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years Experience</span>
          </div>
        </div>
      </div>

    </div>
  );
}
