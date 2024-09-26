'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}


const faqsColumn1: FAQItem[] = [
  { question: "What is your return policy?", answer: "Our return policy allows you to return items within 30 days of purchase." },
  { question: "How long does shipping take?", answer: "Shipping typically takes 5-7 business days." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to various countries worldwide." },
  { question: "How can I track my order?", answer: "You will receive a tracking number via email once your order has shipped." }
];

const faqsColumn2: FAQItem[] = [
  { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
  { question: "Can I change my order after placing it?", answer: "You can change your order within one hour of placing it." },
  { question: "Do you have a customer service hotline?", answer: "Yes, our customer service hotline is available 24/7." },
  { question: "What should I do if I received a damaged item?", answer: "Please contact our support team within 48 hours of receiving the item." }
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
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 w-full max-w-6xl my-10 ">
      
        <div className='space-y-5'>
          {faqsColumn1.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition  p-4"
              onClick={() => toggleFAQCol1(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-[20px]">{faq.question}</span>
                <span className="text-4xl font-extrabold">{openIndexCol1 === index ? '-' : '+'}</span>
              </div>
              {openIndexCol1 === index && (
                <div className="p-4 border-t text-gray-700 text-[20px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2 */}
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
              {openIndexCol2 === index && (
                <div className="p-4 border-t text-gray-700 text-[20px]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
