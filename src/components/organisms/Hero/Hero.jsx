/* PropTypes */
import PropTypes from 'prop-types';
/* Components */
import {
  Button,
  BackgroundImage,
  Container,
  Flex,
  Grid,
  MediaQuery,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
/* Styles */
import useStyles from "./hero.style";

// Hooks
import { useEffect, useState } from 'react';
import { useRedirect } from '@/hooks/useRedirect';

export const Hero = ({ hero }) => {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  }

  useEffect(() => {
    const calulateTime = () => {
      // Fecha de hoy
      const today = new Date();
      // Fecha limite
      const launchingDate = new Date("2024-10-01");
      // Fecha contador
      const counter = launchingDate.getTime() - today.getTime();

      const days = Math.floor(counter / (1000 * 60 * 60 * 24));
      const hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((counter % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calcular el tiempo restante inicial
    calulateTime();

    // Actualizar el contador cada segundo
    const timer = setInterval(calulateTime, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);





  const { goToPage } = useRedirect();
  const { background, header, clockImage } = hero;
  const { title, span, content } = header;

  const { classes } = useStyles({ background });

  const ContentHero = () => {
    return (
      <Flex direction="column" justify={"space-between"} align={"center"} gap={30}>
        <SimpleGrid
          cols={1}
        >
          <Title
            className={classes.title}
          >{title}</Title>
          <Text className={classes.span}>{span}</Text>
        </SimpleGrid>

        <Text
          // ml={50}
          className={classes.text}
        >{content}</Text>


        {/* Buttons */}
        <Flex justify="flex-start" gap={20} wrap="wrap">
          <Container
            className={classes.buttonContainer}
          >
            <Button onClick={() => goToPage('registration')} className={classes.button}>
              Regístrate ahora
            </Button>
          </Container>
        </Flex>
      </Flex>
    );
  };

  return (
    <BackgroundImage className={classes.banner}>
      <Grid className={classes.mainContent}>
        <Grid.Col
          md={6}
          xs={12}
        >
          <ContentHero />
        </Grid.Col>

        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Grid.Col
            md={6}
          >
            <Image
              src={clockImage ?? null}
              alt="clock"
              width={800}
              height={800}
              style={{
                width: "100%",
              }}
              className={classes.image}
              priority
            />
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </BackgroundImage>
  );
};

Hero.propTypes = {
  hero: PropTypes.object,
}