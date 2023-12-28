import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import{FaFacebook, FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'

const Navber = () => {
  const[nav, setNav] = useState(false);
  const[logo, setLogo] = useState(false);
  const handleNav = () =>
  {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>  
       <div >
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>AWARE</h1>  
        
        </div> 

        <ul className='hidden md:flex'>
        <li>HOME</li>
        <li>DESTINATION</li>
        <li>TRAVEL</li>
        <li>VIEW</li>
        <li>BOOK</li>
        <li>CONTACT US</li>
      </ul>

      <div className='hidden md:flex'>
        <BiSearch size={20}/>
      </div> 
      

     

       <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        {/* /* <HiOutlineMenuAlt4 size={20}/> */ }
      </div>


      

      {/* Mobile dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
        <h1>AWARE</h1>
        <li className = 'border-b'>HOME</li>
        <li className = 'border-b'>DESTINATION</li>
        <li className = 'border-b'>TRAVEL</li>
        <li className = 'border-b'>VIEW</li>
        <li className = 'border-b'>BOOK</li>
        <li className = 'border-b'>CONTACT US</li>
        
        <div>
        <div className='flex flex-col'>
          <button>Search</button>
        </div>
          <div className='flex justify-between my-6'>
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaYoutube className='icon'/>
          <FaPinterest className='icon'/>
          <FaInstagram className='icon'/>
          <FaYoutube className='icon'/>
          </div>
        </div>
        </ul>
      </div>


    </div>
  )
}

export default Navber
