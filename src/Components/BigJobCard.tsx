import React from 'react'
import location_icon from '../assets/location_icon.svg';
import job_icon from '../assets/jobCard_image.svg';



type BigJobCardprops = {
    image?:string,
    Apply?: boolean,
    title?:string,
    subtitle?:string,
    location?:string,


}

export default function BigJobCard({ Apply,image=job_icon,title="Lorem ipsum",subtitle="Lorem ipsum dolor sit amet",location="Lorem ipsum"}: BigJobCardprops) {
    return (
        <div className="bg-white px-6 rounded-lg shadow-lg flex flex-col space-y-4 mx-1">
            {/* <h2 className="text-xl font-bold text-blue-900">Jobs Applied Recently</h2> */}
            <div className="flex items-center space-x-4">
                <img src={job_icon} alt="Job Icon" className="h-16 w-16" />
                <div className="flex flex-col space-y-3">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{subtitle}
                           {!Apply &&
                           <><span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded ms-4">Approved</span><span className=" text-signup text-sm font-medium px-2.5 py-0.5 rounded-lg">Filled</span></>
                           }
                        </p>
                    <div className="flex items-center space-x-5 text-gray-600 ">
                        <span className="flex"><img src={location_icon} alt="" className='w-[14px] h-[14px] mr-2 translate-y-1' />{location}</span>
                        <span> dolor sit amet</span>
                    </div>
                    <div className="flex space-x-2">

                    </div>
                </div>
                {/* <AiFillHeart className="ml-auto text-gray-400 hover:text-red-500 cursor-pointer" size={24} /> */}
            </div>
            <div className="flex space-x-4 my-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py- rounded">Lorem ipsum</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">Lorem ipsum</span>
            </div>
            <hr />
            <div>
                <div className="flex justify-between items-center  text-gray-600">
                    <span className="text-blue-500 font-semibold">$ 456 - 800/month</span>
                    <span>June 2025</span>
                </div>
                {
                    Apply &&

                    <div className="flex space-x-4 py-4 justify-between  border-blue-200">
                        <div className='flex mx-1 space-x-5'>
                            <button className="flex items-center px-4 py-2 text-green-700 bg-green-100 rounded hover:bg-green-200">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Save
                            </button>
                            <button className="flex items-center px-4 py-2 text-blue-700 bg-blue-100 rounded hover:bg-blue-200">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-6 4h.01M17 16h2M21 16h.01M19 8h.01M13 16h.01M15 8h.01M19 12h.01M21 12h.01M7 4h10M7 20h10m-6-2h.01M5 4h.01M21 4h.01M3 8h.01M3 12h.01M3 16h.01M3 20h.01" />
                                </svg>
                                Share
                            </button>
                        </div>
                        <div className='flex mx-1 space-x-5'>
                            <button className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 ">
                                Mark as not interested
                            </button>
                            <button className="flex items-center px-4 py-2 text-white bg-signup rounded hover:bg-orange-600">
                                Apply Now
                            </button>

                        </div>
                    </div>
                }

            </div>


        </div>
    )
}
