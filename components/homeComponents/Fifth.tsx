import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FifthSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0">
    
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px]">
          <Image
            src="/Group 3.png"
            alt="Sample Image"
            layout="responsive"
            width={200}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
  
  
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10"> 
        <div className="max-w-full lg:max-w-5xl">
          <h1 className="text-[28px] lg:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Get the Green Light with Proposals That Turn Your Business Vision into a Signed Contract!
          </h1>
          
          <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px]">
            From Scribbles to Signatures; Proposals Crafted So Perfectly, They&aposll Think You’ve Read Their Minds. Because When Your Business Ideas Are Wrapped in Perfection, &aposYes&apos is The Only Answer You’ll Get—Guaranteed to Make Even the Toughest Client Smile!
          </p>
          
          <button className="px-6 py-2 bg-[#124680] text-white flex items-center gap-3 text-[18px] sm:text-[20px] justify-center hover:bg-blue-400 duration-300 mt-5">
          Let&apos;s Begin <SquareArrowOutUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
