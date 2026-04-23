import React from 'react';
import Container from '../ui/container';
import Button from '../ui/button';

const Hero = () => {
  const benefits = [
    'Tailored Solutions',
    'Industry Insights',
    'Expert Guidance'
  ];

  return (
    <section id="home" className="relative bg-[#f0f7ff] overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-[1.2] space-y-6 md:space-y-10 animate-fade-in-up">
            <h1 className="text-center sm:text-left cursor-context-menu text-4xl sm:text-5xl lg:text-7xl font-bold max-w-full sm:max-w-[450px] lg:max-w-[800px] pt-2 capitalize px-8 sm:px-0 leading-tight">
              Next-Gen <span className="text-blue-600">Expertise</span> <br />
              For Your <span className="text-blue-600">Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-700 font-medium max-w-xl leading-relaxed">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Checklist */}
            <div className="flex flex-col space-y-4 pt-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center space-x-3 text-gray-800 font-semibold text-base md:text-lg"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="px-12 py-4 text-xl rounded-xl shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]">
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Image Section - Cleaner look without the boxy border */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative w-full">
              <img 
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp" 
                alt="Accredian Corporate Training" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative background elements for that 'premium' look */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default Hero;
