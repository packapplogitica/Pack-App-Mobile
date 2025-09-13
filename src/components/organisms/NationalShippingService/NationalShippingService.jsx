/* PropTypes */
import PropTypes from 'prop-types';
/* Mantine */
import { Container, Title, Text, Button } from "@mantine/core";
/* Components */
import { PaddingBox } from "@/components/atoms";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { CardPackApp } from "@/components/molecules";

import { useRedirect } from '@/hooks/useRedirect';

import useStyles from "./nationalShippingService.style";


export const NationalShippingService = ({ title, content }) => {
  const { goToPage } = useRedirect();
  const { classes } = useStyles();
  return (
    <Container className={classes.box} m={0} fluid={true}>
      <Title order={2} className={classes.title}>
        {title}
      </Title>
      <Text className={classes.content}>
        {content}
      </Text>
      <Button onClick={() => goToPage('registration')} className={classes.button}>
        Registro Gratis
      </Button>
    </Container>
  );
};

NationalShippingService.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}