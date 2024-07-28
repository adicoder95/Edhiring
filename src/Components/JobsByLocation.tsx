// import React from 'react';
import JobLocationCard from './JobLocationCard';
import image from '../assets/location_image.svg'

function JobsByLocation() {
  const locations = [
    { image: image, location: 'Lorem ipsum', jobs: '500+ Jobs found in this Location', bgColor: 'bg-yellow-400' },
    { image: image, location: 'Lorem ipsum', jobs: '500+ Jobs found in this Location', bgColor: 'bg-red-400' },
    { image: image, location: 'Lorem ipsum', jobs: '500+ Jobs found in this Location', bgColor: 'bg-blue-400' },
    { image: image, location: 'Lorem ipsum', jobs: '500+ Jobs found in this Location', bgColor: 'bg-teal-400' },
  ];

  return (
    <div className="  w-full">
      <h1 className="text-[36px] font-bold mb-6 relative ms-20 text-landingfont  ">Jobs by Location</h1>
      <div className="flex justify-center w-full flex-wrap">
      
        {locations.map((loc, index) => (
          <JobLocationCard key={index} image={loc.image} location={loc.location} jobs={loc.jobs} classname={''} bgColor={loc.bgColor}  />
        ))}
      </div>
    </div>
  );
}

export default JobsByLocation;
