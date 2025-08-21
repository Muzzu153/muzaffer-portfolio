import React from 'react';

// This component now receives a simple `logoSrc` string
const SkillCard = ({ name, logoSrc }) => {
  return (
    <div className="
      bg-white border-4 border-dark p-6 text-center
      shadow-neo-sm transition-all duration-200 ease-in-out
      hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo
    ">
      {/* We use a standard <img> tag */}
      <img 
        src={logoSrc} 
        alt={`${name} Logo`} 
        className="h-16 w-16 mx-auto mb-4" 
      />
      <p className="font-press uppercase break-words text-[9px] sm:text-xs">{name}</p>
    </div>
  );
};

export default SkillCard;