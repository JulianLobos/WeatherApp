import React from 'react';
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
        <p>by Julian Lobos</p>
        <div className='networks'>
            <a href='https://www.linkedin.com/in/julianlobos25/' target='_blank' rel="noreferrer"><LinkedInIcon className='networkIcon'/></a>
            <a href='https://github.com/JulianLobos/' target='_blank' rel='noreferrer'><GitHubIcon className='networkIcon'/></a>
        </div>
    </div>
  )
}

export default Footer;