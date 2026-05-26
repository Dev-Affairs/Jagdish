"use client";

import React, { useState, useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiTag, FiClock } from 'react-icons/fi';

// Dummy Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Urban Development",
    category: "Sustainability",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "/hero-image/hero-image-01.jpg",
    excerpt: "Discover how modern engineering is integrating green technologies to build cities that not only survive but thrive in harmony with nature.",
    content: `
      Urban development is undergoing a massive transformation. For decades, the focus has been solely on expansion and capacity, often at the expense of environmental health. However, the paradigm is shifting. Today's leading construction and engineering firms are pioneering sustainable urban development—a holistic approach that balances human needs with ecological preservation.
      
      At Arnesh Construction, we believe that the buildings of tomorrow must do more than simply exist. They must actively contribute to their environments. This means integrating solar glass, vertical forests, and advanced water recycling systems directly into the structural DNA of our projects. 

      The integration of smart grids and AI-driven energy management systems allows modern high-rises to reduce their carbon footprint by up to 40%. By prioritizing eco-friendly materials and sustainable practices, we aren't just building structures; we are engineering a better, greener future for the generations to come.
    `
  },
  {
    id: 2,
    title: "Innovations in High-Rise Structural Integrity",
    category: "Engineering",
    date: "Sep 28, 2026",
    readTime: "7 min read",
    image: "/hero-image/hero-image-02.jpg",
    excerpt: "An in-depth look at the new materials and AI-driven modeling techniques making skyscrapers safer and taller than ever before.",
    content: `
      The skyline is no longer the limit. Thanks to rapid advancements in materials science and computational modeling, architects and engineers are pushing the boundaries of what is structurally possible. 

      One of the most exciting developments is the use of ultra-high-performance concrete (UHPC) and carbon-fiber reinforced polymers. These materials offer unprecedented tensile strength while significantly reducing the overall weight of the structure. This allows for taller, more slender skyscrapers that can withstand extreme wind loads and seismic activity.

      Furthermore, the adoption of AI-driven structural modeling software allows engineers to simulate decades of environmental stress in mere minutes. This predictive modeling ensures that potential structural vulnerabilities are identified and reinforced long before the first foundation is poured. At Arnesh, we utilize these cutting-edge technologies to guarantee that every tower we build is an impenetrable fortress of safety and design.
    `
  },
  {
    id: 3,
    title: "Navigating Supply Chain Challenges in Construction",
    category: "Management",
    date: "Sep 15, 2026",
    readTime: "4 min read",
    image: "/hero-image/hero-image-03.jpg",
    excerpt: "How top firms are adapting to global material shortages through dynamic sourcing and predictive analytics.",
    content: `
      The global construction industry has faced unprecedented supply chain disruptions over the past few years. From steel and timber shortages to delayed shipping routes, project managers are navigating a logistical minefield.

      However, crisis breeds innovation. Forward-thinking firms are mitigating these risks through dynamic sourcing and localized manufacturing. By building robust networks of local suppliers and utilizing predictive analytics to forecast material demands, companies can stay ahead of the curve.

      At Arnesh Construction, our adaptive supply chain model has allowed us to maintain our perfect track record of on-time deliveries. We employ real-time tracking systems and AI-powered forecasting to anticipate bottlenecks before they impact the construction site, ensuring that our projects proceed without costly delays.
    `
  },
  {
    id: 4,
    title: "The Rise of Smart Buildings in Commercial Real Estate",
    category: "Technology",
    date: "Aug 30, 2026",
    readTime: "6 min read",
    image: "/gallery-page-image/galleryimg-2.jpeg",
    excerpt: "Why automated climate control and IoT sensors are becoming mandatory for new commercial projects.",
    content: `
      The concept of a 'building' is evolving. No longer just static walls and roofs, modern commercial spaces are becoming highly intelligent ecosystems. The integration of the Internet of Things (IoT) is revolutionizing how we interact with the spaces we inhabit.

      Smart buildings utilize thousands of interconnected sensors to monitor everything from occupancy levels and air quality to energy consumption and structural health. This data is fed into centralized AI systems that automatically adjust HVAC settings, optimize lighting, and even predict maintenance needs before equipment fails.

      For commercial real estate developers, these technologies are no longer optional—they are mandatory for attracting premium tenants. Buildings equipped with smart tech offer significantly lower operating costs and provide a healthier, more comfortable environment for occupants. Arnesh Construction is at the forefront of this revolution, seamlessly integrating IoT infrastructure into the very framework of our commercial projects.
    `
  },
  {
    id: 5,
    title: "Architectural Trends Defining 2027",
    category: "Design",
    date: "Jul 18, 2026",
    readTime: "5 min read",
    image: "/gallery-page-image/galleryimg-4.jpeg",
    excerpt: "Exploring the shift towards biophilic design and open-concept modular office spaces.",
    content: `
      As we look toward the future, architectural trends are increasingly focusing on human well-being and adaptability. Biophilic design—the practice of connecting building occupants more closely to nature—is taking center stage in both residential and commercial projects.

      Expect to see more indoor gardens, natural lighting optimizations, and the use of raw, organic materials like exposed timber and stone. Additionally, modular office spaces that can be easily reconfigured are replacing the rigid cubicle farms of the past. 

      At Arnesh Construction, our design studio is already implementing these concepts into our upcoming flagship projects, ensuring that our buildings are not only beautiful but also foster creativity and wellness.
    `
  },
  {
    id: 6,
    title: "Mastering Safety Protocols on Mega-Projects",
    category: "Safety",
    date: "Jun 05, 2026",
    readTime: "8 min read",
    image: "/gallery-page-image/galleryimg-5.jpeg",
    excerpt: "A deep dive into the strict safety standards required to manage massive industrial and commercial builds.",
    content: `
      When managing a mega-project, the scale of operations amplifies every potential risk. Ensuring the safety of hundreds of workers, heavy machinery, and the surrounding public requires a flawless, zero-tolerance safety protocol.

      This involves rigorous daily briefings, continuous AI-monitored site surveillance, and mandatory advanced safety gear for all personnel. Safety is not just a checklist; it is a culture that must be instilled in every individual on site.

      Our latest case study breaks down how Arnesh Construction maintained a perfect safety record over a 3-year mega-project, proving that speed and safety can, in fact, coexist when managed with uncompromising discipline.
    `
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  // Initial Hero & Grid Animation
  useEffect(() => {
    if (selectedPost === null) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".hero-elem", 
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.1 }
        );

        gsap.fromTo(".blog-card", 
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.3 }
        );
      });
      return () => ctx.revert();
    }
  }, [selectedPost]);

  // Article View Animation
  useEffect(() => {
    if (selectedPost !== null && articleRef.current) {
      gsap.fromTo(articleRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      // Scroll to top when article opens
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPost]);

  const activePost = blogPosts.find(p => p.id === selectedPost);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden min-h-screen flex flex-col bg-transparent">
      <div className="bg-white">
        <TopBar />
        <Navbar />
      </div>
      
      <main className="flex-grow">
        
        {/* LIST VIEW */}
        {selectedPost === null && (
          <div className="list-view">
            {/* Cinematic Hero */}
            <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0 bg-[#0f172a]">
                <img 
                  src="/hero-image/hero-image-01.jpg" 
                  alt="Arnesh Journal" 
                  className="w-full h-full object-cover opacity-50 scale-105"
                />
                <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-[3px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="hero-elem text-[#10b981] text-xs font-bold tracking-widest uppercase mb-3 block">[ OUR JOURNAL ]</span>
                <h1 className="hero-elem text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
                  Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Insights</span>
                </h1>
                <div className="hero-elem w-24 h-1 bg-gradient-to-r from-[#10b981] to-transparent mx-auto mb-8"></div>
                <p className="hero-elem text-slate-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                  Explore the latest trends, engineering breakthroughs, and expert perspectives shaping the future of construction.
                </p>
              </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 md:py-28 bg-transparent relative z-20 -mt-8 rounded-t-[2.5rem] shadow-xl border-b border-slate-100">
              <div className="container mx-auto max-w-7xl px-4" ref={gridRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article 
                      key={post.id} 
                      className="blog-card group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#10b981]/10 transition-all duration-500 cursor-pointer flex flex-col"
                      onClick={() => setSelectedPost(post.id)}
                    >
                      {/* Image */}
                      <div className="relative h-60 overflow-hidden">
                        <div className="absolute inset-0 bg-[#0f172a] z-0"></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out relative z-10"
                        />
                        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#10b981] shadow-sm">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                          <span className="flex items-center gap-1.5"><FiCalendar className="text-[#10b981]"/> {post.date}</span>
                          <span className="flex items-center gap-1.5"><FiClock className="text-[#10b981]"/> {post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#0f172a] mb-4 leading-tight group-hover:text-[#10b981] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                          <span className="text-xs font-bold text-[#0f172a] tracking-widest uppercase group-hover:text-[#10b981] transition-colors">Read Article</span>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0f172a] group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300">
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Simple Pagination Indicator */}
                <div className="mt-16 text-center">
                  <button className="bg-[#0f172a] hover:bg-[#10b981] text-white px-8 py-3 rounded-lg font-bold text-xs tracking-widest uppercase transition-colors duration-300">
                    Load More Articles
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* FULL ARTICLE VIEW */}
        {selectedPost !== null && activePost && (
          <article ref={articleRef} className="bg-white min-h-screen pb-24">
            
            {/* Article Hero */}
            <div className="relative h-[60vh] min-h-[500px]">
              <div className="absolute inset-0 bg-[#0f172a]">
                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
              </div>
              
              {/* Back Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 left-4 md:left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#0f172a] transition-colors duration-300"
              >
                <FiArrowLeft /> Back To Journal
              </button>

              {/* Article Header Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                <div className="container mx-auto max-w-4xl">
                  <span className="inline-block px-3 py-1 bg-[#10b981] text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 shadow-lg">
                    {activePost.category}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                    {activePost.title}
                  </h1>
                  <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
                    <span className="flex items-center gap-2"><FiCalendar className="text-[#10b981]"/> {activePost.date}</span>
                    <span className="flex items-center gap-2"><FiClock className="text-[#10b981]"/> {activePost.readTime}</span>
                    <span className="flex items-center gap-2"><FiTag className="text-[#10b981]"/> Arnesh Editorial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto max-w-3xl px-4 pt-16 md:pt-24">
              <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
                {/* Splitting the dummy content by newline to render paragraphs beautifully */}
                {activePost.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && (
                    <p key={idx} className="mb-6 text-slate-600 leading-relaxed font-light">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>

              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-[#0f172a] uppercase tracking-widest">Share Article:</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#10b981] hover:border-[#10b981] transition-colors">X</button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#10b981] hover:border-[#10b981] transition-colors">in</button>
                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#10b981] hover:border-[#10b981] transition-colors">f</button>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-[#10b981] font-bold text-sm tracking-widest uppercase hover:text-[#0f172a] transition-colors"
                >
                  <FiArrowLeft /> Back to List
                </button>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="bg-transparent mt-20 py-16 border-t border-slate-100">
              <div className="container mx-auto max-w-7xl px-4">
                <h3 className="text-2xl font-black text-[#0f172a] uppercase tracking-tight mb-8 text-center">Read Next</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogPosts.filter(p => p.id !== selectedPost).slice(0, 3).map((post) => (
                    <div 
                      key={post.id} 
                      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setSelectedPost(post.id);
                      }}
                    >
                      <div className="relative h-48 overflow-hidden bg-[#0f172a]">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 opacity-80 group-hover:opacity-100 transition-all duration-700 ease-in-out relative z-10"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="font-bold text-[#0f172a] mb-2 leading-tight group-hover:text-[#10b981] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-auto pt-4 border-t border-slate-100">
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </article>
        )}

      </main>

      <Footer />
    </div>
  );
}
