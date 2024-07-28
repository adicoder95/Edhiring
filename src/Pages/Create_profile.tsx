import React, { useState } from 'react';
import Personal_details from '../Components/Forms/Personal_details'
import Key_Skills from '../Components/Forms/Key_Skills';
import Work_Experience from '../Components/Forms/Work_Experience';
import Education from '../Components/Forms/Education';
import Certification from '../Components/Forms/Certification';
import Language from '../Components/Forms/Language';
import Hobbies from '../Components/Forms/Hobbies';
// import axios from 'axios';

type PersonalDetails_Schema = {
  Profile_Pic: string,
  Full_Name: string,
  Gender: "Male" | "Female" | "Other",
  Email: string,
  Contact_No: string,
  Current_City: string,
  Experience: "Fresher" | "Experience",
  Experience_time: Date,
  Resume: File,
  Job_Role: String,
}

type WorkExperience_Schema = {
  Company: string,
  Designation: string,
  Wokring: 'yes',
  Worked_Since: Date,
  Worked_till: Date,
  Descripiton: string
}

type KeySkills_Schema = {
  tags: Array<string>,
}

type Education_Schema = {
  Degree: string,
  Institute_Name: string,
  Year_of_Starting: Date,
  Year_of_Passing: Date,
}

type Certification_Schema = {
  Certificate_Name: string,
  From_Date: Date,
  To_Date: Date,
}

type Language_Schema = {
  Language: string,
  Proficiency: "Beginner" | "Intermediate" | "Expert" | "Native" | "Fluent",
}

type Hobbies_Schema = {
  Hobbies: Array<string>,
}

type Profile_Schema = {
  PersonalDetails: PersonalDetails_Schema,
  WorkExperience: Array<WorkExperience_Schema>,
  KeySkills: KeySkills_Schema,
  Education: Array<Education_Schema>,
  Certification: Array<Certification_Schema>,
  Language: Array<Language_Schema>,
  Hobbies: Hobbies_Schema
}

export default function Create_profile() {
  const [profile, setProfile] = useState<Profile_Schema>({
    PersonalDetails: {
      Profile_Pic: '',
      Full_Name: '',
      Gender: 'Male',
      Email: '',
      Contact_No: '',
      Current_City: '',
      Experience: 'Fresher',
      Experience_time: new Date(),
      Resume: new File([], ''),
      Job_Role: ''
    },
    WorkExperience: [{
      Company: '',
      Designation: '',
      Wokring: 'yes',
      Worked_Since: new Date(),
      Worked_till: new Date(),
      Descripiton: ''
    }],
    KeySkills: {
      tags: [],
    },
    Education: [{
      Degree: '',
      Institute_Name: '',
      Year_of_Starting: new Date(),
      Year_of_Passing: new Date(),
    }],
    Certification: [{
      Certificate_Name: '',
      From_Date: new Date(),
      To_Date: new Date(),
    }],
    Language: [{
      Language: '',
      Proficiency: 'Beginner',
    }],
    Hobbies: {
      Hobbies: [],
    }
  });

  const addWorkExperience = () => {
    setProfile((prevState) => ({
      ...prevState,
      WorkExperience: [...prevState.WorkExperience, {
        Company: '',
        Designation: '',
        Wokring: 'yes',
        Worked_Since: new Date(),
        Worked_till: new Date(),
        Descripiton: ''
      }]
    }));
  };

  const addEducation = () => {
    setProfile((prevState) => ({
      ...prevState,
      Education: [...prevState.Education, {
        Degree: '',
        Institute_Name: '',
        Year_of_Starting: new Date(),
        Year_of_Passing: new Date(),
      }]
    }));
  };

  const addLanguage = () => {
    setProfile((prevState) => ({
      ...prevState,
      Language: [...prevState.Language, {
        Language: '',
        Proficiency: 'Beginner',
      }]
    }));
  };

  const addCertification = () => {
    setProfile((prevState) => ({
      ...prevState,
      Certification: [...prevState.Certification, {
        Certificate_Name: '',
        From_Date: new Date(),
        To_Date: new Date(),
      }]
    }));
  };

  const handleSubmit = async () => {
    console.log('Profile:', profile);
    // try {
    //   const response = await axios.post('YOUR_API_ENDPOINT', profile);
    //   console.log('Profile created successfully:', response.data);
    // } catch (error) {
    //   console.error('Error creating profile:', error);
    // }
  };

  return (
    <main className='flex-1 ml-20 transition-all duration-300'>
      <div className="bg-white p-8 rounded-lg shadow-md  mx-auto mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Profile</h3>
        <Personal_details />
        <Key_Skills />
        <div className='shadow-lg shadow-gray-200 mt-7 rounded-lg border'>
          {profile.WorkExperience.map((_, index) => (
            <Work_Experience key={index} index={index} profile={profile} setProfile={setProfile} />
          ))}
          <button onClick={addWorkExperience} className="bg-blue-500 text-white p-2 rounded mt-4 ml-10 mb-16">+ Add Work Experience</button>

        </div>
        <div className='shadow-lg shadow-gray-200 mt-7 rounded-lg border'>
          {profile.Education.map((_, index) => (
            <Education key={index} index={index} profile={profile} setProfile={setProfile} />
          ))}
          <button onClick={addEducation} className="bg-blue-500 text-white p-2 rounded mt-4 ml-10 mb-16">+ Add Education</button>

        </div>

        <div className='shadow-lg shadow-gray-200 mt-7 rounded-lg border'>
          {profile.Language.map((_, index) => (
            <Language key={index} index={index} profile={profile} setProfile={setProfile} />
          ))}
          <button onClick={addLanguage} className="bg-blue-500 text-white p-2 rounded mt-4 ml-10 mb-16">+ Add Language</button>

        </div>

        <div className='shadow-lg shadow-gray-200 mt-7 rounded-lg border'>
          {profile.Certification.map((_, index) => (
            <Certification key={index} index={index} profile={profile} setProfile={setProfile} />
          ))}
          <button onClick={addCertification} className="bg-blue-500 text-white p-2 rounded mt-4 ml-10 mb-16">+ Add Certification</button>

        </div>
        <Hobbies />
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded mt-4 ml-10 mb-16">Submit Profile</button>
      </div>
    </main>
  );
}
