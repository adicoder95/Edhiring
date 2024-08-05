


// import MyProfilelayout from '../Layouts/MyProfilelayout'
import My_Profile_pic from '../assets/My profile pic.svg'


type Props = {
    Employer?: boolean;
}

export default function Profile({Employer}:Props) {
  return (
    <div className='min-h-screen min-w-full pb-10'>
                <div className='grid-cols-2 mt-[195px] grid'>
                    <div className='flex items-end flex-col'>
                        <div>

                            <div className='flex items-center justify-start '>
                                <img src={My_Profile_pic} alt="" className='h-[217px] w-[217px]' />
                                <div className='my-8 text-white mx-10'>
                                    <p>Assistant Professor</p>
                                    <p className='text-[24px] font-bold mt-1'> Deep Goel</p>
                                    <p className='text-[20px] font-normal mt-3'> New Delhi</p>
                                    <div className='flex mt-3'>
                                        <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold mr-2'>Experienced</span>
                                        <span className='bg-signup bg-opacity-30 text-red-400 py-1 px-3 rounded-full text-xs font-semibold'>Spanish</span>
                                    </div>

                                </div>

                            </div>

                            <div className='w-[578px] mt-[74px]'>
                                <p className='text-[28px] text-buttons font-bold'> About Candidate</p>
                                <p className='mt-6 text-cyan1 font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam</p>
                            </div>

                            <div className='mt-10 w-[578px] text-buttons'>
                                <p className='text-[28px] text-buttons font-bold mb-7'> Education</p>
                                <p className='font-semibold'>Graphic Desinger 2014-2017</p>
                                <p className='font-semibold'> FPT University</p>
                                <p className='text-cyan1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                            </div>
                            <div className='mt-10 w-[578px] text-buttons'>
                                <p className='text-[28px] text-buttons font-bold mb-7'> Work Experience</p>
                                <div className='mt-7'>
                                    <p className='font-medium'>Developer 2020-2021</p>
                                    <p className='font-medium'> FPT University</p>
                                    <p className='text-cyan1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</p>

                                </div>
                                <div className='mt-7'>
                                    <p className='font-medium'>Leader Marketing 2021 - 2023</p>
                                    <p className='font-medium'> BZ Company</p>
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
                                    <p className='text-buttons text-[24px] font-semibold'>Important Information</p>
                                    <div className='mt-12'>
                                        <div className='grid grid-cols-2 h-[100px] content-center '>
                                            <p className='text-cyan1'>Current Salary</p>
                                            <p className='text-buttons font-semibold'>12000/month</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Experience Time</p>
                                            <p className='text-buttons font-semibold'>3 years</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Gender</p>
                                            <p className='text-buttons font-semibold'>Male</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Qualification</p>
                                            <p className='text-buttons font-semibold'>Master's Degree</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Age</p>
                                            <p className='text-buttons font-semibold'>20-25</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Languages</p>
                                            <p className='text-buttons font-semibold'>English,Hindi</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Email</p>
                                            <p className='text-buttons font-semibold'>Email@gmail.com</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Phone Number</p>
                                            <p className='text-buttons font-semibold'>91-9876543211</p>
                                        </div>
                                        <hr />
                                        <div className='grid grid-cols-2 h-[100px] content-center'>
                                            <p className='text-cyan1'>Resume</p>
                                            <p className='text-buttons font-semibold'>View</p>
                                        </div>
                                        <hr />
                                    </div>




                                </div>

                                {
                                    Employer &&
                                    <div className='flex flex-col items-center'>

                                        <div className='text-white bg-signup font-semibold text-[20px] py-5 rounded-md w-[462px] flex justify-center border mb-5'>
                                            <span>Select Candidate</span>
                                        </div>


                                        <div className='text-white bg-grey font-semibold text-[20px] py-5 rounded-md w-[462px] flex justify-center border'>
                                            <span>Reject</span>
                                        </div>


                                    </div>
                                }

                            </div>


                        </div>


                    </div>

                </div>


            </div>
  )
}
