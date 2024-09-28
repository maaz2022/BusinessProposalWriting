import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col md:flex-col lg:flex-row mt-12 md:mt-28 gap-10 md:gap-20 items-center justify-center px-4">
      {/* Left side with image */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <Image
          src="/Group_48.png" 
          alt="Sample Image"
          width={600}
          height={200}
          className=" h-auto"
        />
      </div>

      {/* Right side with text */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:mr-40"> 
        <div className="max-w-full md:max-w-7xl lg:max-w-5xl">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </h1>
          <p className="text-[#717171] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem scelerisque natoque fusce nibh ut curabitur auctor viverra lectus conubia magnis massa posuere nunc conubia scelerisque.         
          </p>
          <p className="text-[#717171] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem
          </p>
          <p className="text-[#717171] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
