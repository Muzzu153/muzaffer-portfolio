import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgess';

// A helper function to determine the color based on progress percentage.
// It returns the appropriate Tailwind classes for background and border.
const getFillColorClass = (progress) => {
  if (progress <= 18) {
    return 'bg-red border-red'; // Red (Coral)
  }
  if (progress <= 35) {
    return 'bg-highlight border-highlight'; // Orange (Yellow)
  }

  if (progress <= 60) {
      return 'bg-accent border-accent'; // Blue
  }
  
  if (progress <= 85) {
    return 'bg-primary border-primary'; // Blue
  }
  return 'bg-spring-green border-spring-green'; // Green (Teal)
};

const RetroProgressBar = () => {
  const progress = useScrollProgress();
  const totalBlocks = 100;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);

  // 1. Calculate the correct color class for the current progress level.
  // This is called only once per render, making it efficient.
  const fillColorClass = getFillColorClass(progress);

  return (
    <div className="fixed top-[65px] md:top-[85px] left-0 w-full h-auto p-2 bg-dark border-tonone z-40 flex items-center gap-1">
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <div
          key={index}
          className={`
            h-4 flex-1 transition-colors duration-300
            ${index < filledBlocks 
              ? fillColorClass // 2. Apply the dynamic color class here.
              : 'bg-transparent border-gray-600'
            }
          `}
        ></div>
      ))}
    </div>
  );
};

export default RetroProgressBar;