import React from 'react'
import ProfileDetails from './ProfileDetails';
import Leetcode from './Leetcode';
import Teckstack from './Techstack';
import Education from './Education';

const Profile = () => {
  return (
    <div className=" p-5  max-lg:flex max-lg:flex-col max-lg:gap-10 lg:grid lg:grid-cols-3 lg:gap-4 border-l border-white pl-10">
      <button className='hidden max-lg:block'>Home</button>
      <div className="  "><ProfileDetails /></div>
      <div className="w-[450px]"><Education /></div>
      <div className=" w-[420px] grid lg:grid-cols-2 gap-4 max-lg:flex max-lg:flex-col  max-lg:gap-10">
        <div className="bg-[#191919] lg:col-span-2 border border-gray-500 lg:rounded-md lg:p-5"> <Teckstack /> </div>
        <div className=" lg:col-span-2  bg-[#191919] p-5 border border-gray-500 rounded-md"><Leetcode /></div>
      </div>
    </div>
  )
}

export default Profile