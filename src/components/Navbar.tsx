import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="fixed top-2 lg:top-4 inset-x-0 z-[100] flex justify-center px-4">
      {/* Main Container: 
          On mobile, we use h-auto so it can expand.
          We keep the backdrop-blur and border here so the menu feels like an extension.
      */}
      <nav className={`relative flex flex-col w-full lg:w-[95%] max-w-7xl 
                      bg-white/90 backdrop-blur-2xl 
                      border border-[#b6c99c]/50
                      rounded-2xl lg:rounded-4xl shadow-[0_8px_30px_rgba(114,129,86,0.15)]
                      transition-all duration-500 overflow-hidden`}>

        {/* --- TOP BAR (Always Visible) --- */}
        <div className="flex w-full items-center justify-between px-6 py-1.5 lg:py-2.5">

          {/* LEFT: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 font-lato text-[11px] uppercase tracking-[0.3em] font-black text-[#2A311F]">
            <a href="#about" className="hover:text-[#728156] transition-all">About</a>
            <div className="group cursor-pointer flex items-center gap-2 hover:text-[#728156]">
              Services <span className="text-[8px] group-hover:rotate-180 transition-transform duration-300">▼</span>
            </div>
            <a href="#contact" className="hover:text-[#728156] transition-all">Contact</a>
          </div>

          {/* CENTER: Brand Identity */}
          <div className="flex items-center gap-1 cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-[110]">
            <div className="relative group">
              <img src="/logo.png" alt="Logo" className="relative h-16 md:h-18 w-auto object-contain" />
            </div>
            <div className="flex flex-col items-start lg:items-center leading-none -ml-3 lg:-ml-3">
              <span className="font-glyseric text-2xl lg:text-4xl tracking-tighter text-[#2A311F] font-black">Clickora</span>
            </div>
          </div>

          {/* RIGHT: CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 z-[110]">
            <button className="hidden md:flex group relative overflow-hidden font-lato px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white bg-[#728156] rounded-full hover:shadow-[0_4px_15px_rgba(114,129,86,0.4)] transition-all">
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-[#2A311F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative flex flex-col justify-center items-end w-10 h-10 gap-1.5"
            >
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-[2px] bg-[#2A311F] origin-center rounded-full transition-colors"
              />
              <motion.div
                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "16px" }}
                className="h-[2px] bg-[#728156] rounded-full transition-colors"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-[2px] bg-[#2A311F] origin-center rounded-full transition-colors"
              />
            </button>
          </div>
        </div>

        {/* --- MOBILE CONTENT (Animated Extension) --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="px-8 pb-10 lg:hidden flex flex-col items-center text-center"
            >
              {/* Background Decorative Glows (Inside the extension) */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#e8f4dc]/40 pointer-events-none -z-10" />

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 relative z-10 py-10 w-full border-t border-[#b6c99c]/30">
                {['About', 'Services', 'The Work', 'Contact'].map((item, i) => (
                  <motion.a
                    key={item}
                    custom={i}
                    variants={linkVariants}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-glyseric text-[#2A311F] tracking-tighter hover:text-[#728156] transition-colors"
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
                <p className="font-lato text-lg font-black text-[#728156]">hello@clickora.com</p>
                <div className="text-[#88976c] text-xl animate-pulse mt-2">✦</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;