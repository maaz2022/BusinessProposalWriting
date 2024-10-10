'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'; 

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return (
    <section className="py-8 bg-[#12458015] relative z-20"> 
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-12 xl:px-44">

     
        <div className="flex-shrink-0">
          <Link href='/'>
            <Image
              src="/Logo.png"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

      
        <div className="md:hidden">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none text-gray-600"
            >
              <HiOutlineMenuAlt3 size={32} />
            </button>
          )}
        </div>

   
        <div className="hidden md:flex space-x-4 md:space-x-6 lg:space-x-8">
          <Link href="/about" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">About Us</Link>
          <Link href="/services" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Services</Link>
          <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Testimonials</Link>
          <Link href="/contact" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Contact Us</Link>
        </div>

  
        {!isSidebarOpen && (
          <div className="hidden sm:flex relative flex-col group overflow-hidden">
            <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
              <BsWhatsapp size={24} />
              <Link href="https://wa.me/12067467149" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">+1 206-746-7149</Link>
            </div>

            <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#124680]">
              <BsWhatsapp size={24} />
              <Link href="https://wa.me/12067467149" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">+1 206-746-7149</Link>
            </div>
          </div>
        )}
      </div>


      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-8">
          
     
          <div className="self-end">
            <button onClick={() => setIsSidebarOpen(false)} className="focus:outline-none">
              <HiX size={32} />
            </button>
          </div>

     
          <div className="flex-shrink-0">
            <Link href='/'>
              <Image
                src="/Logo.png"
                alt="logo"
                width={150}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

         
          <Link href="/about" className="text-md font-medium hover:text-[#124680]">About Us</Link>
          <Link href="/services" className="text-md font-medium hover:text-[#124680]">Services</Link>
          <Link href="#" className="text-md font-medium hover:text-[#124680]">Testimonials</Link>
          <Link href="/contact" className="text-md font-medium hover:text-[#124680]">Contact Us</Link>

        
          <div className="flex items-center space-x-2 bg-[#124680] py-3 text-white px-4 rounded-xl hover:bg-[#126180]">
            <BsWhatsapp size={24} />
            <Link href="https://wa.me/12067467149" className="text-sm font-medium">+12067467149</Link>
          </div>
        </div>
      </div>

     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        ></div>
      )}
    </section>
  );
};

export default Navbar;
