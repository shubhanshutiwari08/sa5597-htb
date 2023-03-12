import React from 'react'
import logo from "../assets/dribbblogo.png"
import Item from "./Item"

export default function Footer() {
  return (
    <div className='w-full h-full bg-[#d6d2ff]'>
      <div>
        <img className='h-[100px]' src={logo} alt="" />
        <p className='text-0.5xl font-medium mr-6 sm:text-1xl  mx-7 w-[220px]'>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-14 '>
          <Item />
          <Item />
          <Item />
          <Item />
      </div>
      <p className='text-center text-0.5xl'>©️ 2023 Dribbble. All rights reserved.</p>
      <img className='w-[150px] justify-center object-center m-auto ' src={logo} alt="" />
    </div>
  )
}
