'use client';

import React, { useState } from 'react';

const Navbar = () => {
  // Simple state to track active link for that 'human' touch
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    'Home', 'Stats', 'Clients', 'Accredian Edge', 'CAT', 'How It Works', 'FAQs', 'Testimonials'
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 px-4 py-4 md:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col cursor-pointer">
          <span className="text-2xl md:text-3xl font-bold text-[#1a73e8] leading-none tracking-tight">accredian</span>
          <span className="text-[10px] md:text-[11px] text-gray-400 font-medium tracking-tight">credentials that matter</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveLink(link)}
              className={`relative transition-all duration-200 hover:text-blue-600 ${
                activeLink === link ? 'text-blue-600' : ''
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Placeholder - keeping it simple for now */}
        <div className="lg:hidden text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
