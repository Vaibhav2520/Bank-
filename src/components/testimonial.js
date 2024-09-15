import { Typography } from "@mui/material";
import React from "react";
import "../styles/testimonial.scss";
import Quotes from "../svg/quotes.svg";
import HamdiKhan from "../svg/hamidkhan.svg";
import WadeWarren from "../svg/wadewarren.svg";
import JennyWilson from "../svg/jennywilson.svg";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="card-one">
        <img src={Quotes} alt="quotes" width="56" height="56" />
        <Typography className="content">
          "Great session! Dani was super helpful. She <br />
          shared some practical advice on how can <br />
          lorem ip we go about refining our service <br />
          offerings."
        </Typography>
        <div className="card-one-subsection">
          <img src={HamdiKhan} alt="HamidKhan" />
          <div>
            <Typography className="icon">Hamid Khan</Typography>
            <Typography className="sub-content">UIUX Designer</Typography>
          </div>
        </div>
      </div>
      <div className="card-one">
        <img src={Quotes} alt="quotes" width="56" height="56" />
        <Typography className="content">
          "It's is both attractive and highly adaptable.
          <br /> It's exactly what I've been looking <br />
          forefinitely wo lorem ipsum dolorth the <br />
          investment."
        </Typography>
        <div className="card-one-subsection">
          <img src={WadeWarren} alt="WadeWarren" />
          <div>
            <Typography className="icon">Wade Warren</Typography>
            <Typography className="sub-content">Web Designer</Typography>
          </div>
        </div>
      </div>
      <div className="card-one">
        <img src={Quotes} alt="quotes" width="56" height="56" />
        <Typography className="content">
          "I am really satisfied with it. I'm good to go.
          <br /> It really saves me time and effort. It's is <br /> exactly what
          our business has been <br />
          lacking. "
        </Typography>
        <div className="card-one-subsection">
          <img src={JennyWilson} alt="JennyWilson" />
          <div>
            <Typography className="icon">Jenny Wilson</Typography>
            <Typography className="sub-content">Trust Administrator</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
