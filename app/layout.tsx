// import "./globals.css";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} flex items-center justify-center min-h-screen`}>
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ben Parker | Visual Designer",
//   description: "UI Consultant Portfolio",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-[#0a0c16] text-white antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar"; // ✅ import navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Parker | Visual Designer",
  description: "UI Consultant Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0c16] text-white antialiased `}>
        <Navbar />   {/* ✅ Navbar globally here */}
        {children}
      </body>
    </html>
  );
}