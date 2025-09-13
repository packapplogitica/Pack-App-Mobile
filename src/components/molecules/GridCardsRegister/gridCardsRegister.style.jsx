import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    a: {
      textDecoration: "   none",
    },
    card: {
      transition: "all 0.5s",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.colors.orangePrimary[6],
        color: theme.colors.white[0],
        boxShadow: `4px 4px 0 0 ${theme.colors.grey[6]}`,
      },
    },
  };
});

const GridCardsRegisterStyle = (params) => useStyles(params);

export default GridCardsRegisterStyle;
