import React from 'react';
import { motion } from 'framer-motion';

const CompactReview: React.FC = () => {
  return (
    <section className="py-12 lg:py-24 bg-[#e8f4dc] px-6 selection:bg-[#728156] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* --- 1. HEADER LINE --- */}
        <div className="flex items-center gap-4 mb-8 lg:mb-12">
          <h2 className="font-glyseric text-3xl lg:text-5xl text-[#2A311F] tracking-tighter uppercase whitespace-nowrap">
            Client <span className="text-[#728156]">Reviews</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-[#b6c99c] to-transparent opacity-50" />
        </div>

        {/* --- 2. THE COMPACT CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/50 backdrop-blur-xl border border-white/80 p-6 lg:p-10 rounded-[32px] shadow-[0_30px_60px_rgba(114,129,86,0.06)] overflow-hidden"
        >
          {/* Subtle Circuit Detail */}
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 100 100">
              <path d="M100 20 L70 20 L50 40 L50 70" fill="none" stroke="#728156" strokeWidth="1.5" />
              <circle cx="50" cy="70" r="3" fill="#728156" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
            
            {/* Left: Client Photo & Result */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[35%] lg:border-r border-[#b6c99c]/30 lg:pr-10">
              <div className="relative mb-4">
                {/* CLIENT PHOTO SLOT */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#cfe1bb]">
                   <img 
                    src="/client-1.jpeg" 
                    alt="Yugandhar" 
                    className="w-full h-full object-cover"
                   />
                </div>
                {/* Verified Badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#728156] text-white p-1.5 rounded-full shadow-lg">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>

              <div className="mt-2">
                <span className="font-glyseric text-5xl lg:text-6xl text-[#2A311F] tracking-tighter leading-none">+215%</span>
                <p className="font-lato text-[9px] uppercase tracking-widest text-[#728156] font-black mt-1">Lead Efficiency</p>
              </div>
            </div>

            {/* Right: The Testimonial */}
            <div className="flex flex-col justify-center lg:w-[65%]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#728156] text-xs">★</span>
                ))}
              </div>

              <blockquote className="font-lato text-base lg:text-xl text-[#2A311F] leading-relaxed italic mb-6 lg:mb-8">
               “Partnering with Clickora Digital was a game changer for our real estate marketing. In only 60 days, we added $4.2M to our business pipeline.”
              </blockquote>

              <div>
                <h4 className="font-glyseric text-lg lg:text-2xl text-[#728156] tracking-tight uppercase">Yugandhar</h4>
                <p className="font-lato text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#88976c] font-bold mt-1">
                  CEO, SURAYRAM Properties
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactReview;