"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
import How from "@/components/How";
import Fair from "@/components/Fair";
import dynamic from "next/dynamic";
import ModalForm from "@/components/ModalForm";

const FastlinkNoSSR = dynamic(() => import("@/components/Fasklink.jsx"), { ssr: false });

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection setFormOpen={setFormOpen} />
      <About />
      <How />
      <Fair />
      <FastlinkNoSSR />
      <Footer setFormOpen={setFormOpen} />
      <ModalForm isOpen={formOpen} setIsOpen={setFormOpen} />  
    </>
  );
}

