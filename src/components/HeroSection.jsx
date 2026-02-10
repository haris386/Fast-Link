"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Bebas_Neue } from "next/font/google";

// Bebas Neue font instance
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section
  className="w-full min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
  style={{
    backgroundImage: "url('/Images/Herobg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
  }}
>
  {/* Gradient overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" /> */}

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 flex flex-col gap-8 w-full text-left">
    {/* Heading */}
    <h1
      className={`${bebasNeue.className} text-[45px] sm:text-[65px] lg:text-[100px] font-bold text-white leading-tight uppercase`}
    >
      Move Smarter,<br />Ride Faster
    </h1>

    {/* Text + Buttons */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mt-4 lg:mt-6">
      <p className="text-white lg:text-[15px] max-w-md">
        Fastlink brings riders and drivers together for safe, smooth, and reliable trips.
        No matter your destination, we’ll get you there quickly and comfortably.
      </p>

      <div className="flex flex-row gap-4 mt-2 flex-wrap">
        <button className="flex items-center gap-2 rounded-full bg-[#EA2127] px-6 py-3 text-[12px] lg:text-[14px] font-medium text-white hover:bg-red-600 transition-colors">
          Download App <MdKeyboardArrowRight size={20} />
        </button>

        <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] lg:text-[14px] font-medium text-black hover:bg-gray-100 transition-colors">
          Become a Driver <MdKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  </div>
</section>

  );
}
