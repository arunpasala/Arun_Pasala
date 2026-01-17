import React from 'react'

const Foot = () => {
  return (
    <>
     <h1>Footer</h1>

     {/* Main Footer Div */}
    <div className=' h-[300px] flex justify-evenly items-center'>


        {/* container 1 */}
        <div className='  w-[50%] h-[100%]  flex flex-col  items-center justify-center'>
           <img src="" alt="logo" />
           I'm Arun, A Full-stack developer <br />
           freelancer& problem solver. <br />
           Thanks FOr checking out my website


        </div>


        {/* container 2 */}
        <div className=' w-[60%] h-[80%]  flex flex-row  justify-evenly items-center'> 
            <div className=' h-[100%] w-[20%] flex flex-col '  >
                <h1>General</h1><br />
                <a href="">Home</a><br/>
                <a href="">About</a><br/>
                <a href="">Projects</a><br/>
                <a href="">Blog</a><br/>
            </div>
            <div className=' h-[100%] w-[20%] flex flex-col justify-evenly' >
                <h1>Specifications</h1><br />
                <a href="">Guest Book</a><br/>
                <a href="">Bucket List</a><br/>
                <a href="">Uses</a><br/>
                <a href="">Attribution</a><br/>
            </div>
            <div className=' h-[100%] w-[20%] flex flex-col justify-evenly' >
                <h1>More</h1><br />
                <a href="">Book a call</a><br/>
                <a href="">Links</a><br/>
                <a href="">RSS</a><br/>
            </div>

        </div>
       

    </div>
     <footer className=' flex  flex-row items-center justify-between px-10 py-10'>
    <div>@2025 Bala Arun Pasala. <br /> All rights reserved  <br /> Privacy Policy Terms&Conditions
    </div>


     <div className='flex'>
        <img src="" alt="linkedin" />
        <img src="" alt="Github" />
        <img src="" alt="Insta" />
    </div>
    </footer>
    
    
    </>
   
  )
}

export default Foot
