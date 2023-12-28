import React from 'react'
import Bazar from '../Assets/Bazar.jpg'
import Khagrachori from '../Assets/Khagrachori.jpg'
import Bandarban from '../Assets/Bandarban.jpg'
import Sajek from '../Assets/Sajek.jpg'
import Guliakhali from '../Assets/Guliakhali.jpg'
import Saint from '../Assets/Saint.jpg'
import SelectCard from '../Components/SelectCard'



const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
        <SelectCard bg= {Bazar} text="Cox's Bazar"/>
        <SelectCard bg= {Khagrachori} text="Khagrachori"/>
        <SelectCard bg= {Bandarban} text="Bandarban"/>
        <SelectCard bg= {Sajek} text="Sajek"/>
        <SelectCard bg= {Guliakhali} text="Guliakhali Sea Beach"/>
        <SelectCard bg= {Saint} text="Saint Martin"/>
    </div>
  )
}

export default Select
