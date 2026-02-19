"use client";

import { Bebas_Neue } from "next/font/google";
import WritingText from "./WritingText";
import { motion } from "framer-motion";

// Bebas Neue font
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Fair() {
  return (
    <section
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/Images/about-fastlink-gradient-bg.jpg')",
      }}
    >
      {/* Container */}
      <div className="mx-auto w-[90%] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Column - Image */}
<motion.div
  className="flex-1"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
>
  <img
    src="/Images/fairLeft.png"
    alt="Fair Left"
    className="w-full md:w-[80%] h-auto rounded-[20px]"
  />
</motion.div>


        {/* Right Column - Text & Boxes */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Heading */}
          <h2
            className={`${bebasNeue.className} text-white text-[32px] lg:text-[45px]`}
            style={{ letterSpacing: "4px", lineHeight: "55px" }}
          >
            <WritingText text="Fair, Fully Transparent, and Updated in Real Time." />
          </h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-[16px] leading-[26px] font-[300]"
          >
            FastLink’s smart fare system calculates your cost before the ride
            begins. It analyzes multiple factors — including distance, estimated
            travel time, and current traffic — to give you a transparent and
            accurate fare upfront.
          </motion.p>
          {/* <p className="text-white text-[16px] leading-[26px] font-[300]">
            FastLink’s smart fare system calculates your cost before the ride
            begins. It analyzes multiple factors — including distance, estimated
            travel time, and current traffic — to give you a transparent and
            accurate fare upfront.
          </p> */}

          {/* Boxes - one per row */}
          <div className="flex flex-col gap-6">
            {/* Box 1 - Total Distance */}
           <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="bg-white p-6 rounded-[20px] flex gap-4 items-start shadow-md hover:shadow-xl transition-shadow duration-300"
>

              <div className="bg-black w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="/Icons/totalDistance.png"
                  alt="Total Distance"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-black text-[18px] font-semibold">
                  Total Distance
                </h3>
                <p className="text-black text-[14px] leading-[22px] font-[300]">
                  FastLink accurately calculates the total distance from your
                  pickup point to your destination by analyzing the most
                  efficient routes. This ensures that your fare is always
                  precise, fully transparent, and free from unexpected charges,
                  giving you complete confidence before you start your ride.
                </p>
              </div>
            </motion.div>

            {/* Box 2 - Estimated Travel Time */}
           <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className="bg-white p-6 rounded-[20px] flex gap-4 items-start shadow-md hover:shadow-xl transition-shadow duration-300"
>

              <div className="bg-black w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="/Icons/ETT.png"
                  alt="Estimated Travel Time"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-black text-[18px] font-semibold">
                  Estimated Travel Time
                </h3>
                <p className="text-black text-[14px] leading-[22px] font-[300]">
                  FastLink continuously monitors real-time traffic and road
                  conditions, including jams, slow zones, and unexpected delays.
                  Based on this data, it provides you with the most accurate
                  travel time estimate, so you can plan your ride confidently
                  and reach your destination on time without any surprises.
                </p>
              </div>
</motion.div>

            {/* Box 3 - Traffic Updates */}
            <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
  className="bg-white p-6 rounded-[20px] flex gap-4 items-start shadow-md hover:shadow-xl transition-shadow duration-300"
>

              <div className="bg-black w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src="/Icons/TU.png"
                  alt="Traffic Updates"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-black text-[18px] font-semibold">
                  Traffic Updates
                </h3>
                <p className="text-black text-[14px] leading-[22px] font-[300]">
                  Our smart system continuously monitors live traffic
                  conditions, detecting jams, roadblocks, and delays in real
                  time. By adjusting your route instantly, it ensures a
                  smoother, faster, and stress-free ride every time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
