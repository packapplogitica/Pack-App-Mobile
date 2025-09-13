import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    title: {
      fontFamily: "Inder",
      fontSize: 40,
      fontWeight: 400,
      lineHeight: "50px",
      [theme.fn.smallerThan("md")]: {
        fontSize: 35,
        lineHeight: "40px",
      },
      [theme.fn.smallerThan("sm")]: {
        fontSize: 28,
        lineHeight: "30px",
      },
      [theme.fn.smallerThan("xs")]: {
        fontSize: 25,
        lineHeight: "30px",
      },
    },
    active: {
      borderBottom: `1px solid ${theme.colors.orangePrimary[6]}`,
    },
    renderContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    pagination: {
      // position: 'absolute',
      // bottom: 0,
      justifyContent: "center",
      gap: 5,
      button: {
        borderRadius: 6,
        border: "none",
        backgroundColor: "rgba(223, 223, 223, 1)",
        fontFamily: "Inder",
      },
    },
    container: {
      backgroundColor: "#6D7276",
    },
    categoryContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      background: "#F39929",
      fontFamily: "Roboto",
      textDecoration: "none",
      color: "white",
      fontSize: 20,
      fontWeight: 400,
      padding: 15,
      borderRadius: 20,
      display: "block",
      width: "fit-content",
      "&:hover": {
        background: "orange",
        cursor: "pointer",
      },
    },
  };
});

const OrderConfirmationSessionStyle = (params) => useStyles(params);

export default OrderConfirmationSessionStyle;
