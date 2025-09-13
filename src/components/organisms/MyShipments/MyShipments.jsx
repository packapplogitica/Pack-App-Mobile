import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StepperPackApp } from "@/components/molecules";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { CardDetail } from "@/components/molecules/CardOrder/CardDetail/CardDetail";
import Loader from "@/components/molecules/Loader/Loader";
import useStaticData from "@/hooks/useStaticData";
import { useMediaQuery } from "@mantine/hooks";
import {
  Card,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import useStyles from "./myShipments.style";
import { useSession } from "next-auth/react";
import { ShipmentCards } from "./ShipmentCards/ShipmentCards";
import { requestCancel } from "./ShipmentCards/utils/handelActions";

const MyShipments = ({ applications, order, hasRated, ratingOrder, isAdressePage, price }) => {
  const { data: session } = useSession();
  const { classes, theme } = useStyles();
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const { defaultData } = useStaticData();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0)
  const [rated, setRated] = useState(hasRated)
  const { data } = useSession()
  const orderComing = order?.status === 'Entregado' || order?.status === 'En camino a destino' || order?.status === 'No se ha podido entregar' || order?.status === 'Paquete Cancelado'
  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );
  
  const token = data?.user?.token
  const withCarrier = order?.status === 'Solicitado' || order?.status === 'Con oferta'
  const typeLabel = () => {
    const types = defaultData?.packagesType.map((type) => ({
      value: type.value,
      label: type.name,
    }));
    return types.find((type) => type.value === order?.clase)?.label;
  };

  const handleDetailModal = () => {
    setOpenDetail(!openDetail);
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



  if (loading) return <Loader visible />
  const orderId= order?.id
  return (
    <Card p={25} radius={4} className={classes.card}>
      {/* <Stack> */}
      <Stack justify="space-around">
        <Flex align={"center"} justify={"space-between"}>
          <Title
            order={3}
            className={classes.orderTitle}
            size={isSmallerThanMd ? 28 : 36}
          >
            ID: #{order?.id}
          </Title>
          {!isAdressePage && <Link
            href="/mis-paquetes"
            style={{
              color: theme.colors.orangePrimary[6],
            }}
          >
            Ir a la tabla
          </Link>}
        </Flex>
        <Divider />
        <Flex align={"center"} justify={"space-between"}>
          <Group position="left" spacing={12}>
            <Text span className={classes.statusTitle}>
              Estado:
            </Text>
            <Text span className={classes.statusText}>
              {order?.status}
            </Text>
          </Group>

          <Group align="center">
            <Text
              className={classes.detailLink}
              size="lg"
              onClick={handleDetailModal}
              w={"100%"}
            >
              {"Ver detalle"}
            </Text>
          </Group>
        </Flex>

        <StepperPackApp status={order?.status} />
      </Stack>
      <Stack mt={40} align={isSmallerThanMd ? "center" : "end"}>
        {!orderComing && !isAdressePage && (

          <ButtonPackApp
            variant="filled"
            size="xl"
            onClick={() => requestCancel({orderId,notificationStylees,setLoading,token,router})}
            w="40%"
          >
            {"Cancelar Envío"}
          </ButtonPackApp>
        )}

      </Stack>
      <Divider my={40} id="transportista" />
      <Stack>
        {withCarrier ? (
          <Text className={classes.offerTitle}>
            {applications.length > 0 ? "Ofertas recibidas" : "Todavía no recibiste Ofertas"}
          </Text>
        ) : (
          <Text className={classes.offerTitle}>
            {"Este es tu transportista"}
          </Text>
        )
        }
        <ShipmentCards
          applications={applications}
          theme={theme}
          classes={classes}
          ratingOrder={ratingOrder}
          order={order}
          rated={rated}
          session={session}
          setLoading={setLoading}
          setRated={setRated}
          setRating={setRating}
          hasRated={hasRated}
        />
      </Stack>
      <CardDetail
        owner={session?.user.id === order?.despachante?.id}
        handleDetailModal={handleDetailModal}
        opened={openDetail}
        item={order}
        type={typeLabel}
        detailPage={true}
        price={price}
      />

      {/* </Stack> */}
    </Card>
  );
};

export default MyShipments;