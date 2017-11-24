import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Button from 'components/Button';
import HomePage from '../index';

describe('<HomePage />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<HomePage />);
  });
  it('should render the HomePage', () => {
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should render some routes', () => {
    expect(renderedComponent.find(Route).length).toBe(0);
  });
  it('should render buttons', () => {
    expect(renderedComponent.find(Button).length).toBe(5);
  });
});
