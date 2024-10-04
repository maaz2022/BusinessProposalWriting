import { ThumbsUp } from 'lucide-react';
import React from 'react';

const Discount = () => {
  return (
    <section className="relative flex justify-center items-center bg-white shadow-lg rounded-3xl border-2 border-gray-300 lg:max-w-6xl md:max-w-6xl max-w-[450px] h-auto my-6 mx-auto p-6 md:p-11 bottom-20">
      <div className="text-[#083554] w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Sign up with Legacy Writes to Avail Our Exclusive Discounts
        </h1>

        {/* Responsive Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-[#083554] rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-[#083554] rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="border-2 border-[#083554] rounded-lg p-3 w-full md:w-[30%] focus:outline-none focus:border-blue-500"
          />
          
          <button
            className="px-6 py-3 bg-[#083554] text-white rounded-lg hover:bg-[#083654c4] duration-300 flex items-center justify-center w-full md:w-auto"
          >
            Submit <ThumbsUp className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Discount;
