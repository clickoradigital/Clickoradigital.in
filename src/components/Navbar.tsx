import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      clipPath: "circle(0% at 90% 10%)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
    },
    opened: { 
      opacity: 1, 
      clipPath: "circle(150% at 90% 10%)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
    }
  };
const linkVariants: Variants = {
  closed: { 
    y: 20, 
    opacity: 0 
  },
  opened: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: 0.2 + i * 0.1, 
      duration: 0.5, 
      ease: "easeOut" as const // Add 'as const' here
    }
  })
};

  return (
    <header className="fixed top-0 inset-x-0 z-[100] flex justify-center lg:pt-0">
      <nav className="relative flex w-full lg:w-[95%] max-w-7xl items-center justify-between px-6 py-4 
                      bg-black/40 backdrop-blur-xl 
                      border-b border-white/10
                      rounded-none lg:rounded-b-[30px]
                      transition-all duration-300">
        
        {/* --- LEFT: Desktop Nav --- */}
        <div className="hidden lg:flex items-center gap-10 font-lato text-[11px] uppercase tracking-[0.3em] font-bold text-brand-bg/70">
          <a href="#about" className="hover:text-brand-bg hover:tracking-[0.4em] transition-all">About</a>
          <div className="group cursor-pointer flex items-center gap-2 hover:text-brand-bg transition-all">
            Services <span className="text-[8px] group-hover:rotate-180 transition-transform">▼</span>
          </div>
          <a href="#contact" className="hover:text-brand-bg hover:tracking-[0.4em] transition-all">Contact</a>
        </div>

        {/* --- CENTER: Brand Identity (Luminous Glow) --- */}
        <div className="flex items-center gap-1 cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-[110]">
          <div className="relative group">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-brand-soft/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <img src="/logo.png" alt="Logo" className="relative h-9 md:h-11 w-auto object-contain brightness-110" />
          </div>
          <div className="flex flex-col items-start lg:items-center leading-none -ml-1 lg:-ml-3">
            <span className="font-glyseric text-xl lg:text-2xl tracking-tighter text-brand-bg">Clickora</span>
            {/* <span className="font-lato text-[7px] lg:text-[8px] uppercase tracking-[0.5em] text-brand-soft/60 mt-0.5">Digital Agency</span> */}
          </div>
        </div>

        {/* --- RIGHT: CTA & Mobile Toggle --- */}
        <div className="flex items-center gap-6">
          <button className="hidden md:flex group relative overflow-hidden font-lato px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-brand-primary bg-brand-bg rounded-xl hover:shadow-[0_0_20px_rgba(232,244,220,0.3)] transition-all">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </button>

          {/* Hamburger (Circuit Style) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[110] flex flex-col justify-center items-end w-10 h-10 gap-1.5"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 7, width: "24px" } : { rotate: 0, y: 0, width: "20px" }}
              className="h-0.3 bg-brand-bg origin-center rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "16px" }}
              className="h-0.3 bg-brand-soft rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -7, width: "24px" } : { rotate: 0, y: 0, width: "20px" }}
              className="h-0.3 bg-brand-bg origin-center rounded-full" 
            />
          </button>
        </div>

        {/* --- MOBILE OVERLAY (Dark Alchemy Theme) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed inset-0 h-screen w-full bg-[#050602] flex flex-col justify-center px-10 z-[105] lg:hidden"
            >
              {/* Background Glows for Menu */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[10%] left-[-10%] w-64 h-64 bg-brand-soft/5 blur-[100px] rounded-full" />

              <div className="flex flex-col gap-8 relative z-10">
                {['About', 'Services', 'The Work', 'Contact'].map((item, i) => (
                  <motion.a
                    key={item}
                    custom={i}
                    variants={linkVariants}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-glyseric text-brand-bg/90 tracking-tighter hover:text-brand-soft transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="mt-20 border-t border-white/10 pt-10"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-lato text-[9px] uppercase tracking-[0.4em] text-brand-soft/40 mb-2">Based in Hyderabad</p>
                    <p className="font-lato text-lg font-bold text-brand-bg">hello@clickora.com</p>
                  </div>
                  <div className="text-brand-soft text-2xl animate-pulse">✦</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;