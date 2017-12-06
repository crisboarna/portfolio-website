import React from 'react';

import ProfileTitleSection from './ProfileTitleSection';
import ProfileShieldSection from './ProfileShieldSection';
import ProfileAvatarSection from './ProfileAvatarSection';
import ProfileSkillSection from './ProfileSkillSection';

import "../../styles/profile/Profile.css";

const Profile = () => {
  return (
    <div id='profile'>
      <div className="col-lg-12 spacer"/>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ProfileTitleSection/>
        <ProfileShieldSection/>
        <div className="row col-lg-12 text-center">
          <div className='container'>
            <div className="row col-lg-12">
              <div className="col-lg-12 spacer"/>
              <ProfileAvatarSection/>
              <ProfileSkillSection/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;