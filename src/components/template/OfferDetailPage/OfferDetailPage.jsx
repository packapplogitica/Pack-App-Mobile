import { useState } from "react";
import Link from "next/link";
import Loader from "@/components/molecules/Loader/Loader";
import {
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
// @/components/template/OfferDetailPage/LocationModal/LocationModal
import { useMediaQuery } from "@mantine/hooks";
import { PaddingBox, TooltipInfo } from "@/components/atoms";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import { LocationModal } from "../../template/OfferDetailPage/LocationModal/LocationModal";
import useStyles from "./offerDetailPage.style";
import Icons from "@/icons";
import {
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconMapPinFilled,
  IconMessage2Cancel,
  IconPhoneCall,
} from "@tabler/icons-react";
import { useDate } from "../../../hooks/useDate";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { CallButton, InfoUser, MenuState } from "./utils/components/SocialComponents";
import { useApiQuery } from "../../../utils/apiClient/reactQueryHooks";

export default function OfferDetailPage() {
  const { fullDateFormatter } = useDate();
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const isAdressePage = router.asPath.includes('addresseTrack');
  const idApplication = router.query.id;
  const { classes, theme, cx } = useStyles();
  //   const [state, setState] = useState(existingApplication.status);

  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );
  console.log(' el id de la order', router.query)

  const { data } = useSession()

  const [openLocation, setOpenLocation] = useState(false);
  // solo ejecuta el fetch si idOrder existe
  const { data: existingApplication, isLoading, error } = useApiQuery(
    ["application", idApplication],
    `/application/carrier/${idApplication}`,
    {
      enabled: !!idApplication, // <-- no ejecuta hasta que idOrder está definido
    }
  );
  console.log('la data', existingApplication)

  // if (!isLoading || !existingApplication) {
  //   return <p>Cargando parámetros...</p>;
  // }

  // if (!existingApplication) {
  //   return <p>Cargando parámetros...</p>;
  // }

  if (!router.isReady) return <Loader />
  if (!existingApplication || existingApplication.order.length === 0) return <Loader />;


  const orderComing = existingApplication?.order?.status === 'Entregado' || existingApplication?.order?.status === 'En camino a destino' || existingApplication?.order?.status === 'No se ha podido entregar' || existingApplication?.order?.status === 'Paquete Cancelado'
  const notificationStylees = (theme) => ({
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






  if (loading) return <Loader visible />
  return (
    <>
      <Box className={classes.root}>
        <PaddingBox>
          <Container size={"xxl"} p={0}>
            {isAdressePage &&
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: theme.colors.orangePrimary[6],
                  fontWeight: 400,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {Icons.arrowL} Volver a la pagina principal{" "}
              </Link>
            }
          </Container>
          <HeaderSection
            title="Detalles y configuración del envío de paquete"
            content="Modifica el estado del envío que estés realizando y da un mejor servicio"
          />
        </PaddingBox>

        <Container size="xxl" p={0}>
          <Grid gutter={16} justify="center">
            <Grid.Col md={8}>
              <Card p={25} radius={4} className={classes.card} pb={300}>
                {/* ID & Ir a la tabla */}
                <Stack justify="space-around">
                  <Flex align={"center"} justify={"space-between"}>
                    <Title
                      existingApplication={3}
                      className={classes.offerTitle}
                      size={isSmallerThanMd ? 28 : 36}
                    >
                      ID: #{existingApplication?.id}
                    </Title>
                    {!isAdressePage && <Link
                      href="/mis-ofertas"
                      style={{
                        color: theme.colors.orangePrimary[6],
                      }}
                    >
                      Ir a la tabla
                    </Link>}
                  </Flex>
                </Stack>

                <Divider my={30} />
                {/* User Icon & Ver Perfil & Whastapp */}
                <Stack justify="space-around" spacing={"lg"}>
                  <Grid>
                    <Grid.Col>
                      <InfoUser
                        status={existingApplication?.order?.status}
                        existingApplication={existingApplication}
                        classes={classes}
                      />
                    </Grid.Col>
                  </Grid>
                </Stack>

                <Divider my={30} />

                {/* Detalles de envio */}
                <Flex mt={16} gap={16} direction="column">
                  <Flex gap={12} align="center">
                    <IconInfoCircleFilled className={classes.infoIcon} />
                    <Text className={classes.detailTitle}>
                      Detalles del envío:
                    </Text>
                  </Flex>
                  <Flex gap={12} align="center">
                    <IconCircleCheckFilled className={classes.dateIcon} />
                    <Text className={classes.dateTitle}>
                      En curso desde el {fullDateFormatter(existingApplication?.outDate ?? existingApplication?.startDate)}
                    </Text>
                  </Flex>
                </Flex>

                {/* Cards de acciones */}
                <Flex my={24} gap={30}>
                  {/* Ubicacion */}
                  <Box className={classes.linkBox} onClick={() => setOpenLocation(!openLocation)}>
                    <Box p={24} className={classes.greyBox}>
                      <IconMapPinFilled className={classes.greyBoxIcon} />
                    </Box>
                    <Text className={classes.textBox}>Ubicación</Text>
                  </Box>

                  {/* Cronograma */}
                  <Box className={classes.linkBox} style={{ textAlign: 'center', textDecoration: "none", fontSize: '12px' }}>
                    <Box p={24} className={classes.greyBox}>
                      <IconPhoneCall className={classes.greyBoxIcon} />
                    </Box>
                    <CallButton
                      status={existingApplication?.order.status}
                      existingApplication={existingApplication}
                      classes={classes}
                    />
                  </Box>

                  {/* Reportar un problema */}
                  <Box className={classes.linkBox} onClick={() => router.push('/support')}>
                    <Box p={24} className={classes.orangeBox}>
                      <IconMessage2Cancel className={classes.orangeBoxIcon} />
                    </Box>
                    <Text className={classes.textBox} >Reportar Problema</Text>
                  </Box>

                  {!orderComing && (
                    <Box className={classes.linkBox} onClick={() => requestCancel(existingApplication.id)}>
                      <Box p={24} className={classes.orangeBox}>
                        <IconCircleXFilled className={classes.orangeBoxIcon} />
                      </Box>
                      <Text className={classes.textBox} >Cancelar Oferta</Text>
                    </Box>
                  )}
                </Flex>
                {/* Desde / hasta */}
                <Stack spacing={"xs"} mx={40}>
                  <Flex direction="column" gap={12}>
                    <Flex gap={10}>
                      <Box className={classes.originIcon}>{Icons.store}</Box>
                      <Flex direction="column" gap={8}>
                        <Text weight={400}>Desde:</Text>
                        <Flex gap={3}>
                          {true && (
                            <Text weight={500}>
                              {existingApplication?.order?.direccionEntrega
                                ? existingApplication?.order?.direccionEntrega
                                : null}{" "}
                              {existingApplication?.order?.addressNumberOrigin
                                ? existingApplication?.order?.addressNumberOrigin
                                : "Sin número"}
                              {existingApplication?.order?.pisoEntrega
                                ? `, Piso: ${existingApplication.order?.pisoEntrega}`
                                : null}
                              {existingApplication?.order?.dptoEntrega
                                ? `, Dpto: ${existingApplication.order?.dptoEntrega}`
                                : null}
                              {", "}
                            </Text>
                          )}
                          <Text weight={500}>
                            {existingApplication?.order?.citySender}, {existingApplication?.order?.provinceSender}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider />
                  <Flex direction="column" gap={12}>
                    <Flex gap={10}>
                      <Box className={classes.destinationIcon}>
                        {Icons.location}
                      </Box>
                      <Flex direction="column" gap={8}>
                        <Text weight={400}>Hacia:</Text>
                        <Flex gap={3}>
                          {true && (
                            <Text weight={500}>
                              {existingApplication?.order?.direccionDestino
                                ? existingApplication?.order?.direccionDestino
                                : null}{" "}
                              {existingApplication?.order?.addressNumberDestination
                                ? existingApplication?.order?.addressNumberDestination
                                : "Sin número"}
                              {existingApplication?.order?.pisoDestino
                                ? `, Piso: ${existingApplication.order?.pisoDestino}`
                                : null}
                              {existingApplication?.order?.dptoDestino
                                ? `, Dpto: ${existingApplication?.order?.dptoDestino}`
                                : null}
                              {", "}
                            </Text>
                          )}
                          <Text weight={500}>
                            {existingApplication?.order?.cityAddressee},{" "}
                            {existingApplication?.order?.provinceAddressee}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Stack>

                <Divider my={30} />

                {/* Estado del Paquete */}
                <Stack className={classes.stackSpacing} mx={25}>
                  <Flex gap={12} align="center">
                    <IconInfoCircleFilled className={classes.infoIcon} />
                    <Text className={classes.detailTitle}>
                      Estado del paquete:
                    </Text>
                  </Flex>
                  <Flex mt={30} align={"center"} gap={20}>
                    <Flex
                      align={"center"}
                      px={10}
                      py={8}
                      gap={5}
                      sx={{
                        bexistingApplication: ` 1px solid ${theme.colors.orangePrimary[6]} `,
                        bexistingApplicationRadius: 30,
                        svg: {
                          path: {
                            fill: theme.colors.orangePrimary[6],
                          },
                        },
                      }}
                    >
                      <IconCircleCheckFilled size={30} color="teal" />
                      <Text weight={400} color={theme.colors.orangePrimary[6]}>
                        {existingApplication?.order?.status}
                      </Text>
                    </Flex>
                    {(existingApplication?.order?.status === 'Entregado' || existingApplication?.order?.status === 'No se ha podido entregar') ?
                      <></>
                      :
                      (
                        <MenuState
                          existingApplication={existingApplication}
                          notificationStylees={notificationStylees}
                          router={router}
                          setLoading={setLoading}
                          classes={classes}
                        />
                      )}
                  </Flex>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <LocationModal opened={openLocation} openClose={setOpenLocation} item={existingApplication?.order} isTaken={true} />
    </>
  )
}
