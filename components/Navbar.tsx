import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const Navbar = () => {
  return (
    <section className="py-10 bg-[#12458015]">
      <div className="  flex items-center justify-between mx-44">

        <div className="flex-shrink-0">
          <Image
            src="/Logo.png"
            alt="logo"  
            width={200}
            height={150}
            className="object-contain"
          />
        </div>


        <div className="flex space-x-8">
          <Link href="#" className="text-lg font-medium">About Us</Link>
          <Link href="#" className="text-lg font-medium">Services</Link>
          <Link href="#" className="text-lg font-medium">Testimonials</Link>
          <Link href="#" className="text-lg font-medium">Contact Us</Link>
        </div>

      <div className="relative flex flex-col group overflow-hidden h-10">

        <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
          <BsWhatsapp size={24} />
          <Link href="#" className="text-lg font-medium">+12345678901</Link>
        </div>

   
        <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#124680] ">
          <BsWhatsapp size={24} />
          <Link href="#" className="text-lg font-medium">+12345678901</Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Navbar;
