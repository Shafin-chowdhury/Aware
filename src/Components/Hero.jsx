import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import HeroVideo from '../Assets/HeroVideo2.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={HeroVideo}
      autoPlay loop muted/>

      <div className='absolute w-full h-full top-0 left-0 bg-green-900/30'></div>
       <div className='absolute top-20  w-full h-full flex flex-col justify-center text-center text-white p-4'> 
      
        <h1>First Class Travel</h1>
        <h2 className='py-2'>Travel and Experience the beauty of Bangladesh</h2>
        {/* <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'> */}
        <div className='max-w-[1240px] mx-auto grid lg:grid gap-2 px-4 py-16'>
        <div>
          <input className='bg-green-800/30 w-[300px] sm:w-[400px] font-[poppins] focus:outline-none'
           type='text' placeholder='Search Destination'/>
        </div>
        <div>
          <button><AiOutlineSearch size = {20} className='icon' style={{color:'#ffffff'}}  />
          </button>
        </div>

        <div>

        <div className='border text-center'>
         <p className='pt-2'> Whenvever you want to go</p>
         <p className='py-4'> Whereever you want to go</p>
         <p className=' bg-gray-800 text-gray-200 py-2'> Just stay with us</p>
        </div>

        <form className='w-full'>
         <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
             <option className='text-gray-800'>Cox's Bazar</option>
             <option className='text-gray-800'>Bandarban</option>
             <option className='text-gray-800'>Khagrachori</option>
             <option className='text-gray-800'>Rangamati</option>
            </select>
         </div>
         <div className='flex flex-col my=2'>
            <label>Checkout</label>
            <input className='border rounded-md p-2' type= 'date'/>
            
            
         </div>
         <button className='w-full my-4 '>Rates and Availabilities</button>
        </form>
        
       
        </div>
      </div>
      </div>
        {/* </form>
      </div> */}
    </div>
    
    
    
  )
}

export default Hero
