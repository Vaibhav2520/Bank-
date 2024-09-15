import React from 'react'
import About from '../components/about';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import "../styles/bank.scss"

const Bank = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Banner/>
        <About/>
    </div>
  );
};

export default Bank;