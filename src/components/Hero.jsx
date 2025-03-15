import React from 'react'
import hero from '/assets/hero.jpg'

const Hero = () => {
  return (
    <div>
      <img src={hero} alt="" className='h-[500px] object-cover brightness-50' />
    </div>
  )
}

export default Hero