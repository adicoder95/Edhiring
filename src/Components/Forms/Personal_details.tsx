// import React from 'react'
import empty_profile from '../../assets/Profile_pic_Empty.svg'
import resume_upload_pic from '../../assets/resume_upload_pic.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Personal_details() {
  return (
    <div className="border rounded-lg p-6 mr-14 shadow-lg shadow-gray-200 w-full">
          <h4 className="text-lg font-semibold text-gray-700 mb-6">Personal Details</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="  flex items-center gap-2 gap-y-3">
                <img src={empty_profile} alt="" className="w-24 h-24 rounded-md" />
                <div className='flex-col justify-center ' >
                  <span className="text-buttons text-[20px] font-bold mb-3">Update photo</span>
                  <p className=" text-sm text-cyan1">Supported file formats: jpg, jpeg, png</p>

                </div>
              </div>
            </div>
            <div className='flex-col '>
              <label className="block text-buttons font-semibold mb-4 ">Full Name</label>
              <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-buttons font-semibold mb-4 ">Gender</label>
              <select className="mt-1 block border-gray-300 rounded-md shadow-sm h-[50px] w-[270px] custom-dropdown">
                <option>Select your gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-buttons font-semibold mb-4">Email Address</label>
              <input type="email" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your Email" />
            </div>
            <div>
              <label className="block text-buttons font-semibold mb-4">Contact Number</label>
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
            <div>
              <label className="block text-buttons font-semibold mb-4">Current City</label>
              <input type="text" className="mt-1 block  border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" placeholder="Enter your city" />
            </div>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-20 pb-14">
            <div>
              <form>
                <div className='flex flex-wrap mb-4 items-center'>
                  <input type="radio" name="status" className='mr-1 accent-signup h-5 w-5' /> <span className='text-[12px] text-cyan1 mr-5 font-medium'> Fresher</span>
                  <input type="radio" name='status' className='mr-1 accent-signup h-5 w-5' /> <span className='text-[12px] text-cyan1 font-medium'> Experience</span>

                </div>
                <div className='grid grid-cols-2 '>
                  <div>
                    {/* <label htmlFor="months" className="block text-sm font-medium text-gray-700">Months</label> */}
                    <select id="months" name="months" className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none select_category custom-dropdown" >
                      <option>0 Months</option>
                      <option>1 Month</option>
                      <option>2 Months</option>
                    </select>

                  </div>
                  <div>
                    {/* <label htmlFor="years" className="block text-sm font-medium text-gray-700">Years</label> */}
                    <select id="years" name="years" className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm outline-none select_category custom-dropdown">
                      <option>0 Years</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                    </select>

                  </div>


                </div>
              </form>
            </div>
            <div className="flex  items-center ">
              <div className='w-[97px] h-[97px] bg-gray-200 rounded-md px-[10px] flex justify-center items-center'>
                <img src={resume_upload_pic} alt="" />

              </div>
              <div className='px-3'>
                <p className="font-semibold text-buttons text-[20px] mb-2">Upload your Resume</p>
                <p className=" text-sm w-4/5 text-cyan1">Supported file formats: jpg, jpeg, png</p>

              </div>
            </div>
            <div>
              <label className="block text-gray-700">Job Role</label>
              <select className="mt-1 block  border-gray-300 rounded-md shadow-sm h-[50px] w-[270px] outline-none pr-5 line-clamp-4 custom-dropdown">
                <option>Select your Role</option>
                <option>Role 1</option>
                <option>Role 2</option>
                <option>Role 3</option>
              </select>
            </div>
          </div>

          {/* <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Create Profile
          </button> */}
        </div>
  )
}
