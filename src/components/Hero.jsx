import React from 'react'
import image from '../assets/myImage.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='flex flex-row justify-center pl-40 px-28 pt-32  max-md:flex-col max-md:px-5 max-md:pt-5'>
        <div className='w-1/2 mt-2 text-5xl space-y-5 text-indigo-900 max-md:w-full max-md:text-3xl max-md:text-center max-md:mt-16'>
            <h1>Hi, </h1>
            <h1>I'm <strong>Gokul Prasanth </strong></h1>
            <h3 className='text-3xl text-stone-700'>A Full stack Developer</h3>
            <div className='text-xl font-medium space-x-6 pt-2 '>
                <button className='bg-indigo-900 text-white w-36 h-14 hover:bg-white hover:text-indigo-900 hover:border-2 hover:border-indigo-900 rounded-sm'>Download CV</button>
                <button className='border-2 border-indigo-900 w-36 h-14 hover:bg-indigo-900 hover:text-white rounded-sm'>Connect</button>
            </div>
            <div className='flex space-x-3 pt-2 max-md:hidden'>
                <a href="/"><FaLinkedin className='w-8 h-8 hover:text-stone-700'/></a>
                <a href="/"><FaSquareXTwitter className='w-8 h-8 hover:text-stone-700'/></a>
                <a href="/"><FaFacebook className='w-8 h-8 hover:text-stone-700'/></a>
                <a href="/"><FaInstagramSquare className='w-8 h-8 hover:text-stone-700'/></a>
            </div>
        </div>

        <div className='w-1/2 pl-14 max-md:w-full max-md:pl-0'>
            <img src={image} alt="" className='h-96 rounded-lg max-md:pl-6 max-md:pt-10 max-md:rounded-lg' />
        </div>
    </section>
  )
}

export default Hero