import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LeadModal from './LeadModal';

// Make sure to import the BackgroundCircuit from your illustrations file!
import { BackgroundCircuit } from './ServiceIllustrations'; 

const ContactFooter: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;

  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

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

  const socials = [
  { name: "Instagram", url: "https://instagram.com/clickoradigital.in" },
  { name: "Facebook", url: "https://facebook.com/clickoradigital.in" },
  { name: "LinkedIn", url: "https://linkedin.com/in/clickoradigital" },
  { name: "Youtube", url: "https://www.youtube.com/@ClickoraDigital" }
];

  return (
    // We wrap the footer in a padded container to match the rounded edges of the dark Process section
    <div className="px-2 lg:px-4 pb-2 lg:pb-4 pt-10 bg-[#e8f4dc]">
      <footer id="contact" className="relative bg-[#2A311F] pt-24 lg:pt-32 pb-10 overflow-hidden rounded-[2rem] lg:rounded-[4rem] text-[#e8f4dc] shadow-2xl z-10">
        
        {/* --- AMBIENT GLOWS --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#728156]/40 via-transparent to-transparent opacity-50 pointer-events-none blur-[80px] z-0" />
        
        {/* --- DESKTOP CIRCUITS (Hidden on Mobile) --- */}
        {/* Lowered opacity slightly so they don't overpower the white text */}
        <div className="absolute left-0 top-0 bottom-0 w-[400px] pointer-events-none z-0 hidden lg:block opacity-40">
          <svg viewBox="0 0 400 1080" className="w-full h-full" preserveAspectRatio="xMinYMid slice">
            <BackgroundCircuit path="M -50,150 L 150,150 L 250,250 L 250,600 L 300,650" endX={300} endY={650} duration={7} delay={0} />
            <BackgroundCircuit path="M 100,-50 L 100,300 L 150,350 L 150,800 L 200,850" endX={200} endY={850} duration={8.5} delay={2} />
            <BackgroundCircuit path="M -100,500 L 50,500 L 150,600 L 150,900 L 100,950" endX={100} endY={950} duration={6} delay={4} />
          </svg>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-[400px] pointer-events-none z-0 hidden lg:block opacity-40">
          <svg viewBox="0 0 400 1080" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
            <BackgroundCircuit path="M 400,200 L 150,200 L 50,300 L 50,700 L 0,750" endX={0} endY={750} duration={8} delay={1} />
            <BackgroundCircuit path="M 200,-50 L 200,400 L 100,500 L 100,900 L 50,950" endX={50} endY={950} duration={7.5} delay={3.5} />
            <BackgroundCircuit path="M 350,800 L 250,800 L 150,900 L 150,1050 L 100,1100" endX={100} endY={1100} duration={5} delay={1.5} />
          </svg>
        </div>

        {/* --- MOBILE CIRCUITS (Hidden on Desktop) --- */}
        <div className="absolute inset-0 pointer-events-none z-0 block lg:hidden opacity-30">
          <svg viewBox="0 0 400 1000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Custom paths tailored to wrap around the stacked mobile layout */}
            <BackgroundCircuit path="M -50,100 L 50,100 L 100,150 L 100,350 L 150,400" endX={150} endY={400} duration={6} delay={0} />
            <BackgroundCircuit path="M 450,500 L 300,500 L 250,550 L 250,800 L 200,850" endX={200} endY={850} duration={7} delay={1.5} />
            <BackgroundCircuit path="M 200,-50 L 200,150 L 250,200 L 250,450 L 300,500" endX={300} endY={500} duration={8} delay={3} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
          
          {/* --- TOP MARQUEE (Infinite Scroll) --- */}
          <div className="flex overflow-hidden border-b border-[#728156]/30 pb-10 mb-16 lg:mb-20 mask-image-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex whitespace-nowrap gap-8 items-center"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 lg:gap-8">
                  <span className="font-lato text-[10px] lg:text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">Digital Alchemy</span>
                  <span className="text-[#728156]">✦</span>
                  <span className="font-lato text-[10px] lg:text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">High-Performance Web</span>
                  <span className="text-[#728156]">✦</span>
                  <span className="font-lato text-[10px] lg:text-[12px] uppercase tracking-[0.4em] text-[#b6c99c] font-black">Brand Engineering</span>
                  <span className="text-[#728156]">✦</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- MAIN CALL TO ACTION --- */}
          {/* Mobile fix: Adjusted gap, center-aligned button on mobile */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-16 mb-20 lg:mb-40">
            <div>
              <motion.span 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                className="font-lato text-[9px] lg:text-[10px] uppercase tracking-widest text-[#b6c99c] font-bold block mb-4 lg:mb-6"
              >
                Got a vision? Let's engineer it.
              </motion.span>
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                /* Mobile fix: Custom fluid typography sizing so it doesn't break the container */
                className="font-glyseric text-[3.5rem] leading-[0.9] sm:text-6xl md:text-8xl lg:text-[10rem] lg:leading-[0.85] tracking-tighter"
              >
                Start a <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#e8f4dc] to-[#728156]">Project.</span>
              </motion.h2>
            </div>

            {/* Giant Circular Button */}
            <motion.button 
              onClick={()=>{setIsLeadModalOpen(true)}}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: studioEase }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              /* Mobile fix: Shrunk base size to w-40 h-40, centered it naturally in the flex column */
              className="group relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-[#e8f4dc] flex flex-col justify-center items-center text-[#2A311F] overflow-hidden shadow-[0_0_40px_rgba(232,244,220,0.15)] flex-shrink-0 self-center lg:self-auto"
            >
              <div className="absolute inset-0 bg-[#b6c99c] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
              <span className="relative z-10 font-lato text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] mb-1 lg:mb-2 group-hover:text-[#2A311F] transition-colors duration-500">
                Initiate
              </span>
              <span className="relative z-10 font-glyseric text-3xl sm:text-4xl lg:text-5xl tracking-tighter group-hover:text-[#2A311F] transition-colors duration-500">
                Contact
              </span>
            </motion.button>
          </div>

          {/* --- INFO GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-12 lg:pt-16 border-t border-[#728156]/30">
            
            {/* Column 1: Headquarters */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              <h4 className="font-lato text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-4 lg:mb-6">Headquarters</h4>
              <p className="font-lato text-sm text-[#b6c99c] leading-relaxed font-medium mb-4">
                Hyderabad, Telangana <br />
                India, 500001
              </p>
              <p className="font-lato text-[9px] lg:text-[10px] uppercase tracking-widest text-[#88976c] font-bold">
                Local Time — {time || '...'}
              </p>
            </motion.div>

            {/* Column 2: Connect */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}>
              <h4 className="font-lato text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-4 lg:mb-6">Connect</h4>
              <ul className="flex flex-col gap-3 font-lato text-sm font-medium">
                <li>
                  <a href="mailto:hello@clickora.com" className="text-[#e8f4dc] hover:text-[#b6c99c] transition-colors">hello@clickora.com</a>
                </li>
                <li>
                  <a href="tel:+917842016626" className="text-[#b6c99c] hover:text-[#e8f4dc] transition-colors">+91 7842016626</a>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Socials */}
            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUpVariants}
>
  <h4 className="font-lato text-[10px] uppercase tracking-[0.3em] text-[#728156] font-black mb-4 lg:mb-6">
    Socials
  </h4>

  <ul className="flex flex-col gap-3 font-lato text-sm font-medium">
    {socials.map((social, i) => (
      <li key={i}>
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b6c99c] hover:text-[#e8f4dc] flex items-center gap-2 group transition-colors w-max"
        >
          {social.name}
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#728156] text-[10px]">
            ↗
          </span>
        </a>
      </li>
    ))}
  </ul>
</motion.div>

            {/* Column 4: Back to Top */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="flex lg:justify-end items-end sm:col-span-2 lg:col-span-1 mt-4 lg:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 font-lato px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#2A311F] bg-[#b6c99c] rounded-full hover:bg-[#e8f4dc] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Back to Top
                <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              </button>
            </motion.div>

          </div>

          {/* --- BOTTOM COPYRIGHT BAR --- */}
          <div className="mt-16 lg:mt-20 pt-8 border-t border-[#728156]/20 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-4 text-center">
            <span className="font-lato text-[9px] lg:text-[10px] uppercase tracking-[0.3em] text-[#728156] font-bold">
              © {new Date().getFullYear()} Clickora Digital.
            </span>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 font-lato text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#88976c] font-bold">
              <a href="/privacy-policy" className="hover:text-[#e8f4dc] transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-[#e8f4dc] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
       <LeadModal isOpen={isLeadModalOpen} onClose={()=>{setIsLeadModalOpen(false)}}/>
    </div>
  );
};

export default ContactFooter;