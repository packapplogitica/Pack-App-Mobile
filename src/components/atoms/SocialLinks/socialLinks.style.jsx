import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      // display: "flex",
    },
    link: {
      svg:{
        color: "#F27405",
        width: 26,
        height: 26,
      }      
    },
    linkContainer:
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 90,
      maxWidth: "100%",
      margin: 0,
      padding: 0,
    },
    label: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
    },
  };
});

const SocialLinksStyles = (params) => useStyles(params);

export default SocialLinksStyles;
