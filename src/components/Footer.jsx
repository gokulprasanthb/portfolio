import React from 'react'
import myLogo from '../assets/GPlogoo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const year = new Date();
    const config = {
        github:'https://github.com/gokulprasanthb',
        linkedin:'https://www.linkedin.com/in/gokul-prasanth-635067276/',
        twitter:'',
        instagram:'',
    }
  return (
    <footer id='footer' className='flex flex-col pt-28 space-y-5'>
        <div className='flex justify-center'>
            <a href="/"> <img className='w-12 h-10' src={myLogo} alt="" /></a>
        </div>
        
        <div className='text-center'>
            <h3 className='font-semibold text-2xl text-indigo-950'>Follow On</h3>
        </div>

        <div className='flex space-x-6 pt-2 justify-center text-gray-500'>
                <a target='_blank' rel="noopener noreferrer" href={config.github}><FaGithub className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a target='_blank' rel="noopener noreferrer" href={config.linkedin}><FaLinkedin className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a  href={config.twitter}><FaSquareXTwitter className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
                <a  href={config.instagram}><FaInstagramSquare className='w-6 h-6 hover:text-indigo-700 duration-200'/></a>
        </div>

        <div className='flex justify-center'>
            <p className='text-gray-700 py-4'>Copyright &copy; {year.getFullYear()} | Gokul Prasanth</p>
        </div>
    </footer> 
  )
}

export default Footer