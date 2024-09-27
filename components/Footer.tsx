import { Clock, Facebook, Instagram, Linkedin, Mail, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-FooterBg bg-cover bg-center text-white py-8 h-auto">
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#083554] opacity-90 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12">

          {/* Logo Section */}
          <div className="w-full lg:w-1/4 text-left flex flex-col mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4 self-start">
              <Link href="/">
                <Image
                  src='/All Service Brand Logos-12 1.png'
                  alt='logo'
                  width={300}
                  height={100}
                />
              </Link>
            </h2>
            <p className="text-white text-[16px] md:text-[20px] max-w-full lg:max-w-4xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla dolorum est assumenda adipisci temporibus earum possimus quidem omnis esse officia dignissimos quisquam iste iure, et itaque asperiores, amet ad.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white">
                <Instagram size={30} />
              </a>
              <a href="#" className="text-white">
                <Facebook size={30} />
              </a>
              <a href="#" className="text-white">
                <X size={30} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={30} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32 lg:pl-20">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:underline">About us</a></li>
              <li><a href="#" className="text-white hover:underline">Contact us</a></li>
              <li><a href="#" className="text-white hover:underline">Pricing</a></li>
              <li><a href="#" className="text-white hover:underline">Book Consultant</a></li>
              <li><a href="#" className="text-white hover:underline">Sitemap</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:underline">Business Content Writing</a></li>
              <li><a href="#" className="text-white hover:underline">Business Proposal</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/4 text-left mb-8 lg:mt-32">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <div className="space-y-6">
              <p className="flex items-center">
                <Clock className="mr-2" /> Saturday - Thursday 9am to 7pm
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@businessproposalwriter
              </p>
              <p>+971 562 906 253</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
