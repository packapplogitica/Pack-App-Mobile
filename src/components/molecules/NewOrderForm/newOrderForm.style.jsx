import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    input: {
      input: {
        '&:focus': {
          borderColor: "#FE7D14",
        }
      },
      '&:focus': {
        borderColor: "#FE7D14",
      }
    },
    error: {
      position: "absolute",
      marginTop: 10,
    },
    labelInput: {
      color: theme.colors.black[0],
      fontWeight: 400,
      paddingBottom: 10,
    },
    labelCheckbox: {
      paddingLeft: theme.spacing.tiny,
    },
    checkedInput: {
      display: params.checked ? "block" : "none",
    },
    selectLabel:{
      fontWeight:100,
      fontSize:100,
    } ,
    itemSelect: {
      borderRadius: 8,
      padding: 10,
      background: "#E8E6E4",
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
    tabStack: {
      padding: 10,
    },
    tabContainer: {
      marginTop: 10,
    },
    inputContainer: {
      padding: 10,
    },
    addButtonContainer: {
      margin: 10,
      display: "flex",
      justifyContent: "center",
    },
    addButton: {
      color: "#000",
      fontWeight: 500,
      borderColor: "#F39929",
    },
    addIcon: {
      color: "#F39929",
      fontWeight: 900,
      backgroundColor: "#FFF",
    },
    deleteButtonContainer: {
      margin: 10,
      display: "flex",
      justifyContent: "end",
    },
    deleteIcon: {
      color: "#FA5252",
      fontWeight: 900,
    }
  };
});

const NewOrderFormStyle = (params) => useStyles(params);

export default NewOrderFormStyle;
