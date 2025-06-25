'use client'
import React from 'react'
import { motion } from "motion/react"

const SectionTitle = ({title} : {title: string}) => {
  return (
    <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} viewport={{once: true}} className="text-white text-center text-3xl md:text-5xl lg:text-6xl font-semibold">
    {title}
  </motion.h1>
  )
}

export default SectionTitle