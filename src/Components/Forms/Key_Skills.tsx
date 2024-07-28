// import React from 'react'

import key_skills_pic from '../../assets/key_skills_pic.svg'

export default function Key_Skills() {
    return (
        <div className='border rounded-lg p-6 mr-14 shadow-lg shadow-gray-200 mt-7'>
            <h4 className="text-lg font-semibold text-buttons mb-6">Key Skills</h4>
            <div className='w-full flex justify-around'>
                <div className='flex-grow'>
                    <p className='text-buttons text-[16px] mb-4'> Full Name</p>
                    <textarea name="key_skills_pic" id="" className='w-4/5 h-[150px] resize-none outline-gray-300  border bg-opacity-60 border-gray-200'></textarea>
                </div>
                <img src={key_skills_pic} alt="" className='me-20 ' />

            </div>
            <p className='text-cyan1 font-semibold text-sm mb-12'> choose upto 20 skills</p>
        </div>
    )
}


// import React, { useState } from 'react';

// type ProfileSchema = {
//   KeySkills: {
//     tags: string[];
//   };
// };

// type KeySkillsProps = {
//   profile: ProfileSchema;
//   setProfile: React.Dispatch<React.SetStateAction<ProfileSchema>>;
// };

// export default function Key_Skills({ profile, setProfile }: KeySkillsProps) {
//   const [skill, setSkill] = useState<string>('');

//   const addSkill = () => {
//     if (skill.trim() !== '') {
//       setProfile((prevState) => ({
//         ...prevState,
//         KeySkills: {
//           tags: [...prevState.KeySkills.tags, skill]
//         }
//       }));
//       setSkill('');
//     }
//   };

//   const removeSkill = (index: number) => {
//     setProfile((prevState) => {
//       const updatedSkills = [...prevState.KeySkills.tags];
//       updatedSkills.splice(index, 1);
//       return {
//         ...prevState,
//         KeySkills: {
//           tags: updatedSkills
//         }
//       };
//     });
//   };

//   return (
//     <div className="border rounded-lg p-6 mr-14 shadow-lg shadow-gray-200 mt-7">
//       <h4 className="text-lg font-semibold text-gray-700 mb-6">Key Skills</h4>
//       <div className="flex items-center mb-4">
//         <input 
//           type="text" 
//           className="mt-1 block border-gray-300 rounded-md shadow-sm px-2 outline-none border h-[50px] w-[270px]" 
//           placeholder="Enter a skill" 
//           value={skill} 
//           onChange={(e) => setSkill(e.target.value)} 
//         />
//         <button 
//           onClick={addSkill} 
//           className="bg-blue-500 text-white p-2 rounded ml-2 h-[50px] w-[50px] flex items-center justify-center">
//           +
//         </button>
//       </div>
//       <ul className="list-disc pl-6">
//         {profile.KeySkills.tags.map((skill, index) => (
//           <li key={index} className="flex items-center justify-between mb-2">
//             <span>{skill}</span>
//             <button 
//               onClick={() => removeSkill(index)} 
//               className="bg-red-500 text-white p-1 rounded ml-2">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
