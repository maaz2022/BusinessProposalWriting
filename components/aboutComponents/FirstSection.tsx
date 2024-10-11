import Image from 'next/image';
import React from 'react';

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row 2xl:flex-row pt-12 md:pt-28 gap-10 md:gap-20 items-center justify-center px-8 lg:px-20 mb-11 bg-[#12458015] pb-20">
      

      <div className="flex flex-col justify-center w-full lg:w-1/2 2xl:ml-28">
        <div className="max-w-full">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Your Big Idea Deserves a Bigger Proposal—We Make It Happen!
          </h1>
          <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px]  leading-relaxed">
            Let’s face it: writing a phenomenally brilliant business proposal is like assembling IKEA furniture—tons of potential but seriously confusing instructions. The good news? We’ve got the perfect cheat code for that! At <b>Business Proposal Writer</b>, we specialize in turning your ideas into proposals that don’t just sit pretty, but actually get the job done and bring real results.
          </p>
          <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
            Got a big investor pitch, aiming for that dream partnership, or planning to expand your business empire? We’ve got your back throughout the end! We’ll take your ideas, mix in some writing magic, and craft mind-blowing proposals that make people say, “Where do I sign?” No same old overused templates, no complicated jargon—just clear, compelling plans that tell your story exactly as it deserves.
          </p>
          <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px] leading-relaxed">
            Still wondering what’s our superpower? Easy; transforming proposal headaches into daydreams where you win each and every deal. No sweat, all swagger. Why hesitate when you can get set going? We’re ready to whip up something incredible and help you skip the fluff and go straight to winning.
          </p>
          <p className="text-[#083554] mt-4 text-[14px] lg:text-[16px] leading-relaxed font-bold">
            Stick around and see why we’re not your average proposal writers!
          </p>
        </div>
      </div>
      
 
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <div className="w-[600px] h-[600px] 2xl:h-[600px]"> 
          <Image
            src="/about1.png"
            alt="Sample Image"
            width={600}
            height={800}
            className="h-full w-auto object-cover" 
          />
        </div>
      </div>

    </section>
  );
};

export default FirstSection;
