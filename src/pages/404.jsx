import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import Head from "next/head";

const Page404 = () => {
  return (
    <>
      <Head>
        <title>404 | PackApp Web</title>
      </Head>
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Grid gutter={25}>
            <Grid.Col md={6} order={2} orderMd={1}>
              <HeaderSection
                title="OOPS! La pagina que intentas abrir no existe..."
                content="Lo sentimos, la página que estás buscando no pudo ser encontrada. Por favor, verifica la URL o regresa a la página de inicio."
              />

              <ButtonPackApp variant="filled" href="/" size="xl" my="md">
                Ir a la pagina principal
              </ButtonPackApp>
            </Grid.Col>
            <Grid.Col md={6} order={1} orderMd={2}>
              <Image
                src="/assets/404.svg"
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

export default Page404;
