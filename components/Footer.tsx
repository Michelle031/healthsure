import React from 'react'
import Logo from './Logo'
import { FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { MdLocationOn, MdEmail } from "react-icons/md"


function Footer() {
    return (
        <div className='flex flex-col items-center text-white bg-green-600 px-6 lg:px-14 py-5 lg:py-10 pb-[70px] text-sm'>
            <div className='grid grid-cols-1 md:grid-cols-5  gap-8 mb-10'>
                <div className='space-y-3 md:col-span-2'>
                    <div className='p-3 bg-yellow-400 w-fit rounded-md'><Logo /></div>
                    <p className='text-sm'>Healthsure is a company that focuses on insurance <br /> that always tries to provide a sense of security to users</p>
                    <div className='flex space-x-3'>
                        <div><FaTwitter className='social' /></div>
                        <div><FaYoutube className='social' /></div>
                        <div><FaLinkedinIn className='social' /></div>
                        <div><FaInstagram className='social' /></div>
                    </div>
                </div>
                <div className='space'>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Team</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
                <div className='space'>
                    <h3>Health Plans</h3>
                    <p>Individual</p>
                    <p>Family</p>
                    <p>Business</p>
                </div>
                <div className='space'>
                    <div className='space'>
                        <h3>Contact Us</h3>
                        <p><MdEmail className='h-4 w-5 inline' /> hello@healthsure.com  </p>
                    </div>
                    <div className='space'>
                        <h3>Location</h3>
                        <p><MdLocationOn className='h-4 w-5 inline' /> Lagos, Nigeria </p>
                    </div>
                </div>
            </div>
            <h3 className='text-xs'>&copy; 2022 Copyright by Healthsure. All rights reserved</h3>
        </div>
    )
}

export default Footer