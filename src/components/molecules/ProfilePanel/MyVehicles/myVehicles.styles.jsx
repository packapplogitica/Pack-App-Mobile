import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    box: {
      backgroundColor: "#ffffff",
      padding: 20,
    },
  };
});

const MyVehiclesStyles = (params) => useStyles(params);

export default MyVehiclesStyles;