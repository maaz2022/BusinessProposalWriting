import Image from 'next/image';
import React from 'react';

const FourthSection = () => {
  return (
    <section className="flex flex-col md:flex-col 2xl:flex-row mt-12 md:mt-28 gap-10 md:gap-10 items-center justify-center px-4 mb-8">
      {/* Left side with image */}
      <div className="flex justify-center items-center w-full 2xl:w-1/2">
        <Image
          src="/Mask group-2.png"
          alt="Sample Image"
          width={600}
          height={200}
          className=" h-auto"
        />
      </div>

      {/* Right side with text */}
      <div className="flex flex-col justify-center w-full 2xl:w-1/2 2xl:mr-40 lg:px-7"> 
        <div className="max-w-full md:max-w-7xl lg:max-w-6xl">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Who we are 
          </h1>
                 <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                We are a team of competent and professional business plan writers providing online business planning in UAE. Our writers have written plans for diversity of businesses ranging from start-ups to organizations based in the UAE region including Dubai, Abu Dhabi, Ajman and Sharjah.          </p>
                 <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                We fully understand that every business is unique and different from others and cannot be planned on a single template or category. Our team of in-house business consultants separately analyzes every business to provide customized business planning to each of our clients. Every business needs t hold some sort of uniqueness in order to be successful. Our business plan writers make sure to provide a unique feature to every business.          </p>
                <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
                BusinessPlanner.ae is fully aware of the latest technology and business strategies used in the modern era to flourish businesses. Our clients have reached new heights of success with the help of our business plans. Our extensive research will definitely help to evolve your business and take one of the top positions in the market.          
                </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
