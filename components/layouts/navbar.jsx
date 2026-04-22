'use client';

import React, { useState } from 'react';

const Navbar = () => {
  // Simple state to track active link for that 'human' touch
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    'Home', 'Stats', 'Clients', 'Accredian Edge', 'CAT', 'How It Works', 'FAQs', 'Testimonials'
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-blue-700 leading-none">accredian</span>
          <span className="text-[10px] text-gray-500 tracking-tight">credentials that matter</span>
        </div>
        
        {/* Navigation Links - Matching the screenshot exactly */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveLink(link)}
              className={`relative py-1 transition-colors hover:text-blue-600 ${
                activeLink === link ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
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
