import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { Container, Grid, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const VerificationUser = () => {
  return (
    <>
      <Head>
        <title>Autenticación | PackApp Web</title>
      </Head>
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Grid gutter={25} style={{ alignItems: "center" }}>
            <Grid.Col md={6} order={2} orderMd={1}>
              <HeaderSection
                title="Felicidades! te has autenticado con exito."
                content="¡Tu email ha sido verificado! Muy pronto vas a poder enviar y transportar paquetes con PACKAPP."
              />
            </Grid.Col>
            <Grid.Col md={6} order={1} orderMd={2}>
              <Image
                src="/assets/antConfettiVector.svg"
                style={{ width: "100%" }}
                alt="image"
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

export default VerificationUser;
