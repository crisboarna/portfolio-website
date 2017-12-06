import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileTitleSection from '../../../components/profile/ProfileTitleSection';

describe('ProfileTitleSection', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProfileTitleSection />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<ProfileTitleSection/>);
    expect(component).toMatchSnapshot();
  });
});
