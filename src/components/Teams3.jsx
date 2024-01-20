import React from 'react'
import img9 from '../images/img9.avif'
import img10 from '../images/img10.avif'
import { FaAngleRight } from "react-icons/fa6"

function Teams3() {
  return (
    <div className='w-full flex flex-col p-3  '>
         <h1 className='text-2xl font-semibold my-16 text-center'> Explore the latest Teams news </h1>
        <div className='w-full flex flex-col gap-16 lg:flex lg:flex-row  '>
            <div className='w-full space-y-3 flex flex-col items-center lg:w-1/2'>
                <img src={img9} alt="" className='h-[160px] sm:h-[350px] md:h-[400px] w-full sm:mb-7 lg:object-cover'/>
                <h1 className='text-xl font-semibold sm:text-center '>Get ready for the future of work with Microsoft Teams</h1>
                <p className='sm:text-center'>  As the workplace evolves, empower your organization with next-generation AI capabilities in Teams—the smart place to work. Get more done, connect with colleagues, and use powerful AI to transform your work. </p>
                <button className='flex items-center  gap-2 text-blue-400 font-semibold my-[10px]'> Watch now <FaAngleRight/></button>


            </div>
            <div className='flex flex-col items-center lg:w-1/2'>
                <img src={img10} alt="" className='h-[160px] sm:h-[300px] sm:object-contain w-full sm:mb-7 lg:h-[400px] lg:object-cover'/>
                <h1 className='text-xl font-semibold sm:text-center '>Introducing Microsoft Mesh Preview </h1>
                <p className='sm:text-center'>  Connect your distributed workforce in new ways with Microsoft Mesh, an immersive 3D experience for work.1 Enable meetings and events that feel more like face-to-face interactions, helping you elevate employee engagement, strengthen teamwork, and advance your business.</p>
                <button className='flex items-center  gap-2 text-blue-400 font-semibold my-[10px]'> Learn more <FaAngleRight/></button>


            </div>
            
        </div>
    </div>
  )
}

export default Teams3