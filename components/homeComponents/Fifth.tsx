import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FifthSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0">
    
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px] 2xl:max-w-[450px]">
          <Image
            src="/Group_3.png"
            alt="business proposal"
            layout="responsive"
            width={200}
            height={100}
            className="object-cover w-full h-full"
            title='business proposal'
          />
        </div>
      </div>
  
  
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10"> 
        <div className="max-w-full lg:max-w-5xl">
          <span className="text-[28px] lg:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Get the Green Light with Proposals That Turn Your Business Vision into a Signed Contract!
          </span>
          
          <p className="text-[#083554] mt-4 text-[14px] sm:text-[14px] lg:text-[16px]">
            From Scribbles to Signatures; Proposals Crafted So Perfectly, They&apos;ll Think You’ve Read Their Minds. Because When Your Business Ideas Are Wrapped in Perfection, &apos;Yes&apos; is The Only Answer You’ll Get—Guaranteed to Make Even the Toughest Client Smile!
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
