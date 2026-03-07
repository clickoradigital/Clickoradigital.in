import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import LeadModal from './LeadModal';

// --- HELPER COMPONENT: 45-Degree Circuit Path & Data Pulse ---
const CircuitLine = ({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g>
    <path d={path} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
    <circle cx={endX} cy={endY} r="5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <circle cx={endX} cy={endY} r="2" fill="rgba(255,255,255,0.15)" />
    <motion.path
      d={path}
      fill="none"
      stroke="#e8f4dc" 
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathOffset: [0, 1],
        opacity: [0, 1, 1, 0] 
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.9, 1] 
      }}
      // Performance: Hint to the browser that these properties will animate infinitely
      style={{ 
        filter: "drop-shadow(0px 0px 8px rgba(232,244,220,0.8))",
        willChange: "stroke-dashoffset, opacity" 
      }}
    />
  </g>
);

const ProcessReactor: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;
  
  const trackRef = useRef<HTMLDivElement>(null);

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  
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
     <>
    // SEO & A11y: Added aria-labelledby to link the section to its main heading
    <section aria-labelledby="reactor-heading" className="relative bg-[#2A311F] py-24 md:py-40 overflow-hidden rounded-[2rem] md:rounded-[4rem] mx-2 sm:mx-4 my-10">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      {/* A11y: aria-hidden hides purely decorative elements from screen readers */}
      <motion.div 
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#b6c99c] rounded-full blur-[100px] md:blur-[120px] pointer-events-none will-change-transform"
      />
      <motion.div 
        aria-hidden="true"
        animate={{ scale: [1, 1.5, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-0 w-80 h-80 md:w-[30rem] md:h-[30rem] bg-[#cfe1bb] rounded-full blur-[120px] md:blur-[150px] pointer-events-none will-change-transform"
      />

      {/* --- ANIMATED 45-DEGREE CIRCUIT BOARD LAYER --- */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 opacity-50 mix-blend-screen hidden md:block">
        <svg viewBox="0 0 1920 2000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <CircuitLine path="M 100,2100 L 100,1500 L 300,1300 L 300,800 L 350,750" endX={350} endY={750} duration={6} delay={0} />
          <CircuitLine path="M 250,2100 L 250,1700 L 450,1500 L 450,1000 L 500,950" endX={500} endY={950} duration={5.5} delay={2} />
          <CircuitLine path="M -50,1100 L 150,1100 L 250,1000 L 250,500 L 300,450" endX={300} endY={450} duration={7} delay={1} />
          <CircuitLine path="M 400,-100 L 400,250 L 500,350 L 500,600 L 550,650" endX={550} endY={650} duration={5} delay={3.5} />
          <CircuitLine path="M 600,2100 L 600,1800 L 700,1700 L 700,1300 L 750,1250" endX={750} endY={1250} duration={4.5} delay={1.5} />

          <CircuitLine path="M 1820,2100 L 1820,1500 L 1620,1300 L 1620,800 L 1570,750" endX={1570} endY={750} duration={6.5} delay={0.5} />
          <CircuitLine path="M 1670,2100 L 1670,1700 L 1470,1500 L 1470,1000 L 1420,950" endX={1420} endY={950} duration={5} delay={2.5} />
          <CircuitLine path="M 1970,1100 L 1770,1100 L 1670,1000 L 1670,500 L 1620,450" endX={1620} endY={450} duration={7.5} delay={1.5} />
          <CircuitLine path="M 1520,-100 L 1520,250 L 1420,350 L 1420,600 L 1370,650" endX={1370} endY={650} duration={4.8} delay={4} />
          <CircuitLine path="M 1320,2100 L 1320,1800 L 1220,1700 L 1220,1300 L 1170,1250" endX={1170} endY={1250} duration={5.2} delay={0.8} />
        </svg>
      </div>

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen block md:hidden">
        <svg viewBox="0 0 400 2000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <CircuitLine path="M 350,2100 L 350,1600 L 250,1500 L 250,900 L 200,850" endX={200} endY={850} duration={6} delay={0} />
          <CircuitLine path="M 300,2100 L 300,1800 L 150,1650 L 150,1100 L 100,1050" endX={100} endY={1050} duration={7} delay={2} />
          <CircuitLine path="M 400,1200 L 300,1100 L 250,1050 L 250,550 L 200,500" endX={200} endY={500} duration={5.5} delay={1} />
          <CircuitLine path="M 400,-100 L 400,300 L 250,450 L 250,700 L 200,750" endX={200} endY={750} duration={6.5} delay={3} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-20">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-32 text-left md:text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: studioEase }}
            className="inline-flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-black/10 backdrop-blur-sm"
          >
            <div className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cfe1bb] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#e8f4dc]"></span>
            </div>
            <span className="font-lato text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#e8f4dc] opacity-80 font-bold">System Sequence</span>
          </motion.div>
          
          <div className="overflow-hidden">
            {/* Added ID to connect to section's aria-labelledby */}
            <motion.h2 
              id="reactor-heading"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, ease: studioEase }}
              className="font-glyseric text-[4.5rem] md:text-[7rem] lg:text-[9rem] text-[#e8f4dc] leading-[0.9] md:leading-none tracking-tighter"
            >
              Digital <br /> <span className="italic font-light text-[#88976c]">Reactor.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- TRACK & STEPS WRAPPER --- */}
        <div ref={trackRef} className="relative py-10 md:py-20">
          
          <div aria-hidden="true" className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 z-0">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 w-[2px] md:w-[3px] bg-[#e8f4dc] blur-sm origin-top h-full -translate-x-[0.5px] md:-translate-x-[1px]"
            />
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 w-full bg-gradient-to-b from-white via-[#b6c99c] to-transparent origin-top h-full z-10"
            />
          </div>

          {/* SEO & A11y: Changed div to ordered list (<ol>) because this is a sequential process */}
          <ol className="flex flex-col gap-32 md:gap-48 lg:gap-64 relative z-10 list-none m-0 p-0">
            {steps.map((step, i) => (
              // Changed to <li>
              <li 
                key={i} 
                className={`relative flex flex-col md:flex-row items-center justify-between group ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div aria-hidden="true" className="absolute left-[1.5rem] md:left-1/2 top-0 -translate-x-1/2 z-30 mt-2">
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: "#2A311F", borderColor: "#333" }}
                    whileInView={{ scale: 1, backgroundColor: "#e8f4dc", borderColor: "#728156" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full shadow-[0_0_20px_rgba(232,244,220,0.8)] border-[2px] md:border-[3px]"
                  />
                </div>

                <motion.div 
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`w-full md:w-[42%] flex flex-col ${i % 2 === 0 ? 'text-left md:text-right items-start md:items-end' : 'text-left items-start'} ml-16 md:ml-0 pr-4 md:pr-0`}
                >
                  <motion.span 
                    aria-hidden="true" // Screen readers shouldn't read the giant background numbers
                    animate={{ y: [10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="font-glyseric text-[7rem] md:text-[10rem] lg:text-[14rem] text-[#e8f4dc] opacity-[0.04] leading-none absolute -top-8 left-12 md:left-auto md:-top-16 lg:-top-24 select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700 will-change-transform"
                  >
                    {step.no}
                  </motion.span>

                  <div className="relative pt-2 md:pt-4 z-10">
                    <motion.span variants={itemVariants} className="font-lato text-[9px] md:text-[10px] uppercase tracking-widest text-[#b6c99c] font-bold mb-2 md:mb-3 block ">
                      {step.label}
                    </motion.span>
                    <motion.h3 variants={itemVariants} className="font-glyseric text-[2.5rem] md:text-5xl lg:text-7xl text-[#e8f4dc] mb-4 md:mb-6 tracking-tight group-hover:italic group-hover:text-white transition-all duration-500 leading-none md:leading-tight">
                      {step.title}
                    </motion.h3>
                    <motion.p variants={itemVariants} className="font-lato text-[#b6c99c] text-sm md:text-base lg:text-lg leading-relaxed max-w-[16rem] md:max-w-[20rem] lg:max-w-sm font-medium group-hover:text-[#e8f4dc] transition-colors duration-500">
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>

                <div className="hidden md:block w-[40%]" />
              </li>
            ))}
          </ol>
        </div>

        {/* --- FINAL ACTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: studioEase, delay: 0.2 }}
          className="mt-20 md:mt-32 flex flex-col items-center"
        >
          <div className="relative group cursor-pointer">
            <motion.div 
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20%] rounded-full bg-gradient-to-r from-transparent via-[#b6c99c]/30 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-transform" 
            />
            
            {/* SEO & A11y: Changed from <button> to an <a> tag linking to #contact for proper routing */}
            <motion.button 
              onClick={()=>{setIsLeadModalOpen(true)}}
              aria-label="Initiate project reaction and contact us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-[#2A311F] flex flex-col items-center justify-center gap-1 md:gap-2 group border border-white/10 outline-none focus-visible:ring-4 focus-visible:ring-[#b6c99c]/50 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#b6c99c]"
            >
                <div className="absolute inset-0 bg-[#e8f4dc] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                
                <span className="relative z-10 font-lato text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-widest text-[#b6c99c] group-hover:text-[#728156] transition-colors duration-500">
                  Initiate
                </span>
                
                <span className="relative z-10 font-glyseric text-[2rem] md:text-4xl lg:text-5xl text-[#e8f4dc] group-hover:text-[#2A311F] transition-colors duration-500 mt-1">
                  Reaction
                </span>

                <span aria-hidden="true" className="relative z-10 mt-1 md:mt-2 text-[#88976c] group-hover:text-[#728156] transition-colors duration-500 text-xs md:text-base">
                  ✦
                </span>
            </motion.button>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-col items-center gap-3 md:gap-4">
            <motion.div 
              aria-hidden="true"
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              transition={{ duration: 1 }}
              className="w-[1px] bg-gradient-to-b from-[#b6c99c] to-transparent md:h-[60px]" 
            />
            <span className="font-lato text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#88976c] font-bold"> 
              Sequence Complete 
            </span>
          </div>
        </motion.div>

      </div>
    </section>
    <LeadModal isOpen={isLeadModalOpen} onClose={()=>{setIsLeadModalOpen(false)}}/>
   </>
  );
};

export default ProcessReactor;