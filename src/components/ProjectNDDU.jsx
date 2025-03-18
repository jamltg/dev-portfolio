import React from 'react'
import { BsGlobe } from "react-icons/bs";

export default function ProjectNDDU() {
  return (
    <div className='bg-[#BDDFF9] max-w-[600px] flex flex-col justify-center items-center p-6 rounded-2xl'>
      <div className='w-full text-right text-base pb-2'>
        <p className='font-acornBold text-sm tracking-wider text-[#364442]'>OFFICIAL SCHOOL WEBSITE</p>
        <p className='font-acornSemiBold mt-2 text-2xl text-[#364442]'>NDDU</p>
      </div>
      <figure class="relative z-1 max-w-full w-3xl h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] rounded-b-lg">
        <div class="relative flex items-center max-w-3xl bg-gray-800 rounded-t-lg py-2 px-24">
          <div class="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
            <span class="size-2 bg-gray-600 rounded-full"></span>
            <span class="size-2 bg-gray-600 rounded-full"></span>
            <span class="size-2 bg-gray-600 rounded-full"></span>
          </div>
        <div class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]">www.nddu.edu.ph</div>
        </div>
        <div class="bg-gray-800 rounded-b-lg">
          <img class="rounded-b-lg" src='/images/nddu.png' alt="image"/>
        </div>
      </figure>
      <div className='mt-6'>
        <a href="https://www.nddu.edu.ph" title="NDDU Website" target="_blank" rel="noreferrer" className='font-acornRegular text-[#fff] text-lg mt-4'>
          <BsGlobe size={24} style={{color:"#364442"}}/>
        </a>
      </div>
    </div>
  )
}
