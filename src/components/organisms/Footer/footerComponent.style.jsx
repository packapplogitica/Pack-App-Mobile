import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    footer: {
      backgroundColor: theme.colors.greyDark[6],

      color: theme.colors.white[0],
      a: {
        color: theme.colors.white[0],
        textDecoration: " none",
        fontSize: 18,
        fontWeight: 300,
        "&:hover": {
          color: theme.colors.orangePrimary[6],
          textDecoration: " underline",
        },
      },
    },
    col: {
      display: "flex",
      justifyContent: "end",
      [theme.fn.smallerThan("md")]: {
        justifyContent: "start",
      },
    },
  };
});
const Footer = (params) => useStyles(params);

export default Footer;
