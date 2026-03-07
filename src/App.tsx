import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Services from './components/Services';
import Process from './components/Process';
import AboutClickora from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

// Import your new pages (we will create these next)
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Extract the main landing page content into its own component
const HomePage = () => {
  return (
    <>
      <main className="px-4 pb-4">
        <Hero />
        <Services />
        <AboutClickora />
        <Process />
      </main>
      <Works />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-lato text-[#2A311F]">
        {/* Navbar stays fixed at the top of ALL pages */}
        <Navbar />
        
        {/* The Routes will swap out the middle content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        {/* Contact (Footer) stays at the bottom of ALL pages */}
        <Contact />
      </div>
    </Router>
  );
}

export default App;