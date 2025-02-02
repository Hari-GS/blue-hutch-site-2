import React from 'react';
import banner1 from '../images/projects/1.jpg';
import banner2 from '../images/projects/2.jpg';
import banner3 from '../images/projects/3.jpg';
import banner4 from '../images/projects/4.jpg';
import banner5 from '../images/projects/5.jpg';
import banner6 from '../images/projects/6.jpg';

function Projects() {
    return (
        <div id="rs-portfolio" className="bg-gray-800 pb-12">
            <div className="w-[90%] mx-auto">
                <div className="text-center pt-12">
                    <span className="block text-lg text-gray-300 pb-4">Our Works</span>
                    <h2 className="text-4xl font-semibold text-white">Recent Projects</h2>
                </div>
                <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[banner1, banner2, banner3, banner4, banner5, banner6].map((banner, index) => (
                            <div key={index} className="relative group overflow-hidden">
                                <img
                                    src={banner}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                                    alt={`Project ${index + 1}`}
                                />
                                {/* <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                                    <div className="text-center text-white">
                                       
                                    </div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="text-center mt-8">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        View More
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Projects;
