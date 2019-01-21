import styled from 'styled-components';

const SmallBox = styled.div`
  background: ${p => p.theme.colors.textLight};
  border: 2px solid black;
  display: inline-block;
  margin: 6px;
  height: 24px;
  width: 24px;
`

export default SmallBox;
