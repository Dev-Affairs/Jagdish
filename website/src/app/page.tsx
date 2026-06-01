"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X, Check, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import HomeView from '../components/HomeView';

export default function Home() {
  const router = useRouter();
  const [isQuickContactOpen, setIsQuickContactOpen] = useState<boolean>(false);
  
  // Quick contact form state
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) {
      alert('Please fill out all fields.');
      return;
    }
    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickName('');
      setQuickPhone('');
      setIsQuickContactOpen(false);
    }, 2500);
  };

  return (
    <>
      <HomeView 
        onNavigate={(tab) => {
          if (tab === 'home') router.push('/');
          else router.push(`/${tab}`);
        }} 
        onOpenQuickContact={() => setIsQuickContactOpen(true)}
      />

      {/* QUICK FLOATING CONTACT MODAL DIALOG */}
      <AnimatePresence>
        {isQuickContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Blur Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickContactOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white p-6 md:p-8 rounded-lg max-w-sm w-full shadow-2xl border border-gray-100 text-center text-slate-800"
            >
              
              <button 
                onClick={() => setIsQuickContactOpen(false)}
                className="absolute right-3.5 top-3.5 p-1 text-gray-400 hover:text-gray-600 rounded cursor-pointer bg-transparent border-0"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 bg-caution-yellow/20 text-[#18181b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-caution-yellow" />
              </div>

              <h3 className="text-lg font-bold text-[#18181b] mb-1">Quick Call Request</h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Provide your details below to request an immediate call back from our engineering coordinators.
              </p>

              <form onSubmit={handleQuickContactSubmit} className="space-y-3.5 text-left">
                
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    required
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="e.g. Sabyasachi Mohanty"
                    className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-2.5 text-gray-700 focus:outline-none focus:border-[#18181b] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="e.g. +91 9178 XXXXXX"
                    className="w-full text-xs bg-slate-50 border border-gray-200 rounded p-2.5 text-gray-700 focus:outline-none focus:border-[#18181b] focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {quickSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-green-50 text-green-700 p-2.5 text-center text-xs font-bold rounded flex items-center justify-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        SUBMITTED! TALK TO YOU SOON.
                      </motion.div>
                    ) : (
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="bg-[#18181b] text-white w-full py-3 font-bold text-xs uppercase tracking-widest rounded hover:bg-caution-yellow hover:text-[#18181b] transition-all shadow cursor-pointer flex items-center justify-center gap-1.5 border-0"
                      >
                        <Send className="w-3.5 h-3.5" />
                        SUBMIT CALL REQUEST
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

              </form>

            </motion.div>
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
