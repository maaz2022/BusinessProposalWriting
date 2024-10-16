import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <section className='relative flex justify-between items-center bg-gradient-to-t from-[#083554] to-cyan-600 rounded-3xl  lg:max-w-6xl md:max-w-6xl  h-[250px] my-6 xl:mx-auto p-11 mt-28 lg:mx-5 md:mx-5 mx-5'>

        <div className='text-white'>
            <span className='md:text-2xl font-bold lg:text-16px'>
                Secure Your Next Big Client with a Proposal Writer– Let’s Write!
            </span>
            <p className='lg:text-[20px] md:text-[18px] text-[15px]  max-w-[350px] lg:max-w-2xl py-4'>
                From the First Word to the Final Signature, Your Plan Will Be the Reason They Can’t Say No!
            </p>
         <button className="px-6 py-2 bg-[#5e92ce] text-white rounded  flex items-center gap-3 text-[20px] justify-center hover:bg-blue-400 duration-300">
            Order Now <SquareArrowOutUpRight />
          </button>
        </div>
        <div className='hidden sm:block'>
            <Image
                src='/elegant-businessman-with-document_1.png'
                alt='image'
                width={250}
                height={200}
                className='absolute bottom-0 right-0'
                title='expert writer'
            />
        </div>
    </section>
  )
}

export default Cta
