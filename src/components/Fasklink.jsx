"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Fastlink() {
  const repeatedText = Array(10).fill("FASTLINK").join(" ");

  return (
    <section className="w-full bg-[#050502] relative overflow-hidden py-32 lg:py-12">
      {/* ===================== Animated Sliding Text ===================== */}
      <div className="flex flex-col gap-12">
        {/* Row 1 */}
        <div
          className="w-full overflow-hidden"
          style={{ position: "relative" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "scrollText 30s linear infinite" }}
          >
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="w-full overflow-hidden"
          style={{ position: "relative" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "scrollTextReverse 30s linear infinite" }}
          >
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
          </div>
        </div>

        {/* Row 3 */}
        <div
          className="w-full overflow-hidden"
          style={{ position: "relative" }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "scrollText 30s linear infinite" }}
          >
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
            <span
              className={`${bebasNeue.className} text-[#1e1f1a] text-[6rem] lg:text-[20rem] font-bold`}
              style={{
                letterSpacing: "25px",
                color: "#1e1f1a",
                marginRight: "100px",
                lineHeight:1
              }}
            >
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      {/* ===================== Floating Images ===================== */}
      <div className="absolute top-20 lg:top-28 w-full h-full pointer-events-none">
        <div className="absolute right-10 lg:right-[20%] top-[5%]">
          <Image src="/Images/FL1.png" alt="FL1" width={300} height={300} />
        </div>
        <div className="absolute left-10 lg:left-32 top-1/2">
          <Image src="/Images/FL2.png" alt="FL2" width={300} height={300} />
        </div>
        <div className="absolute right-20 lg:right-40 top-2/3">
          <Image src="/Images/FL3.png" alt="FL3" width={300} height={300} />
        </div>
      </div>

      {/* ===================== Animations ===================== */}
      <style jsx>{`
        @keyframes scrollText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollTextReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
