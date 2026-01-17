import React from 'react'

const Hero = () => {
  return (
    
    <div className='relative flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 text-center px-4 sm:px-8'>
      
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 w-full h-full object-cover z-[-10] opacity-20'
        src="src/assets/backgroundvideo.mp4"
      ></video>

      {/* Heading */}
      <div>
        <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl'>
          Transforming imagination into <br />
          <span className='italic font-thin text-2xl sm:text-3xl md:text-4xl'>
            interactive, intelligent, and impactful digital realities.
          </span>
        </h1>
      </div>

      {/* Intro line */}
      <div className='relative flex flex-col sm:flex-row items-center justify-center py-6 sm:py-8 text-green-700 text-base sm:text-lg md:text-xl font-semibold'>
        <p className='flex flex-col sm:flex-row items-center gap-4'>
          Hello, I'm Bala Arun Pasala
          <img
            className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full'
            src="src/assets/profile_center.png"
            alt=""
          />
          a Full-stack developer
        </p>
      </div>

      {/* lets connect-mail */}
      <div className='relative flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10'>
        <button className='border bg-opacity-30 bg-green-500 py-2 px-5 rounded-full hover:bg-green-700 hover:font-bold'>
          Let's Connect
        </button>

        <a
          className='flex items-center gap-2 hover:font-semibold sm:hover:text-lg hover:text-green-700'
          href="gmail"
        >
          <box-icon color="white" type='logo' name='gmail'></box-icon>
          <span className="text-sm sm:text-base">
            arun96666.ar@gmail.com
          </span>
        </a>
      </div>
    </div>
  
  )
}

export default Hero
