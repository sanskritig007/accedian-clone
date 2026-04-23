import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Partnerships from "@/components/sections/partnerships";
import Edge from "@/components/sections/edge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Partnerships />
        <Edge />
        
        {/* More sections will go here as we build them */}
        <div className="h-96 flex items-center justify-center text-gray-300 italic">
          Content sections coming soon...
        </div>
      </main>

      <Footer />
    </div>
  );
}
