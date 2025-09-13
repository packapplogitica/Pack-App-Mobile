import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    buttonContainer: {
      textAlign: "center",
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
    titleContainer: {
      marginTop: 35,
      marginBottom: 35,
      textAlign: "center",
    },
    title: {
      fontFamily: "Roboto",
      textAlign: "center",
      fontWeight: 500,
      fontSize: 32,
    },
  };
});

const UsePackAppStyle = (params) => useStyles(params);

export default UsePackAppStyle;
