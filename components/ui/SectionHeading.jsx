import React from 'react';

const SectionHeading = ({ title, highlight, subtitle, subtitleHighlight, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        {title} <span className="text-blue-600">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle} <span className="text-blue-600">{subtitleHighlight}</span>
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
