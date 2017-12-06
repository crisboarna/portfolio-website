import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileAvatarSection from '../../../components/profile/ProfileAvatarSection';

describe('ProfileAvatarSection', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProfileAvatarSection />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<ProfileAvatarSection/>);
    expect(component).toMatchSnapshot();
  });
});