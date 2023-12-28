import React from 'react'
import beach from '../Assets/landscape.jpg';
import holiday from '../Assets/p-1.jpg';
import holiday2 from '../Assets/p-2.jpg';
import holiday3 from '../Assets/p-3.jpg';
import holiday4 from '../Assets/p-4.jpg';


const Destination = () => {
  return (
     <div className='w-full h-screen relative'>
    
    <div className=' max-w-[1000px] mx-auto py-16 px-4 text-center'>
    
      <h1>Travel And Tours</h1>
      <p>Get your best package and explore the beauty of our country</p>
      <div className=' grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                     <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={beach} alt='/'/>
                     <img className='w-full h-full object-cover' src={holiday} alt='/'/>
                     <img className='w-full h-full object-cover' src={holiday2} alt='/'/>
                     <img className='w-full h-full object-cover' src={holiday3} alt='/'/>
                     <img className='w-full h-full object-cover' src={holiday4} alt='/'/>
                     
                     
      </div>
      </div>
     </div> 
  )
}

export default Destination
