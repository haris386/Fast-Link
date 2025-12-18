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
      className="w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/Images/Herobg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
       <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 flex flex-col gap-0 lg:gap-12 w-full mt-[10%]">
        {/* Heading */}
        <div className="text-left mt-8 md:mt-0">
          <h1 className={`${bebasNeue.className} text-[65px] lg:text-[100px] font-bold text-white leading-tight uppercase`}>
            Move Smarter,<br />Ride Faster
          </h1>
        </div>

        {/* Text + Buttons Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-0 lg:mt-6 w-full">
          {/* Empty left space on desktop to push content to right */}
          <div className="flex-1 hidden lg:block"></div>

          {/* Right content */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-white lg:text-[15px] max-w-md">
              Fastlink brings riders and drivers together for safe, smooth, and reliable trips. 
              No matter your destination, we’ll get you there quickly and comfortably.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-4 mt-2 flex-wrap">
              {/* Download App Button */}
              <button className="flex items-center gap-2 rounded-full bg-[#EA2127] px-6 py-3 text-[12px] lg:text-[14px] font-medium text-white hover:bg-red-600 transition-colors">
                Download App <MdKeyboardArrowRight size={20} />
              </button>

              {/* White Pill Button */}
              <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] lg:text-[14px] font-medium text-black hover:bg-gray-100 transition-colors">
                Become a Driver <MdKeyboardArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
