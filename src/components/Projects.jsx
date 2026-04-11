import React from 'react'
import ProjectNDDU from './ProjectNDDU'
import ProjectArch from './ProjectArch'
import ProjectApple from './ProjectApple'
import ProjectCryptoverse from './ProjectCryptoverse'
import ProjectSoundlytics from './ProjectSoundlytics'

export default function Projects() {
  return (
    <div id='projects' className='bg-[#EDE7DE] flex flex-col justify-center items-center mx-auto pt-16 px-10 pb-20 gap-4'>
      <h1 className='font-acornBold text-[#025a4e] text-4xl mb-6 lg:text-5xl'>My Projects</h1>
      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <ProjectNDDU/>
        <ProjectSoundlytics/>
        <ProjectApple/>
        <ProjectCryptoverse/>
        <ProjectArch/>
      </div>
    </div>
  )
}
