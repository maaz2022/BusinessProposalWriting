import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#083554]">

      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10"> 
        <div className="max-w-full lg:max-w-5xl">
          <span className="xl:text-[28px] text-[32px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-7">
            Proposals So Good, They Might Just Get a Standing Ovation – Let’s Write Yours!
          </span>
          
          <p className="text-white mt-4 text-[14px] lg:text-[16px]  ">
            Why Wait for Tomorrow? Light the Fire of Creativity and Innovation – Together, We’ll Design a Unique Narrative that Cuts Through the Clutter and Inspires Action!
          </p>
          
          <button className="px-6 py-2 bg-[#124680] text-white flex items-center gap-3 text-[18px] sm:text-[20px] justify-center hover:bg-blue-400 duration-300 mt-5">
                Schedule Call <SquareArrowOutUpRight />
          </button>
        </div>
      </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px]">
          <Image
            src="/about2.png"
            alt="Sample Image"
            layout="responsive"
            width={700}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
