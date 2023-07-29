import { createTheme, type ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0DC34E',
    },
    secondary: {
      main: '#3075AE',
    },
  },
  typography: {
    h5: {
      fontFamily: 'Space Grotesk',
    },
    h1: {
      fontFamily: 'Space Grotesk',
    },
    h2: {
      fontFamily: 'Space Grotesk',
    },
    h3: {
      fontFamily: 'Space Grotesk',
    },
    h4: {
      fontFamily: 'Space Grotesk',
    },
    h6: {
      fontFamily: 'Space Grotesk',
    },
    fontFamily: 'Lexend Deca',
  },
};

export const main_theme = createTheme(theme);