// import React from 'react'
import BigJobCard from '../Components/BigJobCard'
import JobDetails_JD from '../Components/JobDetails_JD'

export default function Job_Description() {
  return (
    <main className='min-h-screen pt-10 px-10 overflow-y-hidden' >
        <BigJobCard Apply/>
        <JobDetails_JD/>

    </main>
  )
}
