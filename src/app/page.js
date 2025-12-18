"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
import How from "@/components/How";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <How />
      <Footer />
    </>
  );
}

