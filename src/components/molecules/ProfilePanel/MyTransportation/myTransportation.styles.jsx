import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    active: {
      borderRadius: 8,
      borderBottom: `5px solid #000000`,
    },
    box: {
      backgroundColor: "#ffffff",
      padding: 20,
    },
    cardDivider: {
      width: "100%",
      margin: "10px 0 !important",
    },
    cardInfo: {
      marginBottom: 10,
      svg: {
        color: "rgba(109, 114, 118, 0.61)",
      },
      div: {
        fontFamily: "Roboto",
        fontWeight: 300,
        fontSize: 16,
        color: "rgba(61, 64, 67, 1)",
      },
    },
    cardType: {
      marginTop: 20,
      svg: {
        color: "rgba(242, 116, 5, 1)",
      },
      div: {
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 14,
        color: "rgba(51, 51, 51, 1)",
      },
    },
    form: {
      label: {
        fontWeight: 300,
        marginBottom: 4,
        fontSize: 16,
        color: "#3D4043",
      },
      input: {
        fontSize: 18,
        borderRadius: 8,
      },
    },
    generalInput: {
      input: {
        fontSize: 18,
        "&:focus": {
          borderColor: "#FE7D14",
        },
        input: {
          "&:focus": {
            borderColor: "#FE7D14",
          },
        },
      },
      fontSize: 18,
      "&:focus": {
        borderColor: "#FE7D14",
      },
    },
    dniImage: {
      svg: {
        color: "rgba(242, 116, 5, 1)",
      },
    },
    label: {
      fontWeight: 300,
      marginBottom: 4,
      fontSize: 16,
      color: "#3D4043",
    },
    line: {
      height: 20,
      backgroundColor: theme.fn.rgba("#606367", 0.23),
      borderRadius: 8,
    },
    link: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
      color: "rgba(242, 116, 5, 1)",
      textDecoration: "none",
    },
    passwordInput: {
      "& .mantine-PasswordInput-input": {
        fontSize: 18,
        "&:focus-within": {
          borderColor: "#FE7D14",
        },
      },
    },
    subText: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.32)",
      marginTop: 10,
    },
    verificationMessage: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 14,
      color: "rgba(61, 64, 67, 1)",
    },
  };
});

const MyData = (params) => useStyles(params);

export default MyData;
