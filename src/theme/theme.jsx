import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

import WorkSansTTF from '../assets/fonts/Teko-Regular.ttf';

const WorkSans = {
  fontFamily: 'Teko Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Teko Regular'),
    local('Teko Regular'),
    url(${WorkSansTTF}) format('truetype')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const colors = {
  white: "#fff",
  black: '#000',
  blue: "#FF2D82",
  lightGray: "#2C3040;",
  darkGray: "rgba(202, 209, 221,.5)",
  green: '#1abc9c',
  red: '#ed4337',
  orange: 'orange',

  text: "#212529",
};

const breakpoints = createBreakpoints({
  keys: ["xs", "mm", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    mm: 300,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1800
  }
})

const iswapTheme =  {
  typography: {
    fontFamily: [
      '"Teko Regular"',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '36px',
      fontWeight: '500',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      letterSpacing: '0.5px',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '24px',
      fontWeight: '500',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      letterSpacing: '0.5px',
      lineHeight: 1.2,
      color: colors.blue
    },
    h3: {
      fontSize: '18px',
      fontWeight: '400',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      letterSpacing: '0.5px',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '20px',
      fontWeight: '400',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: 1.2,
      letterSpacing: '0.5px',
      '@media (max-width: 899px)': {
        fontSize: '18px',
      },
    },
    h5: {
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.5px',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: 1.2,
      '@media (max-width: 899px)': {
        fontSize: '16px',
      },
    },
    h6: {
      fontSize: '16px',
      fontWeight: '400',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      letterSpacing: '0.5px',
      lineHeight: 1.2,
      color: colors.darkGray
    },
  },
  type: 'light',
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [WorkSans],
      },
    }
  },
  palette: {
    primary: {
      main: colors.blue
    },
    secondary: {
      main: colors.blue
    },
    text: {
      primary: colors.text,
      secondary: colors.text
    }
  },
  breakpoints: breakpoints
};

export default iswapTheme;
