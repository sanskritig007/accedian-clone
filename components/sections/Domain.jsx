'use client';

import React from 'react';
import Container from '../ui/container';
import SectionHeading from '../ui/SectionHeading';
import { 
  Lightbulb, 
  Brain, 
  Users, 
  BarChart3, 
  Waypoints, 
  Globe, 
  CreditCard 
} from 'lucide-react';

const Domain = () => {
  const domains = [
    { title: 'Product & Innovation Hub', icon: Lightbulb },
    { title: 'Gen-AI Mastery', icon: Brain },
    { title: 'Leadership Elevation', icon: Users },
    { title: 'Tech & Data Insights', icon: BarChart3 },
    { title: 'Operations Excellence', icon: Waypoints },
    { title: 'Digital Enterprise', icon: Globe },
    { title: 'Fintech Innovation Lab', icon: CreditCard },
  ];

  return (
    <section id="domain" className="py-20 bg-[#f8fbff]">
      <Container>
        <SectionHeading 
          title="Our" 
          highlight="Domain Expertise" 
          subtitle="Specialized Programs" 
          subtitleHighlight="Designed to Fuel Innovation"
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div 
                key={index}
                className="p-4 w-[45%] xs:w-[30%] sm:w-[30%] lg:w-[28%] flex flex-col sm:flex-col justify-center items-center bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <Icon 
                  strokeWidth={1.5}
                  className="text-[#1a73e8] w-8 h-8 sm:w-14 sm:h-14 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-gray-800 font-bold text-center text-xs sm:text-base leading-tight">
                  {domain.title}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Domain;
