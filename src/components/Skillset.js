import React from 'react';
import { FaPlay } from 'react-icons/fa';

function SkillSet() {
  return (
    <div className="bg-gray-900 text-white py-12 md:py-20 my-12 md:my-20 mx-4 sm:mx-8 md:mx-16 lg:mx-32 rounded-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 md:px-12 lg:px-20">
          {/* Skillsets Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-light text-gray-300 mb-2 md:mb-4">Skillsets</h3>
              <h2 className="text-2xl sm:text-3xl font-bold">We have an expert team with different skillsets</h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Software Development */}
              <div>
                <span className="block text-base md:text-lg font-medium mb-1">Software Development</span>
                <div className="relative w-full h-3 md:h-4 bg-gray-700 rounded-full">
                  <div
                    className="absolute h-3 md:h-4 bg-blue-500 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                  <span className="absolute top-0 right-0 text-xs md:text-sm font-bold text-white">90%</span>
                </div>
              </div>
              {/* Cloud Services */}
              <div>
                <span className="block text-base md:text-lg font-medium mb-1">Cloud Services</span>
                <div className="relative w-full h-3 md:h-4 bg-gray-700 rounded-full">
                  <div
                    className="absolute h-3 md:h-4 bg-blue-500 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                  <span className="absolute top-0 right-0 text-xs md:text-sm font-bold text-white">85%</span>
                </div>
              </div>
              {/* Web Development */}
              <div>
                <span className="block text-base md:text-lg font-medium mb-1">Web Development</span>
                <div className="relative w-full h-3 md:h-4 bg-gray-700 rounded-full">
                  <div
                    className="absolute h-3 md:h-4 bg-blue-500 rounded-full"
                    style={{ width: '95%' }}
                  ></div>
                  <span className="absolute top-0 right-0 text-xs md:text-sm font-bold text-white">95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <a
              href="https://youtube.com/shorts/jL9Z1P3cstw?si=2cw43x6UWBY4GbTA"
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay className="text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;