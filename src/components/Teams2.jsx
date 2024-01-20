import React from 'react'
import img5 from '../images/img5.avif'
import img6 from '../images/img6.avif'
import img7 from '../images/img7.avif'
import img8 from '../images/img8.avif'
import { FaAngleRight } from "react-icons/fa6"


function Teams2() {
  return (
    <div className='flex flex-col p-2 mt-6 space-y-9 sm:mt-16'>
        <div className='text-center '>
            <h1 className='text-2xl font-semibold'>More is possible with Teams </h1>
            <p>Simplify collaboration with Teams to level up your work, connect with others for greater impact, and scale your business to achieve more.</p>
        </div>
        <div className='flex flex-col space-y-10 sm:space-y-0 gap-6 sm:flex-row sm:flex-wrap  md:justify-center'>
            <div className="detail1 h-[250px]  sm:w-1/2 w-full sm:max-w-[300px] md:max-w-[360px] md:h-[300px] border shadow">
                <img src={img5} className='w-full ' alt="" />
                <button className='underline flex items-center my-7 text-blue-400 font-semibold mx-3 '> Enterprise <FaAngleRight/> </button>

            </div>
            <div className="detail1 h-[250px]  sm:w-1/2 w-full sm:max-w-[300px] md:max-w-[360px] md:h-[300px]  border shadow">
                <img src={img6} className='w-full ' alt="" />
                <button className='underline flex items-center my-7 text-blue-400 font-semibold mx-3 '> Business <FaAngleRight/> </button>

            </div>
            <div className="detail1 h-[250px]  sm:w-1/2 w-full sm:max-w-[300px] md:max-w-[360px] md:h-[300px] border shadow">
                <img src={img7} className='w-full ' alt="" />
                <button className='underline flex items-center my-7 text-blue-400 font-semibold mx-3 '> Home <FaAngleRight/> </button>

            </div>
            <div className="detail1 h-[250px]  sm:w-1/2 w-full sm:max-w-[300px] md:max-w-[360px] md:h-[300px] border shadow">
                <img src={img8} className='w-full ' alt="" />
                <button className='underline flex items-center my-7 text-blue-400 font-semibold mx-3 '> Education <FaAngleRight/> </button>

            </div>

        </div>
        

    </div>
  )
}

export default Teams2