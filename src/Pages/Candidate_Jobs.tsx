// import React from 'react'
import AI_PIC from '../assets/AI_Logo_pic.svg'
import BigJobCard from '../Components/BigJobCard'
// import dropdown from '../assets/Dropdown_tick.svg'
import { useState } from 'react'

export default function Candidate_Jobs() {
    const [openfilter, setopenfilter] = useState(false);
    return (
        <main className='flex-1 ml-20   transition-all duration-300 w-[90%]'>
            <div className="flex items-center space-x-4 p-4 gap-8 bg-white rounded shadow-md mt-3">
                <div className='flex'>
                    <button className="text-blue-900 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <h2 className="text-buttons text-[24px] font-semibold ms-2">Search for latest Jobs</h2>

                </div>
                <div className="flex items-center bg-gray-100 rounded-lg w-[595px] me-auto">
                    <svg className="w-6 h-6 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by location, position, etc"
                        className="bg-transparent p-2 outline-none w-full text-blue-900"
                    />
                </div>
                <div className='flex-grow'>
                    <button className="flex items-center px-4 py-2 ms-auto text-white rounded-lg bg-primary1" onClick={() => setopenfilter(!openfilter)}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2' >
                            <path d="M21.9062 11.4999H8.00688M3.10075 11.4999H1.09375M3.10075 11.4999C3.10075 10.8494 3.35914 10.2256 3.81907 9.7657C4.279 9.30576 4.90281 9.04738 5.55325 9.04738C6.20369 9.04738 6.8275 9.30576 7.28743 9.7657C7.74736 10.2256 8.00575 10.8494 8.00575 11.4999C8.00575 12.1503 7.74736 12.7741 7.28743 13.2341C6.8275 13.694 6.20369 13.9524 5.55325 13.9524C4.90281 13.9524 4.279 13.694 3.81907 13.2341C3.35914 12.7741 3.10075 12.1503 3.10075 11.4999ZM21.9062 18.9328H15.4397M15.4397 18.9328C15.4397 19.5833 15.1807 20.2079 14.7207 20.6679C14.2607 21.1279 13.6367 21.3864 12.9861 21.3864C12.3357 21.3864 11.7119 21.1269 11.2519 20.6669C10.792 20.207 10.5336 19.5832 10.5336 18.9328M15.4397 18.9328C15.4397 18.2822 15.1807 17.6588 14.7207 17.1987C14.2607 16.7387 13.6367 16.4803 12.9861 16.4803C12.3357 16.4803 11.7119 16.7386 11.2519 17.1986C10.792 17.6585 10.5336 18.2823 10.5336 18.9328M10.5336 18.9328H1.09375M21.9062 4.067H18.4131M13.507 4.067H1.09375M13.507 4.067C13.507 3.41656 13.7654 2.79276 14.2253 2.33282C14.6853 1.87289 15.3091 1.6145 15.9595 1.6145C16.2816 1.6145 16.6005 1.67794 16.898 1.80119C17.1956 1.92444 17.4659 2.10509 17.6937 2.33282C17.9214 2.56056 18.1021 2.83092 18.2253 3.12847C18.3486 3.42602 18.412 3.74494 18.412 4.067C18.412 4.38907 18.3486 4.70798 18.2253 5.00553C18.1021 5.30308 17.9214 5.57345 17.6937 5.80118C17.4659 6.02892 17.1956 6.20957 16.898 6.33282C16.6005 6.45607 16.2816 6.5195 15.9595 6.5195C15.3091 6.5195 14.6853 6.26111 14.2253 5.80118C13.7654 5.34125 13.507 4.71745 13.507 4.067Z" stroke="white" stroke-width="1.6875" stroke-miterlimit="10" stroke-linecap="round" />
                        </svg>
                        Apply Filters
                    </button>
                    {
                        openfilter &&
                        <div className='absolute p-6 pt-1 '>

                            <div className="bg-white p-6 rounded-lg shadow-lg w-72 ">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Sort By</h2>

                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-600 mb-2">Job Posted</h3>
                                    <div className="space-y-2">
                                    <label className="flex items-center space-x-2 justify-between ">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                        <label className="flex items-center space-x-2 justify-between">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                        <label className="flex items-center space-x-2 justify-between">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-600 mb-2">Other Filter</h3>
                                    <div className="space-y-3">
                                        <select className="form-select custom-dropdown w-full border-gray-300 rounded px-3 py-2">
                                            <option>Select Location</option>
                                            <option>Location 1</option>
                                            <option>Location 2</option>
                                        </select>
                                        <select className="form-select custom-dropdown w-full border-gray-300 rounded px-3 py-2">
                                            <option>Select Role</option>
                                            <option>Role 1</option>
                                            <option>Role 2</option>
                                        </select>
                                        <select className="form-select custom-dropdown w-full border-gray-300 rounded px-3 py-2">
                                            <option>Select Role</option>
                                            <option>Role 1</option>
                                            <option>Role 2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-600 mb-2">Job Posted</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2 justify-between ">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                        <label className="flex items-center space-x-2 justify-between">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                        <label className="flex items-center space-x-2 justify-between">
                                            <span className="text-gray-600">Lorem Ipsum</span>
                                            <input type="checkbox" className="form-checkbox custom-checkbox text-teal-600" />
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <select className="form-select custom-dropdown w-full border-gray-300 rounded px-3 py-2">
                                        <option>Select Role</option>
                                        <option>Role 1</option>
                                        <option>Role 2</option>
                                    </select>
                                    <select className="form-select custom-dropdown w-full border-gray-300 rounded px-3 py-2">
                                        <option>Select Role</option>
                                        <option>Role 1</option>
                                        <option>Role 2</option>
                                    </select>
                                </div>

                                <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    }

                </div>
            </div>
            <div className='flex justify-between mt-9 py-8 px-8 shadow-lg rounded-lg border m-6 ms-0 rounded-br-[24px]'>
                <div className='w-[843px] flex-col gap-4'>
                    <h2 className='text-[32px] text-buttons font-semibold p-2'>Find a suitable Job With AI</h2>
                    <p className='text-[16px]   text-buttons ms-2'>
                        Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat.
                    </p>
                </div>
                <div className='flex-grow justify-end flex'>
                    <img src={AI_PIC} alt="h-[161px] w-[161px]" />
                </div>
            </div>

            <div className='flex flex-col gap-5  mb-10 pb-10'>
                <h2 className="text-xl font-semibold text-buttons">Trending Jobs</h2>




                <BigJobCard Apply />
                <BigJobCard Apply />
                <BigJobCard Apply />
                <BigJobCard Apply />
                <BigJobCard Apply />


            </div>


        </main>
    )
}
