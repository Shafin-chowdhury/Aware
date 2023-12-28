import React from 'react'
import{FaFacebook, FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
 <h1>Aware</h1>
 <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
    <FaFacebook className='icon'/>
    <FaTwitter className='icon'/>
    <FaYoutube className='icon'/>
    <FaPinterest className='icon'/>
    <FaInstagram className='icon'/>
    <FaYoutube className='icon'/>
    </div>
        </div>
        </div>

        <ul>
            <li>About</li>
            <li>Parthnership</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertishing</li>
        </ul>
       <ul>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
        <li>Contact Us</li>
       </ul>

    </div>
  )
}

export default Footer
