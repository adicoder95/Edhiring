// import React from 'react'

type BlogProps = {
    pic: string,
    title: string,
    description: string,
}

export default function Blog( {pic,title,description}: BlogProps) {
  return (
    <div className='flex flex-col w-1/5'>
        <div>
            <img src={pic} alt="blog_image" />
        </div>
        <div className='mt-4'>
            <h2 className='text-2xl font-bold mb-4 text-landingfont'>{title}</h2>
            <p className=' font-normal text-cyan1'>{description}</p>
            <p className='text-logo mt-4'>Read More  <span className='text-2xl'>  </span></p>
        </div>

    </div>
  )
}
