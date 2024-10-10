'use client';
import { useState, useEffect } from "react";

const CounterSection = () => {

  const [counters, setCounters] = useState([1, 1, 1, 1]);
  const targetValues = [600, 750, 1000, 98]; 
  const titles = ["Expert Writers", "Happy Clients", "Proposals Delivered", "Success Rate"]; 

  useEffect(() => {
    const increment = () => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) => {
          if (counter < targetValues[index]) {
            return counter + 1; 
          }
          return counter; 
        })
      );
    };

    const interval = setInterval(increment, 10); 

    return () => clearInterval(interval); 
  }, [targetValues]);

  const formatCounter = (count: number, index: number): string => {
    const formattedCount = count.toString().padStart(3, '0');
    return index === 3 ? `${formattedCount}%` : `${formattedCount}+`; 
  };

  return (
    <section className="flex flex-wrap justify-center items-center gap-6 py-10 sm:gap-12 md:gap-16 md:py-16 lg:gap-20 2xl:gap-48 lg:py-20">
      {counters.map((counter, index) => (
        <div className="text-center" key={index}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#083554]">
            {formatCounter(counter, index)}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#083554] mt-2">{titles[index]}</p>
        </div>
      ))}
    </section>
  );
};

export default CounterSection;
