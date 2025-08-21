import React from 'react';

const ServiceCard = ({ service, index }) => {
  const { icon, title, description } = service;

  // Array of background color classes from our Tailwind theme
  const bgColors = ['bg-primary', 'bg-secondary', 'bg-highlight'];
  // Cycle through the colors using the index
  const bgColor = bgColors[index % bgColors.length];

  // Determine text color based on background for contrast
  const textColor = bgColor === 'bg-highlight' ? 'text-dark' : 'text-white';

  const cardClasses = `
    border-4 border-dark p-8 text-center
    shadow-neo-sm transition-all duration-200 ease-in-out
    hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo
    ${bgColor} ${textColor}
  `;

  return (
    <div className={cardClasses}>
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="font-press text-lg md:text-xl uppercase mb-4">{title}</h3>
      <p className="font-sans text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;