import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 20,
        justifyItems: 'center',
        "& a": {
            background: "#F39929",
            fontFamily: "Roboto",
            textDecoration: "none",
            color: "white",
            fontSize: 20,
            fontWeight: 400,
            padding: 15,
            borderRadius: 20,
            display: 'block',
            width: 'fit-content',
            "&:hover": {
                background: 'orange',
                cursor: 'pointer',
            }
        }
    },
    button: {
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    }
  };
});

const DirectAccessStyle = () => useStyles();

export default DirectAccessStyle;
