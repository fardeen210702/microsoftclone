import React from 'react'
import img22 from '../images/img22.jpg'
import IMG222 from '../images/IMG222.jpg'
import { FaChevronRight } from "react-icons/fa";


function GameLandingPage() {
  return (
    <div className='w-full lg:relative lg:p-2'>
        <div className="one w-full
         h-[20%]">
            <img src={IMG222} className='w-full h-full lg:hidden' alt="" />
            <img src={img22} className='hidden lg:flex w-full h-full ' alt="" />
        </div>
        <div className="two py-10 px-5 w-full flex flex-col  items-start gap-4 lg:absolute lg:top-[25%] lg:right-10 lg:w-1/3 ">
            <h1 className='font-bold text-2xl xl:text-4xl'>Xbox Series S – Starter Bundle</h1>
            <p>Get an Xbox Series S and 100s of games with 3 months of Game Pass Ultimate</p>
            <button className=" py-2 px-5 bg-[#9bf00b] font-extrabold text-green-950 flex items-center gap-4 sm:text-lg  sm:p-2">LEARN MORE<FaChevronRight/> </button>


        </div>
        
    </div>
  )
}

export default GameLandingPage