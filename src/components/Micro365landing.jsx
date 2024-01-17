import React from 'react'
import { FaAngleRight } from "react-icons/fa6"


function Micro365landing() {
  return (
    <div className='flex w-[250px] space-x-2 mb-1  overflow-x-scroll shadow-sm  bg-white rounded  '>
        <button className='min-w-40 flex justify-between items-center px-2 py-3 border-r-2 border-gray-400 hover:border-b-2 hover:border-blue-950'> For home <FaAngleRight/></button>
        <button className='min-w-40 flex justify-between items-center px-2 py-3 border-r-2 border-gray-400 hover:border-b-2 hover:border-blue-950'> For Business <FaAngleRight/></button>
        <button className='min-w-40 flex justify-between items-center px-2 py-3 border-r-2 border-gray-400 hover:border-b-2 hover:border-blue-950'> For Enterprise <FaAngleRight/></button>
        <button className='min-w-40 flex justify-between items-center px-2 py-3 border-r-2 border-gray-400 hover:border-b-2 hover:border-blue-950'> For Education <FaAngleRight/></button>
        
    </div>
  )
}

export default Micro365landing