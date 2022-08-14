import { PaletteMode } from '@mui/material'

// declare module '@mui/material/styles' {
//   interface Theme {
//     text: {
//       primery: string;
//       secondary: string;
//       grey: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     text: {
//       primery: string;
//       secondary: string;
//       grey: string;
//     };
//   }
// }

// type Typetext = {

//   primery: string;
//   secondary: string;
//   grey: string;

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

    ...(mode === 'light'
      ? {
          primary: {
            main: 'hsl(37, 52%, 58%)',
            contrastText: 'hsl(60, 2%, 60%)',
          },
          secondary: { main: 'hsla(37, 52%, 58%, .7)' },
          background: {
            default: 'hsl(37, 50%, 95%)',
            paper: 'hsl(37, 50%, 95%)',
          },
          common: {
            white: '#fff',
            blue: '#181D24',
          },
          success: {
            main: '#020202',
          },

          text: {
            primary: 'hsl(0, 2%, 8%)',
            secondary: '#fff',

            // black: "#020202"
          },
        }
      : {
          primary: {
            main: 'hsl(37, 52%, 58%)',
            contrastText: 'hsl(60, 2%, 60%)',
          },
          secondary: { main: 'hsla(37, 52%, 58%, .7)' },
          background: {
            default: 'hsl(0, 2%, 8%)',
            paper: 'hsl(37, 50%, 95%)',
          },

          common: {
            white: '#fff',
            blue: '#181D24',
          },
          success: {
            main: '#020202',
          },
          text: {
            primary: '#fff',
            secondary: 'hsl(0, 2%, 8%)',

            // black: "#020202"
          },
        }),

    // palette values for light mode
  },
  typography: {
    fontSize: 12,
    body1: {
      fontSize: 14,
    },
    fontFamily: ['Montserrat', 'Cormorant'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'dark' ? '#fff' : '#181D24',
        },
      },
    },
  },
})
export default getDesignTokens
