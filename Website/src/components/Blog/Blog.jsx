import React, { useContext } from 'react'
import ColorContext from '../../Context/ColorContext'
import ColorButton from '../../ColorButton';
import Button from './Button'
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import Github from '../../assets/github.png'
import Section from './Section'
import {Blogs} from '../../assets/BlogData.js'

const Blog = () => {
  console.log(Blogs)
  const {color,setColor} = useContext(ColorContext);
  return (
    <div className=' border-l w-full'>
        <nav className='flex justify-between bg-[#191919] text-white px-2 py-6'>
          <div className="flex gap-5 items-center">
          <p>Explore the coolest frontend learning platform !</p>
          <Link to='/home'><button className='bg-red-700 px-2 py-1 rounded-md' >Home</button></Link>
          </div>
          <div className="flex gap-3 pr-32 items-center  ">
            <Button name='React Js'/>
            <Button name='Frontend System Design'/>
            <Button name='Javascript'/>
            
          </div>
        </nav>
        <div className="flex flex-row overflow-hidden justify-start pl-16 gap-[480px] py-5 shadow-xl border border-gray-300">
          <div className="flex  gap-2 ">
            <SocialMedia image={Github}/>
            <SocialMedia image={Github}/>
            <SocialMedia image={Github}/>
            <SocialMedia image={Github}/>
          </div>
          <h1 className='font-Bold'> Blogs</h1>
          <ColorButton/>
        </div>
        <img className='h-52 mx-auto w-[1200px] my-5' src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U62pEikCBvM1gjIDlAry7Q.png' alt="" />
    
      
      <div className="grid w-[90%] mx-auto overflow-x-hidden grid-cols-3  grid-rows-1 gap-6 mb-10">
      <Section title='Recent Blogs' className='col-span-1 ' Blogs = {Blogs.slice(0,8)}/>
      <Section title='Recent Blogs' className='col-span-1 row-span-2' Blogs = {Blogs.slice(8,16)}/>
      <Section title='Recent Blogs' className='col-span-1 row-span-2' Blogs = {Blogs.slice(18,27)}/>
      </div>
      <div className=" gap-4 w-[90%] mx-auto grid  grid-cols-4">
      <Section title='Recent Blogs' className='' Blogs = {Blogs.slice(0,8)}/>
      <Section title='Recent Blogs' className='' Blogs = {Blogs.slice(8,21)}/>
      <Section title='Recent Blogs' className='' Blogs = {Blogs.slice(18,27)}/>
      <Section title='Recent Blogs' className='' Blogs = {Blogs.slice(18,27)}/>
      </div>
   
   
    </div>
  )
}

export default Blog