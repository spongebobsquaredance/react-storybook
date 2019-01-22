import LobsterFont from '../fonts/index';

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

const LobsterArray = LobsterFont.Lobster;

const fontMap = LobsterArray.map(i => ({ source: i.src, style: i.style, weight: i.weight }));
console.log('fontMap', fontMap);

export default theme;
