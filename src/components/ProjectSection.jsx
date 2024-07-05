import React from 'react'
import grocezeImg from '../assets/grocezeWebImage.png'
import musifyImg from '../assets/musifyWebImage.png'
import landingPageImg from '../assets/nikeWebImage.png'

const ProjectSection = () => {
    const config = {
        projects:[
            {
                image:grocezeImg,
                description:'An Ecommerce grocery selling website, built using MERN stack',
                link:'https://github.com/gokulprasanthb/groceze'
            },
            {
                image:musifyImg,
                description:'Musify is a spotify clone like web application, built using React',
                link:'https://github.com/gokulprasanthb/musify'
            },
            {
                image:landingPageImg,
                description:'A landing page web to showcase a particular product ',
                link:'https://github.com/gokulprasanthb/react_nike_landingPage'
            }
        ]
    }
  return (
    <section id='projects' className='flex flex-col my-36 py-32 justify-center bg-stone-100 w-auto'>
        <div className='w-full space-y-4'>
            <h2 className='text-center text-4xl font-bold text-indigo-950'>Projects</h2>
            <p className='text-center text-gray-700'>Following are the projects that i'd done. Take a look over it</p>
        </div>

        <div className='w-full pt-10'>
            <div className='flex flex-col md:flex-row md:px-28 md:space-x-14  max-md:flex-wrap items-center justify-center max-md:gap-6 max-md:pl-2 max-md:space-y-8'>
                {config.projects.map((project) => (
                <div className='w-1/3 max-md:w-80 space-y-2 bg-white shadow-md rounded-sm pb-10 pr-0 hover:bg-slate-200 hover:shadow-xl duration-700'>
                    <img className='h-[200px] w-96 p-5' src={project.image} alt="" />
                    <p className='p-8 font-medium text-gray-600'>{project.description}</p>
                    <a target='_blank' href={project.link} className='px-10 py-3 md:ml-32 ml-24 border-2 text-white bg-indigo-500  rounded-3xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 duration-300'>Visit</a>
                    
                    {/* <div className='absolute left-0 md:right-3 bottom-0 top-0 bg-indigo-100 opacity-0 hover:opacity-90 duration-500'>
                        <p className='text-indigo-950 text-center py-8 px-3 font-semibold'>An Ecommerce grocery selling website, built using MERN stack</p>
                    </div> */}
                </div>
                ))}
            </div>
        </div >
    </section>
  )
}

export default ProjectSection