import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    box: {
      backgroundColor: "#ffffff",
      padding: 20,
    },
  };
});

const MyTripsList = (params) => useStyles(params);

export default MyTripsList;
