import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import dashboard_icon from '../assets/dasboard_icon.svg';

import build_resume from '../assets/build_resume_icon.svg';
import settings_icon from '../assets/Setting_icon.svg';
import message_icon from '../assets/messages_icon.svg';
import job_icon from '../assets/jobs_icon.svg';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
const location = useLocation();
let path=location.pathname;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`h-[80vh] mt-[26px] fixed left-0 bg-white rounded-tr-lg rounded-br-[40px] flex-row  justify-between flex drop-shadow-lg shadow-slate-500 shadow-2xl transition-all duration-300 overflow-x-hidden z-50 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      
      <div className="mt-10 ">
        <nav className={`flex flex-col space-y-[44px] px-4 ${isCollapsed?"":"mr-8"}`}>
          
          <Link to="/d" className="flex items-center text-white">
            <img src={dashboard_icon} alt="Dashboard" className='h-[30px] w-[30px]' />
            <span className={`${isCollapsed ? 'hidden' : 'inline-block'} ml-4 font-semibold  ${path==='/dashboard'?"text-logo":"text-sidebar_font"} text-[20px]`}>Dashboard</span>
          </Link>
          <Link to="/BuildResume" className="flex items-center text-white">
            <img src={build_resume} alt="Profile" className='h-[30px] w-[30px]' />
            <span className={`${isCollapsed ? 'hidden' : 'inline-block'} ml-4 font-semibold ${path==='/d'?"text-logo":"text-sidebar_font"}  text-[20px]`}>Profile</span>
          </Link>
          <Link to="/jobs" className="flex items-center text-white">
            <img src={job_icon} alt="Jobs" className='h-[30px] w-[30px]' />
            <span className={`${isCollapsed ? 'hidden' : 'inline-block'} ml-4 font-semibold text-sidebar_font text-[20px]`}>Jobs</span>
          </Link>
          <Link to="/" className="flex items-center text-white">
            <img src={message_icon} alt="Logout" className='h-[30px] w-[30px]' />
            <span className={`${isCollapsed ? 'hidden' : 'inline-block'} ml-4 font-semibold text-sidebar_font text-[20px]`}>Messages</span>
          </Link>
          <Link to="/f" className="flex items-center text-white">
            <img src={settings_icon} alt="Settings" className='h-[30px] w-[30px]' />
            <span className={`${isCollapsed ? 'hidden' : 'inline-block'} ml-4 font-semibold text-sidebar_font text-[20px]`}>Settings</span>
          </Link>
        </nav>
      </div>
      <div className='flex items-center h-full   '>
        <button onClick={toggleSidebar} className="text-white">
          
          <div className={`h-[150px] w-2 mr-2 ${isCollapsed?'bg-toggle_off':'bg-toggle_on bg-opacity-30'}  rounded-3xl`}>
          </div>
          
        </button>
      </div>

    </div>
  );
};
