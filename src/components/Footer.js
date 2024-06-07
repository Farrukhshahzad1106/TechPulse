import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    const [emailId, setEmailId] = useState();
    const [agree, setAgree] = useState(false);
    const [formError, setFormError] = useState("");

    const handleAgree = (e) => {
        setAgree(e.target.checked)
        console.log(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(agree) {
            //Make a call to backend and store the email Id in the subscribers list and set a localStorage with key 'subscribed' to 'true'
        }
        setFormError("Please Agree to the Checkbox to proceed");
    }
  return (
    <footer className='bg-slate-300'>
        <div className='m-7 bg-red-300'>
            <div>
                <p className='font-bold text-2xl pl-10 pt-5'>TechPulse</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <NavLink>
                        <p className='ml-16 w-32 h-8 pb-2 pt-2 text-sm'>Home</p>
                    </NavLink>
                    <NavLink>
                        <p className='ml-16 w-32 h-8 pb-2 pt-2 text-sm'>Our Story</p>
                    </NavLink>
                    <NavLink>
                        <p className='ml-16 w-32 h-8 pb-2 pt-2 text-sm'>Blogs</p>
                    </NavLink>
                    <NavLink>
                        <p className='ml-16 w-32 h-8 pb-2 pt-2 text-sm'>Contact Us</p>
                    </NavLink>
                </div>
                <div className=' w-120 mr-20 mt-8'>
                    <div className='mb-7 mr-10 w-120'>
                        <form onSubmit={handleSubmit} className='mb-7 mr-5 w-120'>
                            <div className='mb-2 w-24 flex justify-evenly'>
                                <input 
                                    name='emailId' 
                                    type='email' 
                                    value={emailId} 
                                    onChange={(e) => setEmailId(e.target.value)}
                                    className='rounder-full pl-4 pr-4 mr-5'
                                />
                                <button className='rounded-md min-w-24 bg-red-400 hover:bg-red-600'>
                                    Subscribe
                                </button>
                            </div>
                            <input 
                                type='checkbox'
                                id='checkbox'
                                checked={agree}
                                onChange={handleAgree}
                                className='pt-2'
                            />
                            <label htmlFor='checkbox' className='text-xs'>
                                By checking the box you agree to Subscribe to the newsletter
                            </label>
                            {
                        formError && <p className='text-xs w-64 ml-3 text-red-700'>
                                        {formError}
                                    </p>
                    }
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center h-7 mt-5 bg-red-300'>
                    <FaFacebookSquare className='h-7 mr-2'/>
                    <FaSquareXTwitter className='h-7 ml-2'/>
            </div>
            <hr className='bg-slate-100 ml-5 mr-5'/>
            <div>
                <div>
                    <div className='flex justify-center'>
                        <p className='ml-5 mr-2 text-xs'> - Privacy Policy </p>
                        <p className='ml-2 mr-3 text-xs'> - Website Terms </p>
                    </div>
                    <div className='flex justify-center'>
                        <span><MdCopyright className='h-4 mr-'/></span>
                        <p className='text-xs'> 2024 &nbsp; TechPulse, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer