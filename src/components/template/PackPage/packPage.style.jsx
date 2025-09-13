import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      background: theme.fn.rgba(theme.colors.grey[0], 0.3),
      padding: theme.spacing.md,
      height: "100%",
      [theme.fn.smallerThan("md")]: {
        padding: 0,
      },
    },
    container: {
      backgroundColor: "#FFFFFF",
      padding: theme.spacing.xs,
      borderRadius: theme.spacing.tiny,
      [theme.fn.smallerThan("md")]: {
        padding: theme.spacing.xxs,
      },
    },
    boxState: {
      padding: 10,
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
    },
    tr: {
      "&:hover": {
        cursor: "pointer",
        background: theme.colors.orangePrimary[6],
        color: "#FFFF",
      },
    },
    title: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 22,
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
    searchInput: {
      input: {
        "&:focus": {
          borderColor: "#FE7D14",
        },
      },
    },
    total: {
      fontWeight: 500,
      fontSize: 14,
      color: 'rgba(181, 183, 192, 1)',
    },
  };
});

const PackPageStyles = (params) => useStyles(params);

export default PackPageStyles;
