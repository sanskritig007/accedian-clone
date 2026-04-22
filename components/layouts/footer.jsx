import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo, Socials and CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700 leading-none">accredian</span>
              <span className="text-[10px] text-gray-500 tracking-tight">credentials that matter</span>
            </div>
            
            {/* Social Icons Placeholder */}
            <div className="flex space-x-4">
              <div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-[10px] text-white">f</div>
              <div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-[10px] text-white">in</div>
              <div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-[10px] text-white">t</div>
              <div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-[10px] text-white">ig</div>
              <div className="w-5 h-5 bg-gray-700 rounded-sm flex items-center justify-center text-[10px] text-white">y</div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
              Enquire Now
            </button>
            <span className="text-[11px] text-gray-500 mt-1 mr-1 italic">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="border-gray-200 mb-10" />

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-6">Accredian</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Why Accredian</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-600">
              <p>Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-600">enterprise@accredian.com</a></p>
              <p className="leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Copyright */}
        <div className="text-center text-[13px] text-gray-500 font-medium">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
