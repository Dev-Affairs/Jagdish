import React from 'react';
import { FaHardHat, FaRegMap, FaIndustry, FaHome, FaPaintRoller, FaThLarge } from 'react-icons/fa';

export default function ServicesGrid() {
  const services = [
    { 
      icon: FaHardHat, 
      title: "Building Construction", 
      desc: "We offer top-quality building construction services, ensuring excellence from planning to execution." 
    },
    { 
      icon: FaRegMap, 
      title: "Road Construction", 
      desc: "Reliable road construction services with a focus on durability, safety, and efficiency." 
    },
    { 
      icon: FaIndustry, 
      title: "Industrial Projects", 
      desc: "Comprehensive industrial construction solutions for factories, plants, and warehouses." 
    },
    { 
      icon: FaHome, 
      title: "Residential Projects", 
      desc: "Expert solutions for constructing residential buildings with modern designs and sustainable techniques." 
    },
    { 
      icon: FaPaintRoller, 
      title: "Bridge Construction", 
      desc: "High-quality bridge construction services ensuring structural integrity and safe passage." 
    },
    { 
      icon: FaThLarge, 
      title: "Maintenance Services", 
      desc: "Comprehensive maintenance and repair services to ensure long-lasting performance and safety." 
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mb-4 tracking-tight">
            SERVICES
          </h2>
          <div className="w-10 sm:w-12 h-1 bg-[#FFC107] mx-auto rounded-none"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((srv, idx) => (
            <div key={idx} className="flex flex-row items-start gap-6 group transition-transform duration-500 hover:-translate-y-1.5 cursor-pointer">
              
              {/* Icon Left */}
              <div className="text-slate-400 text-5xl sm:text-6xl flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-[#FFC107]">
                <srv.icon />
              </div>
              
              {/* Content Right */}
              <div className="flex flex-col">
                <h3 className="text-[17px] sm:text-lg font-bold text-black mb-3 leading-snug">
                  {srv.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#FFC107] mb-4"></div>
                
                <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed mb-6">
                  {srv.desc}
                </p>
                
                <a 
                  href="#" 
                  className="text-[#FFC107] font-bold text-xs uppercase tracking-wider inline-flex items-center hover:text-[#e0a800] transition-colors"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
