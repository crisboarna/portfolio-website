import React from 'react';

import Header from './Header';
import LandingVideo from './landing/LandingPage';
import Profile from './profile/Profile';
import Filler from './Filler';
import '../styles/App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <LandingVideo/>
      <Profile/>
      <Filler/>
    </div>
  );
};

export default App;