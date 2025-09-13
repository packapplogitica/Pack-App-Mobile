import React from "react";
import { Container, LoadingOverlay } from "@mantine/core";
import useStyles from "./loader.style";
// import "./loader.css";
const Loading = ({visible}) => {

  const { classes } = useStyles();

  const options = {
    color: 'orange',
  }

  return (
    <Container className={classes.fullScreenContainer}>
      <LoadingOverlay
        visible={visible}
        loaderProps={options}
        overlayBlur={2}
      />
    </Container>
  );
};

export default Loading;
