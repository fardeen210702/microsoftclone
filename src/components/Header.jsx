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
            <div className="midscreenheader hidden md:block">
                <div className="leftnav">
                    <div className="logo">
                        <img src={Microsoftimg} alt="" />

                    </div>
                    <div className="links ">
                        <Link to='/microsoft365'> MicroSoft365</Link>
                        <Link to='/teams'> Teams</Link>
                        <Link to='/copilot'> Copilot</Link>
                        <Link to='/windows'> Windows</Link>
                        <Link to='/surface'> Surface</Link>
                        <Link to='/xbox'> Xbox</Link>
                        <Link to='/support'> Support</Link>
                    </div>
                </div>
                <div className="rightnav">
                    <h1>All Microsoft</h1>
                    <div className="searchanduser">
                        <p>serachicon</p>
                        <p>carticon</p>
                        <p>usericon</p>
                    </div>
                </div>

            </div>

            {/* Mobile Navbar  */}
            <div className="mobileheader md:hidden flex justify-between items-center py-4 px-2 ">
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
                
                
            </div>
            <div className={nav ? ' absolute left-0 w-full bg-white flex flex-col space-y-2 text-lg transition-all ease-in-out  delay-75 border border-gray-200 md:hidden ' : "links fixed flex flex-col -left-28 bg-white " }  onClick={handlenavchange}>
                        <Link  className='border-b-2 py-2 px-2  'to='/microsoft365'> MicroSoft365</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/teams'> Teams</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/copilot'> Copilot</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/windows'> Windows</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/surface'> Surface</Link>
                        <Link className='border-b-2 py-2 px-2 my-2' to='/xbox'> Xbox</Link>
                        <Link  className='border-b-2 py-2 px-2 my-2'to='/support'> Support</Link>
                    </div>
        </div>
    )
}

export default Header