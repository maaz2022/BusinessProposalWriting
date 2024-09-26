import CounterSection from "@/components/Counter";
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
      <CounterSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Features/>
      <SeventhSection/>
      <EighthSection/>
      <FAQ/>
      <Footer/>
    </>
  );
}
