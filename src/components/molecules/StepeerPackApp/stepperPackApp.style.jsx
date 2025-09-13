import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme, params) => {
  return {
    root: {
      ".mantine-Stepper-verticalSeparator": {
        border: `2px solid #D8D8D8`,
      },
      ".mantine-Stepper-verticalSeparatorActive": {
        border: `2px solid ${theme.colors.orangePrimary[6]}`,
      },
    },
    stepHorizontal: {
      display: "flex",
      gap: 30,
      alignItems: "center",
      flexDirection: "column",
      paddingBottom: 60,
      justifyContent: "center",
      width: '11rem',
      padding: '0',
    },
    stepVertical: {
      display: "flex",
      gap: 30,
      alignItems: "center",
      flexDirection: "column",
      paddingBottom: 60,
      justifyContent: "center",
      width: '11rem',
      height: '17rem',
      padding: '0',
      [theme.fn.smallerThan("md")]: {
        width: "auto",
        height: "auto",
        padding: 'none',
        flexDirection: 'row'
      },
      "& .mantine-Stepper-stepBody": {
        width: '7rem',
        "& .mantine-Stepper-stepDescription": {
          textAlign: 'center'
        }
      },
    },
    stepCompletedIcon: {
      backgroundColor: theme.colors.orangePrimary[6],
      borderRadius: "100%",
    },
    stepIcon: {
      outline: `2px solid ${theme.colors.orangePrimary[6]}`,
      outlineOffset: "-2px",
      background: "#fff",
      color: theme.colors.orangePrimary[6],
    },
    stepBody: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    stepBodyVertical: {
    },
    stepLabel: {
      fontWeight: 400,
      color: theme.colors.grey[6],
      lineHeight: "20px",
      textAlign: 'center'
    },
    stepDescription: {
      fontWeight: 600,
      color: theme.colors.greyDark[6],
      lineHeight: "20px",
    },
    steps: {
      color: 'blue',
      alignItems: "center",
      // padding: '1rem'
    },
    separator: {
      position: 'relative',
      bottom: '2.5rem',
      margin: '-58px',
    },
    verticalSeparator: {
      position: 'relative',
      left: '28px',
      height: '4rem',
      width: 'fit-content'
    }
  };
});

const StepperPackAppStyle = (params) => useStyles(params);

export default StepperPackAppStyle;
