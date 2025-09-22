import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-[88px] left-0 w-full h-3 bg-light z-40">
      {/* The 88px top value is an example to place it below your navbar. Adjust as needed. */}
      <div 
        className="h-full bg-highlight" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar