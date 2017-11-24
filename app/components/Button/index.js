/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import Wrapper from './Wrapper';

function Button(props) {
  let button;
  const { inverse, large, primary } = props;

  if (primary) {
    button = (
      <PrimaryButton inverse={inverse} large={large} onClick={props.onClick}>
        { props.children }
      </PrimaryButton>
    );
  } else {
    button = (
      <SecondaryButton inverse={inverse} large={large} onClick={props.onClick}>
        { props.children }
      </SecondaryButton>
    );
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  inverse: PropTypes.bool,
  large: PropTypes.bool,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
