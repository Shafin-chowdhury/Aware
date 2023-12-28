import React from 'react'
import Navber from './Components/Navber';
import Hero from './Components/Hero';
import Destination from './Components/Destination';
import Select from './Components/Select';
import SelectCard from './Components/SelectCard';
import Carousel from './Components/Carousel';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navber/>
   <Hero />
   <Destination/>
   <Aboutus/>
   <Select/>
   <SelectCard/>
   <Carousel/>
   <Footer/>
    </div>
  );
}

export default App;
