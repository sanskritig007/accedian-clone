import React from 'react';

const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-200",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
