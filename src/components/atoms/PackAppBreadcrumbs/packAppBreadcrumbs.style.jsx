import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      flexWrap: "wrap",
      gap: theme.spacing.tiny,
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
      },
      fontWeight: 400,
    },
    separator: {
      margin: 0,
      [theme.fn.smallerThan("md")]: {},
    },
  };
});

const PackAppBreadcrumbsStyle = (params) => useStyles(params);

export default PackAppBreadcrumbsStyle;
