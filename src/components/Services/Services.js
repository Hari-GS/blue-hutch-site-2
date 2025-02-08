import React from 'react';
import icon1 from '../../images/services/icon/service-shape.png';
import icon2 from '../../images/services/icon/blue-flexible-cms.png';
import icon3 from '../../images/services/icon/blue-page-speed.png';
import icon4 from '../../images/services/icon/blue-ecommerce.png';
import Service from './Service';

const servicesData = [
  {
    id: 1,
    name: '3D Modeling and Graphic Design',
    description: 'We create high-quality 3D models and stunning graphic designs for various applications. Our services include product visualization, character modeling, architectural rendering, and motion graphics.',
    icon: icon1,
  },
  {
    id: 2,
    name: 'Web application development',
    description: 'We develop custom web-based applications and systems like Accounting management, School/College management, CRM, Inventory management, etc. We can build applications for any system.',
    icon: icon2,
  },
  {
    id: 3,
    name: 'Game Development',
    description: 'We develop engaging 2D and 3D games with captivating visuals, smooth performance, and interactive gameplay. Our services include game design, character creation, animations, and optimization for various platforms.',
    icon: icon3,
  },
  {
    id: 4,
    name: 'Mobile App Development',
    description: 'We design and develop high-performance mobile apps for Android and iOS. Our services include UI/UX design, backend development, API integration, and app optimization. We create user-friendly and feature-rich applications tailored to your needs.',
    icon: icon4,
  },
];

function Services() {
  return (
    <div className="mt-12 p-8">
      <div className="text-center pt-5 w-4/5 mx-auto mb-8">
        <h4 className="text-lg font-light mb-2">SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
        <h2 className="text-2xl font-semibold">OUR SERVICES</h2>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {servicesData.map((data) => (
          <Service data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Services;
