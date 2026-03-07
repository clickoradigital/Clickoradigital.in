import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import LeadModal from './LeadModal';


const CircuitLine = memo(({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g aria-hidden="true">
    <path d={path} fill="none" stroke="#88976c" strokeWidth="1.5" opacity="0.2" />
    <circle cx={endX} cy={endY} r="5" fill="none" stroke="#88976c" strokeWidth="1.5" opacity="0.3" />
    <circle cx={endX} cy={endY} r="2" fill="#728156" />

    <motion.path
      d={path}
      fill="none"
      stroke="#728156"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0.08, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathOffset: [0, 1],
        opacity: [0, 1, 1, 0] 
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1] 
      }}
      // Using transform-gpu for smoother movement
      style={{ 
        filter: "drop-shadow(0px 2px 3px rgba(114, 129, 86, 0.2))",
        willChange: "transform, opacity" 
      }}
    />
  </g>
));

CircuitLine.displayName = 'CircuitLine';

const Hero: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  return (
    <>
    <section 
      role="banner"
      className="lg:mt-[10px] mt-10 lg:px-4 lg:pb-4 overflow-hidden bg-transparent selection:bg-[#b6c99c] selection:text-white"
    >
      <div className="relative h-[100dvh] lg:h-[95vh] w-full overflow-hidden 
                      rounded-none lg:rounded-t-[20px] lg:rounded-b-[40px] rounded-b-[20px]
                      bg-[#e8f4dc] flex items-center justify-center">

        {/* --- 1. AMBIENT GLOW (Optimized with will-change) --- */}
        <motion.div 
          animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] lg:w-[90%] h-[70%] 
                     bg-[#cfe1bb] blur-[100px] lg:blur-[140px] rounded-full pointer-events-none z-0" 
        />

        {/* --- 2. ANIMATED CIRCUIT LAYER (Aria-hidden for performance/a11y) --- */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg viewBox="0 0 1920 1080" className="hidden lg:block w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
            <CircuitLine path="M -100,150 L 200,150 L 350,300 L 450,300" endX={450} endY={300} duration={5} delay={0} />
            <CircuitLine path="M 100,-100 L 100,200 L 250,350 L 250,500 L 300,550" endX={300} endY={550} duration={6.5} delay={1.5} />
            <CircuitLine path="M -50,400 L 150,400 L 250,500 L 400,500" endX={400} endY={500} duration={4.5} delay={3} />
            <CircuitLine path="M 2020,200 L 1600,200 L 1400,400 L 1300,400" endX={1300} endY={400} duration={5.5} delay={0.5} />
            <CircuitLine path="M 1750,-100 L 1750,250 L 1600,400 L 1600,550 L 1550,600" endX={1550} endY={600} duration={6} delay={2} />
            <CircuitLine path="M 2000,500 L 1800,500 L 1700,600 L 1500,600" endX={1500} endY={600} duration={4.8} delay={1.2} />
            <CircuitLine path="M -100,900 L 250,900 L 400,750 L 500,750" endX={500} endY={750} duration={5.2} delay={0.8} />
            <CircuitLine path="M 200,1180 L 200,950 L 350,800 L 350,650" endX={350} endY={650} duration={6.2} delay={2.5} />
            <CircuitLine path="M 2020,850 L 1650,850 L 1500,700 L 1400,700" endX={1400} endY={700} duration={5.8} delay={1.8} />
            <CircuitLine path="M 1650,1180 L 1650,950 L 1500,800 L 1500,650" endX={1500} endY={650} duration={6.8} delay={0.2} />
          </svg>

          <svg viewBox="0 0 800 1600" className="block lg:hidden w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
            <CircuitLine path="M 150,-50 L 150,250 L 250,350 L 250,450" endX={250} endY={450} duration={5} delay={0} />
            <CircuitLine path="M -50,300 L 100,300 L 150,350 L 150,500" endX={150} endY={500} duration={4.5} delay={2} />
            <CircuitLine path="M 650,-50 L 650,200 L 550,300 L 550,450" endX={550} endY={450} duration={6} delay={1} />
            <CircuitLine path="M 850,250 L 700,250 L 650,300 L 650,400" endX={650} endY={400} duration={5.5} delay={3} />
            <CircuitLine path="M 150,1650 L 150,1400 L 250,1300 L 250,1150" endX={250} endY={1150} duration={6} delay={0.5} />
            <CircuitLine path="M -50,1300 L 100,1300 L 150,1250 L 150,1100" endX={150} endY={1100} duration={5.2} delay={2.5} />
            <CircuitLine path="M 650,1650 L 650,1350 L 500,1200 L 500,1050" endX={500} endY={1050} duration={5.8} delay={1.5} />
            <CircuitLine path="M 850,1350 L 750,1350 L 650,1250 L 650,1150" endX={650} endY={1150} duration={4.8} delay={3.5} />
          </svg>
        </div>

        {/* --- 3. HERO CONTENT --- */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl flex flex-col items-center mt-[-20px] lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-white/60 bg-white/40 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#728156] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#728156]"></span>
            </span>
            <span className="font-lato text-[10px] md:text-xs text-[#728156] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em]">
              Hyderabad’s Next-Gen
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-glyseric text-[16vw] sm:text-7xl md:text-8xl lg:text-[10rem] text-[#2A311F] leading-[0.9] tracking-tighter"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#728156] to-[#a3b889]">
              Alchemy
            </span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 lg:mt-10 bg-white/40 border border-white/50 backdrop-blur-xl p-6 lg:p-10 rounded-[24px] lg:rounded-[32px] max-w-2xl mx-4 lg:mx-auto shadow-[0_20px_40px_rgba(114,129,86,0.08)]"
          >
            <p className="font-lato text-black text-sm md:text-lg lg:text-xl font-medium leading-relaxed">
              We turn <span className="text-[#2A311F] font-bold">ambitious ideas</span> into high-converting digital realities. Engineering for brands that play to win.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                onClick={() => setIsLeadModalOpen(true)}
                className="w-full sm:w-auto font-lato px-8 py-4 bg-[#728156] text-white font-black uppercase tracking-widest rounded-xl hover:bg-[#5b6744] hover:scale-[1.02] transition-all active:scale-95 text-[10px] lg:text-xs shadow-[0_8px_20px_rgba(114,129,86,0.2)]"
              >
                Start a Project
              </button>
              <a 
              href='#work'
                type="button"
                className="w-full sm:w-auto font-lato px-8 py-4 border-2 border-[#b6c99c] text-[#728156] font-bold uppercase tracking-widest rounded-xl hover:bg-[#cfe1bb]/50 transition-all text-[10px] lg:text-xs"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- 4. BOTTOM INFO BAR --- */}
        <div className="absolute bottom-6 lg:bottom-12 left-0 w-full px-6 lg:px-10 flex justify-between items-end z-20 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="font-lato text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-[#88976c] font-bold">Based in Hyderabad</span>
            <span className="font-lato text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-[#b6c99c] font-bold">Serving the World</span>
          </div>

          <div className="flex flex-col gap-0 lg:gap-1 text-right">
            <span className="font-glyseric text-xl lg:text-3xl text-[#728156] tracking-tighter uppercase">
              Est. 2026
            </span>
            <div className="flex items-center justify-end gap-2">
              <span className="font-lato text-[7px] lg:text-[9px] uppercase tracking-widest text-[#88976c] font-bold">
                Building the Future
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#728156] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#728156]"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LeadModal isOpen={isLeadModalOpen}  onClose={()=>{setIsLeadModalOpen(false)}}/>
    </>
  );
};

export default Hero;