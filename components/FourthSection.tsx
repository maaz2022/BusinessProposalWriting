import { CircleFadingArrowUp, Factory, HandCoins, ScrollText, ShieldCheck, SquarePen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const FourthSection = () => {
  return (
    <section className="flex flex-row mt-28 gap-20 items-center justify-center bg-[#083554] h-[562px]">
      {/* Left side: Text and icons */}
      <div className="flex flex-col justify-center w-1/2 p-28"> 
        <div className="max-w-4xl">
          <h1 className="text-[36px] font-bold text-white leading-tight">
            Every business plan we have crafted in UAE has been a huge success story!
          </h1>
          <div className='w-20 mt-2 mb-4 border-b-4 border-white'></div>
          <p className="text-white mt-4 text-[20px]">
            You might not need business planning consulting because it is your venture, and you know better how to accelerate its growth. However, you might require our assistance in composing marketing, financial, investor, and all other types of business plans. We have helped some of the leading Emirati enterprises with these documents, and the results have been excellent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-white">
            <div className="flex flex-col items-center">
              <ShieldCheck width={50} height={50} />
              <p className="mt-2 text-center">Client Security</p>
            </div>
            <div className="flex flex-col items-center">
              <HandCoins width={50} height={50} />
              <p className="mt-2 text-center">Funds Raised By Our Plan</p>
            </div>
            <div className="flex flex-col items-center">
              <ScrollText width={50} height={50} />
              <p className="mt-2 text-center">By Our Business Plan</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory width={50} height={50} />
              <p className="mt-2 text-center">Industry/Niches Served</p>
            </div>
            <div className="flex flex-col items-center">
              <CircleFadingArrowUp width={50} height={50} />
              <p className="mt-2 text-center">Expected Turnover</p>
            </div>
            <div className="flex flex-col items-center">
              <SquarePen width={50} height={50} />
              <p className="mt-2 text-center">Business Plan Writer</p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-1/2 h-full  flex justify-center items-center">
        <div className=" h-full">
          <Image
            src="/Mask group-2.png"
            alt="Sample Image"
            layout="responsive"
            width={300}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
