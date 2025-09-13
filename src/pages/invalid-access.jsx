import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
const InvalidAcces = () => {
  return (
    <>
    <Head>
      <title>No tienes Acceso a esta página</title>
    </Head>
    <PaddingBox>
      <Container size="xxl" p={0}>
        <Grid gutter={25}>
          <Grid.Col md={6} order={2} orderMd={1}>
            <HeaderSection
              title="Acceso Invalido"
              content="Tendrás acceso a esta página cuando acepten tu oferta"
            />

            <ButtonPackApp variant="filled" href="/" size="xl" my="md">
              Ir a la pagina principal
            </ButtonPackApp>
          </Grid.Col>
          <Grid.Col md={6} order={1} orderMd={2}>
            <Image
              src="/assets/ant.svg"
              style={{ width: "100%" }}
              alt="404 image"
              width={574}
              height={594}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </PaddingBox>
    </>
  );
};

export default InvalidAcces;