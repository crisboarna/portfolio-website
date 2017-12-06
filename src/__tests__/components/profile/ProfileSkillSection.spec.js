import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileSkillSection from '../../../components/profile/ProfileSkillSection';

describe('ProfileSkillSection', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProfileSkillSection />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<ProfileSkillSection/>);
    expect(component).toMatchSnapshot();
  });
});