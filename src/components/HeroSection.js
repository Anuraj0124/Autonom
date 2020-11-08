import React from 'react';
import '../App.css';
import { Button1 } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video src='/Autonom/videos/video-4.mp4' autoPlay loop muted />
      {/*<h1>PRATIK</h1>
            <p>(Pandemic Regulation
            and Tracking Intelligent Kit)</p>*/}
            <img src='/Autonom/images/logo.gif' className="home_logo"/>
            <img src='/Autonom/images/Pratik-logo 1 overlay.png' className="home_logo1"/>
            {/*<video src='videos/Pratik-logo.mov' type="mov"  autoPlay loop muted/>*/}

      {/*<ul class="text hidden">
              <li>P</li>
              <li class="ghost">a</li>
              <li class="ghost">n</li>
              <li class="ghost">d</li>
              <li class="ghost">e</li>
              <li class="ghost">m</li>
              <li class="ghost">i</li>
              <li class="ghost">c</li>
              <li class="spaced">R</li>
              <li class="ghost">e</li>
              <li class="ghost">g</li>
              <li class="ghost">u</li>
              <li class="ghost">l</li>
              <li class="ghost">a</li>
              <li class="ghost">t</li>
              <li class="ghost">i</li>
              <li class="ghost">o</li>
              <li class="ghost">n</li>
              <li class="spaced">A</li>
              <li class="ghost">n</li>
              <li class="ghost">d</li>
              <li class="spaced">T</li>
              <li class="ghost">r</li>
              <li class="ghost">a</li>
              <li class="ghost">c</li>
              <li class="ghost">k</li>
              <li class="ghost">i</li>
              <li class="ghost">n</li>
              <li class="ghost">g</li>
              <li class="spaced">I</li>
              <li class="ghost">n</li>
              <li class="ghost">t</li>
              <li class="ghost">e</li>
              <li class="ghost">l</li>
              <li class="ghost">l</li>
              <li class="ghost">i</li>
              <li class="ghost">g</li>
              <li class="ghost">e</li>
              <li class="ghost">n</li>
              <li class="ghost">t</li>
              <li class="spaced">K</li>
              <li class="ghost">i</li>
              <li class="ghost">t</li>
            </ul>*/}

      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED  <i className='far fa-play-circle' />
        </Button1>
        {/*<Button
                  className='btns'
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'
                >
                  WATCH TRAILER 
                </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
