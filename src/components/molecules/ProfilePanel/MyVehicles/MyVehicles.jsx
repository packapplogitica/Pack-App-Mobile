import { Box, Card, Divider, Text, Title, Button, Grid, Accordion, Flex, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import { getErrorMessage } from "@/utils/getError/getError";
import axios from "axios";
import useStyles from "./myVehicles.styles";
import { useState } from "react";
import { useRouter } from "next/router";
import { modals } from "@mantine/modals";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import Loader from "../../Loader/Loader"
import { useSession } from "next-auth/react";

const MyVehicles = ({ vehicles }) => {
  console.log('Los vehiculos', vehicles)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { update, data } = useSession();

  const { classes, theme } = useStyles();

  const notificationStylees = () => ({
    root: {
      borderRadius: 8,
    },
    title: {
      color: "black.0",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "24px",
    },
    description: { fontSize: 16, fontWeight: 300, lineHeight: "19px" },
    icon: {
      width: 50,
      height: 50,
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  });

  const enviarSolicitud = async () => {
    try {
        modals.open({
          children: (
            <Flex direction="column" gap={16} align="baseline" w={"100%"}>
              <Grid gutter={25} mt="sm" w={"100%"}>
                <Grid.Col>
                  <Stack spacing={12}>
                    <Text size={24} weight={500} align="center">
                    ¿Estas seguro que deseas eliminar tu vehiculo?
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col md={6}>
                  <ButtonPackApp w="100%" size="lg" onClick={modals.closeAll()}>
                    Volver a la web
                  </ButtonPackApp>
                </Grid.Col>
                <Grid.Col md={6}>
                  <ButtonPackApp
                    w="100%"
                    size="lg"
                    variant="filled"
                    onClick={() => deleteVehicle()}
                  >
                    Aceptar
                  </ButtonPackApp>
                </Grid.Col>
              </Grid>
            </Flex>
          ),
          centered: true,
          closeOnClickOutside: false,
          styles: {
            header: {
              padding: "16px 40px",
            },
          },
        });
      }
     catch (error) {
      setLoading(false)
      notifications.show({
        title: "Oh no!",
        message: "Ha habido un problema con la acpetacion de esta oferta",
        icon: <IconCircleX />,
        color: "red",
        styles: notificationStylees,
      });
      // Manejar errores
      console.error("Error al enviar solicitud:", error);
    }
  };
  const items = vehicles.map((vehicle) => (
    <Card key={vehicle.id} padding="lg" withBorder>
      <Accordion.Item key={vehicle.id + 1} value={vehicle.brand}>
        <Accordion.Control>{vehicle.brand}</Accordion.Control>
        <Accordion.Panel>Modelo: {vehicle.model}</Accordion.Panel>
        <Accordion.Panel>Año: {vehicle.year}</Accordion.Panel>
        <Accordion.Panel>Color: {vehicle.color}</Accordion.Panel>
        <Accordion.Panel>Patente: {vehicle.patent}</Accordion.Panel>
      </Accordion.Item>
      <Box mt="md" style={{ textAlign: "right" }}>
        <Button variant="outline" color="red" onClick={enviarSolicitud}>
          Eliminar vehiculo
        </Button>
      </Box>
    </Card>
  ));
  const deleteVehicle = async () => {
    setLoading(true)
    try {

      const deleteVehicle = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/vehicles/${vehicles[0].id}`,
        {
          headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${token}`,
          },
        }
      )

      if (deleteVehicle.status === 200 || deleteVehicle.status === 201) {
        setLoading(false)
        update({
          ...data,
          user: {
            ...data.user,
            vehicles:[], // Si ya existe vehicles, añade body, si no, lo inicializa
          },
        });
        notifications.show({
          title: "Muy bien",
          message: "Eliminaste tu vehiculo correctamente",
          icon: <IconCheck />,
          onClose: 500,
        });
        router.reload()
      } else {
        throw new Error(deleteOrder)
      }
    } catch (error) {
      setLoading(false);
      const errorFormated = getErrorMessage(error)
      notifications.show({
        title: "Oh no!",
        message: `Ha habido un problema: ${errorFormated}`,
        icon: <IconCircleX />,
        color: "red",
        // styles: notificationStylees,
      });
      console.log('el error', error);
    }
  }

  if (loading) {
    return <Loader visible></Loader>;
  }

  return (
    <>
      <Box mt={24}>
        <Title order={3} className={classes.title}>
          {"Mi Vehiculo"}
        </Title>
        <Divider my="xs" />
        <Accordion variant="separated" styles={{label:{paddingLeft:'1rem'}}}>
          {items}
        </Accordion>
      </Box>
    </>
  );
};

export default MyVehicles;