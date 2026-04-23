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
          <div className="flex-[1.2] space-y-4 md:space-y-6 animate-fade-in-up">
            <h1 className="text-center sm:text-left cursor-context-menu text-2xl sm:text-4xl lg:text-6xl xxl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-full sm:max-w-[350px] lg:max-w-[700px] pt-2 capitalize px-8 sm:px-0 font-circular leading-tight">
              Next-Gen <span className="text-blue-600">Expertise</span> <br />
              For Your <span className="text-blue-600">Enterprise</span>
            </h1>
            
            <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl text-gray-800 max-w-full p-2 sm:p-0 sm:max-w-[350px] text-center sm:text-start font-circular leading-relaxed">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Checklist */}
            <div className="flex flex-col space-y-2 pt-2">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center space-x-3 text-gray-800 font-semibold text-sm md:text-base"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex mb-6 sm:mb-0 justify-center sm:justify-start pt-4">
              <Button className="w-[80%] sm:w-[170px] p-[7px] text-md rounded-xl shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]">
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
