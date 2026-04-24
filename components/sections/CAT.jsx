'use client';

import React from 'react';
import Container from '../ui/container';

const CAT = () => {
  return (
    <section id="cat-framework" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            The <span className="text-universal">CAT Framework</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Our Proven Approach to <span className="text-universal font-semibold">Learning Excellence</span>
          </p>
        </div>

        <div className="flex justify-center items-center mt-12 md:mt-16">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg" 
            alt="The CAT Framework" 
            className="w-[90%] sm:w-[70%] h-auto rounded-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default CAT;
