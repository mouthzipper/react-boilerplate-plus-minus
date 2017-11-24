/**
 * Testing our Button component
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const text = 'Click me!';
    const renderedComponent = shallow(
      <Button primary>{text}</Button>
    );
    expect(renderedComponent.length).toEqual(1);
  });

  it('renders its children', () => {
    const text = 'Click me!';
    const renderedComponent = shallow(
      <Button>{ text }</Button>
    );
    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });
  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const children = 'Test';
    const renderComponent = (props = {}) => mount(
      <Button {...props}>
        {children}
      </Button>
    );
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
