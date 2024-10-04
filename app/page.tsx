import CounterSection from "@/components/homeComponents/Counter";
import Cta from "@/components/homeComponents/Cta";
import Discount from "@/components/homeComponents/Discount";
import EighthSection from "@/components/homeComponents/EighthSection";
import FAQ from "@/components/homeComponents/FAQ";
import Features from "@/components/homeComponents/Features";
import FifthSection from "@/components/homeComponents/Fifth";
import FourthSection from "@/components/homeComponents/FourthSection";
import Hero from "@/components/homeComponents/Hero";
import SeventhSection from "@/components/homeComponents/SeventhSection";
import ThirdSection from "@/components/homeComponents/ThirdSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero/>
      <Discount/>
      <CounterSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Features/>
      <SeventhSection/>
      <EighthSection/>
      <FAQ/>
      <Cta/>
  
    </>
  );
}
