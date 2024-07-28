// import  { useState } from 'react'
// import { Sidebar } from '../Components/Sidebar'

// import key_skills_pic from '../assets/key_skills_pic.svg'

// import Personal_details from '../Components/Forms/Personal_details'
import Employer_details from '../Components/Forms/Employer_details';









export default function EmployerCreate_profile() {
  // const [value, setValue] = useState<string>('');
  // const Date_now=Date.now().toString();
  // get the current year
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  
  for(let i=0;i<10;i++){
    console.log(i);
  }
  return (

    <main className='flex-1 ml-20 transition-all duration-300'>
      <div className="bg-white p-8 rounded-lg shadow-md  mx-auto mt-8">


        <h3 className="text-xl font-semibold text-gray-900 mb-4 ">Create Profile</h3>
        <Employer_details />
        


      </div>
    </main>

  )
}
