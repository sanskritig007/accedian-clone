import React from 'react';

const StatCard = ({ number, label, isLast = false }) => {
  return (
    <div className={`flex flex-col items-center flex-1 py-8 px-6 ${!isLast ? 'lg:border-r-2 border-gray-100' : ''}`}>
      <div className="bg-[#eaf4ff] text-[#1a73e8] text-2xl md:text-3xl font-bold py-3 px-10 rounded-full mb-8 min-w-[150px] text-center shadow-sm">
        {number}
      </div>
      <p className="text-gray-900 font-bold text-center leading-snug max-w-[280px] text-sm md:text-base px-2">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
