import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import 'react-social-icons/linkedin'

export default function Footer() {
  return (
    <div className='bg-[#025a4e] w-full h-32'>
      <div className='max-w-7xl h-full mx-auto flex items-center px-10 justify-between'>
        <p className='font-acornRegular text-white tracking-wider'>© 2025 Jhame Letigio • Philippines</p>
        <div className='flex justify-center items-center gap-4'>
          <a href="https://www.linkedin.com/in/jhame-letigio" title="LinkedIn" target="_blank" rel="noreferrer">
            <BsLinkedin size={24} style={{color:"#EDE7DE"}}/>
          </a>
          <a href="https://github.com/jamltg" title="GitHub" target="_blank" rel="noreferrer">
            <FaGithub size={24} style={{color:"#EDE7DE"}}/>
          </a>
        </div>
      </div>
    </div>
  )
}


