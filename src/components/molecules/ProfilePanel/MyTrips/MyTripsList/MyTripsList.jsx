import { Box, Card, Divider, Text, Title, Button, Grid } from "@mantine/core";
import { useDate } from "../../../../../hooks/useDate";

import useStyles from "./myTripsList.styles";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import { getErrorMessage } from "@/utils/getError/getError";
import axios from "axios";
import Loader from "@/components/molecules/Loader/Loader";
import { useState } from "react";
import { useRouter } from "next/router";

const MyTripsList = ({ profile, token }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { dateFormatter } = useDate();

  const { classes, theme } = useStyles();

  const cancelTryp = async (idTrip) => {
    setLoading(true);
    console.log("el id", idTrip);
    try {
      const deleteTryp = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/trips/${idTrip}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (deleteTryp.status === 200 || deleteTryp.status === 201) {
        setLoading(false);
        notifications.show({
          title: "Muy bien",
          message: "Cancelaste el pedido de tu paquete",
          icon: <IconCheck />,
          onClose: 500,
        });
        router.reload();
      } else {
        throw new Error(deleteOrder);
      }
    } catch (error) {
      setLoading(false);
      const errorFormated = getErrorMessage(error);
      notifications.show({
        title: "Oh no!",
        message: `Ha habido un problema: ${errorFormated}`,
        icon: <IconCircleX />,
        color: "red",
        // styles: notificationStylees,
      });
      console.log("el error", error);
    }
  };

  if (loading) {
    return <Loader visible></Loader>;
  }

  return (
    <>
      <Box mt={24} className={classes.box}>
        {profile?.trips?.length === 0 || !profile?.trips ? (
          <Title order={3} className={classes.title}>
            {"No Tienes Viajes Programados"}
          </Title>
        ) : (
          <>
            <Title order={3} className={classes.title}>
              {"Viajes Programados"}
            </Title>
            <Divider my="xs" />
            {profile?.trips?.map((trip) => (
              <Card key={trip.id} padding="lg" withBorder>
                <Grid>
                  <Grid.Col span={6}>
                    <Text weight={500}>Origen:</Text>
                    <Text>
                      {trip.initCity}, {trip.initState}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {dateFormatter(trip.initDate)}
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={6} style={{ textAlign: "right" }}>
                    <Text weight={500}>Destino:</Text>
                    <Text>
                      {trip.arrivalCity}, {trip.arrivalState}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {dateFormatter(trip.arrivalDate)}
                    </Text>
                  </Grid.Col>
                </Grid>
                <Box mt="md" style={{ textAlign: "right" }}>
                  <Button
                    variant="outline"
                    color="red"
                    onClick={() => cancelTryp(trip.id)}
                  >
                    Cancelar viaje
                  </Button>
                </Box>
              </Card>
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default MyTripsList;
