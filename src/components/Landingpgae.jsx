import React from 'react'
import landingimg from '../images/landingimg.avif'
function Landingpgae() {
  return (
    <div className='landingpgae border border-gray-400 shadow-md '>
        <div className="img">
            <img src={landingimg} alt="" />

        </div>
        <div className=" p-6 ">
            <h1 className='text-2xl font-bold my-3 '>  Surface Pro 9 </h1>
            <p>Tablet versatility and laptop power — all in one ultra-portable device</p>
            <button className='my-6 border p-2 bg-blue-500 text-white rounded '> Learn More</button>

        </div>
    </div>
  )
}

export default Landingpgae