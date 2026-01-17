import React from 'react'

const Hero = () => {
  return (
    
    <div className='flex flex-col items-center justify-center py-20 text-center '>
      <video autoPlay  muted  className='absolute z-[-10] opacity-20 ' src="src\assets\backgroundvideo.mp4" ></video>
      <div>
      <h1 className='font-semibold text-5xl'>Transforming imagination into <br /><span className='font italic font-thin text-4xl'>
        interactive, intelligent, and impactful digital realities.</span> </h1>
      </div>
      <div className='relative flex flex-row items-center justify-center py-8 text-green-700 text-xl font-semibold'>
        <p className='flex items-center gap-4'>Hello, I'm Bala Arun Pasala <img className='w-28 h-28 rounded-full' src="src\assets\profile_center.png" alt="" /> a Full-stack developer</p>
      </div>


      
      {/* lets connect-mail */}


      <div className=' relative flex items-center justify-center gap-10'>
        <button className='border bg-opacity-30 bg-green-500 py-2 px-5 rounded-full hover:bg-green-700 hover:font-bold'>
          Let's Connect
        </button>
        <a className=' items-center justify-center hover:font-semibold hover:text-lg hover:text-green-700 '
         href="gmail"><box-icon color="white" type='logo' name='gmail'></box-icon>arun96666.ar@gmail.com</a>
      </div>
    </div>
  
  )
}

export default Hero
