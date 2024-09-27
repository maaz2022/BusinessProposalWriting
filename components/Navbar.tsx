'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar

  return (
    <section className="py-8 bg-[#12458015]">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-44">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/Logo.png"
            alt="logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
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

        {/* Links Section (Hidden on small screens, shown on md and above) */}
        <div className="hidden md:flex space-x-4 md:space-x-6 lg:space-x-8">
          <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">About Us</Link>
          <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Services</Link>
          <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Testimonials</Link>
          <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">Contact Us</Link>
        </div>

        {/* WhatsApp Contact (Hidden on small screens, shown on sm and above) */}
        {!isSidebarOpen && (
          <div className="hidden sm:flex relative flex-col group overflow-hidden ">
            <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
              <BsWhatsapp size={24} />
              <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">+12345678901</Link>
            </div>

            <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#124680]">
              <BsWhatsapp size={24} />
              <Link href="#" className="text-sm md:text-base lg:text-lg font-medium hover:text-[#124680]">+12345678901</Link>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-8">
          
          {/* Close Button inside Sidebar */}
          <div className="self-end">
            <button onClick={() => setIsSidebarOpen(false)} className="focus:outline-none">
              <HiX size={32} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <Link href="#" className="text-md font-medium hover:text-[#124680]">About Us</Link>
          <Link href="#" className="text-md font-medium hover:text-[#124680]">Services</Link>
          <Link href="#" className="text-md font-medium hover:text-[#124680]">Testimonials</Link>
          <Link href="#" className="text-md font-medium hover:text-[#124680]">Contact Us</Link>

          {/* WhatsApp Contact in the Sidebar */}
          <div className="flex items-center space-x-2 bg-[#124680] py-3 text-white px-4 rounded-xl hover:bg-[#126180]">
            <BsWhatsapp size={24} />
            <Link href="#" className="text-sm font-medium ">+12345678901</Link>
          </div>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        ></div>
      )}
    </section>
  );
};

export default Navbar;
