import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      background: theme.fn.rgba(theme.colors.grey[0], 0.3),
      padding: theme.spacing.md,
      height: "100%",
      [theme.fn.smallerThan("md")]: {
        padding: 0,
      },
    },
    senderTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 16,
      color: "rgba(17, 20, 26, 1)",
    },
    offerTitle: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 36,
      color: "rgba(25, 31, 31, 1)",
    },
    link: {
      fontSize: 16,
      fontFamily: "Inder",
      color: theme.colors.orangePrimary[6],
      fontWeight: 400,
      display: "flex",
      alignItems: "center",
      textDecoration: "underline",
    },
    dropDown: {
      background: "white",
      border: "none",
      borderRadius: 8,
      boxShadow: `0px 4px 25px 0px ${theme.fn.rgba(
        theme.colors.black[0],
        0.13
      )}`,
    },
    infoIcon: {
      color: "rgba(109, 114, 118, 0.61)",
    },
    detailTitle: {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
      color: "rgba(61, 64, 67, 1)",
    },
    dateIcon: {
      color: "rgba(97, 196, 83, 1)",
    },
    dateTitle: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      color: "rgba(61, 64, 67, 1)",
    },
    item: {
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
    linkBox: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "0.5rem",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      },
      cursor: "pointer",
    },
    greyBox: {
      background: "rgba(232, 230, 228, 1)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      borderRadius: 12,
    },
    greyBoxIcon: {
      color: "rgba(96, 99, 103, 1)",
    },
    textBox: {
      fontFamily: "Inder",
      fontWeight: 400,
      fontSize: 12,
      color: "rgba(17, 20, 26, 1)",
    },
    orangeBox: {
      background: "rgba(225, 136, 2, 1)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      borderRadius: 12,
    },
    orangeBoxIcon: {
      color: "rgba(240, 242, 242, 1)",
    },
    originIcon: {
      path: {
        fill: "rgba(242, 116, 5, 1)",
      },
    },
    stackSpacing: {
      gap: 10,
    },
    destinationIcon: {
      path: {
        fill: "rgba(97, 196, 83, 1)",
      },
    },
  };
});

const OfferDetailPageStyle = (params) => useStyles(params);

export default OfferDetailPageStyle;
