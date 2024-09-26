'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const Hero = () => {

  return (
    <section className="relative flex justify-center items-center  shadow-sm rounded-lg p-10 bg-[#12458015]">
      <div className="absolute left-0 top-16 w-[600px] h-[600px] rounded-full blur-[70px] bg-[#124680] opacity-30 z-0"></div>
      <div className="absolute right-0 bottom-10 w-[750px] h-[900px] blur-[90px] rounded-full bg-[#124680] opacity-40 z-0"></div>
      <div className="w-1/2 flex flex-col justify-center pl-60 space-y-10 relative z-10">
        <h1 className="text-black text-6xl font-bold relative">
          Create the business you always dreamed of
        </h1>

        <p className="text-black text-lg max-w-xl">
          We create a customized executive business proposal that meets the unique needs and goals for business
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-[#124680] text-white rounded  flex items-center gap-3 text-[20px] justify-center hover:bg-blue-400 duration-300">
            Schedule Call <SquareArrowOutUpRight />
          </button>
          <button className="px-6 py-2 text-[#124680] capitalize text-[20px] flex gap-2 items-center border-4 border-[#124680] hover:bg-[#124680] hover:text-white duration-300">
            Read More <ArrowRight />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-1/2 flex justify-center items-center pr-32 pb-10 relative z-10">
        <Image src="/Group 45.png" alt="image" width={500} height={300} />
      </div>
    </section>
    
  );
};

export default Hero;
