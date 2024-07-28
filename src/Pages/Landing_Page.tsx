// import React from 'react';
import LandingLayout from '../Layouts/LandingLayout';
import intropic from '../assets/intropic.png';
import SearchBar from '../Components/SearchBar';
import LandingJobs from '../Components/LandingJobs';
import JobsByLocation from '../Components/JobsByLocation';
import Qualtities from '../Components/Qualtities';
import Blogs from '../Components/Blogs';
import SignUpModal from '../Components/SignupModal';
import LoginModal from '../Components/LoginModal';
import { Context } from '../Components/ContextProvide';
import { useContext } from 'react';

export default function Landing_Page() {
  const context = useContext(Context);
  const signupModal = context?.signupModal;
  const loginModal = context?.loginModal;
  return (
    <LandingLayout>
      <div className="flex">
        <div className="w-1/2 flex flex-col ps-[14%] pt-36 relative">
          <div className="text-[50px] w-full font-extrabold text-white flex flex-col">
            <span>Lorem ipsum dolor</span>
            <span>amet consectetur</span>
          </div>
          <div className="mt-9 text-2xl text-white font-normal">
            EdHiring made it simpler for you
          </div>
        </div>
        <div className="w-1/2 overflow-y-hidden pb-4 flex justify-end">
          <img
            src={intropic}
            alt="intro"
            className="relative top-11 pr-[155px] lg:h-[474px] md:[294px]"
          />
        </div>
      </div>
      <SearchBar />
      
      <LandingJobs />
      <JobsByLocation/>
      <Qualtities/>
      <Blogs/>
      {signupModal && <SignUpModal/>}
      {loginModal && <LoginModal/>}


      
      {/* <div className="w-screen h-screen"></div>    */}
    </LandingLayout>
  );
}
