import React from 'react'
import myLogo from '../assets/gplogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const year = new Date();
  return (
    <footer className='flex flex-col pt-28 space-y-5'>
        <div className='flex justify-center'>
            <img className='w-14 h-14' src={myLogo} alt="" />
        </div>
        
        <div className='text-center'>
            <h3 className='font-semibold text-2xl text-indigo-950'>Follow On</h3>
        </div>

        <div className='flex space-x-6 pt-2 justify-center text-gray-500'>
                <a href="/"><FaLinkedin className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a href="/"><FaSquareXTwitter className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a href="/"><FaFacebook className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a href="/"><FaInstagramSquare className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
        </div>

        <div className='flex justify-center'>
            <p className='text-gray-700 py-4'>Copyright &copy; {year.getFullYear()} | All rights reserved</p>
        </div>
    </footer> 
  )
}

export default Footer