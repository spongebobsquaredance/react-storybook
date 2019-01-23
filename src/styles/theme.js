import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster');
`

export const theme = {
  colors: {
    // Text
    textDark: '#0f0a3c',
    textLight: '#cdffeb',
    textMedium: '#07456f',
    textPrimary: '#009f9d'
  },
  font: {
    primary: "'Lobster', cursive"
  }
};

export default theme;
