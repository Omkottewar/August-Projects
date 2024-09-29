import React from 'react'
import BlogCard from './BlogCard'

const Section = ({title,className,Blogs}) => {
  return (
    <div className={className} >
        <div className={`flex items-center gap-2 `}>
        <div className="bg-red-700 w-1 h-9 "></div>
        <h1 className='font-bold text-2xl'>{title}</h1>
        </div>
        <div className="">
        {Blogs?.map((card)=>{
            console.log(card)
            return(
              <BlogCard key={card.name} card={card} />
            )
        }) }
        </div>
       

    </div>
  )
}

export default Section