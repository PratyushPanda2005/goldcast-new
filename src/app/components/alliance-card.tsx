import Image, { StaticImageData } from 'next/image'
import React from 'react'

const AllianceCard = ({profile, title, position, description}: {profile: StaticImageData; title: string; position: string; description: string}) => {
  return (
    <div style={{backgroundImage: "url(/bg/allianceBg.png)",backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'}} className='allianceBg ml-6 rounded-4xl p-6 md:p-10 flex flex-col gap-4 text-white'>
    <Image className='w-16 md:w-28' src={profile} alt='Profile Photo'/>
    <h1 className='md:text-xl'>{title}</h1>
    <h1 className='text-sm text-neutral-600'>{position}</h1>
    <p className='max-w-sm max-sm:w-full'>{description}</p>
  </div>
  )
}

export default AllianceCard