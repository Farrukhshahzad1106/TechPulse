import React, { useContext, useEffect, useState } from 'react'
import { Theme } from '../Context/ThemeContext'
import { NavLink } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md"; // To be used when theme is dark (darkMode is true)
import { MdOutlineDarkMode } from "react-icons/md"; //To be used when theme is light (darkMode is false)

const Navbar = () => {
    const {darkMode, toggleMode} = useContext(Theme);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchText, setSearchText] = useState("")
    console.log("Navbar rendered");

    const searchHandler = (e) => {
        console.log("Search");
    }
    const toggleSearchBar = () => {
        setShowSearchBar(prev => !prev);
    }
    // useEffect(() => {
    //     localStorage.setItem('mode' , `${darkMode}`);
    // },[darkMode]);
    

  return (
    <nav className='flex justify-between min-w-full bg-slate-200'>
        <div className='flex ml-5'>
            <h2 className='font-bold text-2xl ml-7 mt-3 mb-5 w-32'> TechPulse </h2>
            {
                showSearchBar ? (
                    <div className='flex w-56'>
                        <input 
                            type='text'
                            placeholder='Search...'
                            value={searchText}
                            onChange={searchHandler}
                            className='w-40 h-6 mt-5 mb-5 mr-3 rounded-md border-black'
                        />
                        <LuSearch 
                            className='font-bold mt-6 mb-5'
                            onClick={searchHandler}
                        />
                    </div>
                )
                : (
                    <LuSearch className='font-bold  mt-6 mb-5' onClick={toggleSearchBar}/>
                )
            }
        </div>
        <div className='flex mr-5' >
            <NavLink to='/ourStory'>
                <p className='w-24 mt-5 text-center'>Our Story</p>
            </NavLink>
            <NavLink>
                <p className='w-20 mt-5 text-center'>Blogs</p>
            </NavLink>
            <NavLink to='/contact-us'>
                <p className='w-24 mt-5 text-center'>Contact Us</p>
            </NavLink>
            <NavLink to='sign-in'>
                <p className='w-24 mt-5 text-center'>Sign In</p>
            </NavLink>
            <NavLink to='write'>
                <p className='w-16 mt-5 text-center'>Write</p>
            </NavLink>
            <NavLink>
                {darkMode ? <MdDarkMode className='w-12 mt-6 text-center' onClick={toggleMode}/> : <MdOutlineDarkMode className='w-12 mt-6 text-center' onClick={toggleMode}/>}
            </NavLink>
            <NavLink>
                <CgProfile className='w-16 mt-6 text-center'/>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar;

// On Clicking on the Searchicon the searchBar is appearing and the Navbarr component is getting rendered, find a way such that it doesn't render the entire component (maybe look into implementing useRef).
// I want to close the searchBar on clicking on anywhere on the viewport, impplement it