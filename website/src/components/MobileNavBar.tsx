"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home as HomeIcon, Building2, Briefcase, Mail } from 'lucide-react';

export default function MobileNavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 w-full z-45 bg-[#18181b] border-t-2 border-caution-yellow flex justify-around items-center h-20 pb-2 shadow-2xl lg:hidden">
      
      <Link
        href="/"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border-0 ${
          isActive('/') ? 'scale-100 shadow px-4 py-1.5' : 'hover:text-white'
        }`}
        style={{
          backgroundColor: isActive('/') ? '#ffffff' : 'transparent',
          color: isActive('/') ? '#000000' : 'rgba(255,255,255,0.8)'
        }}
      >
        <HomeIcon className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Home</span>
      </Link>

      <Link
        href="/projects"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border-0 ${
          isActive('/projects') ? 'scale-100 shadow px-4 py-1.5' : 'hover:text-white'
        }`}
        style={{
          backgroundColor: isActive('/projects') ? '#ffffff' : 'transparent',
          color: isActive('/projects') ? '#000000' : 'rgba(255,255,255,0.8)'
        }}
      >
        <Building2 className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Projects</span>
      </Link>

      <Link
        href="/about"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border-0 ${
          isActive('/about') ? 'scale-100 shadow px-4 py-1.5' : 'hover:text-white'
        }`}
        style={{
          backgroundColor: isActive('/about') ? '#ffffff' : 'transparent',
          color: isActive('/about') ? '#000000' : 'rgba(255,255,255,0.8)'
        }}
      >
        <Briefcase className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">About</span>
      </Link>

      <Link
        href="/contact"
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border-0 ${
          isActive('/contact') ? 'scale-100 shadow px-4 py-1.5' : 'hover:text-white'
        }`}
        style={{
          backgroundColor: isActive('/contact') ? '#ffffff' : 'transparent',
          color: isActive('/contact') ? '#000000' : 'rgba(255,255,255,0.8)'
        }}
      >
        <Mail className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Contact</span>
      </Link>

    </nav>
  );
}
