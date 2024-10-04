import { ChartColumnBig, FileCheck, FileSearch, FolderUp, Grid2x2Check, HandshakeIcon, Headset, Lightbulb, Rocket, Shapes, Star, Trophy } from 'lucide-react';
import React from 'react';

const AboutFeatures = () => {
    const Aboutfeatures = [
        {
            icon: <Rocket size={70} />,
            title: 'Start-up Business Plan',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        },
        {
            icon: <Shapes size={70} />,
            title: 'Internal Business Plan',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        },
        {
            icon: <Lightbulb size={70} />,
            title: 'Strategic Business Plan',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        },
        {
            icon: <ChartColumnBig size={70} />,
            title: 'Growth Business Plans',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        },
        {
            icon: <FileCheck size={70} />,
            title: 'Feasibility Business Plan',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        },
        {
            icon: <Trophy size={70} />,
            title: 'Operations business Plan',
            description: 'We help our clients to start and operate their start-up with an effective plan along with targeting their long-term goals.'
        }
    ];

    return (
        <>
            <section className=' py-16 px-4 md:px-20 mt-10'>
                {/* Title Section */}
                <div className="flex flex-col items-center space-y-5 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold max-w-4xl text-[#083554]">
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                    </h1>
                    <p className="font-light text-2xl md:text-2xl text-black pt-5 max-w-7xl">
                        BusinessPlanner.ae is the most affordable business planning service in Abu Dhabi, Dubai, Ajman and Sharjah with the highest business growth rate of the clients. There is a variety of business plans offered by BusinessPlanner.ae
                    </p>
                  
                </div>

                {/* AboutFeatures Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-auto max-w-7xl px-4'>
                    {Aboutfeatures.map((feature, index) => (
                        <div
                        key={index}
                        className='flex flex-col shadow-xl rounded-lg p-6 '
                        >
                        {/* Container for icon and text to be aligned horizontally */}
                        <div className="flex items-center">
                            <div className='text-[#083554] mr-4'> {/* Icon with margin to the right */}
                            {feature.icon}
                            </div>
                            <div> {/* Title and description */}
                            <h3 className='font-bold text-xl text-[#083554] mb-2 text-start'>
                                {feature.title}
                            </h3>
                            <p className='text-black text-start'>
                                {feature.description}
                            </p>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

            </section>
        </>
    );
};

export default AboutFeatures;
