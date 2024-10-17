'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  reason: string;
  businessLevel: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    reason: '',
    businessLevel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form data:', formData);
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-start p-6 2xl:p-12 ">
      <form 
        className="w-full lg:max-w-2xl bg-white p-8 rounded-xl 2xl:ml-52 border-2 border-[#083554] mt-24"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-4 text-start text-[#083554]">Get in touch</h2>
        <div className='w-20  mb-4 border-b-4 border-[#083554]'></div>
        <p className="text-start mb-4 text-[#083554]">We are anticipating working with you! Fill in the form and our representative will get back to you within 24 hours.</p>


        <div className="mb-4 grid grid-cols-2 gap-4">
          <input
            className="w-full p-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#083554]"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

  
        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

     
        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-4">
          <input
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

  
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="reason"
            placeholder="Why do you need the business plan?"
            value={formData.reason}
            onChange={handleChange}
            rows={2}
            required
          ></textarea>
        </div>

     
        <div className="mb-4">
          <select
            className="w-full p-2 border border-[#083554] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="businessLevel"
            value={formData.businessLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Business Level</option>
            <option value="Startup">Startup</option>
            <option value="Established">Established</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

     
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} className='flex justify-center' />
        <button
          className="w-full bg-[#083554] text-white py-3 rounded-xl hover:bg-[#082f54] transition-colors mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>

    
      <div className="w-full 2xl:w-1/2 2xl:h-[650px] mt-8 lg:mt-0 lg:ml-8 flex-grow lg:max-w-3xl 2xl:mr-28">
        <div className="hidden lg:block mt-24">
          <Image 
            src='/Mask.png'
            alt='our team'
            width={600}
            height={600}
            title='our team'
          />
        </div>
   
      <div className="flex flex-col items-start justify-center bg-white p-8 rounded-xl shadow-md lg:max-w-[600px] h-[270px] mt-5 border-2 border-[#083554]">
        <div className="mb-4 flex items-center">
          <Phone size={40} className="mr-4 p-2 bg-blue-200 rounded-full text-[#083554]" />
          <div>
            Phone <br />
            <Link rel='nofollow' href="https://wa.me/12067467149" target='_blank'  >+1 206-746-7149</Link>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <Mail size={40} className="mr-4 p-2 bg-blue-200 rounded-full text-[#083554]" />
          <div>
            Email <br />
            <a href="mailto:info@businessproposalwriter.com">info@businessproposalwriter.com</a>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin size={40} className="mr-4 p-2 bg-blue-200 rounded-full text-[#083554]" />
          <div>
            Address <br />
            30 N Gould St Ste R Sheridan, WY 82801
          </div>
        </div>
      </div>


      </div>
    </div>
  );
};

export default ContactForm;
