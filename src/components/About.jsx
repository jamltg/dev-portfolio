import React from 'react'
import Blob from './Blob'
import AboutInfo from './AboutInfo'
import TechStack from './TechStack'

export default function About() {
  return (
    <div className='bg-[#EDE7DE]'>
        <div className='max-w-7xl px-10 mx-auto'>
            <Blob/>
            <AboutInfo/>
            <TechStack/>
        </div>
    </div>
  )
}
