import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    tooltip: {
      background: "#FFFFFF",
      color: theme.colors.black[0],
      padding: 20,
      borderRadius: 8,
      boxShadow: `0px 4px 25px 0px ${theme.fn.rgba(
        theme.colors.black[0],
        0.13
      )}`,
    },
    icon: {
      fill: "gray",
      color: theme.colors.grey[6],
      transition: "fill 0.3s",
      cursor: "pointer",
      "&:hover": {
        color: "orange",
      },
    },
  };
});

const ToolTipInfoStyle = (params) => useStyles(params);

export default ToolTipInfoStyle;
