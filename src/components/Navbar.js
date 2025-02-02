import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from '../images/BHLogo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-11/12 pt-4 pb-4 mx-auto">
            <div className="flex items-center justify-between">
                {/* Left Section: Logo */}
                <div className="md:w-1/4 flex items-center">
                    <img src={logo} className="md:w-[70px] w-[50px] mr-4" alt="Blue Hutch Logo" />
                    <h1 className="faculty-glyphic-regular md:text-4xl text-xl font-semibold text-white">
                        Blue Hutch
                    </h1>
                </div>

                {/* Center Section: Navigation Links (Desktop) */}
                <div className="hidden md:flex justify-around w-2/4">
                    <ul className="flex space-x-10">
                        {[
                            "Home",
                            "Features",
                            "About",
                            "Services",
                            "Projects",
                            "Team",
                            "Contact",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg text-white transition duration-300 hover:text-blue-500"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Menu Icon (Mobile) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-4 bg-[#082c5e] rounded-lg shadow-lg absolute z-10 w-[90%]" 
                >
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        {[
                            "Home",
                            "Features",
                            "About",
                            "Services",
                            "Projects",
                            "Team",
                            "Contact",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-lg text-white transition duration-300 hover:text-blue-500"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;
