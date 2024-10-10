'use client';
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-center items-center shadow-sm rounded-lg p-6 md:p-10 bg-[#12458015]">

      <div className="hidden sm:block absolute left-0 top-16  h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[70px] bg-[#124680] opacity-30 z-0"></div>
      <div className="absolute right-0 bottom-10 w-[600px] h-[700px] md:w-[750px] md:h-[900px] blur-[90px] rounded-full bg-[#124680] opacity-40 z-0"></div>


      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start pl-6 md:pl-20 lg:pl-6 xl:pl-20 2xl:pl-60 space-y-6 md:space-y-8 relative z-10">
        <h1 className="text-black text-4xl md:text-4xl lg:text-[35px] 2xl:text-5xl xl:text-4xl font-bold relative">
          Land the Deal of Your Dreams with Killer Business Proposal Writers!
        </h1>

        <p className="text-black text-base md:text-lg max-w-full md:max-w-xl lg:text-[18px] xl:text-[20px]">
          Pitch with Confidence, Prove with Value, and Close the Deal with Tailor-Made Business Proposal Writing Services That Open Doors to Lasting Success and Unmatched Results!
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="xl:px-6 xl:py-2 px-4 py-2 bg-[#124680] text-white rounded flex items-center gap-3 text-base md:text-lg justify-center hover:bg-blue-400 duration-300 lg:px-3 lg:py-1">
            Schedule Call <SquareArrowOutUpRight />
          </button>
          <button className="px-4 py-2  lg:px-3 lg:py-1 xl:px-6 xl:py-2 text-[#124680] justify-center capitalize text-base md:text-lg flex gap-3 items-center border-2 border-[#124680] hover:bg-[#124680] hover:text-white duration-300">
            Chat Now <ArrowRight />
          </button>
        </div>
      </div>

   
      <div className="w-full lg:w-1/2 flex justify-center items-center pr-0 lg:pl-32 2xl:pr-32 pb-10 relative z-10">
        <Image src="/Group 45.png" alt="business image" width={500} height={300} className="w-full max-w-xs md:max-w-md  h-auto lg:w-[300px] 2xl:w-full" />
      </div>
    </section>
  );
};

export default Hero;
