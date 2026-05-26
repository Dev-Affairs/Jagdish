import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

export default function PreFooter() {
  return (
    <section className="bg-[#FFC107] py-10 sm:py-16">
      <div className="container mx-auto max-w-[1400px] px-8 sm:px-16 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Call Us */}
          <div className="relative flex flex-col items-start justify-center p-4 group overflow-hidden">
             {/* Huge Faint Background Icon */}
             <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-black/10 text-[100px] pointer-events-none z-0">
               <FiPhone />
             </div>
             
             <div className="relative z-10 pl-16">
               <h4 className="font-bold text-[#111827] text-lg sm:text-xl mb-2">CALL US NOW</h4>
               <p className="text-[#111827]/80 text-sm sm:text-base">Mobile: +91 9338307086<br/> / 9437307086</p>
             </div>
          </div>

          {/* Box 2: Visit Us */}
          <div className="relative flex flex-col items-start justify-center p-4 group overflow-hidden">
             <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-black/10 text-[100px] pointer-events-none z-0">
               <FiMapPin />
             </div>
             
             <div className="relative z-10 pl-16">
               <h4 className="font-bold text-[#111827] text-lg sm:text-xl mb-2">COME VISIT US</h4>
               <p className="text-[#111827]/80 text-sm sm:text-base">Plot No-9, VIP Area, IRC Village, Bhubaneswar</p>
             </div>
          </div>

          {/* Box 3: Message Us */}
          <div className="relative flex flex-col items-start justify-center p-4 group overflow-hidden">
             <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-black/10 text-[100px] pointer-events-none z-0">
               <FiMail />
             </div>
             
             <div className="relative z-10 pl-16">
               <h4 className="font-bold text-[#111827] text-lg sm:text-xl mb-2">SEND US A MESSAGE</h4>
               <p className="text-[#111827]/80 text-sm sm:text-base">General: jagdishinfraheights<br/>@gmail.com</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
