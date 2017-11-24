import React, { Children } from 'react';
import PropTypes from 'prop-types';

import OnBoarding from './OnBoarding';
import Goal from './Goal';
import Wrapper from './Wrapper';

function Thumbnail(props) {
  let thumbnail;
  const { onBoarding } = props;

  if (onBoarding) {
    thumbnail = (
      <OnBoarding onClick={props.onClick}>
        { Children.toArray(props.children) }
      </OnBoarding>
    );
  } else {
    thumbnail = (
      <Goal onClick={props.onClick}>
        { Children.toArray(props.children) }
      </Goal>
    );
  }

  return (
    <Wrapper>
      {thumbnail}
    </Wrapper>
  );
}

Thumbnail.propTypes = {
  onClick: PropTypes.func,
  onBoarding: PropTypes.bool,
  children: PropTypes.node,
};

export default Thumbnail;
