import React from 'react'

const SectionTitle = ({title} : {title: string}) => {
  return (
    <h1 className="text-white text-center text-3xl md:text-5xl lg:text-6xl font-semibold">
    {title}
  </h1>
  )
}

export default SectionTitle