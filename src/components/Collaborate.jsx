import React from 'react'
import CollaborateInfo from './CollaborateInfo'
import CollaborateImage from './CollaborateImage'

export default function Collaborate() {
  return (
    <div className='bg-[#EDE7DE] py-10'>
        <div className='max-w-7xl px-20 mx-auto flex flex-col items-center gap-10 lg:px-10 lg:flex-row lg:gap-2'>
            <div className='flex-[2]'>
                <CollaborateInfo/>
            </div>
            <div className='relative flex-[1]'>
                <CollaborateImage/>
            </div>
        </div>
    </div>
  )
}
