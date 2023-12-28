import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import{MdOutlineTravelExplore} from 'react-icons/md'

const Aboutus = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p className='py-4'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,quaerat! Cupiditate velit non cum neque natus esse voluptatem iste, porro tempore ipsa atque delectus quas minima. Assumenda quaerat sequi a adipisci inventore aut atque alias maxime natus cupiditate maiores qui nihil fugit magnam obcaecati temporibus eos, facilisculpa reiciendis ipsam laborum sint ratione? Temporibus non, beatae aperiam aliquam cupiditate ducimus eligendi obcaecati repudiandae incidunt, ipsum omnis voluptatem cumque officia veritatis odio vitae sed, reprehenderit laudantium consequuntur minus ipsam est veniam enim. Blanditiis vitae, quaerat eveniet fuga similique, voluptatum perferendis,amet dolores autem suscipit fugit iusto assumenda. Maxime esse architecto in.
                   </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
           <button>
            <RiCustomerService2Fill size = {35}/>
           </button>
           <div>
            <h3 className='py-2'>Leading Service</h3>
            <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

           </div>
            </div>

            
            <div className='flex flex-col lg:flex-row items-center text-center'>
           <button>
            <MdOutlineTravelExplore size = {35}/>
           </button>
           <div>
            <h3 className='py-2'>Leading Service</h3>
            <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

           </div>
            </div>
        </div>
    </div>


    {/* Search option */}
      <div>
        <div className='border text-center'>
         <p className='pt-2'> Lorem ipsum dolor sit amet.</p>
         <p className='py-4'> Lorem ipsum dolor</p>
         <p className=' bg-gray-800 text-gray-200 py-2'> Lorem ipsum dolor sit</p>
        </div>

        <form className='w-full'>
         <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
             <option>Cox's Bazar</option>
             <option>Bandarban</option>
             <option>Khagrachori</option>
             <option>Rangamati</option>
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
  )
}

export default Aboutus
