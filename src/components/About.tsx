import React from 'react';
import { motion } from 'framer-motion';
import { PerformanceChartIllustration } from './ServiceIllustrations';

const AboutClickora: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: studioEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    // SEO & A11y: Added aria-labelledby to connect the section to its title
    <section id="about" aria-labelledby="about-heading" className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden text-[#2A311F] z-10">
      
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      {/* Noise Texture */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Soft floating orb behind the bento grid */}
      <motion.div 
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        // Performance: will-change-transform for smooth continuous animation
        className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#e8f4dc] rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-70 will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
          
          {/* --- LEFT SIDE: Sticky Header & Intro --- */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="inline-flex items-center gap-3 px-3 md:px-4 py-1.5 md:py-2 mb-8 md:mb-10 rounded-full border border-[#b6c99c]/40 bg-[#e8f4dc]/30 backdrop-blur-md shadow-[0_4px_20px_rgba(114,129,86,0.05)]"
            >
              <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#728156] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#728156]"></span>
              </div>
              <span className="font-lato text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#728156]">
                The Collective
              </span>
            </motion.div>

            <motion.h2 
              id="about-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              /* Fluid typography for perfect mobile scaling */
              className="font-glyseric text-[4.5rem] leading-[0.9] sm:text-7xl md:text-[5.5rem] md:leading-[0.85] tracking-tighter mb-6 md:mb-8 text-[#2A311F]"
            >
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#728156] to-[#b6c99c] italic font-light">the build.</span>
            </motion.h2>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              /* Adjusted text sizing and width for elegant mobile reading */
              className="font-lato text-base md:text-lg text-black leading-relaxed max-w-[90%] md:max-w-sm font-medium"
            >
              Born in Hyderabad, Clickora is a hybrid of high-art design and hard-code engineering. We don't just create websites; we build digital ecosystems designed to scale, convert, and captivate.
            </motion.p>

            {/* Aesthetic rotating stamp - Hidden on Mobile, Visible on Tab/Desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="mt-12 md:mt-16 hidden sm:flex items-center gap-4 md:gap-6"
            >
              <motion.div 
                aria-hidden="true"
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 md:w-16 md:h-16 border-[0.5px] border-[#88976c] rounded-full flex items-center justify-center relative border-dashed will-change-transform"
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b6c99c] rounded-full" />
              </motion.div>
              <div>
                <p className="font-lato text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#88976c] font-black">
                  Est. 2026
                </p>
                <p className="font-lato text-[9px] md:text-[10px] text-[#b6c99c] mt-1 font-bold">
                  Engineering the Extraordinary
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Enhanced Bento Grid --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            /* Set grid-cols-2 on the 'md' breakpoint to lock in the Tab/Desktop layout */
            className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-fr"
          >
            
            {/* --- Bento Card 1: Philosophy (Spans 2 columns on Tab/Desktop) --- */}
            <motion.div 
              variants={fadeUpVariants}
              /* Adjusted padding and min-height for mobile elegance */
              className="md:col-span-2 p-8 md:p-10 lg:p-14 bg-gradient-to-br from-[#e8f4dc]/60 to-white/10 backdrop-blur-xl border border-[#b6c99c]/40 rounded-[24px] md:rounded-[32px] flex flex-col justify-between group overflow-hidden relative min-h-[280px] md:min-h-[340px] shadow-[0_20px_40px_-15px_rgba(114,129,86,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Abstract Topographic/Wave SVG Background */}
              <div aria-hidden="true" className="absolute right-[-10%] bottom-[-20%] w-[90%] md:w-[70%] h-[150%] opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#728156" strokeWidth="0.5" d="M 0,100 C 40,150 60,50 100,100 C 140,150 160,50 200,100" />
                  <path fill="none" stroke="#728156" strokeWidth="0.5" d="M 0,120 C 40,170 60,70 100,120 C 140,170 160,70 200,120" />
                  <path fill="none" stroke="#728156" strokeWidth="0.5" d="M 0,140 C 40,190 60,90 100,140 C 140,190 160,90 200,140" />
                  <path fill="none" stroke="#728156" strokeWidth="0.5" d="M 0,160 C 40,210 60,110 100,160 C 140,210 160,110 200,160" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-start mb-8 md:mb-12">
                <span className="font-lato text-[9px] md:text-[10px] uppercase tracking-widest text-[#88976c] font-black bg-white/50 px-3 py-1 rounded-full border border-white/60">Our Philosophy</span>
                <span aria-hidden="true" className="text-[#88976c] text-lg md:text-xl group-hover:rotate-90 transition-transform duration-700 ease-[0.22,1,0.36,1]">✦</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-glyseric text-3xl sm:text-4xl md:text-5xl text-[#2A311F] leading-[1.05] tracking-tighter mb-4 md:mb-6">
                  Organic forms, <br /> engineered precision.
                </h3>
                <p className="font-lato text-black text-[13px] md:text-base max-w-[90%] md:max-w-md leading-relaxed font-medium">
                  We believe that the best digital experiences feel entirely natural. By fusing human psychology with cutting-edge React architecture, we craft interfaces that users don't just navigate—they feel.
                </p>
              </div>
            </motion.div>

            {/* --- Bento Card 2: Performance (Animated Ring) --- */}
            <motion.div 
              variants={fadeUpVariants}
              className="p-8 lg:p-10 bg-white border border-[#b6c99c]/40 rounded-[24px] md:rounded-[32px] flex flex-col justify-between group shadow-[0_10px_30px_-10px_rgba(114,129,86,0.1)] hover:-translate-y-1 transition-all duration-500 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] relative overflow-hidden"
            >
              {/* --- TOP LABEL --- */}
              <span className="font-lato text-[9px] md:text-[10px] uppercase tracking-widest text-[#88976c] font-black block relative z-20">
                Performance
              </span>
              
              {/* --- THE ANIMATED CHART (Background Layer) --- */}
              <div aria-hidden="true" className="absolute inset-x-0 top-10 md:top-12 bottom-20 md:bottom-24 flex items-center justify-center z-0 opacity-40 md:opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none px-2 lg:px-4">
                <PerformanceChartIllustration />
              </div>

              {/* --- BOTTOM CONTENT (Foreground Layer) --- */}
              <div className="relative z-20 mt-auto flex items-end justify-between w-full">
                <div>
                  <p className="font-lato text-[13px] md:text-sm text-[#2A311F] font-black leading-tight">
                    Lighthouse Core <br/> Web Vitals
                  </p>
                  <p className="font-lato text-[11px] md:text-xs text-[#88976c] mt-1.5 md:mt-2 font-medium">
                    Zero bloat. Absolute speed.
                  </p>
                </div>

                <div aria-hidden="true" className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="50%" cy="50%" r="42%" 
                      fill="none" stroke="#e8f4dc" 
                      className="stroke-[4px] md:stroke-[5px]" 
                    />
                    <motion.circle 
                      cx="50%" cy="50%" r="42%" 
                      fill="none" stroke="#728156" strokeLinecap="round"
                      className="stroke-[4px] md:stroke-[5px]"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.99 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: studioEase, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-glyseric text-xl md:text-2xl text-[#2A311F] tracking-tighter mt-0.5 md:mt-1">99</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- Bento Card 3: Global Reach (Dark Theme + Network Grid) --- */}
            <motion.div 
              variants={fadeUpVariants}
              className="p-8 lg:p-10 bg-[#2A311F] rounded-[24px] md:rounded-[32px] flex flex-col justify-between group relative overflow-hidden min-h-[280px] md:min-h-[360px] lg:min-h-[400px] hover:-translate-y-1 transition-all duration-500 shadow-xl"
            >
              {/* Dynamic Glow & Grid Pattern */}
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#728156]/30 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div aria-hidden="true" className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjMyLCAyNDQsIDIyMCwgMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-screen mask-image-[radial-gradient(ellipse_at_center,black,transparent)]" />
              
              <span className="relative z-10 font-lato text-[9px] md:text-[10px] uppercase tracking-widest text-[#cfe1bb] font-black block">Global Reach</span>
              
              <div className="relative z-10 mt-auto">
                <div className="flex items-baseline gap-2 mb-1.5 md:mb-2">
                  <span className="font-glyseric text-6xl md:text-7xl text-[#e8f4dc] tracking-tighter group-hover:scale-105 origin-left transition-transform duration-500">15+</span>
                </div>
                <p className="font-lato text-[13px] md:text-sm text-[#b6c99c] font-medium border-l-2 border-[#728156] pl-3 py-1">Brands Scaled <br/> Worldwide</p>
                
                <div aria-hidden="true" className="mt-5 md:mt-6 flex -space-x-2 md:-space-x-3">
                  <motion.div whileHover={{ y: -5 }} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#2A311F] bg-[#b6c99c] shadow-md z-30" />
                  <motion.div whileHover={{ y: -5 }} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#2A311F] bg-[#88976c] shadow-md z-20" />
                  <motion.div whileHover={{ y: -5 }} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#2A311F] bg-[#728156] shadow-md z-10" />
                  <motion.div whileHover={{ y: -5 }} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#2A311F] bg-[#e8f4dc] flex items-center justify-center text-[#2A311F] text-[10px] md:text-[12px] font-black z-0 shadow-md">+</motion.div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutClickora;