import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPage from '../../../components/landing/LandingPage';

describe('LandingPage', () => {
  it('renders without crashing', () => {
    const component = shallow(<LandingPage />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<LandingPage/>);
    expect(component).toMatchSnapshot();
  });
});