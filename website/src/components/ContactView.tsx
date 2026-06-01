"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Building2, 
  Globe2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface OfficeBranch {
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coords: { x: number; y: number };
  staffCount: number;
}

export default function ContactView() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [projectCategory, setProjectCategory] = useState<string>('Residential Property');
  const [message, setMessage] = useState<string>('');
  
  // UI Success state
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [selectedBranchIdx, setSelectedBranchIdx] = useState<number>(0);

  const branches: OfficeBranch[] = [
    {
      city: 'Bhubaneswar',
      name: 'Corporate Headquarters Office',
      address: 'Plot No-9, Vip colony, IRC Village, Bhubaneswar, Pin-751015, odisha',
      phone: '+91 - 9437307086',
      email: 'jagdishinfraheights@gmail.com',
      coords: { x: 45, y: 55 },
      staffCount: 35
    },
    {
      city: 'Cuttack',
      name: 'Grandeur Business Plaza Site Office',
      address: 'Near Link Road, Cuttack, Odisha - 753012',
      phone: '+91 - 9437307086',
      email: 'cuttack@jagdishinfraheights.com',
      coords: { x: 50, y: 48 },
      staffCount: 12
    },
    {
      city: 'Puri',
      name: 'Jagdish Horizon Villas Site Office',
      address: 'Marine Drive Coastal Layout, Puri, Odisha - 752002',
      phone: '+91 - 9437307086',
      email: 'puri@jagdishinfraheights.com',
      coords: { x: 55, y: 72 },
      staffCount: 15
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    // Save Inquiry info to localStorage so client can inspect submissions in debug console if needed
    const savedInquiries = JSON.parse(localStorage.getItem('jagdish_user_inquiries') || '[]');
    const newInquiry = {
      id: 'MSG-' + Date.now(),
      name,
      email,
      phone,
      projectCategory,
      message,
      date: new Date().toLocaleDateString()
    };
    localStorage.setItem('jagdish_user_inquiries', JSON.stringify([newInquiry, ...savedInquiries]));

    setIsSuccess(true);
    
    // Reset form after 2.5s
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      
      {/* Header Introduction */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-semibold text-xs text-safety-blue tracking-[0.2em] uppercase mb-2 block">
          COMMUNICATION HUB
        </span>
        <h2 className="text-3xl font-extrabold text-safety-blue">
          Contact Us / Inquiry Portal
        </h2>
        <div className="w-16 h-1 bg-accent-red mx-auto mt-4" />
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Have an upcoming infrastructure layout project, highway widening bid, or luxury housing development query? Reach our dedicated engineers now.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Inquiry form - 7 Cols */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
          
          <h3 className="text-lg font-bold text-safety-blue flex items-center gap-2 mb-6 border-b border-gray-100 pb-3">
            <MessageSquare className="w-5 h-5 text-accent-red" />
            Send a Secure Corporate Inquiry
          </h3>

          <form onSubmit={handleSendMessage} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Your Full Name *
                </label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Priyabrata Samantaray"
                  className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-3 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue focus:bg-white transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Active Contact Number *
                </label>
                <input 
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 70085 33166"
                  className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-3 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Your Email Address *
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. client@company.com"
                className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-3 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue focus:bg-white transition-all font-medium"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Property Category / Interest
              </label>
              <select 
                value={projectCategory}
                onChange={(e) => setProjectCategory(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-3 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue focus:bg-white transition-all font-semibold"
              >
                <option value="Residential Villa">Premium Residential Villa / Apartment</option>
                <option value="Commercial Lease">Grade-A Commercial Space Leasing</option>
                <option value="Property Investment">Investment Plots &amp; Strategic Lands</option>
                <option value="Property Advisory">Real Estate Portfolio Advisory</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                Detailed Inquiry / Custom Requirements *
              </label>
              <textarea 
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please outline your land coordinates, square footage goals, requested timelines, or specific bidding parameters..."
                className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-3 text-gray-700 focus:outline-none focus:border-safety-blue focus:ring-1 focus:ring-safety-blue focus:bg-white transition-all font-medium"
              />
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-100 text-green-700 p-4 rounded text-xs text-center font-bold flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    INQUIRY SENT SECURELY! OUR ENGINEERING DESK WILL CALL YOU BACK.
                  </motion.div>
                ) : (
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="bg-safety-blue text-white w-full py-4 font-bold text-xs tracking-widest rounded hover:bg-caution-yellow hover:text-white transition-colors uppercase shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    TRANSMIT INQUIRY TO JAGDISH INFRAHEIGHTS
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

          </form>

        </div>

        {/* Office details & simulator - 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Quick details contact and physical office */}
          <div className="bg-[#18181b] text-white p-6 md:p-8 rounded-lg border border-white/10 shadow-xl">
            
            <h3 className="text-sm font-bold text-accent-red uppercase tracking-widest mb-6 block border-b border-white/10 pb-3">
              Corporate Office Coordinates
            </h3>

            <div className="space-y-6 text-xs">
              
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-caution-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-white">Office Address</h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    Plot No-9, Vip colony,<br />
                    IRC Village, Bhubaneswar, Pin-751015, odisha
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-white">Direct Hotlines</h4>
                  <p className="text-slate-300 font-bold text-sm tracking-wide">
                    +91 - 9437307086
                  </p>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    (Inquiries & Direct Developer Sales Desk)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-caution-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-white">Email Communications</h4>
                  <p className="text-slate-300 font-medium">
                    jagdishinfraheights@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1 text-white">Workplace Timetable</h4>
                  <p className="text-slate-300 font-medium leading-relaxed font-light">
                    Monday - Saturday: 09:00 AM - 06:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Map branch simulator */}
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm space-y-4">
            
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-safety-blue uppercase tracking-wider">
                Odisha Regional Branch Offices
              </h4>
              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-safety-blue" />
                Active Staff: {branches.reduce((acc, b) => acc + b.staffCount, 0)}
              </span>
            </div>

            {/* Embedded Google Map Panel */}
            <div className="aspect-[16/10] rounded border border-gray-100 relative overflow-hidden shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=Plot+No+-+9,+VIP+Area,+IRC+Village,+Bhubaneswar,+Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Jagdish Infraheights Corporate Office Map"
              />
            </div>

            {/* Currently selected Branch Information */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedBranchIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="bg-slate-50 p-4 rounded border border-gray-200 text-xs text-gray-700"
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-bold text-safety-blue block">{branches[selectedBranchIdx].name}</span>
                  <span className="bg-caution-yellow/20 text-safety-blue font-bold px-2 py-0.5 rounded text-[9px] uppercase">
                    {branches[selectedBranchIdx].city}
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 mb-2 leading-relaxed">{branches[selectedBranchIdx].address}</p>
                <div className="flex justify-between pt-2 border-t border-gray-100 text-[10px] text-gray-400">
                  <span>Hotline: {branches[selectedBranchIdx].phone}</span>
                  <span>Yard Staff: {branches[selectedBranchIdx].staffCount}</span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>
  );
}
