import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  const { landingPage } = params;

  return {
    header: {
      backgroundColor: landingPage ? theme.colors.greyDark[6] : "none",
      // padding: `${theme.spacing.xs}px ${theme.spacing.xxs}px`,
    },
    logMenu: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      padding: '20px 14px',
    },
    navMenu: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: '#6D7276',
      padding: 20,
      color: "#fff",
      "& a": {
        fontFamily: "Roboto",
        color: theme.colors.white[0],
        fontSize: 20,
        transition: "all 0.5s",
        "&:hover": {
          color: theme.colors.orangePrimary[6],
        },
      },
    },
    navMenuMobile: {
      display: "flex",
      justifyContent: "center",
      background: '#6D7276',
      padding: 20,
      color: "#fff",
      "& a": {
        fontFamily: "Roboto",
        color: theme.colors.white[0],
        fontSize: 20,
        transition: "all 0.5s",
        "&:hover": {
          color: theme.colors.orangePrimary[6],
        },
      },
    },
    item: {
      fontFamily: "Inder",
      color: landingPage ? theme.colors.white[0] : "black",
      fontSize: 20,
      fontWeight: 700,
      textDecoration: "none",
      lineHeight: "30px",
      transition: "all 0.5s",
      background: "transparent",
      "&:hover": {
        background: "none",
        borderBottom: `1px solid ${theme.colors.orangePrimary[6]}`,
      },
    },
    getStared: {
      background: theme.colors.orangePrimary[6],
      padding: 10,
      color: theme.colors.white[0],
      borderRadius: 35,
      "&:hover": {
        border: "none",
        background: theme.colors.orangePrimary[6],
        borderRadius: 35,
      },
    },
    active: {
      borderBottom: `1px solid ${theme.colors.orangePrimary[6]}`,
    },
    burger: {
      display: "none",
      [theme.fn.smallerThan("md")]: {
        display: "block",
      },
    },
    burgerContainer: {
      paddingRight: '14px',
    },
    secondaryLinks: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      gap: 30,
      [theme.fn.smallerThan("md")]: {
        justifyContent: "end",
      },
    },
  };
});
const Header = (params) => useStyles(params);

export default Header;
