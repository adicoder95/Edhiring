import React from 'react'
// import Footer from '../Components/Footer'

interface landing_layoutProps {
  children: React.ReactNode
}

export default function MyProfilelayout({ children }: landing_layoutProps) {
  return (
    <main className='w-screen  absolute'>
      <div className='h-[564px] w-full bg-tr absolute rounded-[80px]  -right-[86px] top-[-338px] -z-10'></div>
      <div className='h-[564px] w-full bg-sr absolute  -right-[42px] top-[-271px] -z-20 rounded-bl-[100px]'></div>
      <div className='h-[564px] w-full bg-pr absolute  -right-0 -z-30 rounded-bl-[100px] top-[-228px]' ></div>
      {children}
      {/* <Footer/> */}
    </main>
  )
}
