import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollchor from 'react-scrollchor';

import Avatar from '../../media/Avatar.png';
import '../../styles/profile/ProfileAvatarSection.css';

const ProfileAvatarSection = () => {
  return (
    <div className="col-xs-6 col-lg-6">
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} offset={50}>
        <img src={Avatar} className='cropShield' alt='Avatar'/>
        <p className='avatarText'>I am afire with desire to sire cloud native fullstack systems.
          <br/>
          Experienced in delivering systems to companies ranging from investment banks to small startups.
          <br/>
          <Scrollchor to='#contact'><span></span>Let's make your dream come true.</Scrollchor>
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default ProfileAvatarSection;