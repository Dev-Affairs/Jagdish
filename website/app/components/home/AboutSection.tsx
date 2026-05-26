import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-[#FFC107] py-20 sm:py-28 relative overflow-hidden">

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] capitalize tracking-tight leading-tight font-sans mb-6">
              We Are Jagdish Infra<br />
              Heights
            </h2>

            <div className="space-y-4 text-sm text-[#111827]/80 leading-relaxed font-normal mb-6">
              <p>
                JAGDISH INFRAHEIGHTS PRIVATE LIMITED, incorporated in the year 2012, is a front runner in the Bhubaneswar construction scene on both the residential and commercial front. We are a company that is solely driven by the lasting principles of commitment to customer satisfaction. Based on a strong second-to-none approach, we have established for Odisha, a solid reputation over the last couple of years for exceeding customer expectations on all fronts.
              </p>
              <p>
                Elegance of design and a strong commitment to quality forms the core principles behind our reputation in this industry. A continuous benchmarking process and a passion for constant innovation have helped us lead from the front on all facets of the industry.
              </p>
              <p>
                We live by our pledge to have your home designed by experts in the field which leaves no room for compromise. We ensure that we don't leave any brick unturned to bring you the best returns for your investments. All these years of our high performance work culture and dedicated service have earned us credentials from various organisations which acknowledged our quality of work and commitment towards delivery.
              </p>
            </div>

            <div className="flex items-center mt-2">
              <button className="bg-[#111827] text-white font-bold px-8 py-3.5 rounded-sm transition-all duration-300 uppercase tracking-wide text-[10px] sm:text-xs hover:bg-white hover:text-[#111827]">
                READ MORE
              </button>
            </div>
          </div>

          <div className="lg:w-7/12 relative h-[350px] sm:h-[450px] w-full mt-10 lg:mt-0">
            {/* Image 1 - Large Warehouse (Top Right) */}
            <div className="absolute top-0 right-0 w-[80%] h-[280px] sm:h-[350px] shadow-2xl z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&w=800&q=80"
                alt="Construction site overview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 - Construction Structure (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[220px] sm:h-[280px] shadow-2xl z-20 border-4 border-[#FFC107] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80"
                alt="House under construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
