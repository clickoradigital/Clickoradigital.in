import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

// Import your split components (Adjust paths based on your actual folder structure)
import { AnimationStyles } from './AnimationStyles';
import {
  DesignServicesIllustration,
  DevelopmentServicesIllustration,
  FiberOpticNetwork,
  BackgroundCircuit
} from './ServiceIllustrations';

const ServicesStudio: React.FC = () => {
  const studioEase = [0.22, 1, 0.36, 1] as const;
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const initialTimeout = setTimeout(updateTime, 0);
    const interval = setInterval(updateTime, 1000);
    return () => { clearTimeout(initialTimeout); clearInterval(interval); };
  }, []);

  const cardVariants: Variants = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1, transition: { duration: 0.8, ease: studioEase } }
  };

  const services = [
    {
      id: "01", title: "Designing", tag: "UI/UX • Branding",
      details: "High-fidelity visual systems that bridge the gap between human emotion and digital interfaces.",
      gridClass: "lg:col-span-2 lg:row-span-1",
      points: ["Logo", "Brochure", "Posters"]
    },
    {
      id: "02", title: "Development", tag: "Next.js • Shopify",
      details: "Clean code architectures engineered for extreme speed and seamless scalability.",
      gridClass: "lg:col-span-1 lg:row-span-2",
      points: ["Landing Pages", "Websites", "E-commerce Solutions"]
    },
    {
      id: "03", title: "Marketing", tag: "Ads • Growth",
      details: "Precision-targeted campaigns designed to dominate search and social landscapes.",
      gridClass: "lg:col-span-2 lg:row-span-1",
      points: ["Digital", "Social Media", "Email", "WhatsApp", "Ads Campaigns"]
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-24 bg-white overflow-hidden text-[#2A311F]">

      <AnimationStyles />

      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#e8f4dc] rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#cfe1bb] rounded-full blur-[120px] opacity-40 pointer-events-none" />

      {/* --- FIXED BACKGROUND CIRCUITS --- */}
      <div className="absolute left-0 top-0 bottom-0 w-[400px] pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 400 1080" className="w-full h-full" preserveAspectRatio="xMinYMid slice">
          <BackgroundCircuit path="M -50,150 L 150,150 L 250,250 L 250,600 L 300,650" endX={300} endY={650} duration={7} delay={0} />
          <BackgroundCircuit path="M 100,-50 L 100,300 L 150,350 L 150,800 L 200,850" endX={200} endY={850} duration={8.5} delay={2} />
          <BackgroundCircuit path="M -100,500 L 50,500 L 150,600 L 150,900 L 100,950" endX={100} endY={950} duration={6} delay={4} />
        </svg>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[400px] pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 400 1080" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
          <BackgroundCircuit path="M 400,200 L 150,200 L 50,300 L 50,700 L 0,750" endX={0} endY={750} duration={8} delay={1} />
          <BackgroundCircuit path="M 200,-50 L 200,400 L 100,500 L 100,900 L 50,950" endX={50} endY={950} duration={7.5} delay={3.5} />
          <BackgroundCircuit path="M 350,800 L 250,800 L 150,900 L 150,1050 L 100,1100" endX={100} endY={1100} duration={5} delay={1.5} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">

        {/* --- HEADER --- */}
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-20 gap-6 lg:gap-10">
          
          <div className="max-w-2xl w-full">
            <motion.span
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              /* MOBILE UPGRADE: Tighter tracking and smaller text to prevent wrapping */
              className="inline-block font-lato text-[9px] lg:text-[10px] uppercase tracking-[0.4em] lg:tracking-[0.8em] mb-4 lg:mb-5 bg-[#728156] text-white px-3 py-1.5 lg:px-4 rounded-full shadow-sm"
            >
              Capabilities
            </motion.span>
            
            <div className="overflow-hidden py-1">
              <motion.h2
                initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: studioEase }}
                /* MOBILE UPGRADE: Specific mobile font size (44px) and line height so it fits perfectly */
                className="font-glyseric text-[44px] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl lg:leading-[0.9] tracking-tighter text-[#2A311F]"
              >
                Crafting <br />
                <span className="italic font-light text-[#88976c] opacity-80">Distinction.</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            /* MOBILE UPGRADE: Responsive max-width so the paragraph breathes on mobile */
            className="font-lato text-[13px] sm:text-sm lg:text-base max-w-[90%] sm:max-w-sm lg:max-w-xs text-[#728156] font-medium leading-relaxed lg:text-right"
          >
            We don't just build; we engineer competitive advantages through three core pillars of digital excellence.
          </motion.p>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">

          {services.map((service) => (

            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className={`group relative bg-[#e8f4dc]/70 backdrop-blur-xl border border-[#b6c99c]/40 rounded-[20px] lg:rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(114,129,86,0.2)] hover:bg-[#e8f4dc]/90 hover:-translate-y-1 
              /* COMPACT MOBILE PADDING & MIN-HEIGHT */
              p-5 lg:p-8 flex flex-col justify-between min-h-[240px] lg:min-h-[320px] 
              ${service.gridClass}`}
            >

              {/* decoration */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#cfe1bb]/40 rounded-full -mr-14 -mt-14 scale-0 group-hover:scale-150 transition-transform duration-700" />

              {/* --- TOP SECTION --- */}
              <div className="relative z-10 flex flex-col items-center lg:items-start w-full">

                <div className="flex w-full justify-center lg:justify-between items-center mb-2 lg:mb-3">
                  <span className="font-lato text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-[#88976c]">
                    {service.id} // {service.tag}
                  </span>
                  <div className="hidden lg:block w-6 h-[1px] bg-[#b6c99c] group-hover:w-12 group-hover:bg-[#728156] transition-all duration-500" />
                </div>

                <h3 className="font-glyseric text-2xl lg:text-4xl text-[#2A311F] lg:group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 lg:gap-2 mt-2 lg:mt-3">
                  {service.points.map((point, idx) => (
                    <span
                      key={idx}
                      className="font-lato text-[8px] lg:text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-[#b6c99c]/50 text-[#728156] bg-white/50"
                    >
                      {point}
                    </span>
                  ))}
                </div>

              </div>

              {/* --- SVG SECTION --- */}
              <div
                className={`
                  flex items-center justify-center w-full
                  
                  /* COMPACT MOBILE HEIGHT & MARGINS */
                  relative h-[110px] my-2
                  
                  /* Desktop Overlay */
                  lg:absolute lg:inset-0 lg:h-full lg:my-0 lg:pointer-events-none
                  
                  ${service.id === "02" 
                    ? "lg:justify-center" 
                    : "lg:justify-end lg:pr-12"
                  }

                  /* AGGRESSIVE MOBILE SCALING (0.55 makes it much smaller) */
                  [&>div]:scale-[0.55]
                  sm:[&>div]:scale-[0.65]
                  md:[&>div]:scale-[0.75]
                  lg:[&>div]:scale-[0.9]
                  xl:[&>div]:scale-[1]
                `}
              >
                {service.id === "01" && <DesignServicesIllustration />}
                {service.id === "02" && <DevelopmentServicesIllustration />}
                {service.id === "03" && <FiberOpticNetwork />}
              </div>

              {/* --- BOTTOM SECTION --- */}
              <div className="relative z-10 flex flex-col items-center lg:items-start w-full mt-auto">
                <p
                  className={`font-lato text-[11px] lg:text-sm text-[#728156] leading-relaxed font-medium
                  /* Center text on mobile */
                  text-center lg:text-left
                  
                  ${service.id === "02"
                      ? "lg:max-w-[75%] mx-auto lg:ml-0"
                      : "lg:max-w-[45%]"
                    }`}
                >
                  {service.details}
                </p>

                <div className="mt-4 lg:mt-6 flex items-center justify-center lg:justify-start gap-2 lg:gap-3 text-[#728156] lg:opacity-0 group-hover:opacity-100 lg:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="font-lato text-[9px] lg:text-[10px] uppercase font-black tracking-widest">
                    Explore Expertise
                  </span>
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-[#728156] flex items-center justify-center text-[8px] lg:text-[10px] font-bold">
                    →
                  </div>
                </div>
              </div>

            </motion.div>

          ))}

        </div>
        {/* --- FOOTER: Studio Sign-off --- */}
        {/* --- FOOTER: Studio Sign-off --- */}
        <div className="mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-[#b6c99c]/40 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-10">
          
          {/* Location & Time */}
          <div className="flex flex-col gap-2 items-center md:items-start w-full md:w-auto">
            <div className="flex items-center gap-3 md:gap-6 font-lato text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#88976c] font-bold text-center">
              <span>HQ / Hyderabad</span>
              <span className="text-[#b6c99c]/50 md:hidden">|</span>
              <span>Global / Remote</span>
            </div>
            <p className="font-lato text-[9px] uppercase tracking-[0.2em] text-[#728156] font-black">
              Standard Time — {time || '...'} IST
            </p>
          </div>

          {/* Desktop Decorative Line */}
          <div className="hidden lg:block h-[1px] flex-grow mx-20 bg-gradient-to-r from-transparent via-[#b6c99c]/50 to-transparent" />

          {/* Trust Badge & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 w-full md:w-auto">
            
            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-3 px-4 py-2.5 sm:py-2 bg-[#e8f4dc]/50 backdrop-blur-sm rounded-xl sm:rounded-full border border-[#b6c99c]/50 w-full sm:w-auto">
              <div className="flex -space-x-2">
                <div className="w-4 h-4 rounded-full border border-[#e8f4dc] bg-[#b6c99c]" />
                <div className="w-4 h-4 rounded-full border border-[#e8f4dc] bg-[#88976c]" />
                <div className="w-4 h-4 rounded-full border border-[#e8f4dc] bg-[#728156]" />
              </div>
              <span className="font-lato text-[9px] uppercase font-black tracking-widest text-[#728156]">
                Trusted by 15+ Brands
              </span>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden flex items-center justify-center gap-3 font-lato px-6 py-3.5 sm:py-3 text-[10px] font-black uppercase tracking-widest text-white bg-[#728156] rounded-xl w-full sm:w-auto hover:shadow-[0_10px_30px_rgba(114,129,86,0.3)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#2A311F] transition-colors duration-500">
                Start the Conversation
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-[#cfe1bb] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesStudio;