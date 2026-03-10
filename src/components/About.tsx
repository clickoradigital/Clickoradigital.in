import React from 'react';
import { motion } from 'framer-motion';

const AboutClickora: React.FC = () => {
  // Adding 'as const' here fixes the TypeScript "Easing" error
  const transition = { 
    duration: 1, 
    ease: [0.22, 1, 0.36, 1] 
  } as const;

  const cardClasses = "p-8 md:p-12 rounded-[40px] border border-[#d1e2b8] bg-white shadow-[0_15px_40px_-15px_rgba(114,129,86,0.1)] flex flex-col justify-center transition-all duration-500 hover:shadow-xl";

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#F9FBF7] overflow-hidden text-[#1A1F13] rounded-2xl">
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* --- LEFT TOP: Strategy --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className={cardClasses}
          >
            <span className="font-lato text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-[#5b6a44] font-black mb-6 block border-b border-[#728156]/20 pb-2">Our Strategy</span>
            <p className="font-lato text-lg md:text-xl leading-relaxed font-bold text-[#1A1F13]">
              We help businesses grow online by creating powerful digital strategies that attract the right audience and generate real results.
            </p>
          </motion.div>

          {/* --- CENTER: THE IDENTITY --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className="md:row-span-2 flex flex-col items-center justify-center text-center p-12 bg-[#e8f4dc] rounded-[50px] border-2 border-[#728156]/30 shadow-inner"
          >
            <div className="mb-10 transition-transform duration-500 hover:scale-110">
               <img 
                src="/logo.png" 
                alt="Clickora Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
               />
            </div>
            
            <h2 className="font-glyseric text-6xl md:text-8xl leading-[0.8] mb-6 tracking-tighter text-[#1A1F13]">
              About <br /> <span className="text-[#728156] italic font-light">Clickora</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#728156] my-6" />
            <p className="font-lato text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-[#5b6a44] font-black">
              Digital Marketing Studio
            </p>
          </motion.div>

          {/* --- RIGHT TOP: Focus --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className={cardClasses}
          >
            <span className="font-lato text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-[#5b6a44] font-black mb-6 block border-b border-[#728156]/20 pb-2">Our Focus</span>
            <p className="font-lato text-lg md:text-xl leading-relaxed font-bold text-[#1A1F13]">
              Helping brands build a strong online presence through smart marketing solutions and creative strategies.
            </p>
          </motion.div>

          {/* --- LEFT BOTTOM: Solutions --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Fix: Spread the transition and add specific delay
            transition={{ ...transition, delay: 0.2 }}
            className="p-8 md:p-12 rounded-[40px] bg-[#1A1F13] flex flex-col justify-center shadow-2xl"
          >
            <span className="font-lato text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-[#cfe1bb] font-black mb-6 block">Solutions</span>
            <p className="font-lato text-lg md:text-xl leading-relaxed font-medium text-[#e8f4dc]">
              We provide customized solutions based on each client’s goals and industry. We believe every business deserves effective digital marketing.
            </p>
          </motion.div>

          {/* --- RIGHT BOTTOM: Mission --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="p-8 md:p-12 rounded-[40px] bg-[#728156] flex flex-col justify-center shadow-xl"
          >
            <span className="font-lato text-[12px] md:text-[14px] uppercase tracking-[0.3em] text-[#e8f4dc] font-black mb-6 block">Our Mission</span>
            <p className="font-glyseric text-2xl md:text-3xl leading-tight text-white">
              "To help businesses grow faster and stand out in the digital world."
            </p>
          </motion.div>

          {/* --- FOOTER: Final CTA --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.4 }}
            className="md:col-span-3 mt-8 p-12 md:p-16 bg-white border-2 border-[#e8f4dc] rounded-[50px] text-center relative overflow-hidden group shadow-md"
          >
            <h3 className="font-glyseric text-4xl md:text-6xl tracking-tighter text-[#1A1F13] relative z-10">
              Let’s build your <span className="text-[#728156] italic">online success</span> together.
            </h3>
            <div className="absolute inset-0 bg-[#e8f4dc]/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutClickora;