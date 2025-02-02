import React from 'react';
import logo from '../images/BHLogo.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between lg:justify-evenly gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          {/* About Section */}
          <div className="w-full md:w-1/2 lg:w-5/12 pl-3">
            <div className="flex items-center">
              <img src={logo} className="w-12 md:w-16 lg:w-[70px] mr-4" alt="Blue Hutch Logo" />
              <h1 className="faculty-glyphic-regular text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Blue Hutch
              </h1>
            </div>
            <p className="text-gray-400 pt-4 text-sm md:text-base">
              Sowing Innovation, Reaping Success
            </p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h4 className="text-lg sm:text-xl font-bold mb-4 pl-3">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <i className="flaticon-location text-blue-500 text-lg sm:text-xl mr-3 mt-1"></i>
                <span className="text-gray-400 text-sm sm:text-base">
                  No.352, Srinivasa Nagar, Vallam, Thanjavur, TN, India - 613 403
                </span>
              </li>
              <li className="flex items-start">
                <i className="flaticon-call text-blue-500 text-lg sm:text-xl mr-3 mt-1"></i>
                <a href="tel:+8801739753105" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  (+91) 6369312803
                </a>
              </li>
              <li className="flex items-start">
                <i className="flaticon-email text-blue-500 text-lg sm:text-xl mr-3 mt-1"></i>
                <a href="mailto:bluehutch01@gmail.com" className="text-gray-400 hover:text-white text-sm sm:text-base">
                  bluehutch01@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="flaticon-clock text-blue-500 text-lg sm:text-xl mr-3 mt-1"></i>
                <span className="text-gray-400 text-sm sm:text-base">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm sm:text-base text-center">
            © Copyright 2025 Blue Hutch. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;