import React from 'react';
import Scrollchor from 'react-scrollchor';

import '../styles/Header.css';
import Logo from '../media/HeaderLogo.png';

const Header = () => {
  return (
    <header data-spy="affix" data-offset-top="100">
      <div className="container clearfix">
        <img id="logo" alt={'logo'} src={Logo}/>
        <nav>
          <Scrollchor to='#landingPage'>Home</Scrollchor>
          <Scrollchor to='#profile'>Profile</Scrollchor>
        </nav>
      </div>
    </header>
  );
};

export default Header;