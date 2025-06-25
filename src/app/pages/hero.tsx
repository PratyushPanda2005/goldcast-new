'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from '../components/navbar'
import { ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText);

const Hero = () => {
  const btnRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    const splitMain = new SplitText(".split", {
      type: "words,lines",
      linesClass: "line",
    });
    
    tl.from(splitMain.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1
    });

    const splitSub = new SplitText(".split-subtext", {
      type: "words,lines",
      linesClass: "line",
    });
    
    tl.from(splitSub.lines, {
      duration: 0.8,
      yPercent: 100,
      opacity: 0,
      stagger: 0.05
    }, "-=0.5"); 

    tl.from(btnRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.3");

    return () => {
      splitMain.revert();
      splitSub.revert();
      tl.kill();
    };
  }, []);
  return (
    <main id='heroPage' className='overflow-hidden'>
    <Navbar/>
    <section 
    style={{backgroundImage: "url(/bg/Herobg.png)", backgroundSize: 'cover',
      backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} 
      className='min-h-screen relative flex justify-center pt-[120px] px-6 bg-black'>
        <div className='max-w-7xl w-full h-fit flex justify-center text-white relative z-50'>
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='split xl:text-9xl lg:text-7xl md:text-6xl text-5xl tracking-tight leading-[100%]'>the <span className='italic font-bold'>future</span> is AI.</h1>
            <div className='flex justify-center w-full'>
            <p className='split-subtext text-sm md:text-lg max-xl:max-w-xl max-w-2xl'>Join the network educating enterprise marketing leaders on the practical application of AI in their day-to-day work.</p>
            </div>
            <div ref={btnRef}  className='flex justify-center'>
            <button className='px-6 py-3 rounded-xl bg-[#D01EDA] w-fit text-xl max-sm:text-base cursor-pointer flex gap-2 items-center hover:bg-white hover:text-[#F65BFF] duration-300 transition-all font-semibold'>Apply Now<span className=''><ChevronRight/></span></button>
            </div>
          </div>
        </div>
    </section>
    </main>
  )
}

export default Hero