import React from 'react'
import About from '../components/about';
import Banner from '../components/banner';
import Faq from '../components/faq';
import LogoSlider from '../components/logoSlider';
import Navbar from '../components/navbar';
import Testimonial from '../components/testimonial';
import "../styles/bank.scss"

const Bank = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Banner/>
        <About/>
        <LogoSlider/>
        <Testimonial/>
        <Faq/>
    </div>
  );
};

export default Bank;