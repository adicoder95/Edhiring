import React from 'react'
import image from '../assets/blog_image.svg'
import Blog from './Blog'


export default function Blogs() {
    const blogs=[
     {pic:image,title:"Lorem ipsum dolor sit ",subtitle:"Lorem ipsum dolor sit amet consectetur.  Varius ectus orci turpis molestie ut."}
    ,{pic:image,title:"Lorem ipsum dolor sit ",subtitle:"Lorem ipsum dolor sit amet consectetur.  Varius ectus orci turpis molestie ut."}
    ,{pic:image,title:"Lorem ipsum dolor sit ",subtitle:"Lorem ipsum dolor sit amet consectetur.  Varius ectus orci turpis molestie ut."}
    ,{pic:image,title:"Lorem ipsum dolor sit ",subtitle:"Lorem ipsum dolor sit amet consectetur.  Varius ectus orci turpis molestie ut."}
    ]
  return (
    <div className="  w-full px-16 my-20">
      <h1 className="text-[36px] font-bold mb-10 relative  text-landingfont ms-3">Latest Blogs</h1>
      <div className="flex justify-around w-full flex-wrap gap-y-24 ">
      
        {blogs.map((loc, index) => (
            <Blog key={index} pic={loc.pic} title={loc.title} description={loc.subtitle} />
        ))}
      </div>
    </div>
  )
}
