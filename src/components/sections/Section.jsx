import React from 'react';

// A simple, standalone component for the background shapes
const BackgroundShapes = () => (
  <div className="absolute inset-0 opacity-50 z-0 pointer-events-none">
    {/* Hiding some shapes on smaller screens to reduce clutter */}
    <div className="hidden md:block absolute top-[10%] left-[5%] w-16 h-16 bg-primary rotate-45"></div>
    <div className="absolute top-[15%] right-[8%] w-12 h-12 bg-secondary rounded-full"></div>
    <div className="absolute bottom-[15%] left-[12%] w-20 h-20 bg-accent"></div>
    <div className="hidden md:block absolute bottom-[20%] right-[10%] w-14 h-14 bg-highlight rotate-45"></div>
  </div>
);

// The main Section wrapper component
const Section = ({ children, id, addShapes = false }) => {
  return (
    // position: 'relative' is crucial for containing the absolute-positioned shapes
    // overflow: 'hidden' is a safeguard
    <section id={id} className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Conditionally render the shapes if the 'addShapes' prop is true */}
      {addShapes && <BackgroundShapes />}

      {/* 
        This div is the new content container.
        - max-w-6xl: Sets a maximum width of 1152px.
        - mx-auto: Centers the container horizontally.
        - px-5: Adds padding on the left and right for smaller screens.
        - relative z-10: Ensures content appears above the background shapes.
      */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {children}
      </div>

    </section>
  );
};

export default Section;