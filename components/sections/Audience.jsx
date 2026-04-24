'use client';

import React from 'react';
import Container from '../ui/container';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

const Audience = () => {
  const audienceItems = [
    {
      title: 'Tech Professionals',
      description: 'Enhance expertise, embrace tech, drive innovation.',
      icon: <MonitorCheck size={44} strokeWidth={1.5} />,
    },
    {
      title: 'Non-Tech Professionals',
      description: 'Adapt digitally, collaborate in tech environments.',
      icon: <MonitorX size={44} strokeWidth={1.5} />,
    },
    {
      title: 'Emerging Professionals',
      description: 'Develop powerful skills for rapid career growth.',
      icon: <GraduationCap size={44} strokeWidth={1.5} />,
    },
    {
      title: 'Senior Professionals',
      description: 'Strengthen leadership, enhance strategic decisions.',
      icon: <Briefcase size={44} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="audience" className="w-full bg-white py-10 md:py-16 overflow-hidden">
      <Container>
        <div className="bg-[#1a73e8] rounded-xl p-6 md:p-8 lg:px-12 lg:py-10 relative flex flex-col md:flex-row items-stretch min-h-[380px] max-w-6xl mx-auto shadow-xl shadow-blue-500/10">
          
          {/* Left Column: Heading & Human Image */}
          <div className="w-full md:w-[40%] flex flex-col z-10">
            <h4 className="text-base md:text-lg font-medium text-white/90 mb-1 tracking-wide">Who Should Join?</h4>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] mb-6">
              Strategic Skill<br />Enhancement
            </h2>
            
            <div className="relative mt-auto h-[200px] md:h-[240px] w-full group">
              <img 
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png" 
                alt="Strategic Skill Enhancement Professionals" 
                className="absolute left-[-10px] bottom-[-24px] md:bottom-[-32px] lg:bottom-[-40px] h-[112%] w-auto max-w-none object-contain pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Items */}
          <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 py-8 text-white gap-8 lg:pl-8">
            {audienceItems.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-3 sm:gap-2 flex-row sm:flex-col text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="text-white transform transition-transform duration-500 group-hover:scale-110 origin-left">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-[20px] font-bold leading-tight group-hover:text-white/100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-[13px] md:text-sm leading-snug font-medium transition-colors group-hover:text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default Audience;
