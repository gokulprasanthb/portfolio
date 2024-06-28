import React from 'react'
import myImage from '../assets/myImage.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='flex flex-row justify-center md:pl-52  md:py-20 md:pt-48 max-md:flex-col max-md:px-3 max-md:pt-28 max-md:pl-10 max-md:space-y-7'>
        <div className='w-1/2 mt-2 text-5xl space-y-5 text-indigo-950 max-md:w-full max-md:text-3xl max-md:text-center max-md:mt-16'>
            <h1>Hi, </h1>
            <h1>I'm <strong>Gokul Prasanth </strong></h1>
            <h3 className='text-3xl text-indigo-500'>A Full stack Developer</h3>
            <div className='text-xl font-medium md:space-x-6 pt-2 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-8'>
                <button className='bg-indigo-950 text-white w-36 h-14 hover:bg-white hover:text-indigo-950 hover:border-2 hover:border-indigo-950 rounded-sm'>Download CV</button>
                <button className='border-2 border-indigo-950 w-36 h-14 hover:bg-indigo-950 hover:text-white rounded-sm '>Connect</button>
            </div>
            <div className='flex space-x-4 pt-2 max-md:hidden'>
                <a href="/"><FaLinkedin className='w-6 h-6 hover:text-indigo-500'/></a>
                <a href="/"><FaSquareXTwitter className='w-6 h-6 hover:text-indigo-500'/></a>
                <a href="/"><FaFacebook className='w-6 h-6 hover:text-indigo-500'/></a>
                <a href="/"><FaInstagramSquare className='w-6 h-6 hover:text-indigo-500'/></a>
            </div>
        </div>

        <div className='w-1/2 max-md:pl-4 md:pl-28 max-md:w-full'>
            <img src={myImage} alt="" className='h-96 rounded-lg max-md:pl-6 max-md:pt-10 max-md:rounded-lg' />
        </div>
    </section>
  )
}

export default Hero