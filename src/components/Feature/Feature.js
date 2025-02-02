import React from "react";

function Feature({ data }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 ">
      <div className=" bg-white rounded-lg shadow-custom p-6 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-800 hover:text-white transform transition-transform duration-500 hover:scale-105 h-[350px]">
        <div className="flex justify-center mb-4">
        <div className="icon text-5xl text-blue-600 mb-4">
            {data.icon}
        </div>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-bold mb-2">{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
