import { Typography } from '@mui/material';
import React from 'react';
import '../styles/navbar.scss'
import Logo from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='main-section'>
    <div className='logo'>
    <img src={Logo} alt='logo' width='20' height='20' />
        <Typography className='main-name'>
         GreenBank
        </Typography>
    </div>
    <div className='menu'>
      <Typography>
        Why Us 
      </Typography>
      <Typography>
        Services
      </Typography>
      <Typography>
        Our Process
      </Typography>
      <Typography>
        Payments
      </Typography>
      <Typography>
        FAQs
      </Typography>
    </div>
    <div className='button'>
      Contact
    </div>
    </div>
  )
}

export default Navbar;


