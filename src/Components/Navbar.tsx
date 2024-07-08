// import React from 'react';
import logo from '../assets/EdHiringLogo.png';
// import SignUpModal from './SignupModal';
import { Context } from './ContextProvide';
import { useContext } from 'react';

const Navbar = () => {
  const context = useContext(Context);
  const { setloginModal,  setSignupModal } = context || {};
  return (
    <nav className="bg-white drop-shadow-lg  w-full">
      <div className="w-full  px-2 ">
        <div className="flex items-center justify-between h-[82px]">
          <div className="flex-shrink-0  bg-logo px-5 rounded-md">
            <a href="#" className="text-xl font-bold text-blue-900">
                <img src={logo} alt="logo"  />
            </a>
          </div>
          <div className="flex space-x-10 mx-auto font-semibold text-sm ">
            <a href="#" className="text-gray-900 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium ml-20">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-900 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              Hiring features
            </a>
          </div>
          <div className="flex items-center space-x-10 me-[65px]">
            {/* <SignUpModal/> */}
            <button className="bg-signup  text-white  py-2 px-4 rounded-md " onClick={() => setSignupModal && setSignupModal(true)}>  
              Sign Up
            </button>
            <div className="bg-white border-gray-300 text-gray-900 hover:bg-gray-200 hover:text-black   px-[25px] rounded-[10px] h-[42px] w-[88px] border-2  flex items-center" onClick={() => setloginModal && setloginModal(true)}>
              Login
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
