'use client'
import Image from 'next/image'
import React from 'react'
import SixSense from '../../../public/svgs/6Sense.svg'
import Goldcast from '../../../public/svgs/Goldcast.svg'
import IntelligentDemand from '../../../public/svgs/IntelligentDemand.svg'
import Sendoso from '../../../public/svgs/Sendoso.svg'
import { motion } from "motion/react"

const Clients = () => {
  return (
    <section className='flex justify-center items-center p-12 bg-black'>
        <div className='max-w-7xl w-full'>
            <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.3}} viewport={{once: true}}  className='text-neutral-600 uppercase text-center text-2xl'>
                brought to you by
            </motion.h1>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.3}} viewport={{once: true}} className='flex flex-wrap justify-center'>
                <Image src={SixSense} alt='Six Sense Svg' className='hover:scale-110 transition-all duration-300'/>
                <Image src={Goldcast} alt='Goldcast Svg' className='hover:scale-110 transition-all duration-300'/>
                <Image src={IntelligentDemand} alt='Intelligent Demand Svg' className='hover:scale-110 transition-all duration-300'/>
                <Image src={Sendoso} alt='Sendoso' className='hover:scale-110 transition-all duration-300'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Clients