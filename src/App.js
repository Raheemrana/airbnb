import React from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div >
      <Navbar/>
      <div className='body'>
        <Hero/>
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
