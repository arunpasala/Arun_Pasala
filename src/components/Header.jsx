import React from 'react'
import boxicons from 'boxicons'

const Header = () => {
  return (
    <header className='flex justify-around py-4 px-4  font-sans'>
       
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" className='font-bold text:lg'> AR</h1>
     {/* <p className='font-thin text-xs'>Master in Computer Science & Software Engineer</p></h1> */}

        {/*Desktop view and navigation  */}
        <nav className='flex items-center gap-12 bg-green-300 bg-opacity-20 border border-green-700 rounded-full px-2  '>
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="900" className='hover:bg-green-700 rounded-full hover:bg-opacity-50 px-2' href="#">Home</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='hover:bg-green-700 rounded-full hover:bg-opacity-50 px-2 ' href="src\components\About.jsx">About</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1200" className='hover:bg-green-700 rounded-full hover:bg-opacity-50 px-2 ' href="#">Projects</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1400" className='hover:bg-green-700 rounded-full hover:bg-opacity-50 px-2 ' href="#">Services</a>


            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1600" className='hover:bg-green-700 rounded-full hover:bg-opacity-50 tr px-2 ' href="#">Book a Call</a>

        
        </nav>
        
        <button data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='border bg-opacity-30 bg-green-500 py-2 px-5 rounded-full hover:bg-green-700 hover:font-bold'>Resume</button>

    </header>
  )
}

export default Header
