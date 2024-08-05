

import MyProfilelayout from '../Layouts/MyProfilelayout'
// import My_Profile_pic from '../assets/My profile pic.svg'
import InstitutePic from '../assets/Institute_Pic.svg'
import InstituteLogo from '../assets/InstituteLogo.svg'

export default function InstituteProfile() {
  return (
    <MyProfilelayout>
    <div className='min-h-screen min-w-full pb-10'>
        <div className='grid-cols-2 mt-[195px] grid'>
            <div className='flex items-end flex-col'>
                <div>

                    <div className='flex items-center justify-start '>
                        <img src={InstitutePic} alt="" className='h-[217px] w-[217px]' />
                        <div className='my-8 text-white mx-10'>
                            <p>Institute Type</p>
                            <p className='text-[24px] font-bold mt-1'> Institute Name</p>
                            <p className='text-[20px] font-normal mt-3'> New Delhi</p>
                            <div className='flex mt-3'>
                                <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold mr-2'>tag1</span>
                                <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold'>tag2</span>
                            </div>

                        </div>

                    </div>

                    <div className='w-[578px] mt-[74px]'>
                        <p className='text-[28px] text-buttons font-bold'> About Institute</p>
                        <p className='mt-6 text-cyan1 font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam</p>
                    </div>

                    <div className='mt-10 w-[578px] text-buttons'>
                        <p className='text-[28px] text-buttons font-bold mb-7'> Rating</p>
                        {/* <p className='font-semibold'>Graphic Desinger 2014-2017</p>
                        <p className='font-semibold'> FPT University</p> */}
                        <p className='text-cyan1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    </div>
                    <div className='mt-10 w-[578px] text-buttons'>
                        <p className='text-[28px] text-buttons font-bold mb-7'> More Reviews</p>
                        <div className='mt-7'>
                            {/* <p className='font-medium'>Developer 2020-2021</p>
                            <p className='font-medium'> FPT University</p> */}
                            <p className='text-cyan1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</p>

                        </div>
                        <div className='mt-7'>
                            {/* <p className='font-medium'>Leader Marketing 2021 - 2023</p>
                            <p className='font-medium'> BZ Company</p> */}
                            <p className='text-cyan1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        </div>

                    </div>
                <p className='mt-20 text-buttons font-bold ' ><span className='font-black'>{"<"}</span> Go back</p>
                </div>


            </div>
            <div className='flex px-5'>
                <div className='flex  justify-center ml-auto mr-[150px] mt-[40px]'>
                    <div className='w-[458px] '>
                        <div className='flex justify-end items-center h-[60px]'><p className='text-white font-bold'>Edit Profile</p></div>
                        <div className='py-10 pl-7 pr-9 bg-white rounded-xl'>
                                <p className='text-buttons text-[24px] font-semibold mb-5'>Important Information</p>
                                <p className='text-black font-bold flex items-center'> <img src={InstituteLogo} alt="" className='mr-3' /> Lorem Ipsum</p>
                            <div className='mt-12'>
                                <div className='grid grid-cols-2 h-[100px] content-center '>
                                    <p className='text-cyan1'>Lorem Ipsum </p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsum</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-2 h-[100px] content-center'>
                                    <p className='text-cyan1'>Lorem Ipsum </p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsump</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-2 h-[100px] content-center'>
                                    <p className='text-cyan1'>Lorem Ipsum</p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsum</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-2 h-[100px] content-center'>
                                    <p className='text-cyan1'>Lorem Ipsum</p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsum </p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-2 h-[100px] content-center'>
                                    <p className='text-cyan1'>Lorem Ipsum</p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsum</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-2 h-[100px] content-center'>
                                    <p className='text-cyan1'>Lorem Ipsum</p>
                                    <p className='text-buttons font-semibold'>Lorem Ipsum</p>
                                </div>
                                <hr />
                                
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            
        </div>

        
    </div>

</MyProfilelayout>
  )
}
