import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactFooter: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;

  // Real-time clock for the Hyderabad HQ
  const [time, setTime] = useState<string>('');
  
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    const initialTimeout = setTimeout(updateTime, 0);
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: studioEase } }
  };

  return (
    // We wrap the footer in a padded container to match the rounded edges of the dark Process section
    <div className="px-2 lg:px-4 pb-2 lg:pb-4 pt-10 bg-[#e8f4dc]">
      <footer id="contact" className="relative bg-[#2A311F] pt-24 lg:pt-32 pb-10 overflow-hidden rounded-[2rem] lg:rounded-[4rem] text-[#e8f4dc] shadow-2xl z-10">
        
        {/* --- AMBIENT GLOWS --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#728156]/40 via-transparent to-transparent opacity-50 pointer-events-none blur-[80px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          
          {/* --- TOP MARQUEE (Infinite Scroll) --- */}
          <div className="flex overflow-hidden border-b border-[#728156]/30 pb-10 mb-20 mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex whitespace-nowrap gap-8 items-center"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                  <span className="font-lato  text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">Digital Alchemy</span>
                  <span className="text-[#728156]">✦</span>
                  <span className="font-lato  text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">High-Performance Web</span>
                  <span className="text-[#728156]">✦</span>
                  <span className="font-lato  text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">Brand Engineering</span>
                  <span className="text-[#728156]">✦</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- MAIN CALL TO ACTION --- */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24 lg:mb-40">
            <div>
              <motion.span 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                className="font-lato  text-[10px] uppercase tracking-widest text-[#b6c99c] font-bold block mb-6"
              >
                Got a vision? Let's engineer it.
              </motion.span>
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                className="font-glyseric  text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter"
              >
                Start a <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#e8f4dc] to-[#728156]">Project.</span>
              </motion.h2>
            </div>

            {/* Giant Circular Button */}
            <motion.a 
              href="mailto:hello@clickora.com"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: studioEase }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-[#e8f4dc] flex flex-col justify-center items-center text-[#2A311F] overflow-hidden shadow-[0_0_40px_rgba(232,244,220,0.15)] flex-shrink-0"
            >
              <div className="absolute inset-0 bg-[#b6c99c] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10 font-lato  text-[10px] font-black uppercase tracking-[0.3em] mb-2 group-hover:text-[#2A311F] transition-colors duration-500">
                Initiate
              </span>
              <span className="relative z-10 font-glyseric  text-3xl lg:text-5xl tracking-tighter group-hover:text-[#2A311F] transition-colors duration-500">
                Contact
              </span>
            </motion.a>
          </div>

          {/* --- INFO GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-[#728156]/30">
            
            {/* Column 1: Headquarters */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              <h4 className="font-lato  text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-6">Headquarters</h4>
              <p className="font-lato  text-sm text-[#b6c99c] leading-relaxed font-medium mb-4">
                Hyderabad, Telangana <br />
                India, 500001
              </p>
              <p className="font-lato  text-[10px] uppercase tracking-widest text-[#88976c] font-bold">
                Local Time — {time || '...'}
              </p>
            </motion.div>

            {/* Column 2: Connect */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              <h4 className="font-lato  text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-6">Connect</h4>
              <ul className="flex flex-col gap-3 font-lato  text-sm font-medium">
                <li>
                  <a href="mailto:hello@clickora.com" className="text-[#e8f4dc] hover:text-[#b6c99c] transition-colors">hello@clickora.com</a>
                </li>
                <li>
                  <a href="tel:+910000000000" className="text-[#b6c99c] hover:text-[#e8f4dc] transition-colors">+91 00000 00000</a>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Socials */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              <h4 className="font-lato  text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-6">Socials</h4>
              <ul className="flex flex-col gap-3 font-lato  text-sm font-medium">
                {['Instagram', 'Twitter / X', 'LinkedIn', 'Dribbble'].map((social, i) => (
                  <li key={i}>
                    <a href="#" className="text-[#b6c99c] hover:text-[#e8f4dc] flex items-center gap-2 group transition-colors">
                      {social}
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#728156] text-[10px]">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Back to Top */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="flex lg:justify-end items-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 font-lato  px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#2A311F] bg-[#b6c99c] rounded-full hover:bg-[#e8f4dc] transition-all duration-300"
              >
                Back to Top
                <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              </button>
            </motion.div>

          </div>

          {/* --- BOTTOM COPYRIGHT BAR --- */}
          <div className="mt-20 pt-8 border-t border-[#728156]/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-lato  text-[10px] uppercase tracking-[0.3em] text-[#728156] font-bold">
              © {new Date().getFullYear()} Clickora Digital.
            </span>
            <div className="flex gap-6 font-lato  text-[10px] uppercase tracking-[0.2em] text-[#88976c] font-bold">
              <a href="#" className="hover:text-[#e8f4dc] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#e8f4dc] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;