import nikola from './nikola.jpeg';
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import React from 'react';

export default function Business_Card() {
    return (
        <div className="App">
          <div className='ímg-container' >
            <img src={nikola} className="main-img" alt="myPic" />
          </div>
          <div className='sub-container'>
            <h2>Nikola Bogicevic</h2>
            <h4 className='red'>Front-End Developer</h4>
            <h5>nikola.bogicevic1984@gmail.com</h5>
            <div className='connect'>
              <a href='mailto:nikola.bogicevic1984@gmail.com' className='email'>
                Email
              </a>
              <a href='https://www.linkedin.com/in/nikola-bogi%C4%87evi%C4%87-068abaa3/' className='linkedin'>
                Linkedin
              </a>
            </div>
            <div className='about'>
              <h3>About</h3>
              <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className='interests'>
              <h3>Interests</h3>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
          </div>
            <div>
            <div className='footer'>
              <a href="https://www.linkedin.com/">
                <img 
                  className='icons'
                  src={linkedin}
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  className='icons'
                  src={instagram}
                  alt=""
                />
              </a>
              <a href="https://twitter.com/">
                <img
                  className='icons'
                  src={twitter}
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  className='icons'
                  src={facebook}
                  alt=""
                />
              </a>
            </div>
            </div>
        </div>
      );
}