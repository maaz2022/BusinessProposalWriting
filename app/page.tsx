import CounterSection from "@/components/Counter";
import Cta from "@/components/Cta";
import Discount from "@/components/Discount";
import EighthSection from "@/components/EighthSection";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import FifthSection from "@/components/Fifth";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Hero from "@/components/Hero";
import SeventhSection from "@/components/SeventhSection";
import ThirdSection from "@/components/ThirdSection";

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
      <Footer/>
    </>
  );
}
