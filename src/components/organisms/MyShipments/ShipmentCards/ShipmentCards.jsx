import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import {
  Box,
  Flex,
  Grid,
  Image,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconBrandWhatsapp, IconCheck, IconCircleX, IconPhoneCall } from "@tabler/icons-react";
import { formateCurrency } from "@/libs/utils";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import { getErrorMessage } from "@/utils/getError/getError";
import { useDate } from "../../../../hooks/useDate";
import { useRouter } from "next/router";

// Función para manejar el envío de la calificación
const handleRatingChange = async (value, idCarrier, setLoading, setRating, setRated, hasRated, router, order) => {
  setLoading(true)
  try {
    // Enviar la calificación solo si no ha sido calificado
    if (!hasRated) {
      const sendRate = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ratings`, {
        carrierId: idCarrier,
        userId: order.despachante.id,
        orderId: order.id,
        score: value,
      });

      if (sendRate.status === 200 || sendRate.status === 201) {

        notifications.show({
          title: "Muy bien",
          message: "Enviado",
          icon: <IconCheck />,
          onClose: 500,
        });
        setRating(value);
        setRated(true)
        setLoading(false);
        router.reload()
      }
      // Actualizar la calificación mostrada
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
};


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



const getTypeDriver = (driverCompany) => {


  if (driverCompany) {
    return 'Empresa de trasnporte'
  } else {
    return 'Transportista independiente'
  }
}

const enviarSolicitud = async (item, ensure, router) => {
  try {
    if (item) {
      const closeModal = () => {
        modals.closeAll();
        router.reload();
      };
      const handelSubmit = async (item) => {
        router.push(`/checkout/${item.id}`)
        modals.closeAll();
      }
      modals.open({
        children: (
          <Flex direction="column" gap={16} align="baseline" w={"100%"}>
            <Grid gutter={25} mt="sm" w={"100%"}>
              <Grid.Col>
                <Stack spacing={12}>
                  <Text size={24} weight={500} align="center">
                    {ensure ? 'Vas a pagar una comision para asegurar tu paquete' : '¿Deseas aceptar esta oferta?'}
                  </Text>
                  <Text size={16} weight={400} align="center" c={"grey.6"}>
                    {ensure ? 'El seguro cubre solo el valor que has declarado' : 'Si la aceptas, se notificará a tu transportista. Podrás visualizar todas tus ofertas en tu perfil'}

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
                  onClick={() => handelSubmit(item)}
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
    } else {
      setLoading(false)
      notifications.show({
        title: "Oh no!",
        message: "Ha habido un problema con la acpetacion de esta oferta",
        icon: <IconCircleX />,
        color: "red",
        styles: notificationStylees,
      });
    }
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



const WhatsappLink = ({ phoneNumber }) => {

  const handleCall = () => {
    const wppUrl = `https://wa.me/${'54' + phoneNumber}`;

    // Intenta abrir en una nueva ventana/pestaña
    window.location.href = wppUrl;

  };
  return (
    <ButtonPackApp
      variant="filled"
      size="xl"
      onClick={handleCall}
    >
      <IconBrandWhatsapp style={{ color: 'black' }} />
    </ButtonPackApp>
  );
};

const CallButton = ({ phoneNumber }) => {

  const handleCall = () => {
    const telUrl = `tel:${phoneNumber}`;

    // Intenta abrir en una nueva ventana/pestaña
    window.location.href = telUrl;
  };


  return (
    <ButtonPackApp
      variant="filled"
      size="xl"
      onClick={handleCall}
    >
      <IconPhoneCall style={{ color: 'black' }} />
    </ButtonPackApp>
  );
};

export const ShipmentCards = ({
  applications,
  theme,
  classes,
  ratingOrder,
  order,
  rated,
  session,
  setLoading,
  setRating,
  setRated,
  hasRated }) => {
  const router = useRouter()
  const { dateFormatter } = useDate();
  return (
    <div className={classes.root}>

      {applications && (
        <Grid my="md" >
          {applications?.map((item) => {
            const price = parseFloat(item.budget);
            return (
              <Grid.Col key={item.id} mb="xl">
                <Grid gutter={16} justify="space-between">
                  <Grid.Col md={12} lg={8}>
                    <Flex
                      gap={24}
                      sx={{
                        [theme.fn.smallerThan("md")]: {
                          flexWrap: "wrap",
                        },
                      }}
                    >
                      <Image
                        src="/assets/antLogo.png"
                        width={150}
                        alt="logo"
                        className={classes.image}
                      />

                      <Flex gap={12} direction="column">
                        <Text weight={700}>{item?.carrier?.firstName + ' ' + item?.carrier?.lastName}</Text>
                        <Text span weight={700} mr={5}>
                          {getTypeDriver(item?.carrier?.driverCompany)}
                        </Text>
                        <Text span weight={500} mr={5}>
                          {item?.conveyance}  🚐
                        </Text>
                        {/* <Text weight={300}>
                          Fecha de Recogida: {dateFormatter(item.outDate)}
                        </Text>
                        <Text weight={300}>
                          Fecha de Entrega: {dateFormatter(item.comingDate)}
                        </Text> */}
                        {item?.details && (
                          <Text weight={300}>
                            <Text span weight={700} mr={5}>
                              Descripción:
                            </Text>
                            {item.details}
                          </Text>
                        )}
                        <>
                          Veces puntuado: {item.carrier?.ratingCount ?? 0}</>

                        <Rating
                          defaultValue={ratingOrder?.score ?? item.carrier?.rating ?? 0}
                          styles={{ root: { justifyContent: 'space-between', width: 'auto' } }}
                          onChange={(value) =>
                            handleRatingChange(
                              value,
                              item.carrier.id,
                              setLoading,
                              setRating,
                              setRated,
                              hasRated,
                              router, 
                              order
                            )}
                          readOnly={
                            (
                              (item.isTaken && rated)
                              || order.status === 'No se ha podido entregar')
                            || (item.isTaken && order.status !== 'Entregado')
                            || !item.isTaken
                            || !(session?.user.id === order?.despachante?.id)}
                        />
                      </Flex>

                    </Flex>
                  </Grid.Col>
                  <Grid.Col md={12} lg={4}>
                    <Stack>
                      <Box className={classes.ptice}>
                        {formateCurrency(price)}
                      </Box>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col mt="md">
                    <Flex justify="end" gap={24} className={classes.buttons}>
                      {!item.isTaken ? (
                        <>
                          <ButtonPackApp
                            variant="filled"
                            size="xl"
                            onClick={() => enviarSolicitud(item, order.ensure, router)}
                          >
                            {"Aceptar Oferta"}
                          </ButtonPackApp>
                        </>
                      ) :
                        <>
                          <CallButton phoneNumber={item?.carrier?.phone} />
                          <WhatsappLink phoneNumber={item?.carrier?.phone} />
                        </>
                      }

                    </Flex>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </div>
  );
};
