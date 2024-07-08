import React from 'react'

type FeatureProps = {
    color: string,
    title: string,
    description: string,
}

export default function Feature({color,title,description}: FeatureProps) {
    return (
        <div className='w-2/5 flex '>
            <div className='w-[62px] pt-1 absolute -translate-x-12 mr-7'>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <rect x="2" y="2" width="58" height="58" stroke={color} stroke-width="4" />
                    <rect x="2" y="2" width="29" height="29" stroke={color} stroke-width="1.5" className=' translate-x-[14.5px] translate-y-[14.5px]'/>
                </svg>
                

            </div>
            <div className=' flex-grow px-7'>
                <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    )
}
