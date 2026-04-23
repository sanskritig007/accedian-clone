import React from 'react';
import Container from '../ui/container';
import StatCard from '../ui/StatCard';
import SectionHeading from '../ui/SectionHeading';

const Stats = () => {
  const statsData = [
    {
      number: '10K+',
      label: 'Professionals Trained For Exceptional Career Success'
    },
    {
      number: '200+',
      label: 'Sessions Delivered With Unmatched Learning Excellence'
    },
    {
      number: '5K+',
      label: 'Active Learners Engaged In Dynamic Courses'
    }
  ];

  return (
    <section id="stats" className="w-full bg-white pt-8 pb-16 md:pt-28 md:pb-24">
      <Container>
        <div className="max-w-[85rem] mx-auto flex flex-col items-center">
          <SectionHeading 
            title="Our" 
            highlight="Track Record" 
            subtitle="The Numbers Behind" 
            subtitleHighlight="Our Success"
            className="mb-12 md:mb-20"
          />

          <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-10 lg:gap-0 px-4">
            {statsData.map((stat, index) => (
              <StatCard 
                key={index} 
                number={stat.number} 
                label={stat.label}
                isLast={index === statsData.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
