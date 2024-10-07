import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#083554]">

      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10"> 
        <div className="max-w-full lg:max-w-5xl">
          <h1 className="xl:text-[28px] text-[32px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-7">
            Every business plan we have crafted in UAE has been a huge success story!
          </h1>
          
          <p className="text-white mt-4 text-[16px] sm:text-[18px] md:text-[15px] lg:text-[15px] xl:text-[20px]">
            You might not need business planning consulting because it is your venture, and you know better how to accelerate its growth. However, you might require our assistance in composing marketing, financial, investor, and all other types of business plans. We have helped some of the leading Emirati enterprises with these documents, and the results have been excellent.
          </p>
          
          <button className="px-6 py-2 bg-[#124680] text-white flex items-center gap-3 text-[18px] sm:text-[20px] justify-center hover:bg-blue-400 duration-300 mt-5">
                Schedule Call <SquareArrowOutUpRight />
          </button>
        </div>
      </div>
            <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0">
        <div className="h-auto w-full max-w-[400px]">
          <Image
            src="/AGroup 3.png"
            alt="Sample Image"
            layout="responsive"
            width={600}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
