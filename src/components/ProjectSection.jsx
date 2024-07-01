import React from 'react'
import grocezeImg from '../assets/grocezeWebImage.png'
import musifyImg from '../assets/musifyWebImage.png'
import landingPageImg from '../assets/nikeWebImage.png'

const ProjectSection = () => {
  return (
    <section className='flex flex-col my-36 py-24 justify-center bg-stone-100 w-auto'>
        <div className='w-full space-y-4'>
            <h2 className='text-center text-4xl font-bold text-indigo-950'>Projects</h2>
            <p className='text-center text-gray-700'>Following are the projects that i'd done. Take a look over it</p>
        </div>

        <div className='w-full pt-10'>
            <div className='flex flex-col md:flex-row md:px-28 md:space-x-14  max-md:flex-wrap items-center justify-center max-md:gap-6 max-md:pl-2 max-md:space-y-8'>
                <div className='w-1/3 relative max-md:w-80'>
                    <img className='h-[200px] w-96' src={grocezeImg} alt="" />
                    <div className='absolute left-0 md:right-3 bottom-0 top-0 bg-indigo-100 opacity-0 hover:opacity-90 duration-500'>
                        <p className='text-indigo-950 text-center py-8 px-3 font-semibold'>An Ecommerce grocery selling website, built using MERN stack</p>
                    </div>
                </div>
                <div className='w-1/3 relative max-md:w-80'>
                    <img className='h-[200px] w-96' src={musifyImg} alt="" />
                    <div className='absolute left-0 md:right-3 bottom-0 top-0 bg-indigo-100 opacity-0 hover:opacity-90 duration-500'>
                        <p className='text-indigo-950 text-center py-8 px-3 font-semibold'>A spotify clone like web application, built using React</p>
                    </div>
                </div>
                <div className='w-1/3 relative max-md:w-80'>
                    <img className='h-[200px] w-96' src={landingPageImg} alt="" />
                    <div className='absolute left-0 md:right-3 bottom-0 top-0 bg-indigo-100 opacity-0 hover:opacity-90 duration-500'>
                        <p className='text-indigo-950 text-center py-8 px-3 font-semibold'>A landing page web to showcase a particular product</p>
                    </div>
                </div>
            </div>
        </div >
    </section>
  )
}

export default ProjectSection