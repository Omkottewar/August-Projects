import { Box } from '@mui/material'
import React from 'react'
import {default as profilePic} from '../../assets/Profile.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
  return (
    <div className="w-full max-xl:w-[screen] border border-gray-500  h-[45.9rem]  p-2 rounded-md">
      <div className=""><img className='w-40 m-auto mt-10 rounded-full border-2 border-gray-500'  src={profilePic} alt="" /></div>
      <div className=" items-center flex flex-col mt-8">
        <p className='font-semibold text-2xl mb-4'>Om Kottewar</p>
        <p className='text-md text-gray-600'>#omkottewar</p>
      <div className="  flex gap-10 mt-12 ">
      <Link to='www.linkedin.com/in/om-kottewar' target='blank'><LinkedInIcon className='text-blue-800 '/></Link>
      <Link to='https://github.com/Omkottewar' target='blank' ><GitHubIcon/></Link>
      </div>
      <div className="border border-gray-600 mt-6 w-full"></div>
      <div className="mt-6 flex flex-col gap-10 justify-start">
        <div className="flex gap-7 items-center">
          <EmailIcon/>
          <Link to='mailto:omkottewar19.04@gmail.com'>
          <p>Omkottewar19.04@gmail.com</p>
          </Link>
          
        </div>
        <div className="flex gap-7 items-center">
          <LocationOnIcon/>
          <p>Nagpur</p>
        </div>
        <div className="flex gap-7 items-center">
          <EmailIcon/>
          <p>Omkottewar</p>
        </div>
      </div>
      <div className="border border-gray-600 mt-6 w-full"></div>
      </div>
    </div>
  )
}

export default ProfileDetails