import { createStyles } from "@mantine/core";

const OrderForm = createStyles((theme) => {
  return {
    title: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: "30px",
    },
    itemSelect: {
      borderRadius: 8,
      padding: 10,
      background: theme.colors.grey[6],
      marginBottom: 5,
      "&[data-selected]": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
        "&:hover": {
          background: theme.colors.orangePrimary[6],
          color: "#FFFFFF",
        },
      },
      "&:hover": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
      },

      "&[data-hovered]": {
        background: theme.colors.orangePrimary[6],
        color: "#FFFFFF",
      },
    },
    input: {
      input: {
        '&:focus': {
          borderColor: "#FE7D14",
        }
      },
      button: {
        '&:focus': {
          borderColor: "#FE7D14",
        }
      },
      '&:focus': {
        borderColor: "#FE7D14",
      }
    },
  };
});

export default OrderForm;
