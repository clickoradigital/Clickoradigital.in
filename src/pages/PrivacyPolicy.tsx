import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  // Automatically scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="px-6 lg:px-10 pt-32 pb-24 max-w-4xl mx-auto min-h-[70vh]">
      <div className="mb-12">
        <span className="font-lato text-[10px] uppercase tracking-[0.4em] text-[#728156] font-black mb-4 block">Legal</span>
        <h1 className="font-glyseric text-5xl md:text-7xl text-[#2A311F] tracking-tighter leading-none mb-6">
          Privacy <span className="italic font-light text-[#88976c]">Policy.</span>
        </h1>
        <p className="font-lato text-sm text-[#728156] font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-8 font-lato text-base text-[#2A311F] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3 text-[#728156]">1. Data Collection</h2>
          <p>We collect information to provide better services to our users. This includes information you provide to us directly through contact forms or project initiation modals.</p>
        </section>
        
        {/* Add the rest of your actual policy text here */}
        <section>
          <h2 className="text-xl font-bold mb-3 text-[#728156]">2. Use of Information</h2>
          <p>The information we collect is used exclusively for project communication, proposal generation, and improving our digital architecture services. We do not sell your data to third parties.</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;