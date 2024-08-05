
import key_skills_pic from '../assets/key_skills_pic.svg';

import empty_profile from '../assets/Profile_pic_Empty.svg'

export default function Employer_PostJob() {
    return (
        <main className='flex-1 ml-10 transition-all duration-300 mb-20'>
            <p className='text-buttons text-[24px] font-semibold mt-7 mb-12'>Post a New Job</p>
            <div className='pt-9 pl-12'>
                <p className='text-[20px] text-buttons font-semibold mb-12'>Post a Job</p>
                <div className='mx-6 pb-20 w-[90%]'>
                    <div className='flex flex-wrap'>
                        <div className='lg:w-3/5'>
                            <p className='text-buttons text-[20px] font-semibold mb-8 '>Select a Cover Image</p>
                            <div className='flex items-center  h-[160px] w-full'>
                                <div className='flex flex-col justify-between h-full'>
                                    <div className='w-[196px] h-[64px] flex items-center'>
                                        <div className='w-16 h-16 bg-gray-500' />


                                        <p className='text-cyan1'>logo.png</p>


                                    </div>
                                    <div className='w-[196px] h-[64px] flex items-center'>
                                        <div className='w-16 h-16 bg-gray-500' />


                                        <p className='text-cyan1'>logo.png</p>


                                    </div>

                                </div>
                                <div className='flex-grow justify-center h-full items-center flex'>
                                    <div className="  flex items-center gap-2 gap-y-3">
                                        <img src={empty_profile} alt="" className="w-24 h-24 rounded-md " />
                                        <div className='flex-col justify-center ' >
                                            <span className="text-buttons text-[20px] font-bold mb-3">Update cover Photo</span>
                                            <p className=" text-sm text-cyan1">Supported file formats: jpg, jpeg, png</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex-grow flex px-6 lg:-translate-y-10 pl-20'>
                            <img src={key_skills_pic} alt="" style={{ width: "275px", height: "275px" }} />
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='h-full flex flex-col justify-between w-3/5'>
                            <div>
                                <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Title</p>
                                <input type="text" className='w-[620px] h-[50px] px-3 outline-none border-gray-300 border ' placeholder='Enter Job Title' />
                            </div>
                            <div>
                                <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Title</p>
                                <textarea name="Descripiton" className='w-[620px] h-[170px] px-3 outline-none border-gray-300 border resize-none' placeholder='Enter Job Description'></textarea>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between items-start w-2/5'>
                            <div className='mb-6'>
                                <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                                <select name="Job Cat" id="" className='w-[370px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                </select>
                            </div>
                            <div className='mb-6'>
                                <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                                <select name="Job Cat" id="" className='w-[370px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                </select>
                            </div>
                            <div className=''>
                                <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                                <select name="Job Cat" id="" className='w-[370px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown '>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                    <option value="Job Category">Select a category</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div className='flex flex-wrap mt-10'>
                        <div className='mb-6 w-1/3'>
                            <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                            <select name="Job Cat" id="" className='w-[327px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                            </select>
                        </div>
                        <div className='mb-6 w-1/3'>
                            <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                            <select name="Job Cat" id="" className='w-[327px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                            </select>
                        </div>
                        <div className='mb-6 w-1/3'>
                            <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                            <select name="Job Cat" id="" className='w-[327px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                            </select>
                        </div>
                        <div className='mb-6 w-1/3'>
                            <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                            <select name="Job Cat" id="" className='w-[327px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                            </select>
                        </div>
                        <div className='mb-6 w-1/3'>
                            <p className='text-buttons text-[20px] font-semibold mb-4 '>Job Category</p>
                            <select name="Job Cat" id="" className='w-[327px] h-[50px] px-3 outline-none border-gray-300 border rounded custom-dropdown'>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                                <option value="Job Category">Select a category</option>
                            </select>
                        </div>
                        <div className=' flex items-center h-full '>
                            <button className='my-auto pt-10 pl-5 '>
                                <div className='mb-6 w-[254px] h-[54px] bg-signup text-white text-[20px] pt-3 rounded-md'>
                                    <span className='mx-auto my-auto'>Post New Job</span>
                                    
                                </div>

                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}
