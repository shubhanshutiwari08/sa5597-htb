import React from 'react'
import video from "../assets/video.mp4"

export default function Home() {
  return (
    <div className='w-full h-screen relative' >
      <video className='w-full h-full object-cover '  src={video}  autoPlay loop muted  />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>

      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Explore the world’s leading <br/> design portfolios</h1>
        <br />
        <h3 className='text-0.5xl font-medium mr-6 sm:text-1xl'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</h3>

        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-3 rounded-lg my-5 text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent -w-[300px] sm:w-[400px] font-[poppins] focus:outline-none'  type="text" placeholder='Search...' />
            </div>
            <div>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></button>
            </div>
        </form>
      </div>
    </div>
  )
}
