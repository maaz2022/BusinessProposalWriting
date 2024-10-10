import { FileSearch, FolderUp, Grid2x2Check, HandshakeIcon, Headset, Star } from 'lucide-react';
import React from 'react';

const Features = () => {
    const features = [
        {
            icon: <HandshakeIcon size={50} />,
            title: 'Best Business Plan Writers:',
            description: 'Our team is packed with professional business proposal writers near you, who don’t just scribble words—they craft winning strategies! Each expert comes armed with years of experience, insider knowledge, and a serious knack for nailing the perfect business plan customized to your needs.'
        },
        {
            icon: <Headset size={50} />,
            title: 'At Your Service, Anytime:',
            description: 'Working past sunset? No problem, we’re here for that. We offer 24/7 support so you can reach us whenever inspiration—or panic—strikes. Your success never sleeps, and neither do we!'
        },
        {
            icon: <Grid2x2Check size={50} />,
            title: 'Budget-Friendly Brilliance:',
            description: 'We get it—budgets are tight. That’s why we’ve kept our pricing super reasonable. Exceptional business proposal writing service providers deliver top-quality without leaving your wallet crying in the corner.'
        },
        {
            icon: <Star size={50} />,
            title: 'Made Just for ‘You!’:',
            description: 'No two businesses are the same, so why should your plan be? With our expert help writing a business proposal, every plan is custom-crafted to meet your specific needs. Consider us the tailors of the business world—perfect fit, every time..'
        },
        {
            icon: <FileSearch size={50} />,
            title: 'Perfection in Every Word:',
            description: 'We don’t just stop at writing; we fine-tune, polish, and perfect every word. With our comprehensive business proposal writing services, we go the extra mile with detailed editing and proofreading.'
        },
        {
            icon: <FolderUp size={50} />,
            title: 'Market Research Magic:',
            description: 'Want to create a killer business plan? We dig deep into your market, uncovering juicy insights on competitors, trends, and customer behaviors, ensuring your plan isn’t just solid—it’s bulletproof'
        }
    ];

    return (
        <>
            <section className='bg-blue-200 py-16 px-4 md:px-20 mt-10'>
             
                <div className="flex flex-col items-center space-y-5 text-center">
                    <h1 className="font-light text-2xl md:text-3xl text-black pt-10">
                        Why Trust Us with Your Business Proposal?
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold max-w-2xl text-[#083554]">
                        See for Yourself!
                    </h2>
                    <div className='w-20 md:w-40 mt-2 mb-4 border-b-4 md:border-b-8 rounded-md border-[#083554]'></div>
                </div>

             
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
