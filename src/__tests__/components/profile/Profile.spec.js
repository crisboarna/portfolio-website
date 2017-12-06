import React from 'react';
import { shallow, mount } from 'enzyme';
import Profile from '../../../components/profile/Profile';

describe('Profile', () => {
  it('renders without crashing', () => {
    const component = shallow(<Profile />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<Profile/>);
    expect(component).toMatchSnapshot();
  });
});