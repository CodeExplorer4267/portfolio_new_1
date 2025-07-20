import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='bg-transparent fixed top-0 left-0 w-full'>
       <div className='text-white flex justify-evenly items-center p-5'>
           <div className='text-1xl font-bold cursor-pointer'>
               <span style={{ color: 'rgb(130, 4, 255)' }}>&lt;</span>
               <span>Rupam</span>
               <span style={{ color: 'rgb(130, 4, 255)' }}>/</span>
               <span>Bhadra</span>
               <span style={{ color: 'rgb(130, 4, 255)' }}>&gt;</span>
           </div>
           <div className='flex gap-6 text-1xl font-bold'>
               <p className='nav-contents'>About</p>
               <p className='nav-contents'>Skills</p>
               <p className='nav-contents'>Experience</p>
               <p className='nav-contents'>Project</p>
               <p className='nav-contents'>Education</p>
           </div>
           <div className='flex gap-5'>
               <FaGithub className='text-2xl cursor-pointer hover:text-blue-800' />
               <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-800' />
           </div>
       </div>
    </nav>
  )
}

export default Navbar
