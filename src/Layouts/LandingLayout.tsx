import React from 'react'
// import Footer from '../Components/Footer'

interface landing_layoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: landing_layoutProps) {
  return (
    <div className='w-screen  relative'>
      <div className='h-[564px] w-full bg-primary absolute rounded-[80px] opacity-80 -right-[24%] top-[-200px] -z-10'></div>
      <div className='h-[564px] w-full bg-primary absolute opacity-80 -right-[10%] top-[-100px] -z-20 rounded-bl-[100px]'></div>
      <div className='h-[564px] w-full bg-secondary absolute opacity-80 -right-0 -z-30 rounded-bl-[100px]'></div>
      {children}
      {/* <Footer/> */}
    </div>
  )
}
