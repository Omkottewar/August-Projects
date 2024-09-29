import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({card}) => {
    const {title, date,author} = card;
  return (
    <div className='mb-5'>
        <Link to=''><h1 className='text-xl font-semibold hover:text-red-700 '>{title}</h1></Link>
        <div className="flex ">By {author} {date}</div>
        <hr />
    </div>
  )
}

export default BlogCard