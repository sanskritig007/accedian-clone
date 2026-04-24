'use client';

import React from 'react';
import Container from '../ui/container';
import SectionHeading from '../ui/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CourseSegmentation = () => {
  const courses = [
    {
      title: 'Program Specific',
      description: 'Certificate, Executive, Post Graduate Certificate',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/program-specific.png',
    },
    {
      title: 'Industry Specific',
      description: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/industry-specific.png',
    },
    {
      title: 'Topic Specific',
      description: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/topic-specific.png',
    },
    {
      title: 'Level Specific',
      description: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/level-specific.png',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="Tailored" 
          highlight="Course Segmentation" 
          subtitle="Explore" 
          subtitleHighlight="Custom-fit Courses"
          subtitleSuffix="Designed to Address Every Professional Focus"
          className="mb-12"
        />

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,112,184,0.2)] group cursor-pointer">
                  <div className="h-44 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow items-center text-center">
                    <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed font-medium px-2">
                      {course.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #1a73e8 !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default CourseSegmentation;
