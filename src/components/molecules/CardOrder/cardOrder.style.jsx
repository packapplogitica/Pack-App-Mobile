import { createStyles } from "@mantine/core";

const CardOrderStyle = createStyles((theme, params) => {
  return {
    iconDataPicker: {
      color: theme.colors.orangePrimary[6],
    },
    formRoot: {
      label: {
        fontSize: 16,
        color: theme.colors.grey[6],
        fontWeight: 400,
        marginBottom: 8,
        [theme.fn.smallerThan("md")]: {
          fontSize: 20,
        },
      },
      input: {
        fontSize: 18,
        borderRadius: 8,
      },
    },
    itemSelect: {
      borderRadius: 8,
      padding: 10,
      background: theme.colors.grey[6],
      marginBottom: 5,
      "&[data-selected]": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
        "&:hover": {
          background: theme.colors.orangePrimary[6],
          color: "#FFFFFF",
        },
      },
      "&:hover": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
      },

      "&[data-hovered]": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
      },
    },
  };
});

export default CardOrderStyle;
