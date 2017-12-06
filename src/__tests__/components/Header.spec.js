import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const component = shallow(<Header />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<Header/>);
    expect(component).toMatchSnapshot();
  });
});