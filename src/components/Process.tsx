import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// --- HELPER COMPONENT: 45-Degree Circuit Path & Data Pulse ---
const CircuitLine = ({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g>
    {/* Faint base circuit track */}
    <path d={path} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    
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
      initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
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

const ProcessReactor: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;
  
  const trackRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: studioEase } }
  };

  const steps = [
    {
      no: "01",
      title: "Extraction",
      label: "Discovery & DNA",
      desc: "We dive into the raw data of your brand to extract its unique frequency. Finding the 'Main Character' signal in the noise.",
    },
    {
      no: "02",
      title: "Catalysis",
      label: "Design & Dev Fusion",
      desc: "Where high-art meets hard-code. We alchemize your brand soul into a high-performance React ecosystem.",
    },
    {
      no: "03",
      title: "Reaction",
      label: "Launch & Scale",
      desc: "The explosion. We deploy your brand into the market with precision-targeted Meta and Google strategies.",
    }
  ];

  return (
    <section className="relative bg-[#050602] py-32 lg:py-40 overflow-hidden rounded-[2rem] lg:rounded-[4rem] mx-2 lg:mx-4 my-10">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-brand-soft/10 rounded-full blur-[150px] pointer-events-none"
      />

      {/* --- ANIMATED 45-DEGREE CIRCUIT BOARD LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50 mix-blend-screen">
        <svg viewBox="0 0 1920 2000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          
          {/* Left Side Circuits (Flowing up and inwards) */}
          <CircuitLine path="M 100,2100 L 100,1500 L 300,1300 L 300,800 L 350,750" endX={350} endY={750} duration={6} delay={0} />
          <CircuitLine path="M 250,2100 L 250,1700 L 450,1500 L 450,1000 L 500,950" endX={500} endY={950} duration={5.5} delay={2} />
          <CircuitLine path="M -50,1100 L 150,1100 L 250,1000 L 250,500 L 300,450" endX={300} endY={450} duration={7} delay={1} />
          <CircuitLine path="M 400,-100 L 400,250 L 500,350 L 500,600 L 550,650" endX={550} endY={650} duration={5} delay={3.5} />
          <CircuitLine path="M 600,2100 L 600,1800 L 700,1700 L 700,1300 L 750,1250" endX={750} endY={1250} duration={4.5} delay={1.5} />

          {/* Right Side Circuits (Flowing up and inwards) */}
          <CircuitLine path="M 1820,2100 L 1820,1500 L 1620,1300 L 1620,800 L 1570,750" endX={1570} endY={750} duration={6.5} delay={0.5} />
          <CircuitLine path="M 1670,2100 L 1670,1700 L 1470,1500 L 1470,1000 L 1420,950" endX={1420} endY={950} duration={5} delay={2.5} />
          <CircuitLine path="M 1970,1100 L 1770,1100 L 1670,1000 L 1670,500 L 1620,450" endX={1620} endY={450} duration={7.5} delay={1.5} />
          <CircuitLine path="M 1520,-100 L 1520,250 L 1420,350 L 1420,600 L 1370,650" endX={1370} endY={650} duration={4.8} delay={4} />
          <CircuitLine path="M 1320,2100 L 1320,1800 L 1220,1700 L 1220,1300 L 1170,1250" endX={1170} endY={1250} duration={5.2} delay={0.8} />

        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
        
        {/* --- HEADER --- */}
        <div className="mb-20 lg:mb-32 text-left lg:text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: studioEase }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </div>
            <span className="font-lato text-[10px] uppercase tracking-[0.6em] text-brand-primary/60">System Sequence</span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, ease: studioEase }}
              className="font-glyseric text-6xl md:text-[9rem] text-brand-bg leading-none tracking-tighter"
            >
              Digital <br /> <span className="italic font-light text-brand-bg/20">Reactor.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- TRACK & STEPS WRAPPER --- */}
        <div ref={trackRef} className="relative py-10 lg:py-20">
          
          {/* THE REACTOR TRACK */}
          <div className="absolute left-[2rem] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 z-0">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 w-[3px] bg-brand-primary blur-sm origin-top h-full -translate-x-[1px]"
            />
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 w-full bg-gradient-to-b from-white via-brand-primary to-transparent origin-top h-full z-10"
            />
          </div>

          {/* THE STEPS */}
          <div className="flex flex-col gap-40 lg:gap-64 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col lg:flex-row items-center justify-between group ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                
                {/* CENTRAL NODE */}
                <div className="absolute left-[2rem] lg:left-1/2 top-0 -translate-x-1/2 z-30 mt-2">
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: "#050602", borderColor: "#333" }}
                    whileInView={{ scale: 1, backgroundColor: "#e8f4dc", borderColor: "#050602" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-4 h-4 rounded-full shadow-[0_0_30px_rgba(232,244,220,0.8)] border-[3px]"
                  />
                </div>

                {/* INFO BLOCK */}
                <motion.div 
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`w-full lg:w-[42%] flex flex-col ${i % 2 === 0 ? 'text-left lg:text-right items-start lg:items-end' : 'text-left items-start'} ml-20 lg:ml-0`}
                >
                  <motion.span 
                    animate={{ y: [20, -20] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="font-glyseric text-8xl lg:text-[14rem] text-brand-bg opacity-[0.02] leading-none absolute -top-10 lg:-top-24 select-none pointer-events-none group-hover:opacity-[0.04] transition-opacity duration-700"
                  >
                    {step.no}
                  </motion.span>

                  <div className="relative pt-4 z-10">
                    <motion.span variants={itemVariants} className="font-lato text-[10px] uppercase tracking-widest text-white mb-3 block ">
                      {step.label}
                    </motion.span>
                    <motion.h3 variants={itemVariants} className="font-glyseric text-5xl lg:text-7xl text-brand-bg mb-6 tracking-tighter group-hover:italic transition-all duration-500">
                      {step.title}
                    </motion.h3>
                    <motion.p variants={itemVariants} className="font-lato text-brand-soft/50 text-base lg:text-lg leading-relaxed max-w-sm font-medium group-hover:text-brand-soft/80 transition-colors duration-500">
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>

                <div className="hidden lg:block w-[40%]" />
              </div>
            ))}
          </div>
        </div>

        {/* --- FINAL ACTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: studioEase, delay: 0.2 }}
          className="mt-20 lg:mt-32 flex flex-col items-center"
        >
          <div className="relative group cursor-pointer">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-brand-bg/0 via-brand-bg/20 to-brand-bg/0 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
            />
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-44 h-44 lg:w-64 lg:h-64 rounded-full bg-[#050602] flex flex-col items-center justify-center gap-2 group border border-white/10 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-brand-bg"
            >
                <div className="absolute inset-0 bg-brand-bg translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                
                <span className="relative z-10 font-lato text-[10px] font-black uppercase tracking-widest text-brand-soft/60 group-hover:text-[#050602]/60 transition-colors duration-500">
                  Initiate
                </span>
                
                <span className="relative z-10 font-glyseric text-3xl lg:text-5xl text-brand-bg group-hover:text-[#050602] transition-colors duration-500">
                  Reaction
                </span>

                <span className="relative z-10 mt-2 text-brand-bg/40 group-hover:text-[#050602] transition-colors duration-500">
                  ✦
                </span>
            </motion.button>
          </div>
          
          <div className="mt-24 flex flex-col items-center gap-4">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 60 }}
              transition={{ duration: 1 }}
              className="w-[1px] bg-gradient-to-b from-brand-bg/50 to-transparent" 
            />
            <span className="font-lato text-[9px] uppercase tracking-[0.6em] text-brand-soft/30 font-bold"> 
              Sequence Complete 
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessReactor;