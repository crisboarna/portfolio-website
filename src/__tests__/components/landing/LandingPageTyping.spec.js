import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPageTyping from '../../../components/landing/LandingPageTyping';

describe('LandingPageTyping', () => {
  it('renders without crashing', () => {
    const component = shallow(<LandingPageTyping />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<LandingPageTyping/>);
    expect(component).toMatchSnapshot();
  });

  it('sets state to message rendered', () => {
    const component = shallow(<LandingPageTyping/>);
    component.instance().onIAmTypingDone();
    expect(component.state().renderMsg).toEqual(true);
  });

  it('sets state to typing done', () => {
    const component = shallow(<LandingPageTyping/>);
    component.instance().done();
    expect(component.state().typing).toEqual(true);
  });
});