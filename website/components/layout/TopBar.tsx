import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="hidden lg:block absolute top-0 left-0 w-full z-50 bg-transparent text-slate-200 text-[12px] font-medium py-2.5 border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-300 italic">
          <span>Plot No - 9, VIP Area, IRC Village, Bhubaneswar</span>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4 text-slate-300 pr-6">
            <li>
              <Link href="/contact" className="hover:text-[#FFC107] transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px] font-medium">
                Give Feedback
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFC107] transition-colors cursor-pointer bg-transparent border-0 p-0 text-[11px] font-medium">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 text-slate-300">
            <FaFacebookF className="hover:text-[#FFC107] cursor-pointer transition-colors duration-200 text-[13px]" />
            <FaTwitter className="hover:text-[#FFC107] cursor-pointer transition-colors duration-200 text-[13px]" />
            <FaInstagram className="hover:text-[#FFC107] cursor-pointer transition-colors duration-200 text-[13px]" />
            <FaPinterestP className="hover:text-[#FFC107] cursor-pointer transition-colors duration-200 text-[13px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
