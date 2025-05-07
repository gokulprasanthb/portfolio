import React from 'react'
import myImage from '../assets/myImage.jpeg'
import resume from '../assets/resume.pdf'
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";

import { motion } from "framer-motion"

const Hero = () => {
    const config = {
        subtitle: 'A fullstack Web Developer'
    }
    return (
        <section id='hero' className='flex flex-row justify-center md:pl-52  md:py-20 md:pt-48 max-md:flex-col max-md:px-3 max-md:pt-14 max-md:pl-6 max-md:space-y-7 w-auto max-md:w-full mx-0'>
            <div className='pt-6 w-1/2 mt-2 text-5xl space-y-5 text-indigo-950 max-md:w-full max-md:text-3xl max-md:text-center max-md:mt-16'>
                <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>Hi, </motion.h1>
                <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>I'm <strong>Gokul Prasanth </strong></motion.h1>
                <motion.h3 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className='text-3xl text-stone-600'>{config.subtitle}</motion.h3>
                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className='text-xl md:space-x-6 pt-8 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-8'>
                    <a href="#contact" className='max-md:hidden px-7 py-3 duration-300 border-2 text-white bg-indigo-500 w-36 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-sm max-md:ml-1'>Connect</a>
                    <button className='px-2 py-3 duration-300 border-2 text-white bg-indigo-500 w-36 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-sm max-md:ml-1' onClick={() => window.open(resume)}>Download CV</button>
                </motion.div>
            </div>

            <div className='w-1/2 max-md:pl-2 md:pl-28 max-md:w-full'>
                <motion.img initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} src={myImage} alt="" className='h-96 rounded-lg max-md:pl-6 max-md:pt-10 max-md:rounded-lg' />
            </div>
        </section>
    )
}

export default Hero