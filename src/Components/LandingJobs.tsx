import React from 'react';
import JobCard from './JobCard';

function LandingJobs() {
  return (
    

        <div className=" mx-auto p-6 inline-block my-20">
        <h1 className="text-[36px] font-bold mb-6 relative ms-20 text-landingfont  ">Featured Jobs</h1>
        <div className="flex flex-wrap -m-2 justify-evenly gap-10">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
        </div>
   
  );
}

export default LandingJobs;
