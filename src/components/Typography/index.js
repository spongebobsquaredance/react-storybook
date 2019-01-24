import styled from 'styled-components';

export const HeaderText = styled.div`
  font-family: ${p => p.theme.font.secondary};
  font-weight: 700;
`

export const H1 = styled(HeaderText)`
  font-size: 48px;
`

export const H2 = styled(HeaderText)`
  font-size: 32px;
`

export const H3 = styled(HeaderText)`
  font-size: 24px;
`

export const H4 = styled(HeaderText)`
  font-size: 18px;
`

export const H5 = styled(HeaderText)`
  font-size: 16px;
`

export const H6 = styled(HeaderText)`
  font-size: 14px;
`
