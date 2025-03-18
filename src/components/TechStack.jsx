import React from 'react'

export default function TechStack() {
  return (
    <div id='about' className='mt-4 py-10'>
        <h2 className='text-[#4c6763] font-sfProRegular text-base tracking-wider text-center font-bold'>Tech Stack</h2>
        <div className='flex flex-wrap gap-4 mt-6 justify-center'>
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <img className="h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        </div>
    </div>
  )
}
