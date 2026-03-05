import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Services from './components/Services';
import Process from './components/Process';

function App() {
  return (
    /* bg-brand-bg ensures the 'scooped' corners of the navbar blend into the page */
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#728156] font-lato">
      
      <Navbar />
      
      <main className="pt-4 px-4 pb-4">
        <Hero />
        <Services />
        <Process />
      </main>

      {/* Optional: Add other sections here */}
    </div>
  );
}

export default App;