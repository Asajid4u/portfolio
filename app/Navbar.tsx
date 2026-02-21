// "use client";
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080b14]/80 backdrop-blur-md">
//       <div className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto w-full">
//         <div className="flex items-center gap-3 cursor-pointer group">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl rotate-[15deg] group-hover:rotate-0 transition-all duration-300 flex items-center justify-center">
//             <div className="w-4 h-4 bg-white/30 rounded-full blur-[1px]" />
//           </div>
//           <span className="text-2xl font-bold tracking-tight text-white">Ben Parker</span>
//         </div>
        
//         <ul className="hidden md:flex gap-10 text-[15px] font-medium text-gray-400">
//           <li><a href="#home" className="text-blue-500 hover:text-blue-400 transition-colors">Home</a></li>
//           <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
//           <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
//           <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
//           <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 text-white cursor-pointer">
      <h1 className="text-lg font-semibold">Portfolio</h1>

      <ul className="flex gap-8">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}