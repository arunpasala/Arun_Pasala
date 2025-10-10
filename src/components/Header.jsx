import React from 'react'
import boxicons from 'boxicons'

const Header = () => {
  return (
    <header className='flex justify-between py-4 px-4 border border-t-0 border-green-900 font-sans'>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className='font-bold text-lg'>Bala Arun Pasala
     <p className='font-thin text-xs'>Master in Computer Science & Software Engineer</p></h1>

        {/*Desktop view and navigation  */}
        <nav className='flex items-center gap-12 '>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="900" href="#">Home</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" href="#">Cerifications</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1200" href="#">Projects</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1400" href="#">Services</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1600" href="#">Experience</a>

             <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1800" href="#">Contact me</a>
        
        </nav>
        
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='bg-green-500 hover:bg-green-900 font-bold border border-none
      py-2 px-2 '>Resume </button>

    </header>
  )
}

export default Header
