"use client";

import { Bebas_Neue } from "next/font/google";

// Bebas Neue font
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <section className="w-full bg-black">
      {/* Container */}
      <div className="mx-auto w-[90%] py-20 flex flex-col gap-8 relative">
        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col gap-6 max-w-[900px] lg:mt-[12%]">
          <h2
            className={`${bebasNeue.className} text-white uppercase text-[32px] lg:text-[45px]`}
            style={{ letterSpacing: "4px", lineHeight: "55px" }}
          >
            About FastLink
          </h2>

          <p className="text-white text-[16px] leading-[26px] font-[300]">
            FastLink is a modern transportation platform designed to make
            <br className="hidden lg:block" /> everyday travel safe, simple, and stress-free. We connect
            riders
            <br className="hidden lg:block" /> with verified drivers using real-time mapping, smart routing,
            and
            <br className="hidden lg:block" /> secure in-app payments.
          </p>
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
                Our Purpose
              </h3>

              <p className="text-white text-[16px] leading-[26px] font-[300]">
                Our purpose at FastLink is to make daily travel safe, smart, and
                reliable. We
                <br className="hidden lg:block" /> connect riders with trusted drivers through intelligent
                routing and transparent
                <br className="hidden lg:block" /> pricing, ensuring every trip is smooth, stress-free, and
                dependable.
              </p>
            </div>

            {/* Technology */}
            <div className="flex flex-col gap-4 max-w-[900px]">
              <h3
                className={`${bebasNeue.className} uppercase text-white text-[32px] lg:text-[45px]`}
                style={{ letterSpacing: "4px", lineHeight: "55px" }}
              >
                Our Technology
              </h3>

              <p className="text-white text-[16px] leading-[26px] font-[300]">
                AI-powered dispatching • Live GPS tracking • Smart fare
                calculation •<br className="hidden lg:block" /> Secure verification
              </p>
            </div>
          </div>
        </div>

        {/* ================= OVERLAPPING CARDS ================= */}
<div className="about-overlap-wrapper">
  {/* Red Card */}
  <div className="about-red-card" />

  {/* Overlapping Image */}
  <img
    src="/Images/car.png"
    alt="FastLink Car"
    className="about-car-image"
  />
</div>

      </div>
    </section>
  );
}
