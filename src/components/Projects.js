import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import banner1 from '../images/projects/project1.jpg';
import banner2 from '../images/projects/project2.png';
import banner3 from '../images/projects/project3.jpg';
import banner4 from '../images/projects/project4.jpg';
import banner5 from '../images/projects/project5.jpg';
import banner6 from '../images/projects/project6.jpg';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const projects = [
        { id: 1, image: banner1, title: 'Dispatch Go', description: 'A streamlined web app connecting shipment owners with trusted dealers for hassle-free logistics. Ensuring competitive pricing and reliable transport. Shipment owners can track their cargo in real-time. Simplify freight management with our efficient, user-friendly platform. Its Developed using React Js, Node Js and MongoDB Database' },
        { id: 2, image: banner2, title: 'Embedded Games Website', description: 'An interactive gaming platform with a vast collection of embedded games, all in one place. Users can sign up, play games, and engage with the community through likes and comments. Each game has a dedicated page with discussions, and ratings. Secure authentication ensures a personalized and safe gaming experience. It is developed using Plain HTML, CSS, JS and Java Spring Boot and MongoDB Database' },
        { id: 3, image: banner3, title: "Bio-Metric Attendance System's API", description: 'A powerful API for seamless biometric attendance management and integration. Capture, store, and verify School Students attendance using fingerprint. Secure and scalable, with real-time data syncing and detailed reporting. Easily integrated for automated processing. Enhance academics with accurate, tamper-proof attendance tracking. It is developed using Spring Boot and SQL Database' },
        { id: 4, image: banner4, title: 'BZ Composer', description: 'The Contractor feature on Bzcomposer.com enhances SALES and CRM by enabling job assignments, contractor management, and service tracking. It supports in-house and third-party technicians, allowing contact management, dispatch boards, and compliance with employment regulations (e.g., 1099 form). its under development using Java Spring Boot, JSP and SQL' },
        { id: 5, image: banner5, title: 'See Go', description: 'A Tourism Website designed to easily book buses to the city of tanjore for visiting. It provides login functionality for personalized experienece. Its developed using React js, Java Spring Boot and MongoDB' },
        { id: 6, image: banner6, title: 'Crops Suggester', description: "A Mobile application which is used to fetch particular land's nature, climate conditions and soil type and market environment to provide crop suggestions. It is developed using React Native and Java Spring Boot and MongoDB Database" },
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    };

    return (
        <div id="rs-portfolio" className="bg-gray-800 pb-16">
            <div className="w-[90%] mx-auto">
                <div className="text-center pt-12">
                    <span className="block text-lg text-gray-300 pb-4">Our Works</span>
                    <h2 className="text-4xl font-semibold text-white">Recent Projects</h2>
                </div>
                <div className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="relative group overflow-hidden cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                            >
                                <img
                                    src={project.image}
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                                    alt={`Project ${project.id}`}
                                />
                                {/* Overlay with dark background and text */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-center justify-center">
                                    <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        Click for more details
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isPopupOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-2xl w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                        <p className="text-gray-700">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;