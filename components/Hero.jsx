import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='text-white'>
        <div className='w-full '>
        <Image src="/assets/bg2.jpeg" width={500} height={300} alt="Description" className='bg-cover bg-center w-full h-3/5 lg:h-[700px] flex items-center' />
        <h2 className='py-2 font-semibold bg-red-600 text-center'>Welcome To Hotel</h2>
        </div>
    </div>
  )
}

export default Hero