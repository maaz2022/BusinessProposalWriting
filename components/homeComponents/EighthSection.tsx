import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const persons = [
  {
    name: 'Isabella Grant',
    profession: 'Marketing Graduate',
    description: "Working with BusinessProposalWriter was nothing short of amazing! Their experienced writers took my ideas and turned them into a fantastic business proposal that really stood out.   ",
    image: '/Ellipse 12.png',
    title: 'Isabella Grant'
    },
  {
    name: 'Chloe',
    profession: 'MBA Candidate',
    description: "These guys exceeded my expectations with their exceptional business proposal writing services! The professional writers here were attentive to my needs, and the final proposal was simply outstanding. Their team is not only engaging and effective but also dedicated to delivering high-quality work.",
    image: '/Ellipse 13.png',
    title: 'Chloe'
  },
  {
    name: 'Nathaniel Carter',
    profession: 'Business Administration Student',
    description: "Their unique approach to business proposals set me apart from the competition and helped me land the internship of my dreams. I highly recommend this business proposal writing agency to anyone looking for authentic online help!",
    image: '/Ellipse 14.png',
    title: 'Nathaniel Carter'
  },
];

const EighthSection = () => {
  return (
    <section className="relative flex flex-col 2xl:flex-row mt-28 gap-10 lg:gap-20 items-center justify-center bg-[#083554] h-auto p-5 md:p-20">
      <Image
        src='/Group 44.png'
        alt='commas'
        height={400}
        width={100}
        className='absolute -top-10 left-1/2 transform -translate-x-1/2 md:left-44 '
      />
    
      <div className="flex flex-col justify-center w-full 2xl:w-1/3 p-5 md:p-12"> 
        <div className="max-w-3xl space-y-8">
          <span className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
            Voices of Victory: Discover the Impact We’ve Created!
          </span>
          <div className='w-20 mt-2 mb-4 border-b-4 border-white'></div>
          <p className="text-white mt-4 text-[16px] lg:text-[16px] max-w-2xl">
            Join the Ranks of Ambitious Entrepreneurs Who Have Turned Their Visions into Reality, Fueled by Our Relentless Pursuit of Excellence and Dedicated Support Throughout the Process!
          </p>
          <button className="px-6 py-2 bg-[#124680] text-white rounded flex items-center gap-3 text-[18px] md:text-[20px] justify-center hover:bg-blue-400 duration-300">
            Order Now <SquareArrowOutUpRight />
          </button>
        </div>
      </div>

    
      <div className="w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center gap-5">
      
        <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
          {persons.map((person, index) => (
            <div key={index} className='w-full sm:w-[300px] md:w-[300px] lg:w-[275px] h-[400px] md:h-[500px] bg-white flex flex-col items-center p-5 rounded-lg shadow-md'>
              <Image
                src={person.image}
                alt={person.title}
                width={100}
                height={100}
                title={person.title}
                className='rounded-full object-cover mb-4'
              />
              <span className='font-semibold text-[#083554] '>{person.name}</span>
              <span className="text-[#124680] text-center">{person.profession}</span>
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