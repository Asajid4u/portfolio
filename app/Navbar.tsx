
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper for navigation items to match the screenshot's clean spacing and typography
  const navItem = (path: string, label: string) => (
    <Link
      href={path}
      className={`text-sm font-normal transition-colors duration-300 ${
        pathname === path
          ? "text-[#4A90E2]" // The specific blue used for the active state
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto px-12 py-10 flex items-center justify-between">
        
        {/* Logo Section - Matching the icon and font weight */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* The stylized 'leaf/drop' logo from your screenshot */}
            <div className="absolute w-full h-full bg-[#4A90E2] rounded-full rounded-tr-none rotate-[15deg]"></div>
            <div className="absolute w-3 h-3 bg-[#0a0f1e] rounded-full translate-x-1 -translate-y-1"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Sajid Ansari
          </span>
        </div>

        {/* Navigation Links - Matching the right-aligned layout */}
        <div className="flex items-center gap-8">
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/portfolio", "Portfolio")}
          {navItem("/testimonials", "Testimonials")}
          {navItem("/contact", "Contact")}
        </div>

      </div>
    </nav>
  );
}