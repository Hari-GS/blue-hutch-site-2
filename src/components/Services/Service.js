import React from 'react';

function Service({ data }) {
  return (
    <div className=" md:px-4 mb-6">
      <div className="flex md:flex-row flex-col shadow-lg p-4 md:h-[200px] md:w-[600px] hover:shadow-xl hover:bg-gray-200 transition-all duration-300">
        <div className="md:w-[200px] w-[100px]">
          <img src={data.icon} className="w-4/5" alt={data.name} />
        </div>
        <div className="md:ml-4">
          <h4 className="text-lg font-bold mb-1">{data.name}</h4>
          <p className="text-md text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
