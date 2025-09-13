import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    gridCard: {
        border: '1px solid',
        borderRadius: 7,
        borderColor: 'rgba(240, 242, 242, 1)',
    },
    card: {
      width: 'auto'
    },
    price: {
      backgroundColor: theme.colors.black[0],
      color: "#FFFFFF",
      fontSize: theme.fontSizes.h5[0],
      fontWeight: "bold",
      lineHeight: "18px",
      padding: theme.spacing.xs,
      textAlign: "center",
      [theme.fn.smallerThan("md")]: {
        margin: "16px 0",
      },
    },
    buttons: {
      [theme.fn.smallerThan("md")]: {
        flexDirection: "column-reverse",
      },
    },
    image: {
      objectFit: "contain",
    },
  };
});

const ShipmenCardsStyle = (params) => useStyles(params);

export default ShipmenCardsStyle;
