import React from 'react';
import { FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
    return (
        <div id="rs-contact" className="bg-gray-100 py-8 md:py-12">
            <div className="container px-4 sm:px-6">
                <div className="contact-us">
                    <div className="flex flex-col md:flex-row md:justify-between lg:justify-evenly space-y-8 md:space-y-0">
                        {/* Social Profiles */}
                        <div className="w-full md:w-1/2 lg:w-5/12">
                            <div className="contact-widget">
                                <div className="text-center pb-6 md:pb-8">
                                    <span className="text-blue-500 text-sm md:text-lg uppercase tracking-wide">Follow Us</span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Stay Connected</h2>
                                </div>
                                <div className="flex flex-col space-y-6 md:space-y-8 items-center">
                                    {/* YouTube Card */}
                                    <div className="bg-white shadow-lg p-6 rounded-md hover:shadow-xl transition duration-300 w-full max-w-[500px]">
                                        <div className='flex '>
                                            <FaYoutube className="text-red-500 text-3xl md:text-4xl mr-4" />
                                            <h3 className="text-xl font-bold">YouTube</h3>
                                        </div>
                                        <p className="text-gray-500">Subscribe to our channel.</p>
                                        <a
                                            href="https://www.youtube.com/@BlueHutch-d2u"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
                                        >
                                            Visit Channel
                                        </a>
                                    </div>

                                    {/* Instagram Card */}
                                    <div className="bg-white shadow-lg p-6 rounded-md hover:shadow-xl transition duration-300 w-full max-w-[500px]">
                                        <div className='flex'>
                                            <FaInstagram className="text-pink-500 text-3xl md:text-4xl mr-4" />
                                            <h3 className="text-xl font-bold">Instagram</h3>
                                        </div>
                                        <p className="text-gray-500">Follow us for the latest posts.</p>
                                        <a
                                            href="https://www.instagram.com/harii.bh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300"
                                        >
                                            Follow Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full md:w-1/2 lg:w-5/12">
                            <div className="bg-white shadow-lg p-6 rounded-md md:h-[470px]">
                                <div className="mb-6 text-center">
                                    <h2 className="text-xl md:text-2xl font-bold">Contact Info</h2>
                                </div>
                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start">
                                        <FaMapMarkerAlt className="text-blue-500 text-lg md:text-xl mr-4 mt-1" />
                                        <div>
                                            <span className="block font-bold">India Location</span>
                                            <p className="text-gray-500 text-sm md:text-base">
                                                No.352, Srinivasa Nagar, Vallam, Thanjavur<br />TN, India - 613 403
                                            </p>
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex items-start">
                                        <FaPhone className="text-blue-500 text-lg md:text-xl mr-4 mt-1" />
                                        <div>
                                            <span className="block font-bold">Telephone</span>
                                            <p className="text-gray-500 text-sm md:text-base">
                                                <a href="tel:6369312803">Phone 1 : +91 6369312803</a><br />
                                                <a href="tel:9597439871">Phone 2 : +91 9597439871</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex items-start">
                                        <FaEnvelope className="text-blue-500 text-lg md:text-xl mr-4 mt-1" />
                                        <div>
                                            <span className="block font-bold">Mail Us</span>
                                            <p className="text-gray-500 text-sm md:text-base">
                                                <a href="mailto:bluehutch01@gmail.com">Email 1 : bluehutch01@gmail.com</a><br />
                                                <a href="mailto:hariharandev02@gmail.com">Email 2 : hariharandev02@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    {/* Working Hours */}
                                    <div className="flex items-start">
                                        <FaClock className="text-blue-500 text-lg md:text-xl mr-4 mt-1" />
                                        <div>
                                            <span className="block font-bold">Working Hours</span>
                                            <p className="text-gray-500 text-sm md:text-base">24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
