import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const persons = [
  {
    name: 'Ellyse Perry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit consequatur mollitia praesentium nihil eum debitis facilis, a consectetur obcaecati distinctio.',
    image: '/Ellipse 12.png',
  },
  {
    name: 'John Doe',
    description: 'Quisquam, minus! Tempore, architecto dolorem? Ratione expedita, vero accusantium eveniet reiciendis! Adipisci, magnam? Distinctio, excepturi!',
    image: '/Ellipse 12.png',
  },
  {
    name: 'Jane Smith',
    description: 'Facilis, laboriosam! Dolorem rem reprehenderit odit perferendis. Voluptatibus eveniet, nulla sapiente cum esse, autem iusto beatae.',
    image: '/Ellipse 12.png',
  },
];

const EighthSection = () => {
  return (
    <section className="relative flex flex-col 2xl:flex-row mt-28 gap-10 lg:gap-20 items-center justify-center bg-[#083554] h-auto p-5 md:p-20">
      <Image
        src='/Group 44.png'
        alt='image'
        height={400}
        width={100}
        className='absolute -top-10 left-1/2 transform -translate-x-1/2 md:left-44 '
      />
      {/* Left side: Text and icons */}
      <div className="flex flex-col justify-center w-full 2xl:w-1/2 p-5 md:p-12"> 
        <div className="max-w-3xl space-y-8">
          <h1 className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
            Our Happiness Belongs to you
          </h1>
          <div className='w-20 mt-2 mb-4 border-b-4 border-white'></div>
          <p className="text-white mt-4 text-[16px] md:text-[20px] max-w-2xl">
            You might not need business planning consulting because it is your venture, and you know better how to accelerate its growth. However, you might require our assistance in composing marketing, financial, investor, and all other types of business plans. We have helped some of the leading Emirati enterprises with these documents, and the results have been excellent.
          </p>
          <button className="px-6 py-2 bg-[#124680] text-white rounded flex items-center gap-3 text-[18px] md:text-[20px] justify-center hover:bg-blue-400 duration-300">
            Order Now <SquareArrowOutUpRight />
          </button>
        </div>
      </div>

      {/* Right side: Cards */}
      <div className="w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center gap-5">
        {/* Cards for additional information */}
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
          {persons.map((person, index) => (
            <div key={index} className='w-full sm:w-[300px] md:w-[300px] lg:w-[250px] h-[400px] md:h-[500px] bg-white flex flex-col items-center p-5 rounded-lg shadow-md'>
              <Image
                src={person.image}
                alt='image'
                width={100}
                height={100}
                className='rounded-full object-cover mb-4'
              />
              <h1 className='font-semibold text-[#083554]'>{person.name}</h1>
              <p className="text-center text-gray-700 mt-2 text-[14px] md:text-[16px]">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
