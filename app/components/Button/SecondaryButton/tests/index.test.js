import React from 'react';
import { shallow } from 'enzyme';

import SecondaryButton from '../index';

describe('<SecondaryButton />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <SecondaryButton id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <SecondaryButton>{children}</SecondaryButton>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
