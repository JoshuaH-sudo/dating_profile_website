import { createTheme, type ThemeOptions } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    hard_accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent: PaletteOptions["primary"];
    hard_accent: PaletteOptions["primary"];
  }
}

const theme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      light: "#0DC34E",
      main: "#139A43",
      dark: "#1F763E",
    },
    secondary: {
      light: "#3075AE",
      main: "#30638E",
      dark: "#2F5677",
    },
    accent: {
      light: "#FFC700",
      main: "#F5B700",
      dark: "#D2A318",
    },
    hard_accent: {
      light: "#B20642",
      main: "#820933",
      dark: "#66122F",
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
    subtitle1: {
      textAlign: "center",
      fontFamily: "Lexend Deca",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "normal",
    },
    fontFamily: "Lexend Deca",
  },
};

export const main_theme = createTheme(theme);
