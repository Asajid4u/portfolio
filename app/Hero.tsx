import React from "react";
import SocialIcon from "./SocialIcon";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center  overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-10 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-6 space-y-8 z-10">
          <p className="text-blue-500 font-semibold tracking-[0.15em] text-sm uppercase">
            Welcome to my portfolio!
          </p>
          <h1 className="text-7xl xl:text-[78px] font-bold leading-[0.95] tracking-tight text-white">
            Hello, my <br /> name{" "}
            <span className="text-blue-500">Sajid Ansari</span>
          </h1>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
            I&apos;m a visual designer from India. Currently working with{" "}
            <span className="text-white font-medium italic">@Ideo</span> as a UI
            Consultant.
          </p>
          {/* <div className="flex items-center gap-6 pt-6">
            <button className="px-10 py-4 bg-blue-500 text-white hover:bg-blue-600 rounded-full font-bold transition-all shadow-[0_15px_40px_rgba(59,130,246,0.4)] active:scale-95">Download cv</button>
            <a href="#portfolio" className="px-10 py-4 border border-gray-800 text-white hover:border-gray-500 rounded-full font-bold transition-all flex items-center gap-3 group">
              See my work <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div> */}
          <div className="flex items-center gap-6 pt-6">
            <a
              href="/Sajid-Ansari-CV.pdf"
              download
              className="px-10 py-4 bg-blue-500 text-white hover:bg-blue-600 rounded-full font-bold transition-all shadow-[0_15px_40px_rgba(59,130,246,0.4)] active:scale-95"
            >
              Download CV
            </a>

            <a
              href="#portfolio"
              className="px-10 py-4 border border-gray-800 text-white hover:border-gray-500 rounded-full font-bold transition-all flex items-center gap-3 group"
            >
              See my work
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end pr-20">
          <div className="relative w-[400px] h-[520px]">
            <div className="w-full h-full rounded-[180px] overflow-hidden border border-white/10 relative z-10 bg-[#121725] shadow-2xl">
              <img
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=450&h=580&auto=format&fit=crop"
                src='/Sajid pic.jpg'
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -top-8 -left-8 w-20 h-20 z-20 drop-shadow-[0_20px_30px_rgba(59,130,246,0.5)]">
              <div
                className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-600"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            </div> */}
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
            <span className="rotate-90 text-[10px] font-black tracking-[0.5em] text-gray-700 uppercase mb-14 whitespace-nowrap">
              Follow me on —
            </span>
            {/* <div className="flex flex-col gap-5">
              <SocialIcon label="In" color="hover:bg-[#1769ff]" />
              <SocialIcon label="Ins" color="hover:bg-[#ea4c89]" />
              <SocialIcon label="In" color="hover:bg-[#0077b5]" />
            </div> */}
            <div className="flex flex-col gap-5">
                        
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#121725] text-white hover:bg-[#0077B5] transition-all duration-300 shadow-lg"
              >
                <FaLinkedinIn size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#121725] text-white hover:bg-[#E4405F] transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#121725] text-white hover:bg-[#1877F2] transition-all duration-300 shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
