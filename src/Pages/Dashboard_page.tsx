import React from 'react';
import { Sidebar } from '../Components/Sidebar';
// import { Graph } from '../Components/graph';
import job_active from '../assets/job_active_cion.svg';
import { Chart } from '../Components/Chart';
import resume_icon from '../assets/resume_icon.svg';
import profile_pic from '../assets/Profile_pic.svg';
import heart from '../assets/heart_icon.svg';
import location_icon from '../assets/location_icon.svg';
import job_icon from '../assets/jobCard_image.svg';
import BigJobCard from '../Components/BigJobCard';

export default function Dashboard_page() {
    
    return (

        <main className='flex-1 ml-20 transition-all duration-300'>
            <p className='text-[20px] text-logo my-4'> Application Statistics</p>
            <div className='flex flex-wrap justify-between  px-1 py-6'>
                <div className='w-[30%] h-48 bg-white shadow-md flex items-center min-w-[400px]'>

                    <div className='h-[97px] w-[97px] flex justify-center items-center py-4 bg-slate-200 rounded-lg ms-6 me-10'>
                        <img src={job_active} alt="" />

                    </div>
                    <div className='h-full flex flex-col justify-center'>
                        <p className='text-[36px] font-bold font-logo text-buttons'>10</p>
                        <p className='text-[20px] font-logo  text-buttons'>Jobs Applied</p>
                    </div>

                </div>
                <div className='w-[30%] h-48 bg-white shadow-md flex items-center min-w-[400px]'>

                    <div className='h-[97px] w-[97px] flex justify-center items-center py-4 bg-slate-200 rounded-lg ms-6 me-10 overflow-y-hidden'>
                        <img src={resume_icon} alt="" />

                    </div>
                    <div className='h-full flex flex-col justify-center'>
                        <p className='text-[36px] font-bold font-logo text-buttons'>54</p>
                        <p className='text-[20px] font-logo text-buttons'>Resume views</p>
                    </div>

                </div>
                <div className='w-[30%] h-48 bg-white shadow-md flex flex-col justify-center px-[30px] min-w-[495px]'>

                    <div className='w-auto h-20 flex items-center ms-'>
                        <img src={profile_pic} alt="" height={'40px'} width={'40px'} />
                        <p className='text-[16px] ms-4'>User Name</p>

                    </div>
                    <div className=' flex '>
                        <div className='w-[55%]  px-4'>
                            <p className='text-[14px] mb-2'>Profile Completed : 60%</p>
                            <div className='w-[90%] rounded-r-xl rounded-l-xl border-2 h-[10px] me-auto' >
                                <div className='w-[60%] bg-green-700 h-full' ></div>

                            </div>
                        </div>

                        <div>
                            <button className='py-[10px] px-7 text-sm bg-buttons rounded-[4px] text-white'> Complete Profile</button>
                        </div>
                    </div>

                </div>


            </div>
            <div className='my-20 py-6 flex flex-wrap justify-evenly items-center'>
                <div className='w-[400px] lg:w-[600px] h-[401px] flex flex-col shadow-md  rounded-md py-5 pl-9 pr-12'>
                    <p className='text-logo text-[20px] font-semibold mb-3'> Your Profile Views</p>
                    <Chart />

                </div>
                <div className=' flex flex-col  w-[48%] lg:w-[550px]  h-[401px] shadow-md px-8 rounded-lg'>

                    <p className='text-logo font-semibold text-[20px] '> Recent activity on your Account</p>
                    <article className='flex  my-5 mt-7'>
                        <p className='w-[406px] text-[14px] me-6 '><strong>Lorem ipsum dolor sit amet</strong> consectetur. Sollicitudin pharetra libero dolor consectetur. Pharetra donec eget cras odio potenti</p>
                        <img src={heart} alt="" className='w-6 h-6' />
                    </article>
                    <article className='flex  my-5'>
                        <p className='w-[406px] text-[14px] me-6 '><strong>Lorem ipsum dolor sit amet</strong> consectetur. Sollicitudin pharetra libero dolor consectetur. Pharetra donec eget cras odio potenti</p>
                        <img src={heart} alt="" className='w-6 h-6' />
                    </article>
                    <article className='flex  my-5'>
                        <p className='w-[406px] text-[14px] me-6 '><strong>Lorem ipsum dolor sit amet</strong> consectetur. Sollicitudin pharetra libero dolor consectetur. Pharetra donec eget cras odio potenti</p>
                        <img src={heart} alt="" className='w-6 h-6' />
                    </article>

                    <button className='bg-buttons text-white rounded-[4px] py-[10px] px-7 w-[145px] mb-3 mt-12'>
                        View All
                    </button>

                </div>

            </div>
            <div className='flex flex-col gap-5 w-[90%] mb-10 pb-10'>
            <h2 className="text-xl font-bold text-blue-900">Jobs Applied Recently</h2>
                
                
                
            <BigJobCard/>
            <BigJobCard Apply/>
            <BigJobCard/>
            <BigJobCard/>
            </div>
            
        </main>

    );
}
