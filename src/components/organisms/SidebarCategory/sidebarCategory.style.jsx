import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      fontFamily: "Roboto",
      backgroundColor: theme.colors.grey[6],
      padding: "30px 0 12px 22px ",
      color: "#fff",
      height: "100%",
    },
    accordion: {
      paddingRight: 22,
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 18.75,
    },
    button: {
      fontSize: 25,
      outline: 'gray 10px solid',
      backgroundColor: 'gray',
      border: '2px solid',
      ':hover': {
        outline: 'darkgray 10px solid',
        backgroundColor: 'darkgray',
      },
      ':focus': {
        outline: 'gray 10px solid',
      }
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      padding: `${theme.spacing.tiny}px `,
      lineHeight: "20px",
      backgroundColor: "#fff",
      borderRadius: 8,
    },
    control: {
      gap: 0,
      padding: `${theme.spacing.tiny}px `,
      color: "#fff",
      border: `1px solid #fff`,
      borderRadius: 8,
      "&:hover": {
        background: theme.colors.orangePrimary[6],
      },
    },
    item: {
      border: 0,
      marginBottom: 8,
    },
    label: {
      padding: `${theme.spacing.tiny}px`,
      lineHeight: "20px",
      fontSize: 20,
    },
    itemList: {
      borderRadius: 8,
      color: theme.colors.black[0],
      fontSize: 20,
      fontWeight: 400,
      textDecoration: "none",
      lineHeight: "30px",
      marginBottom: 10,
      padding: 10,
      background: "#E8E6E4",
      "&:hover": {
        background: ` ${theme.colors.orangePrimary[6]}`,
        color: theme.colors.white[0],
      },
    },
    categoryStack: {
      fontFamily: "Roboto",
      gap: 0,
      paddingLeft: 20,
    },
    categoryTitle: {
      fontFamily: "Roboto",
      margin: '30px 0',
    },
    itemCategory: {
      cursor: "pointer",
      borderRadius: 8,
      color: "#FFFF",
      fontSize: 16,
      fontWeight: 400,
      textDecoration: "none",
      lineHeight: "30px",
      // marginBottom: 10,
      padding: 10,
      "&:hover": {
        background: ` ${theme.colors.orangePrimary[6]}`,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      "& > div": {
        paddingLeft: 40,
      },
    },
    categoryActive: {
      fontWeight: 500,
      background: theme.colors.orangePrimary[6],
      borderBottomLeftRadius: 50,
      borderTopLeftRadius: 50,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      fontSize: 20,
      padding: 10,
    },
  };
});

const SidebarCategoryStyle = (params) => useStyles(params);

export default SidebarCategoryStyle;
