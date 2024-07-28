// import React from 'react'
// import LanfingLayout from '../Layouts/LandingLayout'
import MyProfilelayout from '../Layouts/MyProfilelayout'
import My_Profile_pic from '../assets/My profile pic.svg'

export default function MYprofile() {
    return (
        <MyProfilelayout>
            <div className='min-h-screen min-w-full pb-10'>
                <div className='grid-cols-2 mt-[195px] grid'>
                    <div className='flex items-end flex-col'>
                        <div>

                            <div className='flex items-center justify-start '>
                                <img src={My_Profile_pic} alt="" className='h-[217px] w-[217px]' />
                                <div className='my-8 text-white mx-10'>
                                    <p>Assistant Professor</p>
                                    <p className='text-[24px] font-bold mt-1'> Deep Goel</p>
                                    <p className='text-[20px] font-normal mt-3'> New Delhi</p>
                                    <div className='flex mt-3'>
                                        <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold mr-2'>Experienced</span>
                                        <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold'>Spanish</span>
                                    </div>

                                </div>

                            </div>

                            <div className='w-[578px] mt-[74px]'>
                                <p className='text-[28px] text-buttons font-bold'> About Candidate</p>
                                <p className='mt-6 text-cyan1 font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam</p>
                            </div>

                            <div className='mt-10 w-[578px] text-buttons'>
                                <p className='text-[28px] text-buttons font-bold mb-7'> Education</p>
                                <p className='font-semibold'>Graphic Desinger 2014-2017</p>
                                <p className='font-semibold'> FPT University</p>
                                <p className='text-cyan1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                            </div>
                            <div className='mt-10 w-[578px] text-buttons'>
                                <p className='text-[28px] text-buttons font-bold mb-7'> Work Experience</p>
                                <div className='mt-7'>
                                    <p className='font-medium'>Developer 2020-2021</p>
                                    <p className='font-medium'> FPT University</p>
                                    <p className='text-cyan1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</p>

                                </div>
                                <div className='mt-7'>
                                    <p className='font-medium'>Leader Marketing 2021 - 2023</p>
                                    <p className='font-medium'> BZ Company</p>
                                    <p className='text-cyan1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                                </div>

                            </div>
                        <p className='mt-20 text-buttons font-bold ' ><span className='font-black'>{"<"}</span> Go back</p>
                        </div>


                    </div>
                    <div className='flex px-5'>
                        <div className='flex  justify-center ml-auto mr-[150px] mt-[40px]'>
                            <div className='w-[458px] '>
                                <div className='flex justify-end items-center h-[60px]'><p className='text-white font-bold'>Edit Profile</p></div>
                                <div className='py-10 pl-7 pr-9 bg-white rounded-xl'>
                                        <p className='text-buttons text-[24px] font-semibold'>Important Information</p>
                                    <div className='mt-12'>
                                        <div className='grid grid-cols-2 h-[100px] content-center '>
                                            <p className='text-cyan1'>Current Salary</p>
                                            <p className='text-buttons font-semibold'>12000/month</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Experience Time</p>
                                            <p className='text-buttons font-semibold'>3 years</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Gender</p>
                                            <p className='text-buttons font-semibold'>Male</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Qualification</p>
                                            <p className='text-buttons font-semibold'>Master's Degree</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Age</p>
                                            <p className='text-buttons font-semibold'>20-25</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Languages</p>
                                            <p className='text-buttons font-semibold'>English,Hindi</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Email</p>
                                            <p className='text-buttons font-semibold'>Email@gmail.com</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Phone Number</p>
                                            <p className='text-buttons font-semibold'>91-9876543211</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Resume</p>
                                            <p className='text-buttons font-semibold'>View</p>
                                        </div>
                                        <hr />
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>

                
            </div>

        </MyProfilelayout>



    )
}

{/* <main className='flex-1 duration-300 relative'>
                <div className="bg-gray-100 p-8">
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto flex">
                        
                        <div className="w-2/3 pr-6">
                            <div className="flex items-center mb-6">
                                <img
                                    src="profile-pic-url" // Replace with actual profile picture URL
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mr-4"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Deep Goel</h2>
                                    <p className="text-gray-700">Assistant Professor</p>
                                    <p className="text-gray-500">New Delhi</p>
                                    <div className="flex mt-2">
                                        <span className="bg-orange-200 text-orange-700 py-1 px-3 rounded-full text-xs font-semibold mr-2">
                                            Experienced
                                        </span>
                                        <span className="bg-yellow-200 text-yellow-700 py-1 px-3 rounded-full text-xs font-semibold">
                                            Spanish
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">About Candidate</h3>
                                <p className="text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Graphic Design 2014 - 2017</h4>
                                    <p className="text-gray-700">FPT University</p>
                                    <p className="text-gray-600 mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Experience</h3>
                                <div className="mb-4">
                                    <h4 className="text-lg font-semibold text-gray-800">Developer 2020 - 2021</h4>
                                    <p className="text-gray-700">FPT LTD</p>
                                    <p className="text-gray-600 mt-2">
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Leader Marketing 2021 - 2023</h4>
                                    <p className="text-gray-700">BZ Company</p>
                                    <p className="text-gray-600 mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-1/3 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h3>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Current Salary</h4>
                                    <p className="text-gray-800">12000/month</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Experience Time</h4>
                                    <p className="text-gray-800">3 years</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Gender</h4>
                                    <p className="text-gray-800">Male</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Qualification</h4>
                                    <p className="text-gray-800">Master's Degree</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Age</h4>
                                    <p className="text-gray-800">20-25</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Languages</h4>
                                    <p className="text-gray-800">English, Hindi</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Email</h4>
                                    <p className="text-gray-800">Email@gmail.com</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700">Phone Number</h4>
                                    <p className="text-gray-800">91-9876543211</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700">Resume</h4>
                                    <p className="text-gray-800 underline cursor-pointer">View</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto mt-8">
                        <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
                            Go Back
                        </button>
                    </div>
                </div>
            </main> */}