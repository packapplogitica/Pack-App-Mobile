import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
    return {
      title: {
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
      active: {
        borderBottom: `1px solid ${theme.colors.orangePrimary[6]}`,
      },
    };
  });
  
  const HomeStyle = (params) => useStyles(params);
  
  export default HomeStyle;