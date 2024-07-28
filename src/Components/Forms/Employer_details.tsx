// import React from 'react'
import empty_profile from '../../assets/Profile_pic_Empty.svg'
// import resume_upload_pic from '../../assets/resume_upload_pic.svg'
import CoverPhoto_pic from '../../assets/CoverPhoto_pic.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Employer_details() {
    return (
        <div className="border rounded-lg p-6 mr-14 shadow-lg shadow-gray-200">
            <h4 className="text-lg font-semibold text-gray-700 mb-6">Create Employer Account</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-start lg:ml-[62px]">
                    <div className="  flex items-center gap-2 gap-y-3">
                        <img src={empty_profile} alt="" height={"96px"} width={"96px"} className="w-24 h-24 rounded-md" />
                        <div className='flex-col justify-center ' >
                            <span className="text-buttons text-[20px] font-bold mb-3">Update logo</span>
                            <p className=" text-sm text-cyan1">Supported file formats: jpg, jpeg, png</p>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start ">
                    <div className="  flex items-center gap-2 gap-y-3">
                        <img src={CoverPhoto_pic} alt="" className="w-24 h-24 rounded-md w-" />
                        <div className='flex-col justify-center ' >
                            <span className="text-buttons text-[20px] font-bold mb-3">Update cover Photo</span>
                            <p className=" text-sm text-cyan1">Supported file formats: jpg, jpeg, png</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <PhoneInput
                        country={'us'}
                        enableAreaCodes={true}
                        disableCountryCode={true}
                        autoFormat={true}
                        buttonClass='h4 absolute overflow-hidden width'
                        containerStyle={{ height: '50px' }}
                        inputStyle={{ height: '50px', paddingLeft: '70px', width: '270px' }}
                        buttonStyle={{ height: '50px', width: '50px' }}
                        dropdownStyle={{ height: '50px', width: '100px', position: 'absolute', top: '0', left: '0', zIndex: '1000' }}
                    // enableSearch={true}
                    // value={this.state.phone}
                    // onChange={phone => this.setState({ phone })}

                    />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <PhoneInput
                        country={'us'}
                        enableAreaCodes={true}
                        disableCountryCode={true}
                        autoFormat={true}
                        buttonClass='h4 absolute overflow-hidden width'
                        containerStyle={{ height: '50px' }}
                        inputStyle={{ height: '50px', paddingLeft: '70px', width: '270px' }}
                        buttonStyle={{ height: '50px', width: '50px' }}
                        dropdownStyle={{ height: '50px', width: '100px', position: 'absolute', top: '0', left: '0', zIndex: '1000' }}
                    // enableSearch={true}
                    // value={this.state.phone}
                    // onChange={phone => this.setState({ phone })}

                    />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>
                <div className='align-middle content-center my-9'>
                    <p className='text-[16px] font-semibold text-buttons'>Employer Full Name</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
                </div>



            </div>
            <div className='flex flex-wrap'>
                <div className='w-3/5'>
                    <p className='text-buttons font-semibold mb-9'> About the Company</p>
                    <textarea name="key_skills_pic" id="" className='w-4/5 min-w-[620px] h-[160px] resize-none rounded-md outline-gray-300  border bg-opacity-60 border-gray-200'></textarea>
                </div>
                <div className='flex-grow'>
                    <div className='mb-9'>
                        <p className='text-buttons font-semibold mb-4'>Current City</p>
                        <input type="text" className='border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]' />
                    </div>
                    <div className='mb-9'>
                        <p className='text-buttons font-semibold mb-3'>Current City</p>
                        <input type="text" className='border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]' />
                    </div>


                </div>

            </div>
            <div className='flex flex-wrap'>
                <div className='w-3/5'>
                    <p className='text-buttons font-semibold mb-4'>Enter Complete Institute Address</p>
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[620px] mb-4" placeholder="Address Line 1" />
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[620px] mb-4" placeholder="Address Line 2" />
                    <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[620px] mb-4" placeholder="Address Line 3" />

                </div>
                <div className='flex-grow'>
                    <div className='mb-9'>
                        <p className='text-buttons font-semibold mb-4'>Current City</p>
                        <input type="text" className='border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]' />
                    </div>
                    <div className='mb-9'>
                        <p className='text-buttons font-semibold mb-4'>Current City</p>
                        <input type="text" className='border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]' />
                    </div>


                </div>

            </div>

            {/* <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Create Profile
          </button> */}
        </div>
    )
}
