import React, { useEffect } from 'react';

interface EducationProps {
  index: number;
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const Education: React.FC<EducationProps> = ({ index, profile, setProfile }) => {
  const [currentYear, setCurrentYear] = React.useState<number>(new Date().getFullYear());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedEducation = profile.Education.map((education: any, i: number) => {
      if (i === index) {
        return { ...education, [name]: value };
      }
      return education;
    });
    setProfile((prevState: any) => ({
      ...prevState,
      Education: updatedEducation
    }));
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    console.log(currentYear);
  }, []);

  return (
    <div className=' rounded-lg p-6 mr-14 '>
      <p className='text-[20px] text-buttons font-semibold mb-10'> Education</p>
      <div className='ml-1'>
        <p className='text-[-20px] text-buttons font-semibold mb-7'>Add Institute</p>
        <div className='grid grid-cols-2 justify-start mr-2'>
          <div className='flex flex-col mb-11'>
            <label htmlFor="Institute_Name" className='mb-2 text-buttons text-[16px] font-semibold'>Institute Name</label>
            <input
              type="text"
              className='h-[50px] w-[271px] outline-none border border-gray-300 p-3'
              placeholder='Enter Institute Name'
              name='Institute_Name'
              value={profile.Education[index].Institute_Name}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col mb-11'>
            <label htmlFor="Degree" className='mb-2 text-buttons text-[16px] font-semibold'>Degree</label>
            <input
              type="text"
              className='h-[50px] w-[271px] outline-none border border-gray-300 p-3'
              placeholder='Enter Degree'
              name='Degree'
              value={profile.Education[index].Degree}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col mb-11'>
            <label htmlFor="Year_of_Starting" className='mb-2 text-buttons text-[16px] font-semibold'>Year of Starting</label>
            <select
              name="Year_of_Starting"
              className='h-[50px] w-[270px] p-3 custom-dropdown'
              value={profile.Education[index].Year_of_Starting}
              onChange={handleInputChange}
            >
              <option value="">Select Start Year</option>
              {Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col mb-11'>
            <label htmlFor="Year_of_Passing" className='mb-2 text-buttons text-[16px] font-semibold'>Year of Passing</label>
            <select
              name="Year_of_Passing"
              className='h-[50px] w-[270px] p-3 custom-dropdown'
              value={profile.Education[index].Year_of_Passing}
              onChange={handleInputChange}
            >
              <option value="">Select End Year</option>
              {Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
