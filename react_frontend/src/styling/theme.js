import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3867d6",
    },
    secondary: {
      main: "#8854d0",
    },
    error: {
      main: "#eb3b5a",
    },
    warning: {
      main: "#fa8231",
    },
    info: {
      main: "#2d98da",
    },
    success: {
      main: "#20bf6b",
    },
  },
  spacing: 8,
  typography: {
    htmlFontSize: "62.5%",
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "HeroTitle",
          },
          style: {
            fontSize: "4.5rem",
            color: "F3F3F3",
            fontFamily: "PT Sans Caption, San Serif",
            margin: "2.7rem",
          },
        },
        {
          props: {
            variant: "HeroSubTitle",
          },
          style: {
            fontSize: "2.8rem",
            color: "F3F3F3",
            fontFamily: "PT Sans Caption, San Serif",
            padding: "2.7rem",
          },
        },
      ],
    },
  },
});
