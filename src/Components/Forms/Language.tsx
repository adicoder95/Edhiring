import React from 'react';

interface LanguageProps {
  index: number;
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const Language: React.FC<LanguageProps> = ({ index, profile, setProfile }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedLanguages = profile.Language.map((language: any, i: number) => {
      if (i === index) {
        return { ...language, [name]: value };
      }
      return language;
    });
    setProfile((prevState: any) => ({
      ...prevState,
      Language: updatedLanguages
    }));
  };

  return (
    <div className=' rounded-lg p-6 mr-14 '>
      <h4 className="text-lg font-semibold text-buttons mb-6">Add Language</h4>
      <div className='w-1/2 flex justify-between'>
        <div>
          <p className='text-buttons text-[16px] mb-4 font-semibold'> Language</p>
          <select
            name="Language"
            className='w-[270px] h-[50px]  outline-none rounded custom-dropdown'
            value={profile.Language[index].Language}
            onChange={handleInputChange}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <div>
          <p className='text-buttons text-[16px] mb-4 font-semibold'> Fluency</p>
          <select
            name="Proficiency"
            className='w-[270px] h-[50px]  outline-none rounded custom-dropdown'
            value={profile.Language[index].Proficiency}
            onChange={handleInputChange}
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Native">Native</option>
            <option value="Fluent">Fluent</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Language;
