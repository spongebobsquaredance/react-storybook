import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  background: ${p => p.theme.colors.textLight};
  border: 2px solid black;
  display: inline-block;
  margin: 6px;
  height: 100px;
  width: 100px;
`

const Text = styled.h1`
  font-family: ${p => p.theme.font.primary};
`

const SmallBox = ({ boxText }) => {
  return (
    <Box>
      <Text>{boxText}</Text>
    </Box>
  );
};

SmallBox.propTypes = {
  boxText: PropTypes.string
};

export default SmallBox;
