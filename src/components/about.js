import { Typography } from '@mui/material'
import React from 'react';
import "../styles/about.scss"

const About = () => {
  return (
    <div className='about-container'>
    <div>
        <Typography className='years'>
            16y
        </Typography>
        <Typography className='experience'>
            Experience
        </Typography>
    </div>
    <div>
        <Typography className='years'>
            250+
        </Typography>
        <Typography className='experience'>
            Merchant Partner
        </Typography>
    </div>
    <div>
        <Typography className='years'>
            18+
        </Typography>
        <Typography className='experience'>
            Years Experience
        </Typography>
    </div>
    <div>
    <Typography className='years'>
        10.2k+
    </Typography>
    <Typography className='experience'>
        Worldwide Clients
    </Typography>
    </div>
    </div>
  )
}

export default About