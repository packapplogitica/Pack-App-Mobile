import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      backgroundColor: "#FFFFFF",
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.tiny,
      [theme.fn.smallerThan("md")]: {
        padding: theme.spacing.xxs,
      },
    },
    name: {
      color: theme.colors.black[0],
      fontWeight: 400,
      fontSize: theme.fontSizes.h5[0],
      lineHeight: "30px",
      [theme.fn.smallerThan("md")]: {
        fontSize: theme.fontSizes.h6[0],
      },
    },
    email: {
      color: theme.colors.grey[4],
      fontWeight: 300,
      fontSize: theme.fontSizes.h6[0],
      lineHeight: "30px",
      [theme.fn.smallerThan("md")]: {
        fontSize: theme.fontSizes.body[0],
      },
    },
    link: {
      a: {
        fontSize: theme.fontSizes.h6[0],
        fontWeight: 300,
        textDecoration: "none",
        color: theme.colors.orangePrimary[6],
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    secondaryLinks: {
      a: {
        color: theme.colors.grey[6],
        "&:hover": {
          textDecoration: "underline",
          color: theme.colors.orangePrimary[6],
        },
      },
      button: {
        padding: 0,
        textAlign: "start",
        background: "none",
        color: theme.colors.grey[6],
        fontSize: theme.fontSizes.h6[0],
        fontWeight: 300,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          color: theme.colors.orangePrimary[6],
          background: "none",
        },
      },
    },
  };
});

const CardProfileStyle = (params) => useStyles(params);

export default CardProfileStyle;
