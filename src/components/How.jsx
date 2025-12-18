"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const steps = [
  {
    id: "01",
    title: "Book a Ride",
    desc:
      "Enter your pickup and drop-off. FastLink instantly calculates the fare based on distance + duration.",
  },
  {
    id: "02",
    title: "Best Driver Match",
    desc:
      "Drivers with higher scores appear first, ensuring you always get the most reliable and trusted option.",
  },
  {
    id: "03",
    title: "Ride with Safety",
    desc:
      "Track your ride in real time, share your trip with anyone, and travel with complete peace of mind.",
  },
  {
    id: "04",
    title: "Pay Seamlessly",
    desc:
      "Enjoy clear, upfront, and fully transparent payments with every ride—right within the app.",
  },
];

export default function How() {
  return (
    <>
    <section className="w-full bg-black pb-0 lg:py-20">
      {/* Container */}
      <div className="mx-auto w-[90%] flex flex-col gap-10">
        {/* Heading */}
        <h2
          className={`${bebasNeue.className} text-white uppercase text-[32px] lg:text-[45px]`}
          style={{ letterSpacing: "4px", lineHeight:"55px" }}
        >
          How FastLink Works
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1e1f1a] rounded-[20px] p-[20px] flex flex-col justify-between min-h-[350px]"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <span
                  className={`${bebasNeue.className} text-[#EA2127] text-[80px]`}
                  style={{lineHeight:"80px"}}
                >
                  {step.id}
                </span>

                <Image
                  src="/Icons/arrow-right.png"
                  alt="Arrow"
                  width={60}
                  height={60}
                />
              </div>

              {/* Bottom Content */}
              <div className="mt-6 flex flex-col gap-3">
                <h3
                  className={`${bebasNeue.className} uppercase text-white text-[22px]`}
                  style={{ letterSpacing: "3px", lineHeight:"20px" }}
                >
                  {step.title}
                </h3>

                <p className="text-white text-[14px] leading-[22px] font-[300]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
{/* ================= SECTION 2 ================= */}
<section className="relative w-full min-h-[70vh] flex items-center justify-center lg:py-14 overflow-hidden">
  
  {/* BLURRED BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-110 blur-[6px]"
    style={{
      backgroundImage: "url('/Images/pushing2.jpg')",
    }}
  />

  {/* DARK OVERLAY (OPTIONAL BUT RECOMMENDED) */}
  <div className="absolute inset-0 bg-black/40" />

  {/* CONTENT */}
  <h2
    className={`${bebasNeue.className} relative z-10 text-white uppercase text-center text-[42px] sm:text-[48px] lg:text-[8rem] leading-tight`}
    style={{ letterSpacing: "4px" }}
  >
    <span className="text-[#EA2127]">Pushing</span> beyond <br />
    speed, chasing <br />
    greatness <span className="text-[#EA2127]">FastLink</span> <br />
    redefines every <br />
    <span className="text-[#EA2127]">limit.</span>
  </h2>

  {/* TOP GRADIENT (OVER TEXT) */}
  <div className="pointer-events-none absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-black/90 to-transparent z-20" />

  {/* BOTTOM GRADIENT (OVER TEXT) */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/90 to-transparent z-20" />
</section>



    </>
  );
}
