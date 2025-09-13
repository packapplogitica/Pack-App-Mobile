import { Card, Divider, Grid, Stack, Text, Title } from "@mantine/core";
import useStyles from "./notShipments.style";
import Image from "next/image";
import { theme } from "@/libs/theme";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

export const NotShipments = () => {
  const { clases } = useStyles();
  return (
    <Card p={16} radius={8}>
      <Stack my="md">
        <Title order={2} weight={500} size={36}>
          Mis Envios
        </Title>
        <Divider />
      </Stack>
      <Grid gutter={25} my="md" justify="space-between">
        <Grid.Col md={7} order={2} orderMd={1}>
          <Stack spacing="md">
            <Title order={3} weight={700} size={36}>
              Nada por aquí...
            </Title>
            <Text size={20} weight={400} c={theme.colors.grey[3]}>
              Parece que aun no has generado ningún pedido de envío. Una vez
              creados podrás visualizarlos en este mismo panel.
            </Text>
            <ButtonPackApp variant="filled" size="xl">
              Crear solicitud de envio
            </ButtonPackApp>
          </Stack>
        </Grid.Col>
        <Grid.Col md={5} order={1} orderMd={2}>
          <Stack justify="end">
            <Image
              src="/assets/ant.svg"
              width={215}
              height={450}
              alt="ant"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};
