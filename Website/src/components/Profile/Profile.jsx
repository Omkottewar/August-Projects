import React, { useContext } from 'react'
import ProfileDetails from './ProfileDetails';
import Leetcode from './Leetcode';
import Teckstack from './Techstack';
import Education from './Education';
import ColorContext from '../../Context/ColorContext';
import ColorButton from '../../ColorButton';


const Profile = () => {

  const {color,setColor} = useContext(ColorContext);


  return (
    <div className="">
      <div className="absolute right-20 top-5 "><ColorButton/> </div>
    <div className=" p-5  max-lg:flex max-lg:flex-col max-lg:gap-10 lg:grid lg:grid-cols-3 lg:gap-4 border-l border-white pl-10">
      <button className={`hidden max-lg:block ${color?"bg-[#191919]":"bg-white"}`}>Home</button>
      <div className={` lg:rounded-md ${color?"bg-[#191919] ":"bg-white text-black"}`}><ProfileDetails /></div>
      <div className={`w-[450px] lg:rounded-md ${color?"bg-[#191919] text-white":"bg-white"}`}><Education /></div>
      <div className={` w-[420px] grid lg:grid-cols-2 gap-4 max-lg:flex max-lg:flex-col  max-lg:gap-10 `}>
        <div className={`lg:col-span-2 border border-gray-500 lg:rounded-md lg:p-5 ${color?"bg-[#191919] text-white":"bg-white"}`}> <Teckstack /> </div>
        <div className={`lg:col-span-2   p-5 border border-gray-500 rounded-md ${color?"bg-[#191919] text-white":"bg-white"}`}><Leetcode /></div>
      </div>
    </div>
    </div>
    
  )
}

export default Profile