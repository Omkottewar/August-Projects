import React from 'react'
import searchIcon from './assets/search.png'
import clear from './assets/clear.png'
import cloud from './assets/cloud.png'
import drizzle from './assets/drizzle.png'
import humidity from './assets/humidity.png'
import rain from './assets/rain.png'
import snow from './assets/snow.png'
import wind from './assets/wind.png'


const Weather = () => {
  return (
    <div className='w-screen h-screen bg-[#CAC1E4] '>
      <div className="p-10  bg-gradient-to-tr from-[#2f4680] to-[#500ae4] items-center flex flex-col  ">
      <div className="search-bar flex items-center gap-4">
          <input className='h-[50px] border-none outline-none rounded-xl pl-[25px] text-[#626262] bg-[#ebfffc] text-lg' type="text" placeholder='search'/>
          <img className='w-[50px] p-[15px] rounded-[50%] bg-[#ebfffc] cursor-pointer' src={searchIcon} alt="" />
        </div>
        <img className='w-[150px] my-[30px]' src={clear} alt="" />
        <p className='text-white text-[80px] '>16C</p>
        <p className='text-white text-[80px]'> London</p>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
        
    </div> 
  )
}

export default Weather