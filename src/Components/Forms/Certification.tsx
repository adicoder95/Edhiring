import React from 'react';

interface CertificationProps {
  index: number;
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const Certification: React.FC<CertificationProps> = ({ index, profile, setProfile }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedCertifications = profile.Certification.map((cert: any, i: number) => {
      if (i === index) {
        return { ...cert, [name]: value };
      }
      return cert;
    });
    setProfile((prevState: any) => ({
      ...prevState,
      Certification: updatedCertifications
    }));
  };

  return (
    <div className=' rounded-lg p-6 mr-14'>
      <h4 className="text-lg font-semibold text-buttons mb-6">All Certifications or Publications</h4>
      <div className='w-[60%] '>
        <p className='text-buttons text-[16px] font-semibold mb-4'> Certification Name</p>
        <input
          type="text"
          className='h-[50px] w-[622px] p-3 rounded border-gray-300 outline-none border'
          placeholder='Enter Certification Name'
          name="Certificate_Name"
          value={profile.Certification[index].Certificate_Name}
          onChange={handleInputChange}
        />
        <p className='mt-8 text-buttons text-[16px] font-semibold mb-4'></p>
        <div className='flex flex-wrap'>
          <div className='flex w-2/5 gap-x-4'>
            <select
              className="mt-1 block border-gray-300 rounded-md shadow-sm h-[50px] w-[120px] outline-none pr-5 mr-4 custom-dropdown"
              name="From_Date"
              value={profile.Certification[index].From_Date}
              onChange={handleInputChange}
            >
              {/* You can replace these options with dynamic years if needed */}
              <option value="">Select From Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>

            <select
              className="mt-1 block border-gray-300 rounded-md shadow-sm h-[50px] w-[120px] outline-none pr-5 mr-4 custom-dropdown"
              name="From_Date"
              value={profile.Certification[index].From_Date}
              onChange={handleInputChange}
            >
              <option value="">Select From Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className='w-1/5 flex items-center'>
            <p className='text-buttons font-semibold mx-[38px] inline-block'> To </p>
          </div>
          <div className='flex w-2/5 gap-x-4'>
            <select
              className="mt-1 block border-gray-300 rounded-md shadow-sm h-[50px] w-[120px] outline-none pr-5 mr-4 custom-dropdown"
              name="To_Date"
              value={profile.Certification[index].To_Date}
              onChange={handleInputChange}
            >
              <option value="">Select To Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>

            <select
              className="mt-1 block border-gray-300 rounded-md shadow-sm h-[50px] w-[120px] outline-none pr-5 mr-4 custom-dropdown"
              name="To_Date"
              value={profile.Certification[index].To_Date}
              onChange={handleInputChange}
            >
              <option value="">Select To Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
