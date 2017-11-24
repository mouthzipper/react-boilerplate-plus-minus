import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import App from '../index';

describe('<App />', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });
  it('should render the header', () => {
    expect(renderedComponent.find(Header).length).toBe(1);
  });
  it('should render some routes', () => {
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
  it('should render the footer', () => {
    expect(renderedComponent.find(Footer).length).toBe(1);
  });
});
