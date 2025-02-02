import React from 'react';
import ceo from '../images/team/seo/1.jpg';
import developer from '../images/team/seo/2.jpg';
import marketer from '../images/team/seo/3.jpg';
import template from '../images/partner/gray2/profile-placeholder.jpg';

function Team() {
  return (
    <div id="rs-team" className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-blue-500 text-sm md:text-lg uppercase tracking-wide">Blue Hutch's</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Higher Authority Members</h2>
        </div>

        {/* Team Members */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6 sm:gap-8">
          {/* Team Member 1 */}
          <div className="team-item bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[250px] md:w-[300px] h-auto sm:h-[400px]">
            <div className="relative">
              <img src={template} alt="Vinisha" className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            </div>
            <div className="text-center py-4 sm:py-5">
              <h4 className="text-lg sm:text-xl font-semibold">
                <a href="team-single.html" className="hover:text-blue-500">
                  Hariharan G
                </a>
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">CEO & Founder</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-item bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[250px] md:w-[300px] h-auto sm:h-[400px]">
            <div className="relative">
              <img src={template} alt="Hariharan G" className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            </div>
            <div className="text-center py-4 sm:py-5">
              <h4 className="text-lg sm:text-xl font-semibold">
                <a href="team-single.html" className="hover:text-blue-500">
                  Deepan Raj R
                </a>
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">Tech Lead & Projects Manager</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-item bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[250px] md:w-[300px] h-auto sm:h-[400px]">
            <div className="relative">
              <img src={template} alt="Deepan Raj R" className="w-full h-48 sm:h-56 md:h-64 object-cover" />
            </div>
            <div className="text-center py-4 sm:py-5">
              <h4 className="text-lg sm:text-xl font-semibold">
                <a href="team-single.html" className="hover:text-blue-500">
                  Developers Team
                </a>
              </h4>
              <p className="text-gray-500 text-sm sm:text-base">Total 50+ Developers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;