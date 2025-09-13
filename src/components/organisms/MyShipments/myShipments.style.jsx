import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    card: {
      width: 'auto'
    },
    ptice: {
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
    offerTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 20,
    },
    orderTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 36,
    },
    statusTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 20,
    },
    statusText: {
      fontFamily: "Roboto",
      fontWeight: 100,
      fontSize: 20,
    },
    detailLink: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 18,
      border: "2px solid #F39929",
      color: "#F39929",
      borderRadius: 8,
      padding: 10,
      "&:hover": {
        backgroundColor: "#F39929",
        color: "white",
        cursor: "pointer",
      }
    },
    offerTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 20,
    },
  };
});

const MyShipMentsStyle = (params) => useStyles(params);

export default MyShipMentsStyle;
