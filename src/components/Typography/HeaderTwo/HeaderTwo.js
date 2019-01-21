import React from 'react';
import PropTypes from 'prop-types';

const HeaderTwo = ({headerTwoText}) => {
  return (
    <h2>{headerTwoText}</h2>
  );
}

HeaderTwo.propTypes = {
  headerTwoText: PropTypes.string
};

export default HeaderTwo;
