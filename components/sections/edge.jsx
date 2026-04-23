import React from 'react';
import Container from '../ui/container';
import SectionHeading from '../ui/SectionHeading';

const Edge = () => {
  return (
    <section id="accredian-edge" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="The" 
          highlight="Accredian Edge" 
          subtitle="Key Aspects of Our" 
          subtitleHighlight="Strategic Training"
          className="mb-12"
        />

        {/* Desktop View: Using the official SVG asset */}
        <div className="w-full hidden sm:flex justify-center items-center mb-8">
          <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg" 
            alt="Our Solutions" 
            className="w-full h-auto rounded-lg max-w-5xl"
          />
        </div>

        {/* Mobile View: Simple fallback or keeping it clean */}
        <div className="flex sm:hidden w-full justify-center items-center">
           <img 
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg" 
            alt="Our Solutions" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Container>
    </section>
  );
};

export default Edge;
