import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Toolsbar from '../components/Toolsbar'
import Feature from '../components/Feature/Feature'
import Features from '../components/Feature/Features'
import Services from '../components/Services/Services'
import Footer from '../components/Footer'

function AboutUs() {
    return (
        <div>
            <div className='bg-blue-900'>
                <Toolsbar />
                <Navbar />
            </div>
            <About/>
            <Features/>
            <Services/>
            <Footer/>
        </div>
    )
}

export default AboutUs
