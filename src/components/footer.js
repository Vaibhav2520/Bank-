import React from "react";
import "../styles/footer.scss";
import Logo from "../images/logo.png";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>

    <div className="footer-contianer">
      <div className="footer-left">
        <div className="main-heading">
          <img src={Logo} alt="logo" width="20" height="20" />
          <Typography className="heading">GreenBank</Typography>
        </div>
        <Typography className="content">
          Discover the power of our secure and <br />
          rewarding credit cards
        </Typography>
      </div>
      <div className="footer-right">
        <div >
        <Typography className="about-us">About us</Typography>
        <Typography className="color">
            Investors
        </Typography>
        <Typography className="color">
            Features
        </Typography>
        <Typography className="color">
            Book a demo
        </Typography>
        <Typography className="color">
            Security
        </Typography>
        </div>
        <div >
        <Typography className="about-us">Products</Typography>
        <Typography className="color">
           Credit Cards
        </Typography>
        <Typography className="color">
           Gift Cards
        </Typography>
        <Typography className="color">
            Saving accounts
        </Typography>
        <Typography className="color">
            NFT
        </Typography>
        </div>
        <div >
        <Typography className="about-us">Useful Links</Typography>
        <Typography className="color">
            Free rewards
        </Typography>
        <Typography className="color">
            Documentation
        </Typography>
        <Typography className="color">
            Affiliate program
        </Typography>
        </div>
        <div >
        <Typography className="about-us">Social</Typography>
        <Typography className="color">
            Changelog
        </Typography>
        <Typography className="color">
            License
        </Typography>
        <Typography className="color">
            Site Maps
        </Typography>
        <Typography className="color">
            News
        </Typography>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
        <Typography>
        copyright 2023 DoraDesign All Rights Reserved
        </Typography>
        <Typography>
        This page uses cookies. See cookies details <u>here</u>
        </Typography>
    </div>
    </>

  );
};

export default Footer;
