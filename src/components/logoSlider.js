import React from 'react';
import "../styles/logoSlider.scss";
import Upwork from "../svg/upwork.svg";
import Petal from "../svg/petal.svg";
import Rakuten from "../svg/rakuten.svg";
import Nyt from "../svg/nyt.svg";
import Vice from "../svg/vice.svg";
import Dell from "../svg/dell.svg";

const LogoSlider = () => {
  return (
    <div className='logoslider-contianer'>
        <img src={Upwork} alt="upwork"/>
        <img src={Petal} alt="Petal"/>
        <img src={Rakuten} alt="rakuten"/>
        <img src={Nyt} alt="Nyt"/>
        <img src={Vice} alt="Vice"/>
        <img src={Dell} alt="Dell"/>
    </div>
  )
}

export default LogoSlider