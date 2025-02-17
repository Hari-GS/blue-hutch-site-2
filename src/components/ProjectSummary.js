import React from 'react';

function ProjectSummary() {
    return (
        <div className="mt-20 w-full bg-cover bg-center bg-no-repeat bg-black">
            <div className="w-[90%] mx-auto">
                <h4 className="text-white text-center font-light pt-10">
                    FUN FACTS ABOUT OUR AGENCY
                </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                <div className="text-center">
                    <h2 className="text-white text-3xl md:text-4xl">10+</h2>
                    <h4 className="text-white font-medium">PROJECTS COMPLETED</h4>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-3xl md:text-4xl">95%</h2>
                    <h4 className="text-white font-medium">POSITIVE FEEDBACK</h4>
                </div>
                <div className="text-center">
                    <h2 className="text-white text-3xl md:text-4xl">5</h2>
                    <h4 className="text-white font-medium">MONTHS OF ACTION</h4>
                </div>
            </div>
        </div>
    );
}

export default ProjectSummary;
