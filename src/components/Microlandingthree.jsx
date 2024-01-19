import React from 'react'
import { FaAngleRight } from "react-icons/fa6"
import feature1 from '../images/feature1.avif'
import feature2 from '../images/feature2.avif'
import feature3 from '../images/feature3.avif'
import feature4 from '../images/feature4.avif'


function Microlandingthree() {
    return (
        <div className='micro3 w-full shadow-lg shadow-black mt-3 p-2  '>
            <div className="details flex flex-col items-center  w-full">
                <details className='w-full cursor-pointer '><summary className='list-none flex items-center justify-between sticky top-0 bg-white py-3 border-b-2 border-blue-950 font-bold  '>How it works <FaAngleRight /> </summary>
                    <div className="detail my-4">
                        <p className=' text-gray-500 font-semibold '> How it works</p>
                        <h1 className='font-bold text-3xl'>Help maximize your everyday</h1>
                        <details > <summary className='list-none flex items-center justify-between border-b py-4 border-gray-400'>Protect what's important<FaAngleRight /></summary></details>
                        <details> <summary className='list-none flex items-center justify-between border-b py-4 border-gray-400'>Elevate your content <FaAngleRight /></summary></details>
                        <details> <summary className='list-none flex items-center justify-between border-b py-4 border-gray-400'>Optimize your flow <FaAngleRight /></summary></details>
                    </div>
                </details>

                {/* second Detail */}
                <details className='w-full'><summary className='list-none   flex items-center justify-between sticky top-0 bg-white py-3 border-b-2 border-blue-950 font-bold'> Featured news<FaAngleRight /> </summary>
                    <div className="detail my-4  flex flex-col">
                        <div>

                            <p className=' text-gray-500 font-semibold '> Features news</p>
                            <h1 className='font-bold text-2xl'>Discover what’s happening with Microsoft 365</h1>

                        </div>

                        {/* frst feature */}
                        <div>

                            <div>

                                <div className="containers w-full my-4 border shadow-sm shadow-black rounded-2xl p-2 md:flex mf:flex flex-row-reverse justify-center ">

                                    <img src={feature1} alt="" className='w-full h-[120px] sm:h-[250px]  object-cover rounded-2xl md:h-[350px] md:w-[400px] ' />
                                    <div className='md:flex md:flex-col md:justify-around'>

                                    <p className='text-xs text-gray-500 mb-6'> Copilot</p>
                                    <h1 className='font-semibold text-2xl'>Introducing Copilot Pro</h1>
                                    <p className='text-gray-800 mb-5'>Add Copilot Pro to your M365 personal or family subscription and get powerful AI in your favorite apps. </p>
                                    <button className=' bg-gray-900 text-white  py-3 px-3 rounded-xl md:w-[170px]'>Read the blog </button>
                                    </div>


                                </div>
                                <div className='md:flex md:space-x-4'>


                                    <div className="containers w-full my-4 border shadow-sm shadow-black rounded-2xl p-2">
                                        <img src={feature2} alt="" className='w-full h-[120px] sm:h-[250px] object-cover rounded-2xl ' />
                                        <p className='text-xs text-gray-500 mb-6'> Microsoft Outlook</p>
                                        <h1 className='font-semibold text-2xl'>The new Outlook for Windows is here</h1>
                                        <p className='text-gray-800 mb-5'>Stay organized your way. Outlook email and calendar are now included for free with Windows.  </p>
                                        <button className=' bg-gray-900 text-white py-3 px-3 rounded-xl '>Learn more</button>


                                    </div>
                                    {/* thirdfeature */}
                                    <div className="containers w-full my-4 border shadow-sm shadow-black rounded-2xl p-2">
                                        <img src={feature3} alt="" className='w-full h-[120px] sm:h-[250px] object-cover rounded-2xl ' />
                                        <p className='text-xs text-gray-500 mb-6'> Clipchamp</p>
                                        <h1 className='font-semibold text-2xl'>Tell your story, your way</h1>
                                        <p className='text-gray-800 mb-5'>Seamlessly and easily create scroll-stopping videos using essential tools, intuitive controls, and customizable content with Clipchamp. </p>
                                        <button className=' bg-gray-900 text-white py-3 px-3 rounded-xl '>Learn More</button>


                                    </div>
                                    {/* fourth feature */}
                                    <div className="containers w-full my-4 border shadow-sm shadow-black rounded-2xl p-2">
                                        <img src={feature4} alt="" className='w-full h-[120px] sm:h-[250px] object-cover rounded-2xl ' />
                                        <p className='text-xs text-gray-500 mb-6'> Micorsoft Defender</p>
                                        <h1 className='font-semibold text-2xl'>Everyday online security and protection</h1>
                                        <p className='text-gray-800 mb-5'>Help protect your identities1, data, and devices from threats.Available exclusively with a Microsoft 365 Personal or Family subscription.  </p>
                                        <button className=' bg-gray-900 text-white py-3 px-3 rounded-xl '>Learn More</button>


                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </details>

                {/* Third  Detail */}




            </div>

        </div>
    )
}

export default Microlandingthree