"use client";

import { Bebas_Neue } from "next/font/google";
import WritingText from "./WritingText";
import { motion } from "framer-motion";

// Bebas Neue font
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <section className="w-full bg-black overflow-hidden">

      {/* Container */}
      <div className="mx-auto w-[90%] py-20 flex flex-col gap-8 relative">
        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col gap-6 max-w-[900px] lg:mt-[12%]">
          <h2
            className={`${bebasNeue.className} text-white uppercase text-[32px] lg:text-[45px]`}
            style={{ letterSpacing: "4px", lineHeight: "55px" }}
          >
            <WritingText text="About Fastlink" />
          </h2>

         <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="text-white text-[16px] leading-[26px] font-[300]"
>
  FastLink is a modern transportation platform designed to make
  <br className="hidden lg:block" /> everyday travel safe, simple, and stress-free. We connect
  riders
  <br className="hidden lg:block" /> with verified drivers using real-time mapping, smart routing,
  and
  <br className="hidden lg:block" /> secure in-app payments.
</motion.p>

        </div>

        {/* ================= ROW 2 CARD ================= */}
        <div
          className="w-full lg:w-[90%] rounded-[20px] p-[10px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/about-fastlink-gradient-bg.jpg')",
          }}
        >
          <div className="w-full h-full rounded-[16px] p-8 lg:p-10 flex flex-col gap-10">
            {/* Purpose */}
            <div className="flex flex-col gap-4 max-w-[900px]">
              <h3
                className={`${bebasNeue.className} uppercase text-white text-[32px] lg:text-[45px]`}
                style={{ letterSpacing: "4px", lineHeight: "55px" }}
              >
               <WritingText text="Our Purpose" /> 
              </h3>

             <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="text-white text-[16px] leading-[26px] font-[300]"
>
  Our purpose at FastLink is to make daily travel safe, smart, and
  reliable. We
  <br className="hidden lg:block" /> connect riders with trusted drivers through intelligent
  routing and transparent
  <br className="hidden lg:block" /> pricing, ensuring every trip is smooth, stress-free, and
  dependable.
</motion.p>

            </div>

            {/* Technology */}
            <div className="flex flex-col gap-4 max-w-[900px]">
              <h3
                className={`${bebasNeue.className} uppercase text-white text-[32px] lg:text-[45px]`}
                style={{ letterSpacing: "4px", lineHeight: "55px" }}
              >
                <WritingText text="Our Technology" />
              </h3>

             <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="text-white text-[16px] leading-[26px] font-[300]"
>
  AI-powered dispatching • Live GPS tracking • Smart fare
  calculation •<br className="hidden lg:block" /> Secure verification
</motion.p>

            </div>
          </div>
        </div>

        {/* ================= OVERLAPPING CARDS ================= */}
<div className="about-overlap-wrapper relative">
  {/* Red Card Slide-in */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
    className="about-red-card absolute top-0 left-0"
  />

  {/* Car Image Slide-in */}
  <motion.img
    src="/Images/car.png"
    alt="FastLink Car"
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
    className="about-car-image relative z-10"
  />
</div>


      </div>
    </section>
  );
}
