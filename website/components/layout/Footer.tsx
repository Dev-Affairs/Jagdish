"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FiClock, FiMail, FiChevronUp } from 'react-icons/fi';
import PreFooter from './PreFooter';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PreFooter />
      <footer className="bg-[#0f172a] text-gray-200 pt-16 pb-6 relative">
        <div className="container mx-auto max-w-[1400px] px-8 sm:px-16 md:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Col 1: Logo & About */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <img src="/logo/logo-Rs.png" alt="Jagdish Infra Heights Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-none">JAGDISH INFRA HEIGHTS</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/80 tracking-widest uppercase leading-none mt-1"><span className="opacity-80">Pvt. Ltd.</span></span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Jagdish Infra Heights Pvt. Ltd. is a premier construction company providing quality building solutions. Our expertise lies in delivering top-notch contracting, consulting, and renovation services.
              </p>
              <div className="flex gap-3">
                <div className="bg-[#1e293b] p-2.5 hover:bg-[#FFC107] hover:text-[#0f172a] transition-colors cursor-pointer rounded-full text-sm text-white"><FaFacebookF /></div>
                <div className="bg-[#1e293b] p-2.5 hover:bg-[#FFC107] hover:text-[#0f172a] transition-colors cursor-pointer rounded-full text-sm text-white"><FaTwitter /></div>
                <div className="bg-[#1e293b] p-2.5 hover:bg-[#FFC107] hover:text-[#0f172a] transition-colors cursor-pointer rounded-full text-sm text-white"><FaInstagram /></div>
                <div className="bg-[#1e293b] p-2.5 hover:bg-[#FFC107] hover:text-[#0f172a] transition-colors cursor-pointer rounded-full text-sm text-white"><FaPinterestP /></div>
              </div>
            </div>

            {/* Col 2: Recent Post */}
            <div>
              <h4 className="text-white text-xl font-bold mb-3 tracking-tight">Recent Post</h4>
              <div className="w-10 h-[3px] bg-[#FFC107] mb-6"></div>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <h5 className="text-sm text-slate-300 group-hover:text-[#FFC107] transition-colors leading-relaxed mb-2">Latest Construction Trends in 2025</h5>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5"><FiClock className="text-xs"/> March 16, 2025</p>
                </div>
                <div className="group cursor-pointer">
                  <h5 className="text-sm text-slate-300 group-hover:text-[#FFC107] transition-colors leading-relaxed mb-2">Innovative Renovation Ideas for Modern Homes</h5>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5"><FiClock className="text-xs"/> March 10, 2025</p>
                </div>
              </div>
            </div>

            {/* Col 3: Subscribe */}
            <div>
              <h4 className="text-white text-xl font-bold mb-3 tracking-tight">Subscribe</h4>
              <div className="w-10 h-[3px] bg-[#FFC107] mb-6"></div>
              
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Subscribe to our newsletter for the latest updates and offers from Jagdish Infra Heights Pvt. Ltd.
              </p>
              
              <div className="flex rounded-sm overflow-hidden mb-4">
                <input type="email" placeholder="Enter your email" className="bg-white text-black px-4 py-3 w-full outline-none text-sm placeholder-slate-400" />
                <button className="bg-[#FFC107] text-[#0f172a] px-4 py-3 hover:bg-white transition-colors flex-shrink-0 flex items-center justify-center">
                   <FiMail className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-slate-400">Get the latest updates and offers.</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <p>© 2025 Jagdish Infra Heights Pvt. Ltd. - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
