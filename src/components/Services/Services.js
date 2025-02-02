import React from 'react';
import icon1 from '../../images/services/icon/service-shape.png';
import icon2 from '../../images/services/icon/blue-flexible-cms.png';
import icon3 from '../../images/services/icon/blue-page-speed.png';
import icon4 from '../../images/services/icon/blue-ecommerce.png';
import Service from './Service';

const servicesData = [
  {
    id: 1,
    name: 'Dynamic website development',
    description: 'We build all types of dynamic and responsive websites with easy to use content management system. We also customize and maintain websites. We also do extensive animation with JavaScript and CSS.',
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
    name: 'Page Speed Optimization & SEO',
    description: 'We optimize website page speed by ensuring faster loading time and lower page size. We are also experts with Google Accelerated Mobile Pages (AMP). We also work on SEO.',
    icon: icon3,
  },
  {
    id: 4,
    name: 'eCommerce Websites Development',
    description: 'We develop all types of customized eCommerce Websites including Grocery stores, Clothes stores, Jewelry stores, etc. We also develop multi-store and multi-vendor sites.',
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
