import React from 'react'
import { FaChevronRight } from "react-icons/fa";


function Landingpageinnercont({item}) {
    const {img, title,p,btn,IMG} = item
  return (
    <div className='h-full w-full flex-shrink-0 lg:relative lg:h-[490px] overflow-hidden'>
        <div className='img w-full h-full '>
            <img src={img} className='w-full h-full lg:hidden' alt="" />
            <img src={IMG} className='hidden lg:flex w-full' alt="" />
        </div>
        <div className="details flex flex-col gap-6 p-4 items-start lg:absolute lg:top-[20%] lg:right-20 lg:w-1/3">
            <h1 className='text-3xl font-bold lg:text-5xl'>{title}</h1>
            <p className='lg:text-2xl'>{p}</p>
            <button className='flex items-center gap-2 bg-blue-500 text-white p-2 rounded-sm'>{btn} <FaChevronRight/></button>
        </div>

    </div>
  )
}

export default Landingpageinnercont