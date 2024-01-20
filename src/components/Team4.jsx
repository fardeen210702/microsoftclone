import React from 'react'
import img11 from '../images/img11.avif'
import img12 from '../images/img12.avif'
import { FaAngleRight } from "react-icons/fa6"


function Team4() {
  return (
    <div className='w-full flex flex-col p-3  sm:my-10'>
    <h1 className='text-2xl font-semibold my-16 text-center'> Explore Teams tips and tricks </h1>
   <div className='w-full flex flex-col gap-16 lg:flex-row   '>
       <div className='w-full space-y-3  sm:pb-10 border shadow-lg  '>
           <img src={img11} alt="" className='h-[160px] sm:h-[350px] w-full md:h-[400px] lg:object-cover'/>
           <h1 className='text-xl font-semibold  sm:px-5'>Keep chats playful with together emojis in Teams</h1>
           <p className='sm:px-5'> Celebrate a job well done with coworkers using new interactive together emojis that can high-five each other, clink glasses, and enjoy a slice of pizza. </p>
           <button className='flex items-center  gap-2 text-blue-400 font-semibold my-[10px] sm:px-5 '> Read the story<FaAngleRight/></button>


       </div>
       <div className='w-full space-y-3  border shadow-lg sm:pb-10'>
           <img src={img12} alt="" className='h-[160px] w-full sm:h-[350px] md:h-[400px] lg:object-cover'/>
           <h1 className='text-xl font-semibold sm:px-5'>Stay productive on the go with Teams Phone  </h1>
           <p className='sm:px-5'> Use transcriptions to capture and find important details from a meeting when you’re on the move and can’t take notes, or seamlessly transfer a call from your laptop to a mobile device with Teams Phone.</p>
           <button className='flex items-center  gap-2 text-blue-400 font-semibold my-[10px] sm:px-5'> Learn more <FaAngleRight/></button>


       </div>
       
   </div>
</div>
  )
}

export default Team4