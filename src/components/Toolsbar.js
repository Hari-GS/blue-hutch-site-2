import React from 'react';
import { FaPhone, FaClock, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Toolsbar() {
    return (
        <div className="text-white border-b border-gray-500 p-1 default-font md:visible hidden">
            <div className="container flex items-center mx-auto">
                {/* Left Section */}
                <div className="w-full py-2 md:w-1/5 md:text-left pl-4">
                    <ul>
                        <li>
                            <a
                                href="mailto:bluehutch01@gmail.com"
                                className="text-sm font-light hover:text-gray-300"
                            >
                                For support : bluehutch01@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Center Section */}
                <div className="w-full py-2 border-l border-r border-gray-500 md:w-3/5">
                    <ul className="flex items-center justify-between px-4">
                        <li className="flex items-center text-sm">
                            <FaPhone className="mr-2" />
                            <a
                                href="tel:+123456789"
                                className="hover:text-gray-300"
                            >
                                (+91) 6369312803
                            </a>
                        </li>
                        <li className="flex items-center text-sm">
                            <FaClock className="mr-2" />
                            Anytime 24/7
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex justify-center w-full py-2 space-x-4 md:w-1/5 md:justify-end md:pr-4">
                    <a
                        href="https://www.instagram.com/blue.hutch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-gray-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dev-hariharan-g/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-gray-300"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Toolsbar;
