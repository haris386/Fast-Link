"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Bebas_Neue } from "next/font/google";
import WritingText from "./WritingText";
import { motion } from "framer-motion";

// Bebas Neue font instance
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer({ setFormOpen }) {
  return (
    <footer className="w-full bg-[#EA2127]">
      {/* Container */}
      <div className="mx-auto w-[90%] py-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col gap-8 lg:basis-[30%] justify-between">
          {/* Logo */}
          <img
            src="/Logos/FLFooter.png"
            alt="Fastlink Footer Logo"
            className="w-[160px] object-contain"
          />

          {/* Button */}
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black hover:bg-gray-100 transition-colors w-fit">
            Download App <MdKeyboardArrowRight size={20} />
          </button>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col gap-8 lg:basis-[70%]">
          {/* Row 1: Email */}
          <a
            href="mailto:admin@fastlink.com"
            className={`${bebasNeue.className} text-white uppercase text-[35px] lg:text-[104px] font-semibold lg:leading-32`}
            style={{ letterSpacing: "5px" }}
          >
            <WritingText text="admin@fastlink.com" />
          </a>

          {/* Separator */}
          <div className="w-full h-[1px] bg-white opacity-60" />

          {/* Row 2: 3 Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-baseline justify-between">
            {/* Contact Column */}
            <div className="flex flex-col gap-4 text-white min-w-[220px] md:min-w-[250px]">
              <h4
                className={`${bebasNeue.className} font-semibold text-[25px]`}
                style={{ letterSpacing: "5px" }}
              >
                Contact
              </h4>

              <div className="flex items-start gap-2">
                <img
                  src="/Icons/call.png"
                  alt="Call Icon"
                  className="w-[16px] h-[16px] mt-[2px]"
                />
                <span className="text-[16px] font-[200]">999-999-999</span>
              </div>

              <div className="flex items-start gap-2">
                <img
                  src="/Icons/address.png"
                  alt="Address Icon"
                  className="w-[16px] h-[16px] mt-[2px]"
                />
                <span className="text-[16px] font-[200]">
                  356, road - 3, NewYork, United State
                </span>
              </div>
            </div>

            {/* Center Links */}
            <div className="flex flex-col gap-3 text-white text-[16px] font-[200] min-w-[140px] md:min-w-[160px]">
              <a href="#about" className="hover:underline cursor-pointer">
                About
              </a>
              <a href="#how-it-works" className="hover:underline cursor-pointer">
                How it works
              </a>
              <a href="#" className="hover:underline cursor-pointer">
                Features
              </a>
            </div>

            {/* Right Links */}
            <div className="flex flex-col gap-3 text-white text-[16px] font-[200] min-w-[120px] md:min-w-[140px]">
              <p  onClick={() => setFormOpen(true)} className="hover:underline cursor-pointer">
                Contact
              </p>
              <a href="#" className="hover:underline cursor-pointer">
                Career
              </a>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-[1px] bg-white opacity-60" />

          {/* Row 3: Bottom Text */}
          <div className="flex flex-col md:flex-row justify-between gap-4 text-white text-[16px] font-[200]">
            <span>© All right reserve FASTLINK 2025</span>
            <span>Move Smarter, Ride Faster</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-white flex justify-center"
      >
        <img
          src="/Images/footerFL.png"
          alt="Fastlink"
          className="object-contain"
        />
      </motion.div>
    </footer>
  );
}
