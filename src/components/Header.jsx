import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className='max-md:relative w-full bg-white fixed shadow-lg shadow-stone-100 flex justify-between py-5 font-semibold text-indigo-950 text-lg max-md:bg-indigo-950 max-md:text-white max-md:shadow-none md:px-20 max-md:w-full max-md:pt-6'>
        <a href="/" className='pl-10 md:pl-32 font-bold md:text-indigo-500'>GOKUL</a>
        <nav className='hidden md:block'>
            <ul className='flex flex-row space-x-10 pr-20 '>
                <li className='hover:text-indigo-500 duration-200'><a href="/">Home</a></li>
                <li className='hover:text-indigo-500 duration-200'><a href="/">About</a></li>
                <li className='hover:text-indigo-500 duration-200'><a href="/">Projects</a></li>
                <li className='hover:text-indigo-500 duration-200'><a href="/">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className='items-end block md:hidden fixed top-14 right-0 w-1/3 h-full bg-indigo-95 max-md:bg-indigo-950 text-white text-start px-8'>
            <ul className='flex flex-col space-y-8 pt-8 '>
                <li className=''><a href="/">About</a></li>
                <li className=''><a href="/">Projects</a></li>
                <li className=''><a href="/">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className=' max-md:text-white h-8 text-lg font-bold pr-4'/></button>
    </header>
  )
}

export default Header