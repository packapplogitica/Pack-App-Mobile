import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  const { variant } = params;

  let variantStyles = {};

  switch (variant) {
    case "primary":
      variantStyles = {
        color: theme.colors.white[0],
        border: '2px solid rgba(96, 99, 103, 0.14)',
        borderRadius: '3px',
        fontSize: 20,
        padding: 16,
        h3: {
          textTransform: "uppercase",
          fontWeight: 400,
        },
        button: {
          width: 200,
          height: 60,
          fontSize: 20,
          fontWeight: 500,
        },
      };
      break;

    case "secondary":
      variantStyles = {
        background: theme.colors.orangePrimary[6],
        fontWeight: 400,
        fontSize: 16,
        h3: {
          color: theme.colors.black[0],
          fontWeight: 700,
          fontSize: 20,
        },
      };
      break;

    default:
      break;
  }

  return {
    card: {
      ...variantStyles,
      height: "100%",
      marginLeft: 50,
      marginRight: 50,
    },
    cardContainer: {
      textAlign: "center",
    },
    cardTitle: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 24,
      color: "#3D4043",
    },
    cardContent: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 16,
      color: "#6D7276",
    },
  };
});
const CardPackAppStyle = (params) => useStyles(params);

export default CardPackAppStyle;
