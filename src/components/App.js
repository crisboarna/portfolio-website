import React from 'react';

import Header from './Header';
import LandingVideo from './landing/LandingPage';
import Profile from './profile/Profile';
import WIP from './WIP';
import '../styles/App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <LandingVideo/>
      <Profile/>
      <WIP/>
    </div>
  );
};

export default App;