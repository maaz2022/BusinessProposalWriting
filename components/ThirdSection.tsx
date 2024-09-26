import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-row mt-28  gap-20 items-center justify-center">
      {/* Left side with image */}
      <div className=" flex justify-center items-center">
        <Image
          src="/Mask group-1.png" 
          alt="Sample Image"
          width={500}
          height={200}
        />
      </div>

      {/* Right side with text and button */}
      <div className="flex flex-col justify-center"> 
        <div className="max-w-5xl">
          <h1 className="text-[36px] font-bold text-[#083554] leading-tight">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </h1>
          <p className="text-[#717171] mt-4   max-w-4xl text-[20px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem scelerisque natoque fusce nibh ut curabitur auctor viverra lectus conubia magnis massa posuere nunc conubia scelerisque.         
          </p>
          <p className="text-[#717171] mt-4   max-w-4xl text-[20px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem
          </p>
          <p className="text-[#717171] mt-4   max-w-4xl text-[20px]">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Venenatis arcu enim scelerisque placerat interdum in aliquet varius magnis purus justo primis himenaeos fusce malesuada praesent faucibus mauris purus varius efficitur venenatis class erat fermentum ex habitant lobortis etiam facilisis hendrerit pellentesque nam magnis ut donec potenti pulvinar tempus potenti bibendum euismod aliquet ornare amet at dignissim primis elit semper ornare volutpat congue id aliquam non consectetur lacus nunc eleifend etiam maecenas vitae sollicitudin congue ex massa suscipit pulvinar lorem
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
