import React from 'react'
import Logo from '../assets/logo.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-12 py-5'>
        <img src={Logo} className='h-8' alt="" />

        <div className=" navbar flex text-white gap-10 ">
            <p> <a href=""> Home</a></p>
            <p> <a href="">Features</a> </p>
            <p> <a href=""> Product</a></p>
            <p> <a href="">Clients</a> </p>
        </div>
    </div>
  )
}

export default Navbar