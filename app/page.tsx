// import Image from "next/image";
// import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="w-[95%] max-w-7xl bg-blue-400 rounded-3xl p-14 text-white relative overflow-hidden">

//       {/* Subtle Line Pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />

//       {/* Top Right Circle Outline */}
//       <div className="absolute top-8 right-8 w-40 h-40 border border-white/20 rounded-full" />

//       {/* Navbar */}
//       <nav className="flex justify-between items-center mb-20 relative z-10">
//         <h1 className="text-lg font-semibold flex items-center gap-3">
//           <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
//           Ben Parker
//         </h1>

//         <ul className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
//           <li className="text-blue-400">Home</li>
//           <li className="hover:text-white cursor-pointer">About</li>
//           <li className="hover:text-white cursor-pointer">Portfolio</li>
//           <li className="hover:text-white cursor-pointer">Testimonials</li>
//           <li className="hover:text-white cursor-pointer">Contact</li>
//         </ul>
//       </nav>

//       {/* Hero */}
//       <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

//         {/* Left */}
//         <div>
//           <p className="text-blue-400 mb-6 text-sm">
//             Welcome to my portfolio!
//           </p>

//           <h1 className="text-[64px] font-bold leading-[1.1] mb-8">
//             Hello, my <br />
//             name’s <span className="text-blue-400">Ben.</span>
//           </h1>

//           <p className="text-gray-300 text-lg mb-10 max-w-lg">
//             I am a visual designer from London.
//             Currently working with Qideo as a UI Consultant.
//           </p>

//           <div className="flex gap-6">
//             <button className="bg-blue-500 px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 transition">
//               Download cv
//             </button>

//             <button className="border border-white/40 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
//               See my work →
//             </button>
//           </div>

//           {/* Scroll */}
//           <div className="flex items-center gap-3 mt-16 text-gray-400 text-sm">
//             <div className="w-7 h-11 border border-gray-400 rounded-full flex items-start justify-center p-1">
//               <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//             </div>
//             Scroll down
//           </div>
//         </div>

//         {/* Right */}
//         <div className="relative flex justify-center">

//           {/* Glow Ring */}
//           <div className="absolute w-[420px] h-[540px] rounded-[80px] border-2 border-blue-500/40 blur-sm"></div>

//           {/* Image */}
//           <div className="relative w-[380px] h-[500px] rounded-[70px] overflow-hidden border-4 border-blue-500 shadow-glow">
//             <Image
//               src="/profile.jpg"
//               alt="profile"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* 3D Floating Shapes */}
//           <div className="absolute top-16 left-0 w-20 h-20 bg-blue-400 rounded-xl rotate-45 opacity-70 shadow-xl"></div>
//           <div className="absolute bottom-10 right-10 w-14 h-14 bg-cyan-400 rounded-full opacity-70 shadow-xl"></div>

//           {/* FOLLOW TEXT */}
//           <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 rotate-90 text-xs tracking-[0.4em] text-gray-300">
//             FOLLOW ME —
//           </div>

//           {/* Social Icons */}
//           <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 flex flex-col gap-5">
//             <div className="bg-blue-500 p-3 rounded-full shadow-xl">
//               <FaDribbble />
//             </div>
//             <div className="bg-pink-500 p-3 rounded-full shadow-xl">
//               <FaInstagram />
//             </div>
//             <div className="bg-blue-700 p-3 rounded-full shadow-xl">
//               <FaLinkedinIn />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



// // import { types } from 'node:util';
// import React from 'react';

// // types = {
// //   'label': 'string',
// //   'color': 'string',
// // }

// const BenParkerHero = () => {
//   return (
//     <div className="relative min-h-screen bg-[#080b14] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      
//       {/* 1. Background Gradients & Topographic Overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* Deep Blue Glow (Top Left) */}
//         <div className="absolute top-[-10%] left-[-5%] w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full" />
//         {/* Subtle Topographic Lines Placeholder */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]" />
//       </div>

//       {/* 2. Navigation */}
//       <nav className="relative z-20 flex justify-between items-center px-16 py-10 max-w-350 mx-auto">
//         <div className="flex items-center gap-3 group cursor-pointer">
//           <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-700 rounded-xl rotate-15 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-blue-500/20" />
//           <span className="text-2xl font-bold tracking-tight">Ben Parker</span>
//         </div>
//         <ul className="hidden md:flex gap-10 text-[15px] font-medium text-gray-400">
//           <li className="text-blue-500 cursor-pointer">Home</li>
//           {['About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
//             <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
//           ))}
//         </ul>
//       </nav>

//       {/* 3. Main Hero Section */}
//       <main className="relative z-10 max-w-350 mx-auto px-16 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
//         {/* Left Content (Col 1-6) */}
//         <div className="lg:col-span-6 space-y-8">
//           <p className="text-blue-500 font-medium tracking-wide">Welcome to my portfolio!</p>
//           <h1 className="text-7xl xl:text-8xl font-bold leading-[1.1]">
//             Hello, my <br /> 
//             name &apos; s <span className="text-blue-500">Ben.</span>
//           </h1>
//           <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
//             I &apos; m a visual designer from London. Currently working with 
//             <span className="text-white font-medium"> @Ideo</span> as a UI Consultant.
//           </p>

//           <div className="flex gap-6 pt-6">
//             {/* Primary Glowing Button */}
//             <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-all shadow-[0_10px_40px_rgba(59,130,246,0.4)] hover:shadow-blue-500/60 active:scale-95">
//               Download cv
//             </button>
//             {/* Outline Button */}
//             <button className="px-10 py-4 border border-gray-700 hover:border-blue-400 rounded-full font-bold transition-all flex items-center gap-3 group">
//               See my work 
//               <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
//             </button>
//           </div>

//           {/* Mouse Scroll Indicator */}
//           <div className="pt-24 flex items-center gap-4 text-gray-500 text-xs uppercase tracking-[0.2em]">
//              <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center p-1.5">
//                 <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
//              </div>
//              <span>Scroll down</span>
//           </div>
//         </div>

//         {/* Right Content: Profile & 3D (Col 7-12) */}
//         <div className="lg:col-span-6 relative flex justify-end items-center">
          
//           {/* The Custom "Oval" Container */}
//           <div className="relative w-150 h-150 p-4">
//              {/* Glowing border ring */}
//              <div className="absolute inset-0 border border-blue-500/20 rounded-[180px] scale-105" />
             
//              {/* The Profile Image Crop */}
//              <div className="w-full h-full rounded-[160px] overflow-hidden border border-white/5 relative bg-[#1a1f2e]">
//                 <img 
//                   src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=480&h=600" 
//                   alt="Ben Parker Profile" 
//                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                 />
//              </div>

//              {/* Floating 3D Elements */}
//              {/* Blue Pyramid */}
//              <div className="absolute -top-10 -left-10 w-20 h-20 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] transform -rotate-12 animate-pulse">
//                 <div className="w-full h-full bg-linear-to-br from-blue-300 to-blue-600 clip-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
//              </div>
//              {/* Blue Spring/Spiral (Simplified) */}
//              <div className="absolute -bottom-10 -right-8 w-24 h-24 flex flex-col items-center gap-[-10px] drop-shadow-lg animate-bounce">
//                 {[1, 2, 3].map((i) => (
//                   <div key={i} className="w-16 h-4 border-4 border-blue-400 rounded-full transform -rotate-15 -mb-2" />
//                 ))}
//              </div>
//           </div>

//           {/* Social Sidebar */}
//           <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
//             <span className="rotate-90 text-[10px] font-bold tracking-[0.4em] text-gray-600 uppercase mb-12 whitespace-nowrap">Follow me on —</span>
//             <div className="flex flex-col gap-6">
//                <SocialIcon label="Be" color="hover:bg-[#1769ff]" />
//                <SocialIcon label="Dr" color="hover:bg-[#ea4c89]" />
//                <SocialIcon label="In" color="hover:bg-[#0077b5]" />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Floating Action Button (Arrow Up) */}
//       <div className="fixed bottom-12 right-12 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-2xl shadow-blue-500/40 hover:scale-110 transition-transform z-50">
//         <span className="text-2xl">↑</span>
//       </div>
//     </div>
//   );
// };

// // Sub-component for Social Icons
// const SocialIcon = ({ label, color }) => (
//   <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold transition-all cursor-pointer ${color} hover:border-transparent`}>
//     {label}
//   </div>
// );

// export default BenParkerHero;


// import React from 'react';

// // 1. Define the TypeScript interface for our Social Icon props
// interface SocialIconProps {
//   label: string;
//   color: string;
// }

// export default function Home() {
//   return (
//     <div className="relative min-h-screen w-full bg-[#080b14] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      
//       {/* --- BACKGROUND AMBIANCE --- */}
//       <div className="absolute top-[-10%] left-[-5%] w-150 h-150 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
//       {/* --- NAVIGATION --- */}
//       <nav className="relative z-50 flex justify-between items-center px-12 py-10 max-w-[1440px] mx-auto w-full">
//         <div className="flex items-center gap-3 cursor-pointer group">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl rotate-[15deg] group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center">
//             <div className="w-4 h-4 bg-white/30 rounded-full blur-[1px]" />
//           </div>
//           <span className="text-2xl font-bold tracking-tight">Ben Parker</span>
//         </div>
        
//         <ul className="hidden md:flex gap-10 text-[15px] font-medium text-gray-400">
//           <li className="text-blue-500 cursor-pointer">Home</li>
//           {['About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
//             <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
//           ))}
//         </ul>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <main className="relative z-10 max-w-[1440px] mx-auto px-12 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-6 space-y-8">
//           <p className="text-blue-500 font-semibold tracking-[0.15em] text-sm uppercase">
//             Welcome to my portfolio!
//           </p>
//           <h1 className="text-7xl xl:text-[100px] font-bold leading-[0.95] tracking-tight">
//             Hello, my <br /> 
//             name &apos;s <span className="text-blue-500">Ben.</span>
//           </h1>
//           <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
//             I&apos;m a visual designer from London. Currently working with 
//             <span className="text-white font-medium italic"> @Ideo</span> as a UI Consultant.
//           </p>

//           <div className="flex items-center gap-6 pt-6">
//             <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-all shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:shadow-blue-500/60 active:scale-95">
//               Download cv
//             </button>
//             <button className="px-10 py-4 border border-gray-800 hover:border-gray-500 rounded-full font-bold transition-all flex items-center gap-3 group">
//               See my work 
//               <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
//             </button>
//           </div>

//           {/* MOUSE SCROLL */}
//           <div className="pt-3 flex items-center gap-4 text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
//              <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center p-1.5">
//                 <div className="w-1 h-2 bg-gray-600 rounded-full animate-bounce" />
//              </div>
//              <span>Scroll down</span>
//           </div>
//         </div>

//         {/* RIGHT CONTENT: PORTRAIT & ASSETS */}
//         <div className="lg:col-span-6 relative flex justify-center lg:justify-end pr-30 -top-8">
          
//           <div className="relative w-110 h-120">
//              {/* Decorative Background Ring */}
//              <div className="absolute inset-[-25px] border border-blue-500/10 rounded-[180px] -rotate-3" />
             
//              {/* The Main Stadium Crop */}
//              <div className="w-full h-full rounded-[180px] overflow-hidden border border-white/10 relative z-10 bg-[#121725] shadow-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=450&h=580&auto=format&fit=crop" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
//                 />
//              </div>

//              {/* 3D Shapes (Simulated with CSS) */}
//              {/* Floating Pyramid */}
//              {/* <div className="absolute -top-5 -left-12 w-24 h-20 z-20 drop-shadow-[0_20px_30px_rgba(59,130,246,0.5)] animate-pulse">
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-600" 
//                   style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} 
//                 />
//              </div> */}

//              {/* Floating Spring/Coil */}

//              {/* <div className="absolute -bottom-8 -right-10 w-24 h-28 z-20 flex flex-col space-y-[-12px] rotate-12">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-20 h-6 border-[6px] border-blue-400 rounded-full bg-blue-500/10 shadow-lg" />
//                 ))}
//              </div> */}
//           </div>

//           {/* SOCIAL SIDEBAR */}
//           <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
//             <span className="rotate-90 text-[10px] font-black tracking-[0.5em] text-gray-700 uppercase mb-14 whitespace-nowrap">
//               Follow me on —
//             </span>
//             <div className="flex flex-col gap-5">
//                <SocialIcon label="Be" color="hover:bg-[#1769ff]" />
//                <SocialIcon label="Dr" color="hover:bg-[#ea4c89]" />
//                <SocialIcon label="In" color="hover:bg-[#0077b5]" />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* FAB: BACK TO TOP */}
//       <div className="fixed bottom-12 right-12 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 cursor-pointer hover:bg-blue-400 hover:scale-110 transition-all z-50">
//         <span className="text-2xl font-bold">↑</span>
//       </div>
//     </div>
//   );
// }

// // 2. Fixed SocialIcon Component with TypeScript Types
// const SocialIcon = ({ label, color }: SocialIconProps) => (
//   <div className={`w-11 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[13px] font-bold transition-all duration-300 cursor-pointer ${color} hover:border-transparent hover:scale-110`}>
//     {label}
//   </div>
// );

import Navbar from './Navbar';
import Hero from './Hero';
// import Contact from "./components/contact/page";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
// import Home from "./components/Home";

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