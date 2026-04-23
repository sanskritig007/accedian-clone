'use client';

import React, { useState } from 'react';

const EnquireModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Left Side: Image */}
        <div className="hidden md:block w-[40%] relative">
          <img 
            src="https://images.unsplash.com/photo-1573161559521-45022b8e0d65?auto=format&fit=crop&q=80&w=1000" 
            alt="Corporate Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-8 md:p-10 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Enquire Now</h2>

          <form className="space-y-5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter Name"
                className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-700 transition-colors"
              />
            </div>

            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter Email"
                className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-700 transition-colors"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-24 border-b border-gray-300 py-2 flex items-center">
                <span className="text-gray-700 font-medium">🇮🇳 +91</span>
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="flex-1 border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-700 transition-colors"
              />
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter company name"
                className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-700 transition-colors"
              />
            </div>

            <div className="relative">
              <select className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-500 transition-colors appearance-none bg-transparent">
                <option value="">Select Domain</option>
                <option value="data-science">Data Science</option>
                <option value="product-management">Product Management</option>
                <option value="fintech">Fintech</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input 
                type="number" 
                placeholder="Enter No. of candidates"
                className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-700 transition-colors"
              />
            </div>

            <div className="relative pb-6">
              <select className="w-full border-b border-gray-300 py-2 focus:border-blue-600 focus:outline-none text-gray-500 transition-colors appearance-none bg-transparent">
                <option value="">Select Mode of Delivery *</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#1a73e8] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98]"
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;
