import React from 'react';

export default function ServicesCards() {
  return (
    <section className="relative z-20 bg-[#FFC107] pt-[1px] pb-10 sm:pb-0" id="services-section">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 -mt-40 sm:-mt-48 lg:-mt-56 relative z-30">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight drop-shadow-lg">PROJECTS</h2>
          <div className="w-12 h-1 bg-[#FFC107] mt-3 mx-auto sm:mx-0"></div>
        </div>
        <div className="bg-white shadow-2xl flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:divide-x-2 divide-gray-300 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {/* Column 1: Project 1 */}
          <div className="relative flex-none w-[90%] sm:w-[75%] md:w-auto flex flex-col p-4 sm:p-6 group bg-white snap-center border-r-2 md:border-r-0 border-gray-300">
            <div className="w-full h-64 sm:h-80 md:h-[350px] overflow-hidden relative shadow-inner">
               <img 
                 src="/projects/project_1.jpeg" 
                 alt="Royal Heritage Residency" 
                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
               />
            </div>
          </div>
          
          {/* Column 2: Project 2 */}
          <div className="relative flex-none w-[90%] sm:w-[75%] md:w-auto flex flex-col p-4 sm:p-6 group bg-white snap-center border-r-2 md:border-r-0 border-gray-300">
            <div className="w-full h-64 sm:h-80 md:h-[350px] overflow-hidden relative shadow-inner">
               <img 
                 src="/projects/project_2.jpeg" 
                 alt="Urban Skyline Plaza" 
                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
               />
            </div>
          </div>
          
          {/* Column 3: Project 3 */}
          <div className="relative flex-none w-[90%] sm:w-[75%] md:w-auto flex flex-col p-4 sm:p-6 group bg-white snap-center border-r-2 md:border-r-0 border-gray-300 border-none">
            <div className="w-full h-64 sm:h-80 md:h-[350px] overflow-hidden relative shadow-inner">
               <img 
                 src="/projects/project_3.jpeg" 
                 alt="Greenwood Estates" 
                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
               />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
