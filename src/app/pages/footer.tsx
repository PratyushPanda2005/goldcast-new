import { ChevronRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section style={{backgroundImage: "url(/bg/footerBg.png)", backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}} className='flex justify-center items-center py-[80px] px-6 md:px-20'>
        <div className='w-full max-w-7xl text-white'>
            <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl'>Be Part of the Future</h1>
            <p className='mt-4 md:text-lg max-w-lg'>Ready to transform your marketing with AI? Join as a member for exclusive access to our content and community, or partner with us to shape the future of B2B marketing.</p>
            <button className="text-xl p-4 bg-gradient-to-b from-[#D01EDA] to-[#F65BFF] rounded-xl mt-4 flex justify-center items-center cursor-pointer relative z-10 hover:bg-white hover:from-white hover:to-white transition-all duration-300 hover:text-[#D01EDA] hover:scale-105">
            Apply for Invite<span className='h-[1em]'><ChevronRight/></span>
            </button>
        </div>
    </section>
  )
}

export default Footer