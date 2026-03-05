import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

// --- HELPER COMPONENT: 45-Degree Circuit Path & Data Pulse for Cards ---
const CardCircuit = ({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g>
    <path d={path} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />
    <circle cx={endX} cy={endY} r="4" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
    <circle cx={endX} cy={endY} r="1.5" fill="rgba(0,0,0,0.1)" />
    <motion.path
      d={path}
      fill="none"
      stroke="rgba(0,0,0,0.15)" // Darker pulse for the light card background
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
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
    />
  </g>
);

const ServicesStudio: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;

  // Real-time clock for the footer
  const [time, setTime] = useState<string>('');
 useEffect(() => {
    // We put the time-fetching logic in an async-like wrapper or interval 
    // to avoid synchronous state updates during the render phase.
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    // Call it once immediately, but safely deferred
    const initialTimeout = setTimeout(updateTime, 0);
    
    // Then start the interval
    const interval = setInterval(updateTime, 1000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const cardVariants: Variants = {
    initial: { y: 40, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: studioEase } 
    }
  };

  const services = [
    { 
      id: "01", 
      title: "Designing", 
      tag: "UI/UX • Branding", 
      details: "High-fidelity visual systems that bridge the gap between human emotion and digital interfaces.",
      gridClass: "lg:col-span-2 lg:row-span-1",
      // Custom circuit paths that look good on horizontal cards
      circuits: [
        { path: "M 0,200 L 100,200 L 150,250 L 300,250", endX: 300, endY: 250, dur: 3, del: 0 },
        { path: "M 0,100 L 50,100 L 100,150 L 250,150", endX: 250, endY: 150, dur: 3.5, del: 1.5 }
      ]
    },
    { 
      id: "02", 
      title: "Development", 
      tag: "Next.js • Shopify", 
      details: "Clean code architectures engineered for extreme speed and seamless scalability.",
      gridClass: "lg:col-span-1 lg:row-span-2",
      // Custom circuit paths for the tall vertical card (flows top-down)
      circuits: [
        { path: "M 150,0 L 150,100 L 100,150 L 100,300", endX: 100, endY: 300, dur: 4, del: 0 },
        { path: "M 250,0 L 250,200 L 200,250 L 200,450", endX: 200, endY: 450, dur: 4.5, del: 2 }
      ]
    },
    { 
      id: "03", 
      title: "Marketing", 
      tag: "Ads • Growth", 
      details: "Precision-targeted campaigns designed to dominate search and social landscapes.",
      gridClass: "lg:col-span-2 lg:row-span-1",
       // Custom circuit paths for horizontal bottom card (flows bottom-up)
      circuits: [
        { path: "M 300,400 L 300,300 L 250,250 L 150,250", endX: 150, endY: 250, dur: 3.2, del: 0.5 },
        { path: "M 400,400 L 400,200 L 350,150 L 200,150", endX: 200, endY: 150, dur: 3.8, del: 2 }
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#728156] overflow-hidden text-brand-primary">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 lg:mb-32 gap-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block font-lato text-[10px] uppercase tracking-[0.8em] mb-6 bg-brand-primary text-white px-3 py-1"
            >
              Capabilities
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: studioEase }}
                className="font-glyseric text-6xl md:text-8xl leading-[0.9] tracking-tighter"
              >
                Crafting <br />
                <span className="italic font-light opacity-30">Distinction.</span>
              </motion.h2>
            </div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-lato text-sm lg:text-base max-w-xs opacity-60 leading-relaxed lg:text-right"
          >
            We don't just build; we engineer competitive advantages through three core pillars of digital excellence.
          </motion.p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className={`group relative p-10 lg:p-14 bg-white border border-black/[0.05] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] ${service.gridClass}`}
            >
              {/* --- The Circuit Hover Reveal Layer --- */}
              <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <svg viewBox="0 0 500 500" className="w-full h-full object-cover">
                  {service.circuits.map((c, i) => (
                    <CardCircuit key={i} path={c.path} endX={c.endX} endY={c.endY} duration={c.dur} delay={c.del} />
                  ))}
                </svg>
              </div>

              {/* Animated Corner Element (kept for extra flair) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 scale-0 group-hover:scale-150 transition-transform duration-700 ease-studioEase pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-lato text-[10px] font-black uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                    {service.id} // {service.tag}
                  </span>
                  <div className="w-10 h-[1px] bg-brand-primary/20 group-hover:w-20 group-hover:bg-brand-primary transition-all duration-500" />
                </div>
                
                <h3 className="font-glyseric text-4xl lg:text-6xl tracking-tighter mb-6 group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="font-lato text-base lg:text-lg opacity-60 group-hover:opacity-100 max-w-sm transition-opacity duration-500 leading-relaxed">
                  {service.details}
                </p>
                
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   <span className="font-lato text-[10px] uppercase font-bold tracking-widest">Explore Expertise</span>
                   <div className="w-6 h-6 rounded-full border border-brand-primary flex items-center justify-center text-[10px]">→</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER: Studio Sign-off --- */}
        <div className="mt-24 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex gap-6 font-lato text-[10px] uppercase tracking-[0.4em] opacity-40">
              <span>HQ / Hyderabad</span>
              <span>Global / Remote</span>
            </div>
            <p className="font-lato text-[9px] uppercase tracking-[0.2em] text-brand-primary/60 font-bold">
              Standard Time — {time || '...'} IST
            </p>
          </div>

          <div className="hidden lg:block h-[1px] flex-grow mx-20 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-black/[0.03] rounded-full border border-black/[0.05]">
              <div className="flex -space-x-2">
                <div className="w-4 h-4 rounded-full border border-white bg-gray-200" />
                <div className="w-4 h-4 rounded-full border border-white bg-gray-400" />
                <div className="w-4 h-4 rounded-full border border-white bg-gray-600" />
              </div>
              <span className="font-lato text-[9px] uppercase font-black tracking-widest text-brand-primary">
                Trusted by 15+ Brands Worldwide
              </span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden flex items-center gap-3 font-lato px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-brand-bg bg-brand-primary rounded-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-primary transition-colors duration-500">
                Start the Conversation
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-brand-bg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesStudio;