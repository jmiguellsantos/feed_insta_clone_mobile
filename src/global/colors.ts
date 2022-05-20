/**
 * FOR REFERENCE
 *
 const LIGHT_COLOR_THEME: ColorTheme = {
   secondary: '#32db64',
   danger: '#f53d3d',
   light: '#f4f4f4',
   dark: '#222222',
   white: '#ffffff',
   black: '#020202',
   gray: '#7C7C7C',
   background: '#ffffff',
   backgroundModal: '#00000033',
   backgroundCard: '#f6f6f6',
   text: '#ffffff',
   borderPrimary: '#DAE6F5',
   shadow: '#C4C4C4',
   primary: '#3C88D7',
  curiousBlue: '#368CD7',
  logout: '#7900BC',
  superNova: '#FFCE00',
  border: '#B7B7B7',
  header: '#f4f4f4',
};
 *
 **/

const colors = {
  //Main Colors
  primary: '#368CD7', //curiousBlue
  purple: '#9E2EDE', //logout

  //Background
  backgroundBlue: '#E3EFFD', //borderPrimary
  backgroundLightBlue: '#F2F3FA',
  backgroundWhite: '#fff',
  backgroundShadow: '#00000033', //backgroundModal

  //Neutral
  black: '#000000',
  gray100: '#292929', //dark
  gray50: '#535353',
  gray200: '#666666',
  gray300: '#7C7C7C', //gray
  gray: '#7C7C7C',
  gray400: ' #A3A3A3',
  gray500: '#B7B7B7', //border
  gray600: '#CCCCCC', //shadow
  gray700: '#E0E0E0',
  gray800: '#F5F5F5', //header //backgroundCard //light

  white: '#fff', //background

  //Cart Shopping
  shoppingCart: '#EE743D',

  //Feedback
  success: '#17AB9F',
  danger: '#E50441',

  alert: '#FF6C27',
  helper: '#FFCE00', //superNova

  green300: '#a3ded9',
  green500: '#26a69a',
  blue500: '#eef3fa',

  //Border
  borderPrimary: '#DAE6F5',

  //Calendar Statuses
  closedWon: 'rgb(0, 168, 159)',
  reScheduled: 'rgb(72, 92, 135)',
  pending: 'rgb(72, 92, 135)',
  closedLost: 'rgb(211, 46, 70)',
  cancelled: 'rgb(211, 46, 70)',
  inProgress: 'rgb(247, 208, 70)',
  checkInOut: '#F3570C',
};

export default colors;

export type ColorType = keyof typeof colors;
