import React from 'react';

const PhysicalButton = ({ children, href, variant = 'secondary', size }) => {
  // Define base and variant-specific classes
  const baseClasses = "btn-border relative inline-block cursor-pointer no-underline transition-all duration-150 ease-in-out font-press uppercase text-white ";
  
  const variantClasses = {
    primary: "bg-primary shadow-[inset_-4px_-4px_0px_#3aa69d] hover:shadow-[inset_-6px_-6px_0px_#3aa69d] active:shadow-[inset_4px_4px_0px_#3aa69d] active:translate-x-0.5 active:translate-y-0.5",
    secondary: "bg-secondary shadow-[inset_-4px_-4px_0px_#d44a4a] hover:shadow-[inset_-6px_-6px_0px_#d44a4a] active:shadow-[inset_4px_4px_0px_#d44a4a] active:translate-x-0.5 active:translate-y-0.5",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${size}`}>
      {children}
    </a>
  );
};

export default PhysicalButton;