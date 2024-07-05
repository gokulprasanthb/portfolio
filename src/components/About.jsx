import React from 'react'
import AboutImg from '../assets/about.png'


const About = () => {
  const config = {
    paragraph: 'A Mechanical engineering student with a good proficiency in web development and coding. Cultivated an excellent knowledge in web development through creating dynamic web applications. I\'ve honed my skills in both front-end and back-end development, making me a versatile and reliable professional. My toolkit includes React JS, Node JS, Tailwind CSS among others. I enjoy diving into new programming languages and frameworks, Let\'s make something great together!'
  }
  return (
    <section id='about' className='flex flex-col md:flex-row px-5 md:pr-20 md:pt-20 max-md:mt-20 max-md:pt-20'>
        <div className='py-5 md:w-1/2'>
            <img className='max-md:hidden' src={AboutImg} alt='aboutImage'/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h2 className='text-center text-4xl font-bold text-indigo-950'>About Me</h2>
                <p className='text-center pt-6 text-gray-700 max-md:w-full max-md:px-10 max-md:ml-5 max-md:text-start'>{config.paragraph}</p>
                <a href="#contact" className='px-5 py-3 duration-300 border-2 text-white bg-indigo-500 w-36 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-sm  mt-8 ml-72 max-md:ml-16'>Let's Connect</a>
            </div>
        </div>
    </section>
  )
}

export default About