import React from 'react'
import aboutImage from '../assets/about.png'

const About = () => {
  return (
    <section className='flex flex-col md:flex-row md:pt-28 md:pr-20 max-md:mt-16'>
        <div className='max-md:hidden md:w-1/2'>
            <img src={aboutImage} alt="" />
        </div>
        <div className='md:w-1/2 max-md:w-full flex justify-center max-md:flex max-md:flex-col max-md:items-center '>
            <div className='flex flex-col justify-center max-md:h-full'> 
                <h2 className='text-center text-4xl font-bold text-indigo-950'>About Me</h2>
                <p className='text-center pt-6 text-gray-700 max-md:w-full max-md:px-10 max-md:ml-5 max-md:text-start'>A Mechanical engineering student with a strong proficiency in web
                development and coding. Cultivated a good knowledge in web development
                through creating dynamic web applications. I've honed my skills in both front-end and back-end development, making me a versatile and reliable professional. My toolkit includes React, Tailwind CSS   among others. I enjoy diving into new programming languages and frameworks, ensuring I stay ahead in this ever-evolving field.</p>
                <button className='border-2 text-white bg-indigo-500 w-36 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-sm mt-8 ml-72 max-md:ml-16'>Let's Connect</button> 
            </div>
        </div>
    </section>
  )
}

export default About