import React from 'react'
import htmlLogo from '../assets/html-5-svgrepo-com.svg'
import cssLogo from '../assets/css-3-svgrepo-com.svg'
import { RiTailwindCssFill } from "react-icons/ri"
import jsLogo from '../assets/js-svgrepo-com.svg'
import { FaReact } from "react-icons/fa6"
import nodeLogo from '../assets/node-js-svgrepo-com.svg'
import expressLogo from '../assets/express-svgrepo-com.svg'
import mongoLogo from '../assets/mongo-svgrepo-com.svg'
import mysqlLogo from '../assets/mysql-logo-svgrepo-com.svg'
import javaLogo from '../assets/java-svgrepo-com.svg'
import { motion } from "framer-motion"
  
const Techstack = () => {
  return (
    <section id='techstacks' className='w-auto mx-0 '>
        <h2 className='my-20 text-center text-4xl font-bold text-indigo-950'>Known Techstacks</h2>
        <div className='flex flex-wrap items-center justify-center gap-6 max-md:pl-2 p-5'>
            <motion.div initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={htmlLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={cssLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-3'><RiTailwindCssFill className='text-7xl text-cyan-500'/></motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={jsLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-3'><FaReact className='text-7xl text-cyan-500'/></motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={nodeLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={expressLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={mongoLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:-50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-2'><img className='w-20 h-20' src={mysqlLogo} alt="" /></motion.div>
            <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:0.5}} className='bg-stone-50 shadow-md rounded-full border-slate-800 p-4'><img className='w-16 h-16' src={javaLogo} alt="" /></motion.div>
        </div>
    </section>
  )
}

export default Techstack