import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { Flex, Grid, Stack, Text, } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import { getErrorMessage } from "@/utils/getError/getError";

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

const cancelOrder = async ({orderId,setLoading,token,router}) => {

  setLoading(true)
  try {

    const deleteOrder = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/despachante/${orderId}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )

    if (deleteOrder.status === 200 || deleteOrder.status === 201) {
      setLoading(false)
      notifications.show({
        title: "Muy bien",
        message: "Cancelaste el pedido de tu paquete",
        icon: <IconCheck />,
        onClose: 500,
      });
      router.push('/mis-paquetes')
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
      styles: notificationStylees,
    });
    console.log('el error', error);
  }
}

export const requestCancel = async ({orderId, notificationStylees,setLoading,token,router}) => {
  try {
    const closeModal = () => {
      modals.closeAll();
      router.reload();
    };

    const submitCancel = () => {
      cancelOrder({orderId,setLoading,token,router})
      modals.closeAll()
    }

    modals.open({
      children: (
        <Flex direction="column" gap={16} align="baseline" w={"100%"}>
          <Grid gutter={25} mt="sm" w={"100%"}>
            <Grid.Col>
              <Stack spacing={12}>
                <Text size={24} weight={500} align="center">
                  ¿Estas seguro de que quieres cancelar esta paquete?
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col md={6}>
              <ButtonPackApp w="100%" size="lg" onClick={closeModal}>
                Volver a la web
              </ButtonPackApp>
            </Grid.Col>
            <Grid.Col md={6}>
              <ButtonPackApp
                w="100%"
                size="lg"
                variant="filled"
                onClick={() => submitCancel()}
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
  } catch (error) {
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