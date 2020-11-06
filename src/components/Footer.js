import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      ;
    }
  };
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <h4>A team of Technology Enthusiasts from Vellore 
            Institute of Technology, Vellore. Working on diverse 
            problems in Autonomous Vehicles, Blockchain, Professional 
            Electronics and many more.</h4>
          </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Emergency Contacts<h4 class='small'>*Click to copy*</h4></h2>
            <h4 onClick={() => copyToClipBoard('011-23978046')}>
              Covid Helpline Number
            </h4>
            <h4 onClick={() => copyToClipBoard('102')}>
              Ambulance Helpline Number
            </h4>
            </div>
            <div class='footer-link-items'>
            <h2>Mail</h2>
            <a href="mailto:ncov2019@gov.in">Covid Helpline Mail</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
               <img src='images/Pratik-logo.png' className="logo"/>
            </Link>
          </div>
          <small class='website-rights'>AUTONOM © 2020</small>
          <div class='social-icons'>
            <ul> 
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fab fa-facebook"></span>
                </a> 
              </li>
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fab fa-twitter"></span>
                </a> 
              </li>
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fab fa-instagram"></span>
                </a> 
              </li>
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fab fa-github"></span>
                </a> 
              </li>
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span class="fab fa-linkedin"></span>
                </a> 
              </li>
            </ul>  
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
