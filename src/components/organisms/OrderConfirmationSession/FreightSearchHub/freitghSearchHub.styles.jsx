import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    gridCol: {
      width: "100%",
    },
    searchHubContainer: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      gap: 0.5,
      // justifyContent: 'space-between'
    },
    searchContainer: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
    },
    searchTitle: {
      marginBottom: 10,
      fontSize: 20,
    },
    fromSearch: {
      width: "100%",
      input: {
        fontSize: 18,
        height: 50,
        borderTopLeftRadius: "2rem",
        borderBottomLeftRadius: "2rem",
        "&:focus": {
          borderColor: "#FE7D14",
        },
      },
      label: {
        fontSize: 18,
      }
    },
    toSearch: {
      width: "100%",
      input: {
        fontSize: 18,
        height: 50,
        "&:focus": {
          borderColor: "#FE7D14",
        },
      },
      label: {
        fontSize: 18,
      }
    },
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
    searchButton: {
      borderTopLeftRadius: "0.25rem",
      borderBottomLeftRadius: "0.25rem",
      background: '#F39929',
      '&:hover': {
        background: '#ffa500'
      }
    },
    title: {
      fontFamily: "Inder",
      fontSize: 40,
      fontWeight: 400,
      lineHeight: "50px",
      [theme.fn.smallerThan("md")]: {
        fontSize: 35,
        lineHeight: "40px",
      },
      [theme.fn.smallerThan("sm")]: {
        fontSize: 28,
        lineHeight: "30px",
      },
      [theme.fn.smallerThan("xs")]: {
        fontSize: 25,
        lineHeight: "30px",
      },
    },
    container: {
      alignItems: 'end',
    },
  };
});

const FreightSearchHubStyles = (params) => useStyles(params);

export default FreightSearchHubStyles;
