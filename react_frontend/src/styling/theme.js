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
    background: {
      default: "#F5F6F9",
    },
  },
  spacing: 8,
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "HeroTitle",
          },
          style: {
            fontSize: "4.5rem",
            color: "#F5F5F5",
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
            color: "#F5F5F5",
            fontFamily: "PT Sans Caption, San Serif",
            padding: "2.7rem",
          },
        },
        {
          props: {
            variant: "headline",
          },
          style: {
            fontSize: "1.2rem",
          },
        },
        {
          props: {
            variant: "cardBody",
          },
          style: {
            fontSize: "1rem",
          },
        },
        {
          props: {
            variant: "watchlistTitle",
          },
          style: {
            fontSize: "1.15rem",
          },
        },
        {
          props: {
            variant: "navMenuItemUser",
          },
          style: {
            fontSize: "1.2rem",
            padding: ".8rem",
            marginRight: "1.5rem",
          },
        },
      ],
    },
    MuiMenuItem: {
      variants: [
        {
          props: {
            variant: "watchlist",
          },
          style: {
            fontSize: "1rem",
          },
        },
      ],
    },
  },
});
