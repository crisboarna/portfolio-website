import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import '../../styles/profile/ProfileTitleSection.css';

const ProfileTitleSection = () => {
  return (
    <div className="row col-lg-12 text-center">

      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} offset={50}>
        <div className='profileTitle'>PROFILE</div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}  delay={500}>
        <div><hr/></div>
      </ScrollAnimation>

      <br/><br/>

      <div className='container'>
        <div className="row col-lg-12">
          <div className="col-xs-6 col-sm-offset-2 col-sm-2">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={300}>
              <div className='propertyTitle'>Design.</div>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-sm-2">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={500}>
              <div className='propertyTitle'>Delivery.</div>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-sm-2">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={700}>
              <div className='propertyTitle'>Back-end.</div>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-sm-2">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={900}>
              <div className='propertyTitle'>Front-end.</div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTitleSection;