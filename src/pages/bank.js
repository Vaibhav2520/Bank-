import React from 'react'
import About from '../components/about';
import Banner from '../components/banner';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Footer from '../components/footer';
import LogoSlider from '../components/logoSlider';
import Navbar from '../components/navbar';
import Testimonial from '../components/testimonial';
import "../styles/bank.scss"
import Background from "../svg/background.svg";

const Bank = () => {
  return (
    <>
    <div className='container'>
        <Navbar/>
        <Banner/>
        <About/>
        <LogoSlider/>
        <Testimonial/>
        <Faq/>
        <Cta/>
    </div>
    <Footer/>
    </>
  );
};

export default Bank;