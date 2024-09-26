import { CircleFadingArrowUp, Factory, HandCoins, ScrollText, ShieldCheck, SquareArrowOutUpRight, SquarePen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FifthSection = () => {
  return (
    <section className="flex flex-row mt-28 gap-20 items-center justify-center ">
    <div className="w-1/3  flex justify-center items-center">
        <div className=" h-full">
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
  
      <div className="flex flex-col justify-center w-1/2 "> 
        <div className="max-w-5xl">
          <h1 className="text-[36px] font-bold text-[#083554] leading-tight">
            Every business plan we have crafted in UAE has been a huge success story!
          </h1>
          
          <p className="text-[#083554] mt-4 text-[20px]">
            You might not need business planning consulting because it is your venture, and you know better how to accelerate its growth. However, you might require our assistance in composing marketing, financial, investor, and all other types of business plans. We have helped some of the leading Emirati enterprises with these documents, and the results have been excellent.
          </p>
            <button className="px-6 py-2 bg-[#124680] text-white  flex items-center gap-3 text-[20px] justify-center hover:bg-blue-400 duration-300 mt-5">
            Lets Begin <SquareArrowOutUpRight />
          </button>
        </div>
      </div>

    </section>
  );
};

export default FifthSection;
