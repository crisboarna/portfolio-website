import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import SpeedometerIcon from 'react-mdi/icons/speedometer';
import LightbulbIcon from 'react-mdi/icons/lightbulb';
import CodeIcon from 'react-mdi/icons/xml';
import RotateIcon from 'react-mdi/icons/rotate-3d';

import '../../styles/profile/ProfileShieldSection.css';

const ProfileShieldSection = () => {
  return (
    <div className="row col-lg-12 text-center">
      <br/><br/>
      <div className='container'>
        <div className="row col-lg-12">
          <div className="col-sm-6 col-md-3">
            <ScrollAnimation animateIn='flipInY' animateOnce={true} delay={250}>
              <div className='col-xs-12 img-responsive'><span className='shield'><SpeedometerIcon size={85}/></span></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
              <h4 className='propertyTitle'>Fast</h4>
              <p className='propertyText'>
                Swift processing, cloud friendly horizontal scalability and lag free interactions are my priority.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-md-3">
            <ScrollAnimation animateIn='flipInY' animateOnce={true}  delay={500}>
              <div className='col-xs-12 img-responsive'><span className='shield'><LightbulbIcon size={85}/></span></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={500}>
              <h4 className='propertyTitle'>Ideas</h4>
              <p className='propertyText'>
                Exposure to plethora of products and methodologies enable me to bring alternative solutions.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-md-3">
            <ScrollAnimation animateIn='flipInY' animateOnce={true} delay={750}>
              <div className='col-xs-12 img-responsive'><span className='shield'><RotateIcon size={85}/></span></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={750}>
              <h4 className='propertyTitle'>Collaboration</h4>
              <p className='propertyText'>
                I discuss with stakeholders to nurture and transform ideas into well thought out design specs.
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-md-3">
            <ScrollAnimation animateIn='flipInY' animateOnce={true} delay={1000}>
              <div className='col-xs-12 img-responsive'><span className='shield'><CodeIcon size={85}/></span></div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={1000}>
              <h4 className='propertyTitle'>Code</h4>
              <p className='propertyText'>
                Strong believer of TDD and design patterns can swiftly iterate on products.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShieldSection;