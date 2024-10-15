import { ChartColumnBig, FileCheck, Lightbulb, Rocket, Shapes, Trophy } from 'lucide-react';
import React from 'react';

const AboutFeatures = () => {
    const Aboutfeatures = [
        {
            icon: <Rocket size={70} />,
            title: 'Bring Your Vision to Life!',
            description: 'Every thriving business starts with a small idea. We’ll help you take that idea and turn it into a solid, actionable plan. With a roadmap tailored to your vision, we’ll guide you through the maze of business start-ups with ease.'
        },
        {
            icon: <Shapes size={70} />,
            title: 'Build from the Inside Out!',
            description: 'Want to ensure your team is on the same page? Our internal business plans align your internal operations and goals, keeping everyone focused on what really matters – success from within!.'
        },
        {
            icon: <Lightbulb size={70} />,
            title: 'Smarter Plans for Epic Wins!',
            description: 'Take control of your future with a strategic plan that’s both innovative and realistic. We craft strategies that focus on long-term success, designed to help you navigate market challenges and seize opportunities like a pro.'
        },
        {
            icon: <ChartColumnBig size={70} />,
            title: 'Supercharge Your Business Growth!',
            description: 'Ready to take things up a notch? We build growth plans that are dynamic and scalable, allowing your business to grow without hitting roadblocks. Let’s accelerate your business to new heights!.'
        },
        {
            icon: <FileCheck size={70} />,
            title: 'Think Bold, But Plan Smart!',
            description: 'Got a daring new idea but not sure if it’ll fly? We provide feasibility plans that dig deep into the data, market trends, and risks, helping you make well-informed decisions before you dive in..'
        },
        {
            icon: <Trophy size={70} />,
            title: 'Effortless Operations, Easy Success!',
            description: 'Operations make or break a business. We create operational plans that ensure everything behind the scenes runs like a well-oiled machine. Efficient, effective, and tailor-made to keep your business flourishing..'
        }
    ];

    return (
        <>
            <section className=' py-16 px-4 md:px-20 mt-10'>
          
                <div className="flex flex-col items-center space-y-5 text-center">
                    <span className="text-3xl md:text-5xl font-bold max-w-4xl text-[#083554]">
                        From Start-Up Dreams to Transformative Realities – Your Breakthrough Awaits!
                    </span>
                    <p className="font-light text-[14px] lg:text-[16px] text-black pt-5 max-w-7xl">
                        From Napkin Sketches to CEO Status, We’re Here to Help You Plot World Domination – Because Ambitious Dreams Deserve Even Greater Action Plans!
                    </p>
                  
                </div>

          
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-auto max-w-7xl px-4'>
                    {Aboutfeatures.map((feature, index) => (
                        <div
                        key={index}
                        className='flex flex-col shadow-xl rounded-lg p-6 items-center justify-center'
                        >
                    
                        <div className="xl:flex items-center space-y-3 gap-2">
                            <div className='text-[#083554] mr-4 pb-3'> 
                            {feature.icon}
                            </div>
                            <div> 
                            <span className='font-bold text-xl text-[#083554] mb-2 text-start '>
                                {feature.title}
                            </span>
                            <p className='text-black text-start text-[14px] lg:text-[16px]'>
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
