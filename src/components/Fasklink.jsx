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
    <>
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
                  lineHeight: 1,
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
                  lineHeight: 1,
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
                  lineHeight: 1,
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
                  lineHeight: 1,
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
                  lineHeight: 1,
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
                  lineHeight: 1,
                }}
              >
                {repeatedText}
              </span>
            </div>
          </div>
        </div>

        {/* ===================== Floating Images ===================== */}
        {/* Desktop version (absolute) */}
        <div className="absolute top-20 lg:top-28 w-full h-full pointer-events-none hidden lg:block z-20">
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

        {/* Mobile version (stacked vertically but absolute to stay in front) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 lg:hidden z-20 pointer-events-none">
          <div className="flex justify-center">
            <Image src="/Images/FL1.png" alt="FL1" width={200} height={200} />
          </div>
          <div className="flex justify-center">
            <Image src="/Images/FL2.png" alt="FL2" width={200} height={200} />
          </div>
          <div className="flex justify-center">
            <Image src="/Images/FL3.png" alt="FL3" width={200} height={200} />
          </div>
        </div>

        {/* ===================== Animations ===================== */}
        <style jsx>{`
          @keyframes scrollText {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scrollTextReverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </section>
      <section className="w-full bg-black py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:mt-24">
          {/* ===== Row 1 ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* Card 1 – 40% (solid color, no image overlay needed) */}
            <div className="lg:col-span-4 bg-[#EA2127] rounded-2xl p-8 flex flex-col justify-end min-h-[300px]">
              <h3
                className={`${bebasNeue.className} text-white text-4xl leading-tight tracking-wider mb-4`}
              >
                <span className="block">Driver Score</span>
                <span className="block">That Truly Matters</span>
              </h3>

              <p className="text-white/90 text-sm leading-relaxed">
                Every FastLink driver has a dynamic performance score that
                updates after each ride. This score ensures transparency,
                fairness, and the best ride experience for passengers.
              </p>
            </div>

            {/* Card 2 – 60% */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[300px]">
              <Image
                src="/Images/RQ.png"
                alt="Ride Quality"
                fill
                className="object-cover"
              />

              {/* Black bottom-to-top fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3
                  className={`${bebasNeue.className} text-xl tracking-wide mb-2`}
                >
                  Ride Quality
                </h3>
                <p className="text-white/90 text-sm leading-relaxed max-w-xl">
                  Drivers are evaluated on how smoothly and safely they complete
                  each trip. This includes maintaining smooth driving without
                  sudden brakes or harsh acceleration, providing a comfortable
                  ride with steady speed, and keeping the vehicle clean and
                  well-maintained.
                </p>
              </div>
            </div>
          </div>

          {/* ===== Row 2 ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="/Images/PR.png"
                alt="Passenger Ratings"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4
                  className={`${bebasNeue.className} text-xl tracking-wide mb-2`}
                >
                  Passenger Ratings
                </h4>
                <p className="text-white/90 text-sm">
                  Passenger ratings at each trip affect the driver’s score based
                  on behavior and helpfulness.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="/Images/AER.png"
                alt="Accurate Fare Reporting"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4
                  className={`${bebasNeue.className} text-xl tracking-wide mb-2`}
                >
                  Accurate Fare Reporting
                </h4>
                <p className="text-white/90 text-sm">
                  FastLink rewards honesty, enforces fares, and uses tracking
                  for fair pricing.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
              <Image
                src="/Images/NB.png"
                alt="Navigation Behavior"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4
                  className={`${bebasNeue.className} text-xl tracking-wide mb-2`}
                >
                  Navigation Behavior
                </h4>
                <p className="text-white/90 text-sm">
                  Drivers are scored on following recommended routes and
                  managing traffic efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
