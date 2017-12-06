import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../components/App';

describe('App', () => {
  it('App renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });

  it('compare to snapshot', () => {
    const component = mount(<App />);
    expect(component).toMatchSnapshot();
  });
});
