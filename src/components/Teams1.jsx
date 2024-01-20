import React from 'react'
import Teamslanding from '../images/teamslanding.avif'

function Teams1() {
  return (
    <div className='w-full lg:bg-gray-100 '>
        <div className="img sm:mb-10 xl:flex xl:justify-end  w-full ">
            <img src={Teamslanding} className='h-[300px] w-full object-cover sm:h-[470px] xl:h-[600px] xl:w-[80%] '  alt="" />
        </div>
        <div className='px-3 space-y-6 xl:absolute xl:top-[25%] xl:left-[2%] xl:w-[45%]'>
            <div className='space-y-3' >
                <h1 className='font-semibold text-3xl xl:text-4xl '>The new Microsoft Teams is now generally available  </h1>
                <p> Collaborate more effectively with a faster, simpler,
                    smarter, and more flexible Teams.
                </p>
            </div>
            <div className="btns space-y-2 sm:flex gap-7 sm:items-end  ">
                <button className='text-white rounded-sm bg-[#5d5bd4] p-2.5 font-semibold'>Download Now</button>
                <button className='border-2 rounded-sm border-indigo-500 text-[#5d5bd4]  p-2  font-semibold'>Learn about the new Teams</button>
            </div>
        </div>
        

    </div>
  )
}

export default Teams1