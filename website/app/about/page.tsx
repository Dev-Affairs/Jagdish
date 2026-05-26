"use client";

import React, { useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronRight, FiCheckCircle, FiPlay, FiStar, FiSend, FiHeart, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaHardHat, FaShieldAlt, FaAward } from 'react-icons/fa';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-elem", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });

      // Stats Animation
      const statNumbers = gsap.utils.toArray('.stat-number') as HTMLElement[];
      statNumbers.forEach((stat) => {
        const target = parseFloat(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          innerHTML: target,
          duration: 2.5,
          ease: "power3.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <main className="flex-grow">

        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-image/hero-image-02.jpg"
              alt="About Background"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#0f172a]/60"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <h1 className="hero-elem text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              About Us
            </h1>
            <div className="hero-elem text-white font-bold tracking-wide text-sm md:text-lg drop-shadow-md">
              Home / About Us
            </div>
          </div>
        </section>

        {/* We Are Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full bg-[#FFC107] -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Engineers looking at blueprints"
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">We Are Jagadish Infra Heights</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  JAGDISH INFRAHEIGHTS PRIVATE LIMITED, incorporated in the year 2012, is a front runner in the Bhubaneswar construction scene on both the residential and commercial front. We are a company that is solely driven by the lasting principles of commitment to customer satisfaction. Based on a strong second-to-none approach, we have established for Odisha, a solid reputation over the last couple of years for exceeding customer expectations on all fronts.
                  <br/><br/>
                  Elegance of design and a strong commitment to quality forms the core principles behind our reputation in this industry. A continuous benchmarking process and a passion for constant innovation have helped us lead from the front on all facets of the industry.
                  <br/><br/>
                  We live by our pledge to have your home designed by experts in the field which leaves no room for compromise. We ensure that we don't leave any brick unturned to bring you the best returns for your investments. All these years of our high performance work culture and dedicated service have earned us credentials from various organisations which acknowledged our quality of work and commitment towards delivery. Besides, JAGDISH INFRAHEIGHTS is a member of these organisations which provide professional guidance to builders, property developers etc for mission transperancy and improvisations of standards and services.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Building residential and commercial construction projects.",
                    "Ensuring high-quality standards in every detail.",
                    "Dedicated to on-time project completion and client satisfaction.",
                    "Innovative solutions tailored to unique project needs.",
                    "Commitment to safety and excellence."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <FiChevronRight className="text-[#FFC107] text-xl flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-block bg-[#FFC107] text-[#0f172a] font-bold px-8 py-3.5 hover:bg-[#e0a800] transition-colors shadow-md">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex gap-4">
                <div className="text-[#FFC107] text-3xl flex-shrink-0">
                  <FiStar />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">Our vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be a leading construction company in India by consistently delivering high-quality projects and innovative solutions, while contributing to the growth of our communities and building a better future.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#FFC107] text-3xl flex-shrink-0">
                  <FiSend />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To provide high-quality construction and engineering services prioritizing safety, quality, and communication, ensuring client satisfaction through timely project delivery and excellence in execution.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#FFC107] text-3xl flex-shrink-0">
                  <FiHeart />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">Our values</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Innovation, accountability, integrity, safety and client satisfaction. Building strong relationships with our clients and stakeholders based on trust, transparency, and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#FFC107]" ref={statsRef}>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#e0a800]">
              <div className="text-center px-4 flex items-center justify-center gap-3">
                <span className="text-5xl md:text-6xl font-bold text-[#0f172a] stat-number" data-target="3">0</span>
                <span className="text-sm font-medium text-[#0f172a] text-left leading-tight">Offices<br />Across Odisha</span>
              </div>
              <div className="text-center px-4 flex items-center justify-center gap-3">
                <span className="text-5xl md:text-6xl font-bold text-[#0f172a] stat-number" data-target="15">0</span>
                <span className="text-sm font-medium text-[#0f172a] text-left leading-tight">Ongoing &<br />Completed Projects</span>
              </div>
              <div className="text-center px-4 flex items-center justify-center gap-3">
                <span className="text-5xl md:text-6xl font-bold text-[#0f172a] stat-number" data-target="1500">0</span>
                <span className="text-sm font-medium text-[#0f172a] text-left leading-tight">Satisfied<br />Clients</span>
              </div>
              <div className="text-center px-4 flex items-center justify-center gap-3">
                <span className="text-5xl md:text-6xl font-bold text-[#0f172a] stat-number" data-target="10">0</span>
                <span className="text-sm font-medium text-[#0f172a] text-left leading-tight">Awards &<br />Recognitions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Jagadish Infra Heights, our culture is rooted in unwayering dedication and innovation. We strive to create a work environment that fosters the best of ideas and reflects our visionary approach in the construction industry.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fostering collaboration and teamwork within the team.",
                    "Maintaining high standards of safety and quality.",
                    "Providing continuous learning and growth opportunities.",
                    "Ensuring transparency and clear communication with clients.",
                    "Building lasting relationships based on trust and excellence.",
                    "Commitment to minimizing environmental impact through sustainable practices.",
                    "Creating value for stakeholders through sustainable growth."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <FiChevronRight className="text-[#FFC107] text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team Culture"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FiPlay className="text-[#0f172a] text-2xl ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute bottom-4 -left-4 w-[80%] h-[80%] bg-[#FFC107] -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Builder"
                  className="w-[90%] h-auto object-cover ml-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Why Choose Us</h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  Jagadish Infra Heights is your trusted partner for high-quality construction solutions. We are committed to delivering exceptional results that exceed expectations, thanks to our skilled professionals and customer-centric approach.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#FFC107] text-xl bg-white shadow-sm">
                      <FaAward />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-2">Professional Expertise</h4>
                      <p className="text-gray-500 text-sm">Our team consists of highly skilled professionals who are passionate about every project, ensuring superior quality and timely delivery.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#FFC107] text-xl bg-white shadow-sm">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-2">Trusted by Clients</h4>
                      <p className="text-gray-500 text-sm">We have earned the trust of numerous clients through our commitment to quality, integrity and transparent communication.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#FFC107] text-xl bg-white shadow-sm">
                      <FaHardHat />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-2">Experienced Professionals</h4>
                      <p className="text-gray-500 text-sm">With years of experience in the construction industry, we excel at handling diverse projects with precision and dedication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

