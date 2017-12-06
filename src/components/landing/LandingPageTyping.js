import React, { Component } from 'react';
import Typist from 'react-typist';

import '../../../node_modules/react-typist/dist/Typist.css';
import '../../styles/landing/LandingPageTyping.css';

export default class LandingPageTyping extends Component {
  constructor() {
    super();
    this.state = {
      typing: true,
      renderMsg: false
    }
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  };

  onIAmTypingDone = () => {
    this.setState({renderMsg:true});
  };

  render() {
    return this.state.typing
      ? <div className="row">
        <Typist className='col-xs-2 col-sm-offset-4 typing-top landing-typing'
        avgTypingDelay={100}
        cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}
        onTypingDone={this.onIAmTypingDone}>
          <b className='pulsate'>I am</b>
        </Typist>
        {this.state.renderMsg ?
        <Typist
          className='col-md-6 col-xs-pull-1 typing landing-typing'
          avgTypingDelay={100}
          startDelay={1000}
          onTypingDone={this.done}>
          creative.
          <Typist.Delay ms={500} />
          <Typist.Backspace count={9} delay={200} />
          the enabler of your dreams.
          <Typist.Delay ms={500} />
          <Typist.Backspace count={27} delay={200} />
          a fullstack developer.
          <Typist.Delay ms={1500} />
          <Typist.Backspace count={24} delay={200} />
          Cristian.
          <Typist.Delay ms={3000} />
        </Typist> : ''}
      </div>
      : ''
  }
}