import React, { useContext } from 'react'
import { Theme } from '../Context/ThemeContext'
import { NavLink } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md"; // To be used when theme is dark (darkMode is true)
import { MdOutlineDarkMode } from "react-icons/md"; //To be used when theme is light (darkMode is false)

const Navbar = () => {
    const {darkMode, toggleMode} = useContext(Theme);
    console.log("Navbar rendered");

  return (
    <div className='flex justify-between min-w-full bg-slate-200'>
        <div className='flex ml-5'>
            <h2 className='font-bold text-2xl ml-7 mt-3 mb-5 w-24'> TechPulse </h2>
            <NavLink>
                <LuSearch className='font-bold ml-8 mt-6 mb-5'/>
            </NavLink>
        </div>
        <div className='flex mr-5' >
            <NavLink>
                <p className='w-20 mt-5 text-center'>Home</p>
            </NavLink>
            <NavLink>
                <p className='w-24 mt-5 text-center'>Our Story</p>
            </NavLink>
            <NavLink>
                <p className='w-20 mt-5 text-center'>Blogs</p>
            </NavLink>
            <NavLink>
                <p className='w-24 mt-5 text-center'>Contact Us</p>
            </NavLink>
            <NavLink>
                <p className='w-24 mt-5 text-center'>Sign In</p>
            </NavLink>
            <NavLink>
                <p className='w-16 mt-5 text-center'>Write</p>
            </NavLink>
            <NavLink>
                {darkMode ? <MdOutlineDarkMode className='w-12 mt-6 text-center' onClick={toggleMode}/> : <MdDarkMode className='w-12 mt-6 text-center' onClick={toggleMode}/>}
            </NavLink>
            <NavLink>
                <CgProfile className='w-16 mt-6 text-center'/>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar;