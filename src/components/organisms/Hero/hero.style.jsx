import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  const { background } = params;

  return {
    mainContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    banner: {
      background: '#191F1F',
      // height: 1000,
      zIndex: "-2",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    image: {
      width: "100%",
    },
    title: {
      lineHeight: 0,
      textAlign: "center",
      fontFamily: 'Inder',
      fontWeight: 400,
      color: theme.colors.white[0],
      lineHeight: "50px",
      span: {
        color: theme.colors.orangePrimary[6],
      },
      fontSize: 60,
      [theme.fn.smallerThan("xl")]: {
        fontSize: 55,
      },
      [theme.fn.smallerThan("lg")]: {
        fontSize: 55,
      },
      [theme.fn.smallerThan("md")]: {
        fontSize: 50,
      },
      [theme.fn.smallerThan("sm")]: {
        fontSize: 42,
        lineHeight: "30px",
      },
      [theme.fn.smallerThan("xs")]: {
        fontSize: 34,
      },
      [theme.fn.smallerThan(330)]: {
        fontSize: 24,
      },
    },
    span: {
      textAlign: "center",
      fontFamily: 'Inder',
      fontWeight: 400,
      color: theme.colors.orangePrimary[6],
      lineHeight: "50px",
      fontSize: 60,
      [theme.fn.smallerThan("xl")]: {
        fontSize: 55,
      },
      [theme.fn.smallerThan("lg")]: {
        fontSize: 55,
      },
      [theme.fn.smallerThan("md")]: {
        fontSize: 50,
      },
      [theme.fn.smallerThan("sm")]: {
        fontSize: 42,
        lineHeight: "30px",
      },
      [theme.fn.smallerThan("xs")]: {
        fontSize: 34,
      },
      [theme.fn.smallerThan(330)]: {
        fontSize: 24,
      },
    },
    buttonContainer: {
      textAlign: "center",
      margin: 0,
      padding: 0,
    },
    button: {
      fontFamily: "Inder",
      backgroundColor: "#F29829",
      fontWeight: "normal",
      fontSize: 24,
      lineHeight: 38.88,
      height: 86,
      borderRadius: 133,
      paddingInline: 50,
      "&:hover":{
        backgroundColor: "#DB8A25",
      },
    },
    buttons: {
      button: {
        fontSize: 20,
        fontWeight: "bold",
        height: 60,
      },
    },
    text: {
      fontFamily: 'Inder',
      fontSize: 24,
      fontWeight: 400,
      color: '#D5D6D5',
      [theme.fn.smallerThan("md")]: {
        fontSize: 20,
      },
      [theme.fn.smallerThan("xs")]: {
        fontSize: 18,
      },
    },
    counterContainer: {
      color: 'white',
      height: 110,
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderStyle: 'solid',
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(217, 217, 217, 0.39)',
      margin: 0,
      padding: 0,
      width: "90%",
    },
    timerText: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      fontSize: 32,
    },
    timerType: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
    }
  };
});
const HeroStyle = (params) => useStyles(params);

export default HeroStyle;
