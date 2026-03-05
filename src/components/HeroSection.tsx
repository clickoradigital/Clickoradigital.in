import React from 'react';
import { motion } from 'framer-motion';

// --- HELPER COMPONENT: 45-Degree Circuit Path & Data Pulse ---
const CircuitLine = ({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g>
    {/* Faint base circuit track */}
    <path d={path} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
    
    {/* Terminal Solder Pad (The ring and dot at the end of the line) */}
    <circle cx={endX} cy={endY} r="5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <circle cx={endX} cy={endY} r="2" fill="rgba(255,255,255,0.15)" />

    {/* Glowing data packet traveling along the track */}
    <motion.path
      d={path}
      fill="none"
      stroke="rgba(232,244,220,0.8)" // Brand-bg color for the pulse
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0.08, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathOffset: [0, 1],
        opacity: [0, 1, 1, 0] // Fades in, travels bright, fades out into the node
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1] 
      }}
      style={{ filter: "drop-shadow(0px 0px 6px rgba(232,244,220,0.8))" }}
    />
  </g>
);

const Hero: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="lg:mt-[10px] lg:px-4 lg:pb-4 overflow-hidden">
      
      <div className="relative h-[100dvh] lg:h-[95vh] w-full overflow-hidden 
                      rounded-none lg:rounded-t-[20px] lg:rounded-b-[40px] rounded-b-[20px]
                      bg-[#050602] flex items-center justify-center">

        {/* --- 1. AMBIENT GLOW --- */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] lg:w-[90%] h-[70%] 
                     bg-brand-primary/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none z-0" 
        />

        {/* --- 2. ANIMATED 45-DEGREE CIRCUIT BOARD LAYER --- */}
        <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50 lg:opacity-70">
          
          {/* DESKTOP CIRCUITS (Hidden on Mobile) */}
          <svg viewBox="0 0 1920 1080" className="hidden lg:block w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
            {/* Top Left Circuits */}
            <CircuitLine path="M -100,150 L 200,150 L 350,300 L 450,300" endX={450} endY={300} duration={5} delay={0} />
            <CircuitLine path="M 100,-100 L 100,200 L 250,350 L 250,500 L 300,550" endX={300} endY={550} duration={6.5} delay={1.5} />
            <CircuitLine path="M -50,400 L 150,400 L 250,500 L 400,500" endX={400} endY={500} duration={4.5} delay={3} />
            {/* Top Right Circuits */}
            <CircuitLine path="M 2020,200 L 1600,200 L 1400,400 L 1300,400" endX={1300} endY={400} duration={5.5} delay={0.5} />
            <CircuitLine path="M 1750,-100 L 1750,250 L 1600,400 L 1600,550 L 1550,600" endX={1550} endY={600} duration={6} delay={2} />
            <CircuitLine path="M 2000,500 L 1800,500 L 1700,600 L 1500,600" endX={1500} endY={600} duration={4.8} delay={1.2} />
            {/* Bottom Left Circuits */}
            <CircuitLine path="M -100,900 L 250,900 L 400,750 L 500,750" endX={500} endY={750} duration={5.2} delay={0.8} />
            <CircuitLine path="M 200,1180 L 200,950 L 350,800 L 350,650" endX={350} endY={650} duration={6.2} delay={2.5} />
            {/* Bottom Right Circuits */}
            <CircuitLine path="M 2020,850 L 1650,850 L 1500,700 L 1400,700" endX={1400} endY={700} duration={5.8} delay={1.8} />
            <CircuitLine path="M 1650,1180 L 1650,950 L 1500,800 L 1500,650" endX={1500} endY={650} duration={6.8} delay={0.2} />
          </svg>

          {/* MOBILE CIRCUITS (Hidden on Desktop) */}
          {/* Using a tall aspect ratio (800x1600) to perfectly fit phones */}
          <svg viewBox="0 0 800 1600" className="block lg:hidden w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
            {/* Top Paths (Flowing downwards into the center) */}
            <CircuitLine path="M 150,-50 L 150,250 L 250,350 L 250,450" endX={250} endY={450} duration={5} delay={0} />
            <CircuitLine path="M -50,300 L 100,300 L 150,350 L 150,500" endX={150} endY={500} duration={4.5} delay={2} />
            <CircuitLine path="M 650,-50 L 650,200 L 550,300 L 550,450" endX={550} endY={450} duration={6} delay={1} />
            <CircuitLine path="M 850,250 L 700,250 L 650,300 L 650,400" endX={650} endY={400} duration={5.5} delay={3} />
            
            {/* Bottom Paths (Flowing upwards into the center) */}
            <CircuitLine path="M 150,1650 L 150,1400 L 250,1300 L 250,1150" endX={250} endY={1150} duration={6} delay={0.5} />
            <CircuitLine path="M -50,1300 L 100,1300 L 150,1250 L 150,1100" endX={150} endY={1100} duration={5.2} delay={2.5} />
            <CircuitLine path="M 650,1650 L 650,1350 L 500,1200 L 500,1050" endX={500} endY={1050} duration={5.8} delay={1.5} />
            <CircuitLine path="M 850,1350 L 750,1350 L 650,1250 L 650,1150" endX={650} endY={1150} duration={4.8} delay={3.5} />
          </svg>

        </div>

        {/* --- 3. HERO CONTENT --- */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl flex flex-col items-center mt-[-20px] lg:mt-0">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-brand-soft/10 bg-[#050602]/60 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-soft opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-soft"></span>
            </span>
            <span className="font-lato text-[9px] md:text-[11px] text-brand-bg/80 uppercase tracking-[0.3em] lg:tracking-[0.4em]">
              Hyderabad’s Next-Gen
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-glyseric text-[16vw] sm:text-7xl md:text-8xl lg:text-[10rem] text-brand-bg leading-[0.9] tracking-tighter"
          >
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-bg to-brand-bg/30">
              Alchemy
            </span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 lg:mt-6 bg-[#050602]/60 border border-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[24px] lg:rounded-[30px] max-w-2xl mx-4 lg:mx-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <p className="font-lato text-brand-soft/80 text-sm md:text-lg lg:text-xl font-light leading-relaxed">
              We turn <span className="text-brand-bg font-medium">ambitious ideas</span> into high-converting digital realities. Engineering for brands that play to win.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="w-full sm:w-auto font-lato px-8 py-4 bg-brand-bg text-[#050602] font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all active:scale-95 text-[10px] lg:text-xs shadow-[0_0_20px_rgba(232,244,220,0.2)]">
                Start a Project
              </button>
              <button className="w-full sm:w-auto font-lato px-8 py-4 border border-brand-bg/20 text-brand-bg font-bold uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all text-[10px] lg:text-xs">
                View Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- 4. BOTTOM INFO BAR --- */}
        <div className="absolute bottom-6 lg:bottom-12 left-0 w-full px-6 lg:px-10 flex justify-between items-end z-20 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="font-lato text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-brand-bg/80">Based in Hyderabad</span>
            <span className="font-lato text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-brand-soft/40">Serving the World</span>
          </div>

          <div className="flex flex-col gap-0 lg:gap-1 text-right">
            <span className="font-glyseric text-xl lg:text-3xl text-brand-bg tracking-tighter uppercase">
              Est. 2026
            </span>
            <div className="flex items-center justify-end gap-2">
              <span className="font-lato text-[7px] lg:text-[9px] uppercase tracking-widest text-brand-soft/50">
                Building the Future
              </span>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-soft opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-soft"></span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;