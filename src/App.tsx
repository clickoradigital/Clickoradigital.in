import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Services from './components/Services';
import Process from './components/Process';
import AboutClickora from './components/About';
import Works from './components/Works';
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-lato text-[#2A311F]">
      {/* Swapped the dark green for a clean white background to frame your rounded sections perfectly */}
      
      <Navbar />
      
      {/* Removed pt-4 so the Hero sits perfectly under the glass navbar. */}
      <main className="px-4 pb-4">
        <Hero />
        <Services />
        <AboutClickora />
        <Process />
      </main>
        <Works />
        <Contact />


    </div>
  );
}

export default App;