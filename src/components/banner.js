import { Typography } from "@mui/material";
import React from "react";
import "../styles/banner.scss";
import icons from "../images/icons.png";
import Vector from "../svg/vector.svg";
import Creditcard from "../svg/creditcard.svg"

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={Creditcard} alt="creditcard" className="creditcard"/>
      <Typography className="heading">
        Discover the Perfect <br />
        Credit Card for You
      </Typography>
      <Typography className="sub-heading">
        Discover the power of our secure and rewarding credit <br />
        cards. Explore our range of credit cards and take control <br />
        of your finances today.
      </Typography>
      <div className="get-started">
        Get Started
        <svg
          width="20"
          height="15"
          viewBox="0 0 25 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow"
        >
          <path
            d="M1 9.75H23.5M23.5 9.75L16.5 18.25M23.5 9.75L16.5 1.75"
            stroke="#EFF8F0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
        <div className="users">
            <img src={icons} alt="Icons" width="120" height="48" className="icons"/>
            <div className="content">
            <Typography className="numberofusers">
              10.2k+
            </Typography>
            <Typography className="sub-content">
            Active users around the <br/>
            world
            </Typography>
            </div>
        </div>
        <img src={Vector} alt="vector" className="vector"/>
    </div>
  );
};

export default Banner;
