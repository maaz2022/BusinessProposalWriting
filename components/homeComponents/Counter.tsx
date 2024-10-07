'use client';
import { useState, useEffect } from "react";

const CounterSection = () => {
  const [counter, setCounter] = useState<number>(1); 
  const targetValue = 500; 
  const [isIncreasing, setIsIncreasing] = useState<boolean>(true); 

  useEffect(() => {
    const increment = () => {
      setCounter((prevCounter) => {
    
        if (prevCounter === 250) {
          setIsIncreasing(false); 
        }

        if (isIncreasing) {
          if (prevCounter < targetValue) {
            return prevCounter + 1; 
          }
        } else {
        
          if (prevCounter < targetValue) {
            return prevCounter + 1;
          }
        }

        return prevCounter;
      });
    };

    const interval = setInterval(increment, 10); 

    return () => clearInterval(interval); 
  }, [isIncreasing, targetValue]);

  const formatCounter = (count: number): string => { 
    return count.toString().padStart(3, '0');
  };

  return (
    <section className="flex flex-wrap justify-center items-center gap-6 py-10 sm:gap-12 md:gap-16  md:py-16 lg:gap-20 2xl:gap-48 lg:py-20 ">
      {Array(4).fill(null).map((_, index) => (
        <div className="text-center" key={index}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#083554]">{formatCounter(counter)}+</h2>
        </div>
        
      ))}
    </section>
  );
};

export default CounterSection;
