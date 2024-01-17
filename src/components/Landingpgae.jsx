import React from 'react'
import landingimg from '../images/landingimg.avif'
function Landingpgae() {
  return (
    <div className='landingpgae shadow-md xl:flex items-center  xl:bg-gray-100 px-2'>
        <div className="img">
            <img src={landingimg} className='w-full lg:h-[500px] object-cover' alt="" />

        </div>
        <div className=" p-6  ">
            <h1 className='text-2xl font-semibold my-3  xl:text-3xl'>  Surface Pro 9 </h1>
            <p>Tablet versatility and laptop power — all in one ultra-portable device</p>
            <button className='my-6 border p-2 bg-blue-500 text-white rounded '> Learn More</button>

        </div>
    </div>
  )
}

export default Landingpgae