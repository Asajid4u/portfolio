import Navbar from "../Navbar";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="bg-[#080b14] min-h-screen text-white">
      <Navbar />
      <AboutSection />
      {/* <About /> */}
    </main>
  );
}