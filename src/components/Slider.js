import React from 'react';
import bigTemple from '../images/BigTempleStill.jpg';
import workstation from '../images/4kEyeStill.jpg';
import { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Slider() {

    function setupCarousel() {
        const carousel = document.getElementById('carouselItems');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const slides = document.querySelectorAll('#carouselItems > div');
    
        // Dynamically calculate the width of a single slide
        function calculateSlideWidth() {
            return slides[0].getBoundingClientRect().width;
        }
    
        let slideWidth = calculateSlideWidth(); // Initial slide width
        let index = 0;
    
        // Recalculate slide width on window resize
        window.addEventListener('resize', () => {
            slideWidth = calculateSlideWidth();
            carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        });
    
        prev.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = slides.length - 1;
            }
            carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        });
    
        next.addEventListener('click', () => {
            if (index < slides.length - 1) {
                index++;
            } else {
                index = 0;
            }
            carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        });
    }
    
    
    useEffect(() => {
        setupCarousel();
    }, []);

    return (
        <div className="w-11/12 mx-auto pt-24 pb-24">
            {/* Carousel Container */}
            <div id="carouselExample" className="relative overflow-hidden">
                {/* Carousel Inner */}
                <div className="flex transition-transform duration-700 ease-in-out" id="carouselItems">
                    {/* Slide 1 */}
                    <div className="flex-shrink-0 w-full md:flex md:items-center">
                        <div className="w-full md:w-1/2 px-6 md:px-24">
                            <h4 className="text-white font-light md:text-2xl">Blue Hutch</h4>
                            <h1 className="text-white text-2xl md:text-5xl font-bold mt-2">IT & Web Agency</h1>
                            <h3 className="text-white text-lg md:text-2xl font-medium mt-2">For Mindblowing Software Solutions</h3>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:pt-0 pt-4">
                            <img src={bigTemple} className="w-4/5 md:w-3/5 rounded-3xl" alt="Notebook" />
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-shrink-0 w-full md:flex md:items-center">
                        <div className="w-full md:w-1/2 px-6 md:px-24">
                            <h4 className="text-white font-light md:text-2xl">Blue Hutch</h4>
                            <h1 className="text-white text-2xl md:text-5xl font-bold mt-2">Quality Services</h1>
                            <h3 className="text-white text-lg md:text-2xl font-medium mt-2">for Small Businesses and Existing Companies</h3>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:pt-0 pt-4">
                            <img src={workstation} className="w-4/5 md:w-3/5 rounded-3xl" alt="Workstation" />
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between">
                    <button
                        id="prev"
                        className="bg-gray-800 text-white p-3 rounded-full ml-4 focus:outline-none hover:bg-gray-700 transition opacity-50"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        id="next"
                        className="bg-gray-800 text-white p-3 rounded-full mr-4 focus:outline-none hover:bg-gray-700 transition opacity-50"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
