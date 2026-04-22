import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section Placeholder */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Let's Learn & Earn Together
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Get a chance to win up to <span className="text-blue-600 font-bold">Rs. 15,000</span>
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
              Refer Now
            </button>
          </div>
        </section>

        {/* More sections will go here as we build them */}
        <div className="h-96 flex items-center justify-center text-gray-300 italic">
          Content sections coming soon...
        </div>
      </main>

      <Footer />
    </div>
  );
}
