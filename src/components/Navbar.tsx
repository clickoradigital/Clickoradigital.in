import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import LeadModal from './LeadModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const menuVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    opened: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    opened: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <header className="fixed top-2 md:top-4 inset-x-0 z-[100] flex justify-center px-4">
      {/* Main Container: 
          Shifted lg: to md: so Tablet matches Desktop 
      */}
      <nav 
        aria-label="Main Navigation"
        className={`relative flex flex-col w-full md:w-[95%] max-w-7xl 
                      bg-white/90 backdrop-blur-2xl 
                      border border-[#b6c99c]/50
                      rounded-2xl md:rounded-4xl shadow-[0_8px_30px_rgba(114,129,86,0.15)]
                      transition-all duration-500 overflow-hidden will-change-transform`}
      >

        {/* --- TOP BAR (Always Visible) --- */}
        <div className="flex w-full items-center justify-between px-6 py-1.5 md:py-2.5">

          {/* LEFT: Desktop/Tab Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 font-lato text-[10px] lg:text-[11px] uppercase tracking-[0.3em] font-black text-[#2A311F]">
            <a href="#about" className="hover:text-[#728156] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-sm">About</a>
            <a href="#services" className="hover:text-[#728156] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-sm">Services</a>
            <a href="#work" className="hover:text-[#728156] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-sm">Work</a>
            <a href="#contact" className="hover:text-[#728156] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-sm">Contact</a>
          </div>

          {/* CENTER: Brand Identity */}
          <a 
            href="/" 
            aria-label="Clickora Home"
            className="flex items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2 z-[110] outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-lg"
          >
            <div aria-hidden="true" className="relative group">
              <img src="/logo.png" alt="Clickora Logo" width="72" height="72" className="relative h-16 md:h-18 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-start md:items-center leading-none -ml-3 md:-ml-3">
              <span className="font-glyseric text-2xl md:text-3xl lg:text-4xl tracking-tighter text-[#2A311F] font-black">Clickora</span>
            </div>
          </a>

          {/* RIGHT: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 lg:gap-6 z-[110]">
            
            {/* WhatsApp Icon (Hidden on mobile, visible on Tab/Desktop) */}
            <a 
              href="https://wa.me/917842016626" // Replace with real number
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#e8f4dc] text-[#728156] hover:bg-[#728156] hover:text-white transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#728156]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            <button onClick={()=> setIsLeadModalOpen(true)}  aria-label="Start a new project" className="hidden md:flex group relative overflow-hidden font-lato px-5 lg:px-6 py-2.5 text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-white bg-[#728156] rounded-full hover:shadow-[0_4px_15px_rgba(114,129,86,0.4)] transition-all outline-none focus-visible:ring-4 focus-visible:ring-[#b6c99c]">
              <span className="relative z-10">Start a Project</span>
              <div aria-hidden="true" className="absolute inset-0 bg-[#2A311F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            {/* Hamburger Menu Icon (Mobile Only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden relative flex flex-col justify-center items-end w-10 h-10 gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-md"
            >
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-[2px] bg-[#2A311F] origin-center rounded-full transition-colors will-change-transform"
              />
              <motion.div
                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "16px" }}
                className="h-[2px] bg-[#728156] rounded-full transition-colors will-change-transform"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-[2px] bg-[#2A311F] origin-center rounded-full transition-colors will-change-transform"
              />
            </button>
          </div>
        </div>

        {/* --- MOBILE CONTENT (Animated Extension) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="px-8 pb-10 md:hidden flex flex-col items-center text-center will-change-transform"
            >
              {/* Background Decorative Glows (Inside the extension) */}
              <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full bg-[#e8f4dc]/40 pointer-events-none -z-10" />

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 relative z-10 py-10 w-full border-t border-[#b6c99c]/30">
                {['About', 'Services', 'Work', 'Contact'].map((item, i) => (
                  <motion.a
                    key={item}
                    custom={i}
                    variants={linkVariants}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-glyseric text-[#2A311F] tracking-tighter hover:text-[#728156] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-lg"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Card Footer Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full pt-6 border-t border-[#b6c99c]/30 flex flex-col items-center gap-2"
              >
                <p className="font-lato text-[9px] uppercase tracking-[0.4em] text-[#88976c] font-bold">Based in Hyderabad</p>
                <a href="mailto:hello@clickora.com" className="font-lato text-lg font-black text-[#728156] outline-none focus-visible:ring-2 focus-visible:ring-[#728156] rounded-sm">hello@clickora.com</a>
                <div aria-hidden="true" className="text-[#88976c] text-xl animate-pulse mt-2">✦</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <LeadModal isOpen={isLeadModalOpen} onClose={()=> setIsLeadModalOpen(false)} />
    </header>
  );
};

export default Navbar;