import React from 'react';

interface WorkExperienceProps {
  index: number;
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const Work_Experience: React.FC<WorkExperienceProps> = ({ index, profile, setProfile }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedWorkExperience = profile.WorkExperience.map((experience: any, i: number) => {
      if (i === index) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    setProfile((prevState: any) => ({
      ...prevState,
      WorkExperience: updatedWorkExperience
    }));
  };

  return (
    <div className=' rounded-lg p-6 mr-14 '>
      <h3 className='text-buttons font-semibold text-[20px]'> Work Experience</h3>
      <form action="">
        <div className='grid grid-cols-3 mt-7 gap-x-4'>
          <div className='flex flex-col'>
            <label htmlFor="company" className='text-buttons font-semibold text-[16px]'>Company</label>
            <input
              type="text"
              className='w-[270px] border-gray-400 rounded-md shadow-sm outline-none border h-[50px] mt-4 px-2'
              name='Company'
              value={profile.WorkExperience[index].Company}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="designation" className='text-buttons font-semibold text-[16px]'>Designation</label>
            <input
              type="text"
              className='w-[270px] border-gray-400 rounded-md shadow-sm outline-none border h-[50px] mt-4 px-2'
              name='Designation'
              value={profile.WorkExperience[index].Designation}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="working" className='text-buttons font-semibold text-[16px]'>Are you currently working here</label>
            <div className='mt-4 flex items-center'>
              <span className='mr-3'>
                <input
                  type="radio"
                  className='h-5 w-5 accent-signup translate-y-1'
                  name='Wokring'
                  value="yes"
                  checked={profile.WorkExperience[index].Wokring === 'yes'}
                  onChange={handleInputChange}
                /> <span className='text-cyan1 text-[16px] font-semibold'>Yes</span>
              </span>
              <span className='mr-3'>
                <input
                  type="radio"
                  className='h-5 w-5 accent-signup translate-y-1'
                  name='Wokring'
                  value="no"
                  checked={profile.WorkExperience[index].Wokring === 'no'}
                  onChange={handleInputChange}
                /> <span className='text-cyan1 text-[16px] font-semibold'>No</span>
              </span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <div className='flex flex-col'>
            <label htmlFor="workedSince" className='text-buttons font-semibold text-[16px]'>Worked Since</label>
            <input
              type="date"
              className='w-[270px] border-gray-400 rounded-md shadow-sm outline-none border h-[50px] mt-4 px-2'
              name='Worked_Since'
              value={profile.WorkExperience[index].Worked_Since}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="workedTill" className='text-buttons font-semibold text-[16px]'>Worked Till</label>
            <input
              type="date"
              className='w-[270px] border-gray-400 rounded-md shadow-sm outline-none border h-[50px] mt-4 px-2'
              name='Worked_till'
              value={profile.WorkExperience[index].Worked_till}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <p className='text-[16px] font-semibold text-buttons mb-4'> Describe Your Job Profile</p>
          <textarea
            name="Descripiton"
            className='h-[143px] w-[620px] resize-none border border-gray-300 rounded p-2 outline-none'
            placeholder='Type Your Description here'
            value={profile.WorkExperience[index].Descripiton}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Work_Experience;
