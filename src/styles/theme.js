import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700,700i');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i');
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
    primary: "'Merriweather', serif",
    secondary: "'Montserrat', sans-serif"
  }
};

export default theme;
