"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
import How from "@/components/How";
import Fair from "@/components/Fair";
import dynamic from "next/dynamic";

const FastlinkNoSSR = dynamic(() => import("@/components/Fasklink.jsx"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <How />
      <Fair />
      <FastlinkNoSSR />
      <Footer />
    </>
  );
}

