import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Toolsbar from '../components/Toolsbar';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import homeImg from '../images/slider/solution/slide-bg.jpg';
import Features from '../components/Feature/Features';
import About from '../components/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects';
import ProjectSummary from '../components/ProjectSummary';
import SkillSet from '../components/Skillset';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Show button after scrolling 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${homeImg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '110vh',
                }}
                id="home"
            >
                <Toolsbar />
                <Navbar />
                <Slider />
            </div>

            {/* Other Sections */}
            <div id="features">
                <Features />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="project-summary">
                <ProjectSummary />
            </div>
            <div id="skillset">
                <SkillSet />
            </div>
            <div id="team">
                <Team />
            </div>
            <div id="contact">
                <Contact />
            </div>

            <Footer />

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            )}
            {/* Smooth Scrolling Style */}
            <style>
                {`
                html {
                    scroll-behavior: smooth;
                }
                `}
            </style>
        </div>
    );
}

export default Home;
