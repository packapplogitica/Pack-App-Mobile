import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    form: {
      label: {
        fontSize: 24,
        fontWeight: 400,
        marginBottom: 8,
        [theme.fn.smallerThan("md")]: {
          fontSize: 20,
        },
      },
    },
    emailInput: {
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
    item: {
      fontSize: 18,
      fontWeight: 400,
      marginBottom: 4,
      padding: 6,
      transition: "all 0.5s",
    },
    passwordInput: {
      "& .mantine-PasswordInput-input": {
        fontSize: 18,
        "&:focus-within": {
          borderColor: "#FE7D14",
        },
      },
    },
    formContent: {
      fontWeight: 400,
      fontSize: 20,
      color: theme.colors.black[0],
      lineHeight: "23px",
      [theme.fn.smallerThan("md")]: {
        fontSize: 18,
      },
      a: {
        color: theme.colors.orangePrimary[6],
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  };
});

const FormStyle = (params) => useStyles(params);

export default FormStyle;
