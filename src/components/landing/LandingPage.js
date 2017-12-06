import React from 'react';
import Scrollchor from 'react-scrollchor';

import LandingPageTyping from './LandingPageTyping';
import '../../styles/landing/LandingPage.css';

import mp4Video from '../../media/LandingVideo.mp4';
import webmVideo from '../../media/LandingVideo.webm';
import ogvVideo from '../../media/LandingVideo.ogv';
import LandingVideoSnapshot from '../../media/LandingVideoSnapshot.jpg';

const LandingPage = () => {
  return (
    <div id='landingPage'>
      <LandingPageTyping/>
      <video autoPlay muted loop>
        <source src={mp4Video} type="video/mp4"/>
        <source src={webmVideo} type="video/webm"/>
        <source src={ogvVideo} type="video/ogv"/>
        <img src={LandingVideoSnapshot} alt='Video Background'/>
      </video>
      <div id='scrollButton' className='scrollDownButton'>
        <Scrollchor to='#profile'><span></span>Scroll</Scrollchor>
      </div>
    </div>
  );
};

export default LandingPage;