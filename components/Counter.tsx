'use client';
import { useState, useEffect } from "react";

const CounterSection = () => {
  const [counter, setCounter] = useState<number>(1); // Start at 1
  const targetValue = 500; // Define your target value
  const [isIncreasing, setIsIncreasing] = useState<boolean>(true); // State to track direction

  useEffect(() => {
    const increment = () => {
      setCounter((prevCounter) => {
        // Check if we need to change direction
        if (prevCounter === 250) {
          setIsIncreasing(false); // Change direction to increasing towards 500
        }
        
        if (isIncreasing) {
          if (prevCounter < targetValue) {
            return prevCounter + 1; // Increment the counter
          }
        } else {
          // Reverse the direction when counter reaches 250
          if (prevCounter < targetValue) {
            return prevCounter + 1; // Continue incrementing towards 500
          }
        }

        return prevCounter; // Return the current counter value if no change
      });
    };

    const interval = setInterval(increment, 10); // Adjust speed here (10ms per increment)

    return () => clearInterval(interval); 
  }, [isIncreasing, targetValue]);


  const formatCounter = (count: number): string => { 
    return count.toString().padStart(3, '0');
  };

  return (
    <section className="flex justify-center items-center gap-48 py-20">
      {Array(4).fill(null).map((_, index) => (
        <div className="text-center" key={index}>
          <h2 className="text-6xl font-bold text-[#083554]">{formatCounter(counter)}+</h2>
        </div>
      ))}
    </section>
  );
};

export default CounterSection;
