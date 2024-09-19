import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex flex-col  items-center p-4 h-full w-[210px] max-lg:hidden ' >
      <h1 className='text-2xl  text-slate-600 mb-16 '>
        <Link to='/' className='text-center '>
          Om Kottewar
        </Link>
      </h1>
      <ul className='flex flex-col gap-12  items-center'>
      <Link to="/">
        <li className='w-44  hover:bg-red-700 cursor-pointer text-lg font-bold hover:text-xl rounded-sm py-2 flex justify-center '>
          Home
        </li>
        </Link>
        <Link to="/profile">
        <li className='w-44  hover:bg-red-700 cursor-pointer text-lg font-bold hover:text-xl  rounded-sm py-2 flex justify-center '>
          Profile
        </li>
        </Link>
        <Link to="/blog">
        <li className='w-44  hover:bg-red-700 cursor-pointer text-lg font-bold hover:text-xl  rounded-sm py-2 flex justify-center '>
          Blog
        </li>
        </Link>
        <Link to="/projects">
        <li className='w-44  hover:bg-red-700 cursor-pointer text-lg font-bold hover:text-xl  rounded-sm py-2 flex justify-center '>
          Projects
        </li>
        </Link>
        <Link to="/dsa">
        <li className='w-44  hover:bg-red-700 cursor-pointer text-lg font-bold hover:text-xl  rounded-sm py-2 flex justify-center '>
          DSA
        </li>
        </Link>
        
      </ul>
    </div>
  );
}

export default Navbar;
