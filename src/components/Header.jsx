import React, { useState } from 'react'
import Microsoftimg from '../images/microimg.png'
import { Link } from 'react-router-dom'
import { IoMenuOutline ,IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import { PiUserCircleMinusLight } from "react-icons/pi"

function Header() {
    const [nav, setNav] = useState(false)
    function handlenavchange(){
        setNav(!nav)
    }
    console.log(nav);
    return (
        <div className='header '>
            <div className="midscreenheader hidden md:flex  md:justify-between items-center px-2 py-4 lg:px-11 xl:px-20 lg:py-4">
                <div className="leftnav flex space-x-3 lg:space-x-10 items-center">
                    <div className="logo">
                        <Link to='/'> 
                        <img className='w-[120px]'src={Microsoftimg} alt="" />
                        </Link>

                    </div>
                    <div className="links space-x-2 text-xs md:text-sm md:space-x-2  lg:text-sm xl:space-x-3 ">
                        <Link  className='hover:border-b border-black'to='/microsoft365'> Microsoft 365</Link>
                        <Link className='hover:border-b border-black' to='/teams'> Teams</Link>
                        {/* <Link className='hover:border-b border-black' to='/copilot'> Copilot</Link> */}
                        {/* <Link className='hover:border-b border-black' to='/windows'> Windows</Link> */}
                        {/* <Link className='hover:border-b border-black' to='/surface'> Surface</Link> */}
                        <Link className='hover:border-b border-black' to='/xbox'> Xbox</Link>
                        {/* <Link className='hover:border-b border-black' to='/support'> Support</Link> */}
                    </div>
                </div>
                <div className="rightnav flex space-x-3 items-center">
                    <h1 className='text-sm'>All Microsoft</h1>
                    <div className="searchanduser flex space-x-2  xl:space-x-5">
                        <p><VscSearch className='size-5' /></p>
                        <p><IoCartOutline className='size-6' /></p>
                        <p><PiUserCircleMinusLight className='size-6' /></p>
                    </div>
                </div>

            </div>

            {/* Mobile Navbar  */}
            <div className="mobileheader md:hidden flex justify-between items-center py-4 px-2">
                <div className="navigation flex space-x-3 ">
                    <p onClick={handlenavchange}>{
                        nav ? <RxCross1 className='size-5' /> : <IoMenuOutline className='size-5'  />
                    }
                    </p>
                    <p >
                    <VscSearch  className='size-4' />
                    </p>

                </div>
                <div className="logo" >
                    <Link to='/'>
                    <img src={Microsoftimg} className='w-[100px]' alt="" />
                    </Link>
                </div>
                <div className="cartanduser flex space-x-3">
                    <IoCartOutline className='size-6' />
                     <PiUserCircleMinusLight className='size-6' />
                </div>
                
                
            
            <div className={nav ? ' absolute left-0 top-14 z-20 w-full h-full bg-white flex flex-col space-y-2 text-lg transition-all ease-in-out  delay-75 border border-gray-200 md:hidden ' : "links fixed flex flex-col -left-28 bg-white " }  onClick={handlenavchange}>
                        <Link  className='border-b-2 py-2 px-2  'to='/microsoft365'> MicroSoft365</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/teams'> Teams</Link>
                        {/* <Link className='border-b-2 py-2 px-2 my-2' to='/copilot'> Copilot</Link> */}
                        {/* <Link className='border-b-2 py-2 px-2 my-2' to='/windows'> Windows</Link> */}
                        {/* <Link className='border-b-2 py-2 px-2 my-2' to='/surface'> Surface</Link> */}
                        <Link className='border-b-2 py-2 px-2 my-2' to='/xbox'> Xbox</Link>
                        {/* <Link  className='border-b-2 py-2 px-2 my-2'to='/support'> Support</Link> */}
                    </div>
            </div>

        </div>
    )
}

export default Header