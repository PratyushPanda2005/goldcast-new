import Image from 'next/image'
import React from 'react'
import SixSense from '../../../public/svgs/6Sense.svg'
import Goldcast from '../../../public/svgs/Goldcast.svg'
import IntelligentDemand from '../../../public/svgs/IntelligentDemand.svg'
import Sendoso from '../../../public/svgs/Sendoso.svg'
const Clients = () => {
  return (
    <section className='flex justify-center items-center p-12 bg-black'>
        <div className='max-w-7xl w-full'>
            <h1 className='text-neutral-600 uppercase text-center text-2xl'>
                brought to you by
            </h1>
            <div className='flex flex-wrap justify-center'>
                <Image src={SixSense} alt=''/>
                <Image src={Goldcast} alt=''/>
                <Image src={IntelligentDemand} alt=''/>
                <Image src={Sendoso} alt=''/>
            </div>
        </div>
    </section>
  )
}

export default Clients