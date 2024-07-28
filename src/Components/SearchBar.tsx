// import React from 'react';
import search_icon from '../assets/search_icon.svg';
import location_icon from '../assets/location_icon.svg';

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto py-5 px-6 pr-12 bg-white shadow-lg rounded-br-3xl rounded-[4px] mt-4">
      <div className="flex items-center flex-grow space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"   
            className="w-full h-12 pl-12 pr-4 rounded-md focus:outline-none border-none"
            placeholder="Job title, key words or company"
          />
          <img
            src={search_icon}
            alt="search_icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div className='w-0 h-10  border-grey bg-opacity-80 border-2  mx-auto'></div>
        <div className="relative flex-grow">
          <img
            src={location_icon}
            alt="location_icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <select className="w-full h-12 pl-12 pr-8 border-gray-300 rounded-md focus:outline-none">
            <option>All locations</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      <div className="ml-4">
        <button className="h-12 px-6 text-white bg-signup rounded-md ">
          Find Jobs
        </button>
      </div>
    </div>
  );
}
