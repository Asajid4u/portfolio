
import Navbar from './Navbar';
import Hero from './Hero';

// Import other sections here as you build them

export default function Home() {
  return (
    <main className="relative bg-[#080b14] min-h-screen">
      <Navbar />
      
      {/* BACKGROUND GLOW */}
      <div className="fixed top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <Hero />
      
      {/* Add About, Portfolio sections here */}
      
      {/* BACK TO TOP BUTTON */}
      <a href="#home" className="fixed bottom-12 right-12 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 transition-all z-50">
        <span className="text-2xl font-bold text-white">↑</span>
      </a>
    </main>
  );
}