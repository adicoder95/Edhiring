// import React from 'react'
import buildresume_pic from '../assets/buildresume_pic.svg'
import rightArrow_icon from '../assets/RightArrow_icon.svg'
import DemoResume_pic from '../assets/DemoResume_Pic.svg'
export default function Build_Resume() {
  return (
    <main className='flex-1 ml-20 transition-all duration-300 w-[90%] '>
        <div className='flex flex-col mt-7 gap-5 me-7 mb-10 pb-10'>
            <div className='flex-grow flex px-10 shadow-lg rounded-lg border-opacity-40 border-[1px] py-11 flex-wrap'>
                <div className='w-[60%] min-w-[503px]'>
                <h2 className='text-[24px] text-buttons font-semibold p-2'>Create your ATS friendly resume with AI</h2>
                    <p className='text-[16px]  w-[80%] text-buttons ms-2 mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat.
                    </p>
                </div>
                <div className='flex-grow flex  justify-around items-center'>
                    <img src={buildresume_pic} alt="" className='w-[299px] h-[142px]  '/>
                    <img src={rightArrow_icon} alt="" className='h-[50px] w-[50px]'/>
                </div>
            </div>
            <div className='flex-grow flex px-10 shadow-lg rounded-lg border-opacity-40 border-[1px] py-11 flex-wrap'>
                <div className='w-[60%] min-w-[503px]'>
                <h2 className='text-[24px] text-buttons font-semibold p-2'>Create your ATS friendly resume with AI</h2>
                    <p className='text-[16px]  w-[80%] text-buttons ms-2 mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat.
                    </p>
                </div>
                <div className='flex-grow flex  justify-around items-center'>
                    <img src={buildresume_pic} alt="" className='w-[299px] h-[142px]  '/>
                    <img src={rightArrow_icon} alt="" className='h-[50px] w-[50px]'/>
                </div>
            </div>
            
        </div>
            <h1 className='text-2xl mb-4'> How it works ?</h1>
        <div className='flex  mt-7 font-semibold text-buttons '>
            <div className='flex  justify-center h-[360px] w-[40%] ms-20'>
                <img src={DemoResume_pic} alt=""  />
                
            </div>
            <div className='flex-grow flex justify-center items-center'>

                <div className='w-1/2 min-w-[503px] flex flex-col gap-12'>
                <div>
                    <h1 className='text-[24px]'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat.</p>

                </div>
                <div>
                    <h1 className='text-[24px]'>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat.</p>

                </div>
                </div>
                    
            </div>

        </div>
    </main>
  )
}
