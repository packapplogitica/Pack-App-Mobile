import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    input: {
      input: {
        "&:focus": {
          borderColor: "#FE7D14",
        },
      },
      "&:focus": {
        borderColor: "#FE7D14",
      },
    },
    mapContainer: {
      div: {
        borderRadius: "0.5rem",
      },
    },
    error: {
      fontWeight: 500,
      letterSpacing: 0.2,
      borderRadius: 4,
      background: "#fff0f0",
      padding: "4px 8px",
      display: "inline-block",
      fontSize: 12,
    },
    divider: {
      [theme.fn.largerThan("md")]: {
        borderRight: `1px solid ${theme.fn.rgba(theme.colors.grey[6], 0.13)}`,
      },

      [theme.fn.smallerThan("md")]: {
        borderBottom: `1px solid ${theme.fn.rgba(theme.colors.grey[6], 0.13)}`,
      },
    },
    label: {
      fontWeight: 400,
    },
    itemSelect: {
      borderRadius: 8,
      padding: 10,
      background: "#E8E6E4",
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

const SenderandRecipientInformationFormStyle = (params) => useStyles(params);

export default SenderandRecipientInformationFormStyle;
