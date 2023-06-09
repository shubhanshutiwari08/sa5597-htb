import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logo from "../assets/dribbblogo.png"

export default function Navbar() {
    const [nav,setnav]=useState(false)
    const handleClick = () => setnav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Dribbble</h1> */}
                <img className='w-[150px] cursor-pointer' src={logo} alt="" />
                <ul className='hidden md:flex'>
                    <li className='cursor-pointer'>Inspiration</li>
                    <li className='cursor-pointer'>Find work</li>
                    <li className='cursor-pointer'>learn Design</li>
                    <li className='cursor-pointer'>Go pro</li>
                    <li className='cursor-pointer'>Hire Designers</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign in</button>
                <button className='px-8 py-3'>Sign up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' />:<XIcon className='w-5'/>}
            </div>
        </div>


        <ul className={!nav?'hidden':'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Inspiration</li>
            <li className='border-b-2 border-zinc-300 w-full'>Find work</li>
            <li className='border-b-2 border-zinc-300 w-full'>learn Design</li>
            <li className='border-b-2 border-zinc-300 w-full'>Go pro</li>
            <li className='border-b-2 border-zinc-300 w-full'>Hire Designers</li>

            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
                <button className='px-8 py-3'>Sign up</button>
            </div>
        </ul>
    </div>
   
  )
}
