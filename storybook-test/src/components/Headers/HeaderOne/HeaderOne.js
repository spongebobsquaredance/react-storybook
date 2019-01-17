import React from 'react';
import PropTypes from 'prop-types';

const HeaderOne = ({headerOneText}) => {
  return (
    <h1>{headerOneText}</h1>
  );
}

HeaderOne.propTypes = {
  headerOneText: PropTypes.string
};

export default HeaderOne;
