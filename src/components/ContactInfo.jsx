import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { IoMdMailUnread } from "react-icons/io";

export default function ContactInfo() {
  return (
    <div>
        <h2 className='text-[#025a4e] font-acornBold text-5xl text-left'>Contact</h2>
        <p className='font-sfProRegular tracking-wider text-xl mt-3'>Don't hesitate to reach out through any of the options below—let's collaborate!</p>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-start mt-8 gap-6'>
            <div>
                <div className='flex items-center gap-2'>
                    <FaPhone size={26} style={{color:'#025a4e'}}/>
                    <p className='font-sfProRegular tracking-wider text-xl'>+639275551057</p>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <a href="mailto:letigio.njl@gmail.com">
                        <div className='flex items-center gap-2'>
                            <IoMdMailUnread size={26} style={{color:'#025a4e'}}/>
                            <p className='font-sfProRegular tracking-wider text-xl'>letigio.njl@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
