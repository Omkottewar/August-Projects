import React from 'react'

import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png';
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import rest from '../assets/rest.png'


const Techstack = () => {
  return (
    <>
    <h1 className='text-3xl'>Techstack</h1>
    <div className="border border-gray-300 mt-3"></div>
    <div className='flex mt-5 flex-wrap items-center gap-1'>
      <div className="">
      <img className='w-16 h-16 rounded-xl' src={html} alt="" />
      <p>HTML</p>
      </div>
      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={css} alt="" />
      <p>CSS</p>
      </div>

      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={javascript} alt="" />
      <p>JS</p>
      </div>

      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={bootstrap} alt="" />
      <p>BS</p>
      </div> 
    <div className="flex flex-col items-center">
    <img className='w-16 h-16 rounded-xl' src={reactImg} alt="" />
    <p>React</p>
      </div> 
      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={tailwind} alt="" />
      <p>TS</p>
      </div>
      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={github} alt="" />
      <p>Github</p>
      </div>
      <div className="flex flex-col items-center">
      <img className='w-16 h-16 rounded-xl' src={rest} alt="" />
      <p>API</p>
      </div>
    </div>
    </>
    
  )
}

export default Techstack