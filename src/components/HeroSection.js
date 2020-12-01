import React from 'react';
import '../App.css';
import { Button1 } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src='/Autonom/videos/video-4.mp4' autoPlay loop muted />
            <img src='/Autonom/images/logo.gif' className="home_logo"/>
            <img src='/Autonom/images/Pratik-logo 1 overlay.png' className="home_logo1"/>

      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PRATIK <span className="subscript">LITE</span> <i className='far fa-play-circle' />
        </Button1>
      </div>
    </div>
  );
}

export default HeroSection;
