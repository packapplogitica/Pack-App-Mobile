import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      backgroundColor: theme.colors.orangeSecondary[6],
      padding: theme.spacing.md,
      borderRadius: theme.spacing.tiny,
      [theme.fn.smallerThan("md")]: {
        padding: theme.spacing.xs,
      },
    },
    text: {
      fontSize: theme.fontSizes.h5[0],
      color: "#fff",
      fontWeight: 500,
      lineHeight: "28px",
      [theme.fn.smallerThan("md")]: {
        fontSize: theme.fontSizes.h6[0],
      },
    },
    button: {
      fontSize: theme.fontSizes.h6[0],
      justifyContent: "end",
      [theme.fn.smallerThan("md")]: {
        justifyContent: "start",
      },
    },
  };
});

const StylableLinkBlockStyle = (params) => useStyles(params);

export default StylableLinkBlockStyle;
