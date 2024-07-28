// import React from 'react';
import JobCard_image from '../assets/jobCard_image.svg';
import heart_icon from '../assets/heart_icon.svg';
import location_icon from '../assets/location_icon.svg';


// type JobCardProps = {
//     title: string;
//     location: string;
//     salary: string;
//     date: string;
//     tags: string[];
// };


 
function JobCard() {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 m-2 w-full md:w-1/3 lg:w-1/4 rounded-br-3xl ">
      <div className="flex items-center justify-between mb-3">
        <img src={JobCard_image} alt="job icon" className="w-12 h-12" />
        <div className='flex flex-col'>
            <p className="text-lg font-semibold mb-2 inline-block">Lorem ipsum</p>
            <p className=" relative text-gray-500 mb-4">Lorem ipsum dolor sit amet</p>
            
        </div>
      
            <button className="text-gray-400 hover:text-gray-600">
                <div className='w-7 h-7 border-gray-200 border-2 absolute rounded-full -translate-x-[6px] -translate-y-[6.5px]'></div>
                <img src={heart_icon} alt="heart icon" className="w-4 h-4" />
            </button>
        
      
      </div>
      <div className="flex items-center text-gray-500 mb-4 justify-center -translate-x-10">
        <img src={location_icon} alt="location" className='w-4 h-4 me-3'/>
        <span className='font-normal text-sm -translate-y-[2px]'>Lorem ipsum</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Lorem ipsum</span>
        <span className="bg-orange-200 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">Lorem ipsum</span>
      </div>
      <div className="flex justify-between items-center text-gray-500">
        <span className="text-lg font-semibold">$456 - 800/month</span>
        <span>June 2025</span>
      </div>
    </div>
  );
}

export default JobCard;
