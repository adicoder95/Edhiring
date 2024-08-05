// import React from 'react'
// import LanfingLayout from '../Layouts/LandingLayout'
import MyProfilelayout from '../Layouts/MyProfilelayout'
// import My_Profile_pic from '../assets/My profile pic.svg'
import Profile from '../Components/Profile'


// type Props = {
//     Employer?: boolean;
// }
export default function MYprofile() {
    return (
        <MyProfilelayout>
            <Profile/>

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