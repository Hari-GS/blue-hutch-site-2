import React from 'react';
import about1 from '../images/about/solutions/1.jpg';

function About() {
    return (
        <div id="rs-about" className="bg-gray-100 py-10">
            <div className="md:w-11/12 mx-4">
                <div className="flex justify-evenly">
                    <div className="lg:w-1/2 md:pr-24 mb-8 md:mb-0">
                        <div className="mb-8">
                            <span className="text-lg font-semibold text-blue-600 mb-4 block">About Us</span>
                            <h2 className="text-2xl font-bold text-gray-800 mb-5">Bringing Imagination to Life with Smart Tech Solutions</h2>
                            <p className="text-gray-600">We specialize in delivering a wide range of IT solutions tailored to meet diverse business needs. From cutting-edge 3D animation and immersive game development to advanced Artificial Intelligence and machine learning applications, our team is equipped to handle projects of all scales and complexities. Whether it's building robust web and mobile applications, designing intuitive user interfaces, creating enterprise software, or developing intelligent automation solutions, we ensure top-notch quality and innovative approaches. With a blend of experience, creativity, and technical expertise, we are dedicated to transforming ideas into impactful solutions that drive growth and success for our clients.</p>
                        </div>
                    </div>
                    <div className="w-1/3 pr-8">
                        <img src={about1} alt="Main Image" className="rounded shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;