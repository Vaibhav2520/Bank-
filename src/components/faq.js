import { Typography } from "@mui/material";
import React from "react";
import "../styles/faq.scss";
import Divider from '@mui/material/Divider';

const Faq = () => {
  return (
    <div className="faq-container">
      <Typography className="heading">FAQs</Typography>
      <div className="accordian">
        <div className="accordian-section">
          <Typography className="sub-heading">
            What credit score do I need to apply for a credit card?
          </Typography>
          <Typography className="content">-</Typography>
        </div>
        <Typography className="sub-content">
          The required credit score may vary depending on the specific credit
          card. Generally, a good to excellent credit score (typically <br/> 670 or
          above) increases your chances of approval for premium credit cards.
        </Typography>
      </div>
      <Divider className="divider"/>
      <div className="accordian-one">
        <div className="accordian-section">
          <Typography className="sub-heading">
            What credit score do I need to apply for a credit card?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
      <Divider className="divider"/>
      <div className="accordian-one">
        <div className="accordian-section">
          <Typography className="sub-heading">
          Are there any annual fees associated with the credit card?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
      <Divider className="divider"/>
      <div className="accordian-one">
        <div className="accordian-section">
          <Typography className="sub-heading">
          How long does it take to receive the credit card once approved?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
      <Divider className="divider"/>
      <div className="accordian-one">
        <div className="accordian-section">
          <Typography className="sub-heading">
          How can I check my credit card balance and transactions?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
      <Divider className="divider"/>
      <div className="accordian-one">
        <div className="accordian-section">
          <Typography className="sub-heading">
          What should I do if my credit card is lost or stolen?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
      <Divider className="divider"/>
      <div className="accordian-two">
        <div className="accordian-section">
          <Typography className="sub-heading">
          Is my credit card information secure?
          </Typography>
          <Typography className="content">+</Typography>
        </div>
      </div>
    </div>
  );
};

export default Faq;
