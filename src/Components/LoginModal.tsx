import React, { useState, useRef, useEffect, useContext } from 'react';
import 'tailwindcss/tailwind.css';
// import { ModalContext } from '../App';
import { Context } from './ContextProvide';
import { Link } from 'react-router-dom';


type contextstate = {
  setloginModal: (value: boolean) => void;
  setSignupModal: (value: boolean) => void;
};

const LoginModal: React.FC = () => {
  const context = useContext(Context);
  const [visible, setVisible] = useState(false);
  const { setloginModal,setSignupModal } = context as contextstate;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setVisible(false);
      setTimeout(() => setloginModal(false), 300);
    }
  };

  useEffect(() => {
    setVisible(true);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div ref={modalRef} className="bg-white rounded-[20px] shadow-lg w-[622px] px-[60px] py-[40px]">
        <h2 className="text-3xl font-bold text-landingfont mb-4 h-10">Login</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet consectetur.</p>
        <form>
          <p className='text-cyan1 mb-3 ms-2'>Email</p>
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded py-2 px-4 mb-4" />
          <p className='text-cyan1 mb-3 ms-2'>Password</p>
          <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded py-2 px-4 mb-4" />
          <div className="flex items-center mb-4 text-cyan1">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I've read and agree with Terms of Service and our Privacy Policy
            </label>
          </div>
          <Link to='/d'>
            <button type="submit" className="w-full bg-signup text-white py-2 rounded mb-4">
              LOGIN
            </button>
          </Link>
        </form>
        <div className="text-center mb-4 absolute text-white translate-y-16 translate-x-40">
          <p>Don't have an account? <button onClick={()=>{setloginModal(false)
             setSignupModal(true)}} className="text-white">Signup</button></p>
        </div>
      </div>
    </div>
  );
} 

export default LoginModal;
