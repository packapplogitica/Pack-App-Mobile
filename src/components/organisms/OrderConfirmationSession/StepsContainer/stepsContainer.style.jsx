import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    active: {
      borderBottom: `1px solid ${theme.colors.orangePrimary[6]}`,
      fontFamily: "Inder",
    },
  };
});

const StepsContainerStyle = (params) => useStyles(params);

export default StepsContainerStyle;