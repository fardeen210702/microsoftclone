import React from 'react'
import Teamslanding from '../images/teamslanding.avif'

function Teams1() {
  return (
    <div className='w-full '>
        <div className="img sm:mb-10">
            <img src={Teamslanding} className='h-[300px] w-full object-cover sm:h-[470px]'  alt="" />
        </div>
        <div className='px-3 space-y-6'>
            <div className='space-y-3' >
                <h1 className='font-semibold text-3xl '>The new Microsoft Teams is now generally available  </h1>
                <p> Collaborate more effectively with a faster, simpler,
smarter, and more flexible Teams.</p>
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