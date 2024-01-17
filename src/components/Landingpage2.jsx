import React from 'react'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.webp'
import { FaAngleRight } from "react-icons/fa6"

function Landingpage2() {
    return (
        <div className=' sm:flex sm:flex-wrap'>
            <div className="img1 sm:w-1/2 xl:w-1/4">
                <div className="details p-4 ">
                <img src={img1} className = 'w-full' alt="" />

                    <h1 className='text-2xl font-semibold my-3 '>Surface Laptop 5 </h1>
                    <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11. </p>
                    <button className='my-4 flex items-center space-x-2 text-blue-500'> Learn More <FaAngleRight /></button>
                </div>
            </div>
            <div className="img1 sm:w-1/2 xl:w-1/4">
                <div className="details p-4 ">
                <img src={img2} className = 'w-full' alt="" />

                    <h1 className='text-2xl font-semibold my-3 '>Surface Laptop Studio</h1>
                    <p>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                    <button className='my-4 flex items-center  text-blue-500'> Learn More <FaAngleRight /></button>
                </div>

            </div>
            <div className="img1 sm:w-1/2 xl:w-1/4">

                <div className="details p-4 ">
                    <img src={img3} className = 'w-full' alt="" />
                    <h1 className='text-2xl font-semibold my-3 '>Xbox Series X</h1>
                    <p>The fastest, most powerful Xbox ever.</p>
                    <button className='my-4 flex items-center space-x-2 text-blue-500'> Learn More <FaAngleRight /></button>
                </div>

            </div>
           

        </div>
    )
}

export default Landingpage2