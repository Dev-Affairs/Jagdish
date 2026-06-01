"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  Building2, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const images = project.images || [project.image];
  const [activeImg, setActiveImg] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev + 1) % images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      layout="position"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg overflow-hidden border transition-all duration-300 border-gray-100 shadow-sm hover:border-safety-blue hover:shadow-md hover:-translate-y-1`}
    >
      
      {/* Photo Header */}
      <div className="relative h-56 sm:h-64 overflow-hidden group">
        <img 
          src={images[activeImg]} 
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-300"
          referrerPolicy="no-referrer"
        />
        
        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevImg}
                className="bg-black/40 hover:bg-caution-yellow text-white p-1.5 m-2 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextImg}
                className="bg-black/40 hover:bg-caution-yellow text-white p-1.5 m-2 rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveImg(idx); }}
                  className={`h-1 rounded-full transition-all ${activeImg === idx ? 'w-3 bg-caution-yellow' : 'w-1 bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Status Overlay Badge */}
        <div className="absolute top-4 left-4 bg-safety-blue/90 text-white font-bold text-[10px] tracking-widest px-2.5 py-1 rounded uppercase border border-white/15">
          {project.status}
        </div>

        {/* Category Tag bottom layout overlay */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-deep-navy to-safety-blue text-white font-bold text-[10px] tracking-wider px-2.5 py-1 rounded uppercase border border-white/10 z-10">
          {project.category}
        </div>
      </div>

      {/* Info block */}
      <div className="p-6">
        
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-caution-yellow" />
          <span className="font-medium">{project.location}</span>
        </div>

        <h3 className="text-lg font-bold text-safety-blue mb-2 hover:text-caution-yellow transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <button 
          onClick={onViewDetails}
          className="w-full mt-2 py-2 flex items-center justify-center gap-1.5 text-xs font-bold text-safety-blue border border-safety-blue/20 rounded hover:bg-safety-blue hover:text-white transition-all duration-300"
        >
          View Floorplans & Details
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ProjectsView({ 
  onNavigateToEstimate,
  onViewDetails
}: { 
  onNavigateToEstimate: () => void;
  onViewDetails: (projectId: string) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  let initialStatus = 'All';
  if (pathname === '/projects/completed') initialStatus = 'Completed';
  if (pathname === '/projects/ongoing') initialStatus = 'On Going';

  const [selectedStatus, setSelectedStatus] = useState<string>(initialStatus);

  useEffect(() => {
    if (pathname === '/projects/completed') {
      setSelectedStatus('Completed');
    } else if (pathname === '/projects/ongoing') {
      setSelectedStatus('On Going');
    } else {
      setSelectedStatus('All');
    }
  }, [pathname]);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    if (status === 'Completed') {
      router.push('/projects/completed', { scroll: false });
    } else if (status === 'On Going') {
      router.push('/projects/ongoing', { scroll: false });
    } else {
      router.push('/projects', { scroll: false });
    }
  };

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    return selectedStatus === 'All' || project.status === selectedStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Header Introduction */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-semibold text-xs text-safety-blue tracking-[0.2em] uppercase mb-2 block">
          PORTFOLIO SHOWCASE
        </span>
        <h2 className="text-3xl font-extrabold text-safety-blue">
          Our Landmark Projects
        </h2>
        <div className="w-16 h-1 bg-accent-red mx-auto mt-4" />
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Examine our historic and active municipal contract deliveries across Odisha. Every asset represents a testament to architectural durability, safety parameters, and expert engineering craftsmanship.
        </p>
      </div>

      {/* SEARCH AND FILTERING PANEL */}
      <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-10">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mr-2">
            Filter by Status:
          </span>
          {['All', 'Completed', 'On Going'].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`text-[11px] font-bold px-3 py-1.5 rounded transition-all cursor-pointer ${
                selectedStatus === status 
                  ? 'bg-safety-blue text-white shadow-sm' 
                  : 'bg-slate-100 hover:bg-slate-200 text-gray-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* RESULTS DISPLAY */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 border border-dashed border-gray-200 rounded-lg">
          <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-bounce" />
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest">No Projects Found</h4>
          <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
            Try selecting a different status to find additional project listings.
          </p>
          <button 
            onClick={() => setSelectedStatus('All')}
            className="mt-6 text-xs bg-safety-blue text-white px-5 py-2.5 rounded font-bold hover:bg-caution-yellow hover:text-structural-gray transition-colors cursor-pointer"
          >
            Clear Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onViewDetails={() => onViewDetails(project.id)}
              />
            ))}
        </div>
      )}

      {/* Trust banner underneath projects */}
      <div className="mt-16 bg-gradient-to-r from-deep-navy to-safety-blue rounded-2xl p-8 text-white relative overflow-hidden border border-white/10 shadow-lg">
        <div className="max-w-xl relative z-10">
          <h3 className="text-xl font-bold text-caution-yellow mb-2 font-sans">Looking for a custom project investment plan?</h3>
          <p className="text-xs text-slate-200 leading-relaxed mb-6">
            Our development team offers comprehensive assistance covering site visits, developer-direct pricing, legal title clearance, and RERA compliance documentation.
          </p>
          <button 
            onClick={onNavigateToEstimate}
            className="bg-caution-yellow text-structural-gray px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-safety-blue transition-colors cursor-pointer border-0"
          >
            Launch Mortgage Engine
          </button>
        </div>
        <div className="absolute right-0 bottom-0 top-0 opacity-10 hidden md:block">
          <Building2 className="w-72 h-72 translate-y-10 translate-x-10 text-white" />
        </div>
      </div>

    </div>
  );
}
