import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    title: {
      color: theme.colors.black[0],
      fontWeight: 400,
      fontSize: 36,
      lineHeight: "45px",
      [theme.fn.smallerThan(331)]: {
        fontSize: 30,
        lineHeight: "35px",
      },
      [theme.fn.smallerThan(270)]: {
        fontSize: 25,
        lineHeight: "30px",
      },
    },
    content: {
      fontSize: 24,
      fontWeight: 400,
      color: theme.colors.grey[6],
      lineHeight: "35px",
      [theme.fn.smallerThan(331)]: {
        fontSize: 20,
        lineHeight: "35px",
      },
      [theme.fn.smallerThan(270)]: {
        fontSize: 16,
        lineHeight: "25px",
      },
    },
  };
});

const InfoCardStyle = (params) => useStyles(params);

export default InfoCardStyle;
