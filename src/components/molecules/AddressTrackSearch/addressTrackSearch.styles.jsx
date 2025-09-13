import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
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

const AddressTrackSearchStyles = (params) => useStyles(params);

export default AddressTrackSearchStyles;
