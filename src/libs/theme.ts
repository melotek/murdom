import { PaletteMode, Theme } from '@mui/material';

// declare module '@mui/material/styles' {
//   interface Theme {
//     text: {
//       primery: string;
//       secondary: string;
//       black: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     text: {
//       primery: string;
//       secondary: string;
//       black: string;
//     };
//   }
// }

// type Typetext = {

//     primery: string;
//     secondary: string;
//     black: string;
 
// } 

// Create a theme instance.
const getDesignTokens = (mode: PaletteMode) => ({

  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations defauylt 375
    complex: 475,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  },
  palette: {
    mode: mode,
    // palette values for light mode
    primary: { main: 'hsl(37, 52%, 58%)' },
    secondary: { main: 'hsla(37, 52%, 58%, .7)' },
    background: {
      default: mode === 'dark' ? 'hsl(0, 2%, 8%)' : 'hsl(30, 40%, 98%)',
      paper: 'dark' ? 'hsl(30, 40%, 98%)' : 'hsl(0, 2%, 8%)',
    },
    success: {
      main: "#020202"
    },
    text: {
      secondary: 'hsl(38, 35%, 46%)',
      primary: 'dark' ? '#fff' : 'hsl(0, 2%, 8%)',
      // black: "#020202"
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Cormorant'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'dark' ? '#fff' : 'hsl(0, 2%, 8%)',
        },
      },
    },
  },
});
export default getDesignTokens;
