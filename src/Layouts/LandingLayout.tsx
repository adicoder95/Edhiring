import React from 'react'

interface landing_layoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: landing_layoutProps) {
  return (
    <div className='w-screen relative'>
      <div className='h-[564px] w-full bg-primary absolute rounded-[80px] opacity-80 -right-[24%] top-[-200px] -z-10'></div>
      <div className='h-[564px] w-full bg-primary absolute opacity-80 -right-[10%] top-[-100px] -z-20 rounded-bl-[100px]'></div>
      <div className='h-[564px] w-full bg-secondary absolute opacity-80 -right-0 -z-30 rounded-bl-[100px]'></div>
      {children}
      <div className='h-[337px] w-full bg-logo '>
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-4">Company name</h1>
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b border-gray-400 text-white py-2 mb-2 focus:outline-none"
            />
            <a href="#" className="text-gray-400 hover:text-white">
              Read our <span className="underline">Privacy policy</span>
            </a>
          </div>
          <div className="flex space-x-16">
            <div className="flex flex-col">
              <h2 className="font-semibold mb-2">OUR COMPANY</h2>
              <a href="#" className="mb-1 hover:text-gray-400">About Us</a>
              <a href="#" className="hover:text-gray-400">Careers</a>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-2">CONTACT US</h2>
              <a href="#" className="mb-1 hover:text-gray-400">Customer Service</a>
              <a href="#" className="hover:text-gray-400">Address</a>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold mb-2">NOTIFICATIONS</h2>
              <a href="#" className="mb-1 hover:text-gray-400">New Jobs</a>
              <a href="#" className="hover:text-gray-400">Hire Someone</a>
            </div>
          </div>
          <div className="flex flex-col">
            <a href="#" className="mb-1 hover:text-gray-400">Terms of Use</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
