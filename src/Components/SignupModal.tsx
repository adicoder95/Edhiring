import React, { useState, useRef, useEffect, useContext } from 'react';
import 'tailwindcss/tailwind.css';
import { Context } from './ContextProvide';

type contextstate = {
  setloginModal: (value: boolean) => void;
  setSignupModal: (value: boolean) => void;
};

const SignUpModal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('candidate');
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const context = useContext(Context);
  const { setloginModal, setSignupModal } = context as contextstate;

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      if (setSignupModal) {
        setIsVisible(false);

        setTimeout(() => setSignupModal(false), 300);
      }
    }
  };

  useEffect(() => {
    setIsVisible(true); // Set the modal to be visible when it first renders
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-[20px] shadow-lg w-[622px] px-[60px] py-[40px] transition-transform duration-300 transform"
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        <div className="flex justify-between mb-6">
          <button
            className={`px-4 py-2 flex-grow ${
              activeTab === 'candidate' ? 'border-b-2 border-blue-500 bg-backcyan opacity-70 rounded-md' : ''
            }`}
            onClick={() => setActiveTab('candidate')}
          >
            Candidate
          </button>
          <button
            className={`px-4 py-2 flex-grow ${
              activeTab === 'employer' ? 'border-b-2 border-blue-500 bg-backcyan opacity-70 rounded-md' : ''
            }`}
            onClick={() => setActiveTab('employer')}
          >
            Employer
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet consectetur.</p>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First name" className="border border-gray-300 rounded py-2 px-4" />
            <input type="text" placeholder="Last name" className="border border-gray-300 rounded py-2 px-4" />
          </div>
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded py-2 px-4 mb-4" />
          <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded py-2 px-4 mb-4" />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I've read and agree with Terms of Service and our Privacy Policy
            </label>
          </div>
          <button type="submit" className="w-full bg-signup text-white py-2 rounded mb-4">
            SIGN UP
          </button>
        </form>
        <div className="text-center mb-4">
          <p>
            Already have an account?{' '}
            <button
              onClick={() => {
                setSignupModal(false);
                setloginModal(true);
              }}
              className="text-blue-500"
            >
              Login
            </button>
          </p>
        </div>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-500">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Google Icon" className="w-6 h-6 mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
