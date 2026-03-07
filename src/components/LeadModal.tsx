import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const studioEase = [0.22, 1, 0.36, 1] as const;
  const [activeService, setActiveService] = useState<string>('Web Development');
  const services = ['Web Development', 'Digital Marketing', 'Branding', 'E-Commerce'];

  // --- Form & EmailJS State ---
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // --- EmailJS Submission Handler ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        'service_5ahzmxi',   
        'template_d66emik',  
        formRef.current,
        'PgSKrjKgDAbikbuZ3'    
      );

      setIsSuccess(true);
      
      // Close modal automatically after 3 seconds and reset state
      setTimeout(() => {
        onClose();
        setTimeout(() => setIsSuccess(false), 500); 
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Transmission failed. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: studioEase }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2A311F]/60 backdrop-blur-md cursor-pointer will-change-transform"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: studioEase }}
            className="relative w-full max-w-2xl bg-[#e8f4dc] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(42,49,31,0.2)] will-change-transform flex flex-col max-h-[90vh]"
          >
            <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#cfe1bb] rounded-full blur-[80px] opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 bg-[#b6c99c] rounded-full blur-[80px] opacity-40 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 border border-[#b6c99c]/50 text-[#2A311F] hover:bg-[#728156] hover:text-white hover:border-[#728156] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#728156]"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="relative z-10 p-8 md:p-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-[#728156] rounded-full flex items-center justify-center text-white mb-6 shadow-[0_10px_30px_rgba(114,129,86,0.3)]">
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-glyseric text-4xl text-[#2A311F] tracking-tighter mb-4">Transmission Received.</h3>
                  <p className="font-lato text-[#728156] font-medium max-w-sm">
                    We will review your project details and contact you shortly to begin the engineering process.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="font-lato text-[10px] uppercase tracking-[0.4em] text-[#728156] font-black mb-3 block">
                      Project Initiation
                    </span>
                    <h2 id="modal-headline" className="font-glyseric text-5xl md:text-6xl text-[#2A311F] tracking-tighter leading-[0.9]">
                      Let's engineer <br />
                      <span className="italic font-light text-[#88976c]">your vision.</span>
                    </h2>
                  </div>

                  <form ref={formRef} className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    
                    <input type="hidden" name="service" value={activeService} />

                    <div className="space-y-4">
                      <label className="font-lato text-[10px] uppercase tracking-widest text-[#88976c] font-bold">
                        I'm interested in...
                      </label>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setActiveService(service)}
                            className={`px-4 py-2 rounded-full font-lato text-[8px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#728156]
                              ${activeService === service 
                                ? 'bg-[#728156] text-white border border-[#728156] shadow-md' 
                                : 'bg-white/50 text-[#728156] border border-[#b6c99c]/50 hover:bg-white'
                              }
                            `}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          placeholder=" "
                          // ALPHABETS ONLY: Replaces any non-letter/space with an empty string instantly
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^A-Za-z\s]/g, '');
                          }}
                          className="peer w-full bg-transparent border-b border-[#b6c99c] py-3 text-[#2A311F] font-lato text-base focus:outline-none focus:border-[#728156] transition-colors placeholder-transparent"
                        />
                        <label 
                          htmlFor="name" 
                          className="absolute left-0 top-3 text-[#88976c] font-lato text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#728156] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                        >
                          Your Name *
                        </label>
                      </div>

                      <div className="relative group">
                        <input 
                          type="tel" 
                          id="mobile" 
                          name="mobile"
                          required
                          minLength={10}
                          maxLength={15}
                          placeholder=" "
                          // NUMBERS ONLY: Replaces any non-number with an empty string instantly
                          onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^0-9]/g, '');
                          }}
                          className="peer w-full bg-transparent border-b border-[#b6c99c] py-3 text-[#2A311F] font-lato text-base focus:outline-none focus:border-[#728156] transition-colors placeholder-transparent"
                        />
                        <label 
                          htmlFor="mobile" 
                          className="absolute left-0 top-3 text-[#88976c] font-lato text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#728156] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                        >
                          Mobile Number *
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-[#b6c99c] py-3 text-[#2A311F] font-lato text-base focus:outline-none focus:border-[#728156] transition-colors placeholder-transparent"
                        />
                        <label 
                          htmlFor="email" 
                          className="absolute left-0 top-3 text-[#88976c] font-lato text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#728156] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                        >
                          Email Address (Optional)
                        </label>
                      </div>

                      <div className="relative group">
                        <input 
                          type="text" 
                          id="company" 
                          name="company"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-[#b6c99c] py-3 text-[#2A311F] font-lato text-base focus:outline-none focus:border-[#728156] transition-colors placeholder-transparent"
                        />
                        <label 
                          htmlFor="company" 
                          className="absolute left-0 top-3 text-[#88976c] font-lato text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#728156] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                        >
                          Company / Brand Name (Optional)
                        </label>
                      </div>
                    </div>

                    <div className="relative group mt-2">
                      <textarea 
                        id="details" 
                        name="details"
                        rows={3}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[#b6c99c] py-3 text-[#2A311F] font-lato text-base focus:outline-none focus:border-[#728156] transition-colors placeholder-transparent resize-none"
                      ></textarea>
                      <label 
                        htmlFor="details" 
                        className="absolute left-0 top-3 text-[#88976c] font-lato text-sm transition-all duration-300 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-bold peer-focus:text-[#728156] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:font-bold"
                      >
                        Project Details & Goals (Optional)
                      </label>
                    </div>

                    {/* Submit Button & Error Message */}
                    <div className="flex flex-col items-center mt-4">
                      {errorMessage && (
                        <p className="text-red-500 font-lato text-[10px] font-bold mb-3 uppercase tracking-widest">
                          {errorMessage}
                        </p>
                      )}
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto overflow-hidden flex items-center justify-center gap-3 font-lato px-10 py-4 text-[11px] font-black uppercase tracking-widest text-[#e8f4dc] bg-[#2A311F] rounded-2xl md:rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#728156]/50 transition-shadow disabled:opacity-80 disabled:cursor-wait"
                      >
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                          {isSubmitting ? 'Transmitting...' : 'Submit Transmission'}
                          {!isSubmitting && <span aria-hidden="true" className="group-hover:translate-x-2 transition-transform duration-300">→</span>}
                        </span>
                        {!isSubmitting && (
                          <div aria-hidden="true" className="absolute inset-0 bg-[#728156] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                        )}
                      </motion.button>
                    </div>

                    <p className="text-center font-lato text-[9px] uppercase tracking-widest text-[#88976c] font-bold mt-2">
                      Your data is encrypted and secure.
                    </p>

                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;