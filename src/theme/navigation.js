import palette from './palette';

module.exports = {
  light: {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(0, 0, 0)',
      card: palette.navigation.card,
      text: 'rgb(0, 0, 0)',
      border: 'rgb(0, 0, 0)',
      notification: 'rgb(255, 69, 58)',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(0, 0, 0)',
      card: palette.navigation.card,
      text: 'white',
      border: 'rgb(0, 0, 0)',
      notification: 'rgb(255, 69, 58)',
    },
  },
};
