import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SixthSection = () => {
  return (
    <section className='relative flex justify-between items-center bg-gradient-to-t from-[#083554] to-cyan-600 rounded-3xl  lg:max-w-6xl md:max-w-6xl  h-[250px] my-6 xl:mx-auto p-11 mt-28 lg:mx-5 md:mx-5 mx-5'>

        <div className='text-white'>
            <span className='md:text-2xl font-bold'>
                Let’s Cook Up Proposals That Make You the Talk of the Town!
            </span>
            <p className='lg:text-[20px] md:text-[18px] text-[15px]  max-w-[350px] lg:max-w-2xl py-4'>
                Your Ambitions Deserve a Pitch That Speaks Volume – Go Beyond Ordinary and Captivate with Masterpieces That Ignite Passion and Close Deals!
            </p>
         <button className="px-6 py-2 bg-[#5e92ce] text-white rounded  flex items-center gap-3 text-[20px] justify-center hover:bg-blue-400 duration-300">
            Order Now <SquareArrowOutUpRight />
          </button>
        </div>
        <div className='hidden sm:block'>
            <Image
                src='/about.png'
                alt='image'
                width={250}
                height={200}
                className='absolute bottom-0 right-0'
            />
        </div>
    </section>
  )
}

export default SixthSection
