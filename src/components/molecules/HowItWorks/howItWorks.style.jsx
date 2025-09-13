import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    cards: {
      background: "#F0F2F2",
      marginBottom: 0,
    },
    cardContainer: {
      margin: "0 20px 75px 20px",
      paddingBottom: 50,
    },
    imageContainer: {
      borderRadius: 9,
      boxShadow: '0px 4px 10.9px 0px rgba(0, 0, 0, 0.23)',
    },
    image: {
      // borderRadius: 9,
      // width: 699,
      // height: 466,
    },
    title: {
      fontFamily: "Inder",
      fontSize: 20,
      fontWeight: 400,
      color:"#F27405",
    },
    subTitle: {
      fontFamily: "Roboto",
      fontSize: 36,
      fontWeight: 700,
      color:"#000",
    },
    content: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: 400,
      color: "#606161"
    },
    dekstop: {
      padding: "60px 0",
      marginBottom: 0,
    },
    mobile: {
      // display: "block",
      // [theme.fn.largerThan("md")]: {
      //   display: "none  ",
      // },
    },
  };
});

const HowItWorksStyles = (params) => useStyles(params);

export default HowItWorksStyles;
