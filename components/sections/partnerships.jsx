'use client';

import React from 'react';
import Container from '../ui/container';
import SectionHeading from '../ui/SectionHeading';

const Partnerships = () => {
  const logos = [
    { name: 'Reliance', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png' },
    { name: 'HCL', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png' },
    { name: 'IBM', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png' },
    { name: 'CRIF', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png' },
    { name: 'ADP', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg' },
    { name: 'Bayer', url: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg' }
  ];

  return (
    <section id="clients" className="py-20 bg-[#f8fbff]">
      <Container>
        <SectionHeading 
          title="Our Proven" 
          highlight="Partnerships" 
          subtitle="Successful Collaborations With the" 
          subtitleHighlight="Industry's Best"
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 px-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center items-center px-4">
              <img 
                src={logo.url} 
                alt="client" 
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span class="font-bold text-gray-400 text-lg">${logo.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partnerships;
