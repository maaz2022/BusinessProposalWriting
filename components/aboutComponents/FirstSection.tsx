import Image from 'next/image';
import React from 'react';

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-col-reverse 2xl:flex-row pt-12 md:pt-28 gap-10 md:gap-20 items-center justify-center px-8 lg:px-20 mb-11 bg-[#12458015] pb-20">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full 2xl:w-1/2 2xl:ml-28">
        <div className="max-w-full">
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#083554] leading-tight">
            Who we are
          </h1>
          <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem scelerisque natoque fusce nibh ut curabitur auctor viverra lectus conubia magnis massa posuere nunc conubia scelerisque.
          </p>
          <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem.
          </p>
          <p className="text-[#083554] mt-4 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem.
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center items-center w-full 2xl:w-1/2">
        <div className="w-[600px] h-[600px] 2xl:h-[800px]"> 
          <Image
            src="/Mask group-2.png"
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
