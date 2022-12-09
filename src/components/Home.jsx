import React from 'react';
import ProfileImg from  '../assets/image-profile-desktop.webp';
import PatternRings from '../assets/pattern-rings.svg';
import PatternCircle from '../assets/pattern-circle.svg'

const Home = () => {
    return <div className= 'h-screen w-full bg-black text-white overflow-x-hidden'> 
    <div className=''>
            <img src={PatternRings} alt='pattern-rings' className='pt-32 absolute -left-[100px] ' ></img>
        </div>
        <div className= 'max-w-scren-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full mb-20'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white relative'>Nice to meet you!</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-white py-4'>I'm <span className='underline decoration-green-300 decoration-[5px] underline-offset-[15px]'>Adam Keyes.</span></h1>
            <p className='text-white-500 py-4 max-w-md'>Based in the Uk,I'm a front-end developer passionate about reading accessible web apps that users love.</p>
            <h1 className='pl-2 mt-12 underline decoration-green-400 decoration-2 underline-offset-[12px]'><buttton>CONTACT ME</buttton></h1>
            </div>
        
       
        {/* <button>Contact Me</button> */}
        <div className=''>
              <img src = {ProfileImg} alt ='img'  className =' h-screen mx-auto w-2/3 pb-24 md:w-full'/ >   
         </div>
        
         <div>
            <img src ={PatternCircle} alt='circle-img' className='absolute right-64 mr-96 mt-28'/>
         </div>
        </div>

        {/* <div className='bg-profileImg w-100% h-100% z-50'>
        </div> */}
    </div>
    
    
}

export default Home