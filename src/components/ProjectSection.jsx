import React from 'react'
import grocezeImg from '../assets/grocezeWebImage.png'
import musifyImg from '../assets/musifyWebImage.png'
import landingPageImg from '../assets/nikeWebImage.png'
import { motion } from "framer-motion"

const ProjectSection = () => {
  return (
    <section id='projects' className='flex flex-col my-36 py-32 justify-center bg-stone-100 w-auto'>
        <div className='w-auto space-y-4'>
            <h2 className='text-center text-4xl font-bold text-indigo-950'>Projects</h2>
            <p className='text-center text-gray-700'>Following are the projects that i'd done. Take a look over it</p>
        </div>

        <div className='w-auto pt-10'>
            <div className='flex flex-col md:flex-row md:px-28 md:space-x-14  max-md:flex-wrap items-center justify-center max-md:gap-6 max-md:pl-2 max-md:space-y-8'>
                <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:0.5}} className='w-1/3 max-md:w-80 space-y-2 bg-white shadow-md rounded-sm pb-10 pr-0 hover:bg-slate-200 hover:shadow-xl duration-700'>
                    <img className='h-[200px] w-96 p-5' src={grocezeImg} alt="" />
                    <p className='p-8 font-medium text-gray-600'>An Ecommerce grocery selling website, built using MERN stack</p>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/gokulprasanthb/groceze' className='px-10 py-3 md:ml-32 ml-24 border-2 text-white bg-indigo-500  rounded-3xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 duration-300'>Visit</a>
                </motion.div>
                <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:0.5}} className='w-1/3 max-md:w-80 space-y-2 bg-white shadow-md rounded-sm pb-10 pr-0 hover:bg-slate-200 hover:shadow-xl duration-700'>
                    <img className='h-[200px] w-96 p-5' src={musifyImg} alt="" />
                    <p className='p-8 font-medium text-gray-600'>Musify is a spotify clone like web application, built using React</p>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/gokulprasanthb/musify' className='px-10 py-3 md:ml-32 ml-24 border-2 text-white bg-indigo-500  rounded-3xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 duration-300'>Visit</a>
                </motion.div>
                <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5, delay:0.5}} className='w-1/3 max-md:w-80 space-y-2 bg-white shadow-md rounded-sm pb-10 pr-0 hover:bg-slate-200 hover:shadow-xl duration-700'>
                    <img className='h-[200px] w-96 p-5' src={landingPageImg} alt="" />
                    <p className='p-8 font-medium text-gray-600'>A landing page web to showcase a particular product</p>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/gokulprasanthb/react_nike_landingPage' className='px-10 py-3 md:ml-32 ml-24 border-2 text-white bg-indigo-500  rounded-3xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 duration-300'>Visit</a>
                </motion.div>
            </div>
        </div >
    </section>
  )
}

export default ProjectSection