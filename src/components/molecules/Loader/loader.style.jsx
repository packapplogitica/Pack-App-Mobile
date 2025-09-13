import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    fullScreenContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      maxWidth: "100%"
      // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  };
});

const LoaderStyle = () => useStyles();

export default LoaderStyle;