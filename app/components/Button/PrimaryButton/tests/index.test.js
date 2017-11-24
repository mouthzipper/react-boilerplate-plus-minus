import React from 'react';
import { shallow } from 'enzyme';

import PrimaryButton from '../index';

describe('<PrimaryButton />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <PrimaryButton id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <PrimaryButton>{children}</PrimaryButton>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
