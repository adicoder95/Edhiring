// import React from 'react'
import CandidatesAppliedCard from '../Components/CandidatesAppliedCard'
// import { data } from '../Components/Chart'




export default function CandidateApply() {
    let d=[
        {
        name: 'Candidate Name',
        image: '',
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
        },
        {
            name: 'Candidate Name',
            image: '',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            name: 'Candidate Name',
            image: '',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            name: 'Candidate Name',
            image: '',
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
        },
]
  return (
    <main>
        <div className="flex items-center space-x-4 p-4 gap-8 bg-white rounded shadow-md mt-3">
                <div className='flex'>
                    <button className="text-blue-900 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <h2 className="text-buttons text-[24px] font-semibold ms-2">Candidates Applied</h2>

                </div>
                <div className="flex items-center bg-gray-100 rounded-lg w-[595px] me-auto">
                    <svg className="w-6 h-6 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by location, position, etc"
                        className="bg-transparent p-2 outline-none w-full text-blue-900"
                    />
                </div>
                <div>
                    
                </div>
                
            </div>
        <CandidatesAppliedCard/>
        {d.map((data,index)=>{
            return <CandidatesAppliedCard key={index} name={data.name} image={data.image} title={data.title} description={data.description} />
        })}
    </main>
  )
}
