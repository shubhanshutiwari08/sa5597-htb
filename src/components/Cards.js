import React from 'react'
import cardvid from "../assets/cardvid.mp4"

export default function Cards() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-neutral-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="group relative items-center overflow-hidden cursor-pointer">
                <div className="h-90 w-72">
                    <video className='h-full w-full object-cover' src={cardvid} autoplay loop muted  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent toblack"></div>
                <div className="absolute inset-0 flex flex-col item-center justify-center px-9 text-center translate-y-[60%]">
                    <h1 className='text-3xl font-bold text-white'>beauty</h1>
                    <p className='text-lg italic text-white mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, magnam?</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}
