import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    box: {
      background: "#191F1F",
      padding: "9%",
      width: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 50,
      // padding: '80px 0',
    },
    title: {
      fontFamily: "Roboto",
      fontWeight: 800,
      fontSize: 48,
      color: "#fff"
    },
    content: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      color: "#F0F2F2",
    },
    button: {
      fontFamily: "Roboto",
      backgroundColor: "#F27405",
      fontWeight: 500,
      fontSize: 20,
      height: 65,
      borderRadius: 36,
      paddingInline: 25,
      "&:hover":{
        backgroundColor: "#DB8A25",
      },
    },
  };
});

const NationalShipingServiceStyles = (params) => useStyles(params);

export default NationalShipingServiceStyles;
