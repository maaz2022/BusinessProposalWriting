import { FileSearch, FolderUp, Grid2x2Check, HandshakeIcon, Headset, Star } from 'lucide-react';
import React from 'react';

const Features = () => {
    const features = [
        {
            icon: <HandshakeIcon size={50} />,
            title: 'Expert Team',
            description: 'Our team consists of highly qualified and professional Dubai business plan writers to provide you with the perfect plan.'
        },
        {
            icon: <Headset size={50} />,
            title: '24/7 Customer Support',
            description: 'Our customer support representatives provide their assistance 24/7 to all the clients ensuring their satisfaction.'
        },
        {
            icon: <Grid2x2Check size={50} />,
            title: 'Easily Affordable',
            description: 'We have kept our prices reasonable and easily affordable for all to get their business plan Dubai.'
        },
        {
            icon: <Star size={50} />,
            title: 'Fully Tailored',
            description: 'Our business plan writing services in UAE are custom-built according to the client\'s business requirements and industry.'
        },
        {
            icon: <FileSearch size={50} />,
            title: 'Reliable Research',
            description: 'Our business planning Dubai is based on reliable and extensive research conducted by our competent business plan writers.'
        },
        {
            icon: <FolderUp size={50} />,
            title: 'Growth Strategy',
            description: 'We also provide other services like website development, lead generation, marketing strategy to help you grow your business.'
        }
    ];

    return (
        <>
            <section className='bg-blue-200 py-16 px-4 md:px-20 mt-10'>
                {/* Title Section */}
                <div className="flex flex-col items-center space-y-5 text-center">
                    <h1 className="font-light text-2xl md:text-3xl text-black pt-10">
                        Why we are different?
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold max-w-2xl text-[#083554]">
                        Our Unique Features
                    </h2>
                    <div className='w-20 md:w-40 mt-2 mb-4 border-b-4 md:border-b-8 rounded-md border-[#083554]'></div>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-auto max-w-6xl px-4'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center shadow-lg rounded-lg p-6 bg-white'
                        >
                            <div className='text-[#083554] mb-4'>
                                {feature.icon}
                            </div>
                            <h3 className='font-bold text-xl text-[#083554] mb-2'>
                                {feature.title}
                            </h3>
                            <p className='text-black text-center'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Features;
