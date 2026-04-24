'use client';

import React, { useState } from 'react';
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Partnerships from "@/components/sections/partnerships";
import Edge from "@/components/sections/edge";
import Domain from "@/components/sections/Domain";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import Audience from "@/components/sections/Audience";
import CAT from "@/components/sections/CAT";
import EnquireModal from "@/components/ui/EnquireModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onEnquire={() => setIsModalOpen(true)} />
        <Stats />
        <Partnerships />
        <Edge />
        <Domain />
        <CourseSegmentation />
        <Audience />
        <CAT />
        
        {/* More sections will go here as we build them */}
        <div className="h-96 flex items-center justify-center text-gray-300 italic">
          Content sections coming soon...
        </div>
      </main>

      <Footer onEnquire={() => setIsModalOpen(true)} />

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
