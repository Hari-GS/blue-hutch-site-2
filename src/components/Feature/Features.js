import React from "react";
import Feature from "./Feature";
import { AiOutlineBulb } from 'react-icons/ai';
import { FaRegArrowAltCircleRight, FaFire } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const featureData = [
  {
    id: 1,
    icon: <AiOutlineBulb />,
    title: "Customized Solutions for Every Need",
    description:
      "Discuss how your services are tailored to meet specific client requirements, ensuring unique, efficient, and effective solutions that align perfectly with their business goals.",
  },
  {
    id: 2,
    icon: <FaFire />,
    title: "Cutting-Edge Technology and Expertise",
    description:
      "Emphasize your proficiency in the latest technologies, frameworks, and tools, showcasing your ability to deliver modern, scalable, and secure IT solutions that keep clients ahead of the curve.",
  },
  {
    id: 3,
    icon: <GiReceiveMoney />,
    title: "Cost-Effective and Reliable Services",
    description:
      "Highlight your competitive pricing, commitment to transparency, and dedication to delivering high-quality services within the promised timelines, providing clients with the best value for their investment.",
  },
  {
    id: 4,
    icon: <FaRegArrowAltCircleRight />,
    title: "Dedicated Support and Client-Centric Approach",
    description:
      "Stress your focus on exceptional customer service, including continuous communication, post-project support, and a commitment to building long-term partnerships with clients.",
  },
];

function Features() {
  return (
    <div className="features-container w-11/12 mx-auto py-12">
      <div className="text-center mb-8">
        <h4 className="text-gray-600 text-lg font-light mb-2">WHY CHOOSE US ?</h4>
        <h2 className="text-4xl font-bold">FEATURES</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {featureData.map((data) => (
          <Feature data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          Increase your business success with technology.{" "}
          {/* <a
            href="#"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            Let’s get started
          </a> */}
        </p>
      </div>
    </div>
  );
}

export default Features;
