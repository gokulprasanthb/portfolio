import React from 'react'
import mailImg from '../assets/mail-reception-svgrepo-com.svg'
import phoneImg from '../assets/phone-svgrepo-com.svg'
import locationImg from '../assets/location-svgrepo-com.svg'

const Contact = () => {
  return (
    <section className='my-20'>
        <h2 className='text-center text-4xl font-bold text-indigo-950'>Get in Touch</h2>
        <div className='w-auto flex md:flex-row max-md:flex-col'>
            <div className='md:w-1/2 max-md:w-auto pt-20 md:px-28 max-md:px-10'>
                <h1 className='text-start font-bold text-indigo-500 text-xl'>Let's Talk</h1>
                <p className='pt-6 text-gray-700 max-md:w-full text-start'>If you would like to discuss potential projects, or simply want to connect, please feel free to reach out. I'm always open to new opportunities and collaborations. Looking forward to hearing from you!</p>
                <ul className='pt-6 space-y-3 '>
                    <li className='flex flex-row gap-2'><img className='w-6 h-6' src={mailImg} alt="" />gokulprasanthbm@gmail.com</li>
                    <li className='flex flex-row gap-2'><img className='w-6 h-6' src={phoneImg} alt="" />+91 9345355340</li>
                    <li className='flex flex-row gap-2'><img className='w-6 h-6 opacity-60' src={locationImg} alt="" />Tiruppur, Tamilnadu</li>
                </ul>
            </div>
            <div className='md:w-1/2 max-md:w-auto pt-20 md:px-28 max-md:px-10'>
                <form action="" className='flex flex-col space-y-3'>
                    <label className='font-medium text-indigo-500' htmlFor="">Your Name</label>
                    <input className='p-4 border-2 border-gray-400' type="text" placeholder='Enter your name' name='name'/>
                    <label className='font-medium text-indigo-500' htmlFor="">Your Email</label>
                    <input className='p-4 border-2 border-gray-400' type="email" placeholder='Enter your email' name='email'/>
                    <label className='font-medium text-indigo-500' htmlFor="">Write your message</label>
                    <textarea maxLength={100} rows={8} className='p-4 border-2 border-gray-400' name="message" placeholder='write the message'></textarea>
                    <div>
                    <button type='submit' className=' border-2 text-white bg-indigo-500 w-28 h-14 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 duration-300 rounded-full mt-7 max-md:ml-20'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact