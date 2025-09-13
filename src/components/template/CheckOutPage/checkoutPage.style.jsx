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
    list: {
      li: {
        color: theme.fn.rgba("#000", 0.57),
        fontWeight: 600,
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
    form: {
      label: {
        fontWeight: 400,
        marginBottom: 4,
        fontSize: 18,
      },
      input: {
        fontSize: 18,
        borderRadius: 8,
      },
    },
    labelCheckbox: {
      color: "#6D7276",
      fontWeight: 400,
      fontSize: 13,
      paddingLeft: 10,
    },
  };
});

const CheckOutStyles = (params) => useStyles(params);

export default CheckOutStyles;
