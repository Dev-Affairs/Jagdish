"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.766.213 2.47.483.73.28 1.392.686 1.947 1.24.55.556.963 1.22 1.24 1.95.27.7.435 1.44.48 2.479.045 1 .054 1.355.054 3.795 0 2.43-.01 2.78-.054 3.792-.047 1.03-.213 1.766-.48 2.47-.28.73-.686 1.392-1.24 1.947-.556.55-1.22.963-1.95 1.24-.7.27-1.44.435-2.479.48-1 .045-1.355.054-3.795.054-2.43 0-2.78-.01-3.792-.054-1.03-.047-1.766-.213-2.47-.48-.73-.28-1.392-.686-1.947-1.24-.55-.556-.963-1.22-1.24-1.95-.27-.7-.435-1.44-.48-2.479C2 14.812 2 14.458 2 12.02c0-2.43.01-2.784.056-3.796.047-1.03.213-1.766.483-2.47.28-.73.686-1.392 1.24-1.947.556-.55 1.22-.963 1.95-1.24.7-.27 1.44-.435 2.479-.481 1-.045 1.355-.054 3.795-.054zM12 5.765c-3.46 0-6.235 2.775-6.235 6.235s2.775 6.235 6.235 6.235 6.235-2.775 6.235-6.235S15.46 5.765 12 5.765zm0 10.37c-2.283 0-4.135-1.852-4.135-4.135S9.717 7.895 12 7.895s4.135 1.852 4.135 4.135-1.852 4.135-4.135 4.135zm5.022-10.45a1.107 1.107 0 100 2.215 1.107 1.107 0 000-2.215z" clipRule="evenodd" />
  </svg>
);

const Pinterest = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-safety-blue text-white text-xs border-t-4 border-caution-yellow flex flex-col gap-6 px-4 md:px-8 py-16 pb-28 md:pb-16 font-sans">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider relative pb-2">
            Quick Links
            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-caution-yellow" />
          </h4>
          <ul className="space-y-2 text-slate-100 font-light">
            <li>
              <Link href="/" className="hover:text-caution-yellow transition-colors cursor-pointer bg-transparent border-0 p-0 text-left font-light block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-caution-yellow transition-colors cursor-pointer bg-transparent border-0 p-0 text-left font-light block">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-caution-yellow transition-colors cursor-pointer bg-transparent border-0 p-0 text-left font-light block">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-caution-yellow transition-colors cursor-pointer bg-transparent border-0 p-0 text-left font-light block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: You Can Find Us */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider relative pb-2">
            You Can Find Us
            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-caution-yellow" />
          </h4>
          <p className="text-slate-100 text-xs font-light">
            Follow our developments and connect with our relationship managers on social media.
          </p>
          <div className="flex items-center gap-3 text-white pt-1">
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-caution-yellow rounded flex items-center justify-center transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-caution-yellow rounded flex items-center justify-center transition-all"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-caution-yellow rounded flex items-center justify-center transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-white/10 hover:bg-caution-yellow rounded flex items-center justify-center transition-all"><Pinterest className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider relative pb-2">
            Get In Touch
            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-caution-yellow" />
          </h4>
          <div className="space-y-2 text-slate-100 font-light leading-relaxed">
            <p className="font-extrabold text-white text-xs uppercase tracking-tight">
              JAGDISH INFRAHEIGHTS PVT. LTD.
            </p>
            <p>
              Plot No-9, Vip colony,<br />
              IRC Village, Bhubaneswar,<br />
              Pin-751015, Odisha.
            </p>
            <p className="font-medium pt-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-caution-yellow shrink-0" />
              Mob: +91 - 9338307086 / 9437307086
            </p>
            <p className="font-medium flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-caution-yellow shrink-0" />
              jagdishinfraheights@gmail.com
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-[11px]">
        <p>© 2026 Jagdish Infraheights Pvt. Ltd. - All Rights Reserved</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-caution-yellow transition-colors font-medium">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-caution-yellow transition-colors font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
