import { Typography } from "@mui/material";
import React from "react";
import "../styles/cta.scss";
import Mobile from "../svg/mobile.svg";
import Appstore from "../svg/appstore.svg";
import Playstore from "../svg/playestore.svg";
const Cta = () => {
  return (
    <div className="cta-container">
      <div>
        <div className="cta-content">
          <Typography className="content">
            Easy Way to manage <br />
            your finances
          </Typography>
          <Typography className="sub-content">
            Easy to use mobile app that support on android and ios.
          </Typography>
        </div>
        <div className="social">
          <img src={Appstore} alt="Appstore" />
          <img src={Playstore} alt="playstore"  className="playstore"/>
        </div>
      </div>
      <img src={Mobile} alt="Mobile" className="image" />
    </div>
  );
};

export default Cta;
