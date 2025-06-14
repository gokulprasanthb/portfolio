import React from 'react'
import AboutImg from '../assets/about.png'
import { motion } from "framer-motion"

const About = () => {
  const config = {
    description: 'A passionate and skilled web developer with strong proficiency in both front-end and back-end technologies. I’ve cultivated solid expertise through building dynamic and responsive web applications. My toolkit includes React JS, Node JS, Tailwind CSS, and more, enabling me to deliver versatile and efficient solutions. I’m always eager to explore new programming languages and frameworks. Let’s build something great together!'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row px-5 md:pr-20 md:pt-20 max-md:mt-1 max-md:pt-20 max-md:pl-1 w-auto'>
        <div  className='py-5 md:w-1/2'>
            <motion.img initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:0.5}} className='max-md:hidden' src={AboutImg} alt='aboutImage'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}}  className='flex flex-col justify-center text-white'>
                <h2 className='text-center text-4xl font-bold text-indigo-950'>About Me</h2>
                <p className='text-center pt-6 text-gray-700 max-md:w-full max-md:px-10 max-md:ml-5 max-md:text-start'>{config.description}</p>
                <a href="#contact" className='px-5 py-3 duration-300 border-2 text-white bg-indigo-500 w-36 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-sm  mt-8 ml-72 max-md:ml-16'>Let's Connect</a>
            </motion.div>
        </div>
    </section>
  )
}

export default About