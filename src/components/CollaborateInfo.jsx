import React from 'react'
import ResumePDF from '../assets/files/Resume-Full-Stack-Developer.pdf';

export default function CollaborateInfo() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'Resume-Full-Stack-Developer';
        link.href = ResumePDF;
        link.click();
        };

  return (
    <div>
        <div className='mb-6'>
            <p className='text-[#4c6763] font-acornBold text-3xl text-center'>About Me</p>
        </div>
        <div>
            <p className='text-[#4c6763] font-sfProRegular text-center md:text-justify'>The cusp of creativity and technology has always been where I thrive. With a strong foundation from my Computer Science degree and experience in tech, I specialize in building user-friendly and efficient applications. Over the years, I've honed my skills in web design, dynamic application development, server-side programming, and database management.
            </p>
            <p className='text-[#4c6763] font-sfProRegular text-center md:text-justify mt-3'>Beyond the screen, I find balance and energy through swimming and hitting the gym. These pastimes not only keep me active but also fuel the focus and discipline I bring to my work.</p>
        </div>
        <div className='mt-3 flex justify-center'>
            <div>
                <button onClick={handleDownload} className='bg-none text-[#025a4e] border-2 border-[#025a4e] tracking-wider font-acornRegular text-lg px-4 py-2 mt-4 rounded-lg transition-colors duration-300 hover:bg-[#025a4e] hover:text-[#fff]'>Download my Resume</button>
            </div>
        </div>
    </div>
  )
}
