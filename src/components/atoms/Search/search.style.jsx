import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      backgroundColor: theme.colors.greyDark[6],
      padding: `${theme.spacing.md}px 0px`,
      [theme.fn.smallerThan("md")]: {
        padding: `${theme.spacing.xs}px 0px`,
      },
    },
    label: {
      color: "#fff",
      marginBottom: `${theme.spacing.xs}px`,
      fontSize: theme.fontSizes.h5[0],
    },
  };
});

const SearchStyle = (params) => useStyles(params);

export default SearchStyle;
