import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  const { landingPage } = params;
  return {
    menu: {
      display: "block",
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
    mobile: {
      display: "block",
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },
    mobileContent: {
      "a,button": {
        color: landingPage ? theme.colors.white[0] : theme.colors.black[0],
        fontSize: 20,
        fontWeight: 700,
        textDecoration: "none",
        lineHeight: "30px",
        transition: "all 0.5s",
        background: "transparent",
        marginBottom: 5,
        padding: 10,
        "&:hover": {
          color: ` ${theme.colors.orangePrimary[6]}`,
          textDecoration: "underline",
        },
      },

      button: {
        border: 0,
        background: "none",
      },
    },
    services: {
      background: "none",
      border: "none",
      color: landingPage ? theme.colors.white[0] : theme.colors.greyDark[6],
      fontSize: 20,
      padding: 0,
      fontWeight: 700,
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: 10,
      cursor: "pointer",
      svg: {
        fill: landingPage ? theme.colors.white[0] : theme.colors.greyDark[6],
      },
      "&:hover": {},
    },
    dropDown: {
      background: "white",
      border: "none",
      borderRadius: 8,

      boxShadow: `0px 4px 25px 0px ${theme.fn.rgba(
        theme.colors.black[0],
        0.13
      )}`,
    },

    item: {
      borderRadius: 8,
      color: theme.colors.black[0],
      fontSize: 20,
      fontWeight: 400,
      textDecoration: "none",
      lineHeight: "30px",
      marginBottom: 10,
      padding: 10,
      background: "#E8E6E4",
      "&:hover": {
        background: ` ${theme.colors.orangePrimary[6]}`,
        color: theme.colors.white[0],
      },
    },
  };
});

const DropDownMenuStyle = (params) => useStyles(params);

export default DropDownMenuStyle;
