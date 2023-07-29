import { createTheme, type ThemeOptions } from "@mui/material";

const theme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0DC34E",
    },
    secondary: {
      main: "#3075AE",
    },
  },
  typography: {
    h1: {
      fontFamily: "Space Grotesk",
      fontSize: "72pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h2: {
      fontFamily: "Space Grotesk",
      fontSize: "48pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontFamily: "Space Grotesk",
      fontSize: "32pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontFamily: "Space Grotesk",
      fontSize: "24pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h5: {
      fontFamily: "Space Grotesk",
      fontSize: "18",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    fontFamily: "Lexend Deca",
  },
};

export const main_theme = createTheme(theme);
