import React from 'react'
import image from '../assets/Square_icon.svg'
import Feature from './Feature';
export default function Qualtities() {
    const qualitieslist = [
        { color: "#0966C3", Title: 'Lorem ipsum', Description: 'Lorem ipsum dolor sit amet consectetur. Faucibus mattis in interdum in odio tellus. Tempor etiam metus dignissim elit cursus habitasse ac. Ultrices nunc consectetur fermentum lorem ut. Pellentesque eu fusce sit tempus' },
        { color: "#F2981B", Title: 'Lorem ipsum', Description: 'Lorem ipsum dolor sit amet consectetur. Faucibus mattis in interdum in odio tellus. Tempor etiam metus dignissim elit cursus habitasse ac. Ultrices nunc consectetur fermentum lorem ut. Pellentesque eu fusce sit tempus'},
        { color: "#30828D", Title: 'Lorem ipsum', Description: 'Lorem ipsum dolor sit amet consectetur. Faucibus mattis in interdum in odio tellus. Tempor etiam metus dignissim elit cursus habitasse ac. Ultrices nunc consectetur fermentum lorem ut. Pellentesque eu fusce sit tempus' },
        { color: "#F05556", Title: 'Lorem ipsum', Description: 'Lorem ipsum dolor sit amet consectetur. Faucibus mattis in interdum in odio tellus. Tempor etiam metus dignissim elit cursus habitasse ac. Ultrices nunc consectetur fermentum lorem ut. Pellentesque eu fusce sit tempus' },
      ];
  return (
    <div className="  w-full px-16 mt-20">
      <h1 className="text-[36px] font-bold mb-20 relative  text-landingfont ms-3">How ED hiring is Different?</h1>
      <div className="flex justify-around w-full flex-wrap gap-y-24 ">
      
        {qualitieslist.map((loc, index) => (
            <Feature key={index} color={loc.color} title={loc.Title} description={loc.Description} />
        ))}
      </div>
    </div>
  )
}
