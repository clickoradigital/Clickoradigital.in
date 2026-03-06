import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Placeholder image generator matching your brand ---
const PlaceholderGraphic = ({ seed }: { seed: number }) => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#b6c99c]/20 to-[#728156]/20 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    <motion.div 
      animate={{ 
        rotate: seed % 2 === 0 ? 360 : -360,
        scale: [1, 1.05, 1] 
      }}
      transition={{ duration: 20 + seed, repeat: Infinity, ease: "linear" }}
      className="w-[150%] h-[150%] rounded-[40%] border-[1px] border-[#728156]/30 absolute mix-blend-overlay"
    />
    <motion.div 
      animate={{ 
        rotate: seed % 2 === 0 ? -360 : 360,
        scale: [1, 1.1, 1] 
      }}
      transition={{ duration: 25 + seed, repeat: Infinity, ease: "linear" }}
      className="w-[120%] h-[120%] rounded-[45%] border-[1px] border-[#88976c]/30 absolute mix-blend-overlay"
    />
    <div className="font-lato  text-[#728156] opacity-40 uppercase tracking-[0.5em] text-[10px] font-black z-10">
      Visual Asset {seed}
    </div>
  </div>
);

const Works: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Slow parallax for the background ambient word
  const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -200]);

  const projects = [
    {
      id: "01",
      title: "Aura Skincare",
      category: "E-Commerce / Shopify",
      description: "A headless commerce experience blending organic visuals with sub-second page loads.",
      tags: ["UI/UX", "Next.js", "Headless"],
      align: "mt-0" // Left column
    },
    {
      id: "02",
      title: "FinTech Evolve",
      category: "Web Application",
      description: "Complex financial data engineered into a beautifully simple, responsive interface.",
      tags: ["Dashboard", "React", "Data Viz"],
      align: "lg:mt-32" // Right column pushed down for staggered look
    },
    {
      id: "03",
      title: "Lumina Real Estate",
      category: "Immersive Web",
      description: "Award-winning portfolio utilizing WebGL to showcase luxury properties.",
      tags: ["WebGL", "Framer Motion", "Brand"],
      align: "mt-0" // Left column
    },
    {
      id: "04",
      title: "Vanguard Mobility",
      category: "Corporate Identity",
      description: "Complete digital transformation for an EV startup, from brand guidelines to web platform.",
      tags: ["Branding", "Web Design", "CMS"],
      align: "lg:mt-32 lg:-mt-16" // Right column
    }
  ];

  return (
    // Background is the lightest sage to contrast the dark Process section above
    <section id="work" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#e8f4dc] overflow-hidden text-[#2A311F] rounded-t-4xl">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Giant Parallax Background Text */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-1/4 left-0 w-full text-center pointer-events-none select-none overflow-hidden flex justify-center z-0"
      >
        <span className="font-glyseric  text-[20vw] text-[#cfe1bb] opacity-40 leading-none tracking-tighter whitespace-nowrap">
          ARTIFACTS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 lg:mb-40 gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: studioEase }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-[#b6c99c]/50 bg-white/50 backdrop-blur-sm shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#728156]" />
              <span className="font-lato  text-[10px] font-black uppercase tracking-[0.4em] text-[#728156]">
                Selected Works
              </span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: studioEase }}
                className="font-glyseric  text-6xl md:text-[5.5rem] leading-[0.9] tracking-tighter text-[#2A311F]"
              >
                Digital <br />
                <span className="text-[#88976c] italic font-light">Artifacts.</span>
              </motion.h2>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-lato  text-base max-w-sm text-[#728156] leading-relaxed lg:text-right font-medium"
          >
            A curated selection of our most impactful digital deployments. Engineering that drives real-world reaction.
          </motion.p>
        </div>

        {/* --- STAGGERED GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: studioEase }}
              className={`group flex flex-col gap-6 cursor-pointer ${project.align}`}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-[24px] lg:rounded-[32px] bg-white border border-[#b6c99c]/40 shadow-[0_20px_40px_-15px_rgba(114,129,86,0.1)]">
                {/* Image Scale on Hover */}
                <motion.div 
                  className="absolute inset-0 transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                >
                  <PlaceholderGraphic seed={index + 1} />
                </motion.div>
                
                {/* Glassy Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#2A311F]/10 transition-colors duration-700 pointer-events-none" />

                {/* Floating "View Project" Pill */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500 ease-[0.22,1,0.36,1] z-20">
                  <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full text-[#2A311F] font-lato  text-[10px] uppercase tracking-widest font-black shadow-xl flex items-center gap-2">
                    View Case <span className="text-[#88976c] -rotate-45">→</span>
                  </div>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-lato  text-[10px] uppercase tracking-widest text-[#88976c] font-black mb-2 block">
                      {project.id} — {project.category}
                    </span>
                    <h3 className="font-glyseric  text-3xl md:text-4xl text-[#2A311F] tracking-tighter group-hover:text-[#728156] transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="font-lato  text-sm text-[#728156] font-medium max-w-md leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-[#b6c99c]/50 text-[#88976c] font-lato  text-[9px] uppercase tracking-widest font-bold bg-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: studioEase }}
          className="mt-32 flex justify-center"
        >
          <button className="group relative overflow-hidden flex items-center gap-3 font-lato  px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[#2A311F] bg-transparent border border-[#b6c99c] rounded-full hover:shadow-[0_10px_30px_rgba(114,129,86,0.1)] transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
              View Complete Archive
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-[#728156] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Works;