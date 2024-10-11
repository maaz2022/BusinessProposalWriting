import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col md:flex-col 2xl:flex-row lg:flex-row  mt-12 md:mt-28 gap-5 md:gap-5 items-center justify-center px-4">

      <div className="flex justify-center items-center w-full lg:w-1/2 2xl:ml-36  md:max-w-[500px]">
        <Image
          src="/Group_48 (1).png" 
          alt="Sample Image"
          width={900}
          height={400}
          className=" h-auto"
        />
      </div>

  
      <div className="flex flex-col justify-center w-full 2xl:w-1/2 2xl:mr-40 lg:px-10 md:px-10"> 
        <div className="max-w-full md:max-w-7xl lg:max-w-6xl">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            We Write, You Win —Expert Business Proposal Services That Turn Heads!
          </h1>
          <p className="text-[#383737] mt-4 text-[14px]  lg:text-[16px] leading-relaxed">
            You know that sinking feeling when you’re staring at a blank screen, and that oh-so-important business proposal just isn&apos;t writing itself? Yeah, we’ve all been there too. But, unlike you, we don’t sweat it, folks. Why? Because writing business proposals is our bread and butter. Here’s the deal: Where most people get caught in a web of “what ifs” and “how do I even start,” we’re already halfway through an excellent intro with data-backed insights.       
          </p>
          <p className="text-[#383737] mt-4 text-[14px]  lg:text-[16px] leading-relaxed">
            Seriously, <b>Business Proposal Writer</b> isn’t just your average business proposal writing company—we’re your secret weapon. Whether you’re aiming to land that dream client, seal a major deal, or impress investors with a winning plan, we’re here to make sure your pitch packs a punch. Let’s first talk about the real magic we bring to the table:
          </p>
          <ul className="text-[#383737] mt-4 text-[14px]  lg:text-[16px] leading-relaxed">
            <li>
              <span className="font-bold italic">✔	Boost Your Revenue, Not Your Stress: </span>
              The whole point of business plan and proposal writing is to grow your bottom line, right? We get it. Our skilled team is here to make sure your proposal isn&apos;t just good—it’s a cash magnet. Get ready to impress and increase those profit margins without the extra gray hairs. 
            </li>
                        <li>
              <span className="font-bold italic">✔	Clear Goals, Clear Wins:  </span>
              If your proposal doesn’t align with your goals, what&apos;s the point? Our US-based business proposal writers will dig deep to understand your business objectives and craft a strategy that hits the bullseye. Whether it&aposs expansion, funding, or world domination, we’ve got your back. 
            </li>
                        <li>
              <span className="font-bold italic">✔ Growth Strategies That Stick: Ready to Scale Up:  </span>
             Whether you&apos;re going after a small contract or aiming to scale your business big time, our proposals are built to grow with you. Dreaming of that multi-million-dollar project and Googling “business proposal writers near me”? We’ll help you get there, one proposal at a time. 
            </li>
          </ul>
            <p className="text-[#383737] mt-4 text-[14px]  lg:text-[16px] leading-relaxed">
            So, if you’re tired of stressing over writing a business proposal; let us step in. Think of us as the co-pilot to your business dreams— the metaphor that just keeps on giving. Then why bang your head against the keyboard when we’ve already cracked the code? Let’s turn your proposal into a revenue-boosting machine!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
