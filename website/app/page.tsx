import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesCards from '@/components/home/ServicesCards';
import AboutSection from '@/components/home/AboutSection';

import Testimonials from '@/components/home/Testimonials';
import Clientele from '@/components/home/Clientele';

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <ServicesCards />
      <AboutSection />

      <Testimonials />
      <Clientele />
      <Footer />
    </div>
  );
}
