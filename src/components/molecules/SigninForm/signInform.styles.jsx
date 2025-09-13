import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    input: {
      input: {
        "&:focus": {
          borderColor: "#FE7D14",
        },
      },
      "&:focus": {
        borderColor: "#FE7D14",
      },
    },
  };
});

const SignInformStyle = () => useStyles();

export default SignInformStyle;
