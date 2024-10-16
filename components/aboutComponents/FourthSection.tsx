import Image from 'next/image';
import React from 'react';

const FourthSection = () => {
  return (
    <section className="flex flex-col md:flex-row 2xl:flex-row mt-12 md:mt-28 gap-10 md:gap-2 items-center justify-center px-4 mb-8">
  
      <div className="flex justify-center items-center w-full 2xl:w-1/3">
        <Image
          src="/about3.png"
          alt="Sample Image"
          width={300}
          height={200}
          className=" h-auto"
          title='proposal writing'
        />
      </div>


      <div className="flex flex-col justify-center w-full 2xl:w-1/2 2xl:mr-40 lg:px-4"> 
        <div className="max-w-full md:max-w-7xl lg:max-w-6xl">
          <span className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Your Mission Is Our Mission!
          </span>
                 <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
                At <b>Business Proposal Writer</b>, we’re not just about putting words on the paper—we build door-opening opportunities. Think of us as the ultimate sidekick, ensuring your proposal packs a punch no matter what! Whether you&apos;re about to seal that make-or-break deal, charm the socks off investors, or kick-start your next big project, we’re laser-focused on helping you crush it. Your dreams? We&apos;re chasing them right with you. We’re all in, crafting proposals that do more than talk—they shout, “Let’s make this happen!” 
                </p>
                 <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
                So, ready to turn heads and take names? We’ll make your next big move the smoothest one yet!
                  </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
