// import React from 'react';

type JobLocationCardProps = {
  image: string;
  location: string;
  jobs: string;
  bgColor?: string;
  classname?: string;
};

function JobLocationCard({ image, location, jobs, bgColor, classname }: JobLocationCardProps) {
  return (
    <div className="relative m-4   py-6 pr-10" >
      <div className={`absolute w-[280px] h-[396px]   translate-x-[22px]  -translate-y-[22px] ${bgColor} rounded-md rounded-br-[40px] -z-10`} />
      <div className={`relative bg-grey px-4 py-5 w-[279px] h-[396px] rounded-md rounded-br-[40px]  ${classname}  `}>
        <img src={image} alt="Location" className="w-[238px] h-[240px] object-cover rounded-br[40px] " />
        <div className="p-4">
          <div className="flex items-center ">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5  10C21.5 17 12.5 23 12.5 23C12.5 23 3.5 17 3.5 10C3.5 7.61305 4.44821 5.32387 6.13604 3.63604C7.82387 1.94821 10.1131 1 12.5 1C14.8869 1 17.1761 1.94821 18.864 3.63604C20.5518 5.32387 21.5 7.61305 21.5 10Z" stroke="#F05556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 13C14.1569 13 15.5 11.6569 15.5 10C15.5 8.34315 14.1569 7 12.5 7C10.8431 7 9.5 8.34315 9.5 10C9.5 11.6569 10.8431 13 12.5 13Z" stroke="#F05556" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className="text-lg font-semibold ms-3">{location}</h2>
          </div>
          <p className="text-gray-500">{jobs}</p>
        </div>
      </div>
    </div>
  );
}

export default JobLocationCard;
