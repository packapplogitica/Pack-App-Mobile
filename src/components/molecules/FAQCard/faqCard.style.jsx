import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      "&:hover": {
        background: theme.colors.orangePrimary[6],
        color: "#fff",
      },
    },
  };
});

const FAQCardStyle = (params) => useStyles(params);

export default FAQCardStyle;
