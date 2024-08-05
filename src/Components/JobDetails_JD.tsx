// import React from 'react'
// import { data } from './Chart';

type JobDetails_JDProps = {
      Description?:Array<string>;
      About_COMPANY?:Array<string>;
    }

    let data  = {
        Description:[
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
        ],
        About_COMPANY:[
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
            "Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat et ac blandit elit. Pulvinar a ut ut elementum at erat. Lorem ipsum dolor sit amet consectetur. Eget sit at amet consequat",
        ]
    }

export default function JobDetails_JD({ Description = data.Description, About_COMPANY = data.About_COMPANY }: JobDetails_JDProps) {
    return (
        <div className="pl-[50px] pt-[20px] mt-9 w-full rounded-lg shadow-lg border">
        <div className="w-[840px]">
          <h1 className="text-[32px] font-semibold text-buttons mb-10">Job Description</h1>
  
          <ul className="list-disc list-inside marker:text-buttons">
            {Description.map((item, index) => (
              <li key={index} className="text-[16px] text-cyan1 mb-2">{item}</li>
            ))}
          </ul>
  
          <h1 className="text-[32px] font-semibold text-buttons mb-10">About Company</h1>
  
          <ul className="list-disc list-inside marker:text-buttons">
            {About_COMPANY.map((item, index) => (
              <li key={index} className="text-[16px] text-cyan1 mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
