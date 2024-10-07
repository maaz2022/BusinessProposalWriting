import { CircleFadingArrowUp, Factory, HandCoins, ScrollText, ShieldCheck, SquarePen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FourthSection = () => {
  return (
    <section className="flex flex-col md:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center bg-[#083554] md:h-[700px] lg:h-[540px] px-4 md:px-0">
      {/* Left side: Text and icons */}
      <div className="flex flex-col justify-center w-full p-8 md:p-28 lg:p-10 lg:w-1/2"> 
        <div className="max-w-full md:max-w-4xl lg:max-w-5xl">
          <h1 className="xl:text-[28px] lg:text-[20px] sm:text-[32px] md:text-[32px] font-bold text-white leading-tight lg:mt-5">
            Every business plan we have crafted in UAE has been a huge success story!
          </h1>
          <div className='w-20 mt-2 mb-4 border-b-4 border-white'></div>
          <p className="text-white mt-4 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[14px] xl:text-[15px] ">
            You might not need business planning consulting because it is your venture, and you know better how to accelerate its growth. However, you might require our assistance in composing marketing, financial, investor, and all other types of business plans. We have helped some of the leading Emirati enterprises with these documents, and the results have been excellent.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 text-white">
            <div className="flex flex-col items-center">
              <ShieldCheck width={40} height={40} className="sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px] lg:w-[40px] xl:w-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px]">Client Security</p>
            </div>
            <div className="flex flex-col items-center">
              <HandCoins width={40} height={40} className="sm:w-[50px] sm:h-[50px] md:w-[50px]  lg:w-[40px] md:h-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px]">Funds Raised By Our Plan</p>
            </div>
            <div className="flex flex-col items-center">
              <ScrollText width={40} height={40} className="sm:w-[50px] sm:h-[50px] md:w-[50px]  lg:w-[40px] md:h-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px]">By Our Business Plan</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory width={40} height={40} className="sm:w-[50px] sm:h-[50px] md:w-[50px]  lg:w-[40px] md:h-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px]">Industry/Niches Served</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleFadingArrowUp width={40} height={40} className="sm:w-[50px] sm:h-[50px]  lg:w-[40px] md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px]">Expected Turnover</p>
            </div>
            <div className="flex flex-col items-center">
              <SquarePen width={40} height={40} className="sm:w-[50px] sm:h-[50px]  lg:w-[40px] md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-center text-[14px] sm:text-[16px] md:text-[16px] lg:text-[12px] ">Business Plan Writer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2 h-auto hidden md:hidden lg:flex justify-center items-center">
        <div className=" h-full lg:w-[400px] xl:w-[635px]">
          <Image
            src="/Mask group-2.png"
            alt="Sample Image"
            layout="responsive"
            width={400}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
