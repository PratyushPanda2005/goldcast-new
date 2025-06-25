import React from 'react'
import Navbar from '../components/navbar'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <main id='heroPage'>
    <Navbar/>
    <section style={{backgroundImage: "url(/bg/Herobg.png)", backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}} className='min-h-screen relative flex justify-center pt-[120px] px-6'>
        <div className='max-w-7xl w-full h-fit flex justify-center text-white '>
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='xl:text-9xl lg:text-7xl md:text-6xl text-5xl tracking-tight leading-[100%]'>the <span className='italic font-bold'>future</span> is AI.</h1>
            <div className='flex justify-center w-full'>
            <p className='text-sm md:text-lg max-xl:max-w-xl max-w-2xl'>Join the network educating enterprise marketing leaders on
            the practical application of AI in their day-to-day work.</p>
            </div>
            <div className='flex justify-center'>
            <button className='px-6 py-3 rounded-xl bg-gradient-to-b from-[#F65BFF] to-[#D01EDA] w-fit text-xl max-sm:text-base cursor-pointer flex gap-2 items-center'>Apply Now<span className=''><ChevronRight/></span></button>
            </div>
          </div>
        </div>
    </section>
    </main>
  )
}

export default Hero