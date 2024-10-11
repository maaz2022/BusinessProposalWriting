'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqsColumn1: FAQItem[] = [
  { question: "How do business proposal writers help me write a perfect business proposal? ", answer: "Business proposal writers help craft standout proposals by offering expertise and a fresh perspective. They handle research, structure, and industry nuances, tailoring your proposal to meet client needs. Their work ensures your ideas are transformed into a polished, compelling document, reflecting your vision and boosting your chances of success." },
  { question: "How to find someone to write a business proposal?", answer: "Looking for a perfect business proposal writer? Start with us! BusinessProposalWriter specializes in crafting compelling proposals that resonate with your audience. While you can explore various online platforms, connecting with our PhD-certified writers guarantees an innovative approach to your project. Our skilled team gets the specifics of your industry, ensuring a polished product that leaves a lasting impact." },
  { question: "Can I pay someone to write a business proposal?", answer: "Absolutely! Investing in an expert writer with extensive business proposal writing experience is one of the smartest decisions you can make. By hiring us, you can save time and alleviate stress while ensuring a high-quality document that captures your vision. Our team is well-versed in various industries and can create custom proposals that meet your specification, increasing your chances of securing valuable contracts." },
];

const faqsColumn2: FAQItem[] = [
  { question: "How much does it cost for someone to write a business proposal?", answer: "The cost of hiring a business proposal writer varies depending on factors like project complexity, the writer’s experience, and proposal length. We offer budget-friendly rates and transparent pricing with no hidden fees. You’ll get a personalized quote upfront, plus access to discounts, ensuring great value!" },
  { question: "How long does it take to write a business plan?", answer: "The time it takes to complete a business plan can vary depending on the project’s complexity and the details provided. On average, it can take anywhere from a few days to a few weeks. If you already have your information ready, we can accelerate the process. Just let us know your deadlines, and our team will ensure timely delivery, focusing on clear communication to meet your needs." },
  { question: "What information do your writers require to write a business plan?", answer: "To create a strong business plan, we’ll need key details such as your business overview, mission statement, product or service descriptions, and target market. Additionally, a competitor analysis, marketing strategy, and financial projections are essential. The more detailed your input, the better we can tailor your plan to match your vision. Don’t worry—our team will assist you through each step, ensuring nothing is missed!" },
];

const FAQ = () => {
  const [openIndexCol1, setOpenIndexCol1] = useState<number | null>(null);
  const [openIndexCol2, setOpenIndexCol2] = useState<number | null>(null);

  const toggleFAQCol1 = (index: number) => {
    setOpenIndexCol1(openIndexCol1 === index ? null : index);
  };

  const toggleFAQCol2 = (index: number) => {
    setOpenIndexCol2(openIndexCol2 === index ? null : index);
  };

return (
  <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold mt-16 text-center">Frequently Asked <span className='text-[#083554]'>Questions</span></h1>
       <div className='w-20  rounded-xl my-4 border-b-8 border-[#083554]'></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 w-full max-w-6xl my-10">
      <div className='space-y-5'>
        {faqsColumn1.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 p-4"
            onClick={() => toggleFAQCol1(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-[20px]">{faq.question}</span>
              <span className="text-4xl font-extrabold">{openIndexCol1 === index ? '-' : '+'}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndexCol1 === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              {openIndexCol1 === index && (
                <div className="p-4 border-t text-gray-700 text-[14px] lg:text-[16px]">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='space-y-5'>
        {faqsColumn2.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-2 border-black rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 p-4"
            onClick={() => toggleFAQCol2(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-[20px]">{faq.question}</span>
              <span className="text-4xl font-extrabold">{openIndexCol2 === index ? '-' : '+'}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndexCol2 === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              {openIndexCol2 === index && (
                <div className="p-4 border-t text-gray-700 text-[14px] lg:text-[16px]">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default FAQ;
