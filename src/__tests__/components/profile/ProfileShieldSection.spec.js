import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileShieldSection from '../../../components/profile/ProfileShieldSection';

describe('ProfileShieldSection', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProfileShieldSection />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<ProfileShieldSection/>);
    expect(component).toMatchSnapshot();
  });
});