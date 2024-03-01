import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      //-- whites
      white: "#ffffff",
      silverWhite: "#f1f6f9",
      //-- blacks
      charcoal: "#393e46",
      darkCharcoal: "#222831",
      black: "#1E1E1E",
      //-- blues
      sereneBlue: "#D3DDE6",
      slateBlueLight: "#9BA4B4",
      slateBlueDark: "#394867",
      midnightBlue: "#14274e",
      //-- greens
      greenLight: "#8ADFB5",
      greenDark: "#327145",
      //-- red
      redLight: "#FFB6B6",
      redDark: "#A51D1D",
    },
    fonts: ["Roboto"],
    fontSizes: {
      xs: "0.78rem",
      s: "1.1rem",
      m: "1.3rem",
      l: "1.733rem",
      xl: "1.85rem",
      xxl: "2.02rem",
    },
    fontWeights: {
      thin: "100",
      light: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
    },
};


function Theme(props) {
  return <ThemeProvider theme={theme} {...props} />;
}





export default Theme;