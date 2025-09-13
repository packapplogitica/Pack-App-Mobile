import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";

import useStyles from "./Home.style";
import axios from "axios";

import { PaddingBox } from "@/components/atoms";
import { useEffect, useState } from "react";

import {
  NewOrderForm,
  SenderandRecipientInformationForm,
} from "@/components/molecules";

import { useForm } from "@mantine/form";
import { useData } from "@/libs/DataProvider";
import { useSession } from "next-auth/react";
import { IconPackage, IconMoped, IconMapPin } from "@tabler/icons-react";

import AddressTrackSearch from "@/components/molecules/AddressTrackSearch/AddressTrackSearch";

export const Home = () => {
  const [insuranceValue, setInsuranceValue] = useState(0);
  const { data } = useData();
  const [step, setStep] = useState(1);
  const [typeShipping, setTypeShipping] = useState("express");
  const { classes } = useStyles({ step });
  const userDataSession = useSession();

  const session = userDataSession.data;

  const userData = session?.user;

  const form = useForm({
    initialValues: {
      packages: [
        {
          clase: "",
          isFragil: "",
          width: "",
          length: "",
          height: "",
          weight: "",
          details: "",
          insuranceValue: insuranceValue,
        },
      ],
      nameSender: userData?.firstName || "",
      lastNameSender: userData?.lastName || "",
      dniSender: Number(userData?.DNI) || "",
      emailSender: userData?.email || "",
      isUrgent: false,
      phoneSender: "",
      direccionEntrega: "",
      deptoEntrega: "",
      pisoEntrega: "",
      direccionDestino: "",
      deptoDestino: "",
      pisoDestino: "",
      cityAddressee: "",
      citySender: "",
      origincCity: "",
      codeAddresse: "",
      codeSender: "",
      typeOrder: typeShipping,
    },
  });

  const handleAddPackage = () => {
    form.insertListItem("packages", {
      clase: "",
      isFragil: false,
      width: "",
      length: "",
      height: "",
      weight: "",
      details: "",
      insuranceValue: 0,
    });
  };

  const handleRemovePackage = (index) => {
    form.removeListItem("packages", index);
  };

  let orders = {
    packages: form.values.packages, // Ahora es un array de paquetes
    nameAddressee: form.values.nameAddressee,
    lastNameAddressee: form.values.lastNameAddressee,
    dniAddresse: form.values.dniAddresse,
    emailAddresse: form.values.emailAddresse,
    phoneAddresse: form.values.phoneAddresse,
    nameSender: form.values.nameSender,
    phoneSender: form.values.phoneSender,
    lastNameSender: form.values.lastNameSender,
    dniSender: form.values.dniSender,
    emailSender: form.values.emailSender,
    direccionEntrega: form.values.direccionEntrega,
    deptoEntrega: form.values.deptoEntrega,
    pisoEntrega: form.values.pisoEntrega,
    direccionDestino: form.values.direccionDestino,
    deptoDestino: form.values.deptoDestino,
    pisoDestino: form.values.pisoDestino,
    codeAddresse: form.values.codeAddresse,
    codeSender: form.values.codeSender,
    isUrgent: form.values.isUrgent,
    typeOrder: form.values.typeOrder,
  };

  const [carriersQuant, setCarriersQuant] = useState(0);

  function getRoundedHundred(value) {
    setCarriersQuant(Math.floor(value / 100) * 100);
  }

  useEffect(() => {
    const getCarriersCuantity = async () => {
      try {
        const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/profiles/carriersQuantity`;
        const response = await axios.get(baseUrl);
        return getRoundedHundred(response.data);
      } catch (error) {
        console.error("Error al obtener la cantidad de carriers:", error);
        setCarriersQuant(0);
      }
    };
    getCarriersCuantity();
  }, []);

  return (
    <>
      <PaddingBox>
        <Container size="xxl" p={0}>
          <Flex direction="column" gap="xxs">
            <Title order={1} className={classes.title} id="envios">
              PackApp Clientes: Envíos eficientes y sin estrés.
            </Title>
            {carriersQuant > 100 && (
              <Text
                className={classes.quantity}
              >{`Más de ${carriersQuant} transportistas verificados usan PackApp`}</Text>
            )}
            {/* Selector de opciones */}

            <Flex
              justify={"center"}
              align={"center"}
              gap="md"
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Button
                fullWidth
                onClick={() => setTypeShipping("express")}
                color="orange"
                variant={typeShipping === "express" ? "filled" : "outline"}
                radius="md"
                h={90}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex gap={20}>
                  <IconMoped
                    color={typeShipping === "express" ? "#fff" : "#000"}
                    size={50}
                    style={{ marginBottom: 10 }}
                  />
                  <Flex
                    direction={"column"}
                    gap={0}
                    align="start"
                    justify={"center"}
                  >
                    <Text fw={700} size={18} align="start">
                      Express
                    </Text>
                    <Text size={15} align="start" style={{ whiteSpace: "break-spaces" }}>
                      Para transportes urbanos hasta 25 km
                    </Text>
                  </Flex>
                </Flex>
              </Button>
{/* 
              <Button
                fullWidth
                onClick={() => setTypeShipping("paqueteria")}
                color="orange"
                variant={typeShipping === "paqueteria" ? "filled" : "outline"}
                radius="md"
                h={90}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex gap={20}>
                  <IconPackage
                    color={typeShipping === "paqueteria" ? "#fff" : "#000"}
                    size={50}
                    style={{ marginBottom: 10 }}
                  />
                  <Flex
                    direction={"column"}
                    gap={0}
                    align="start"
                    justify={"center"}
                  >
                    <Text fw={700} size={18} align="start">
                      Paquetería
                    </Text>
                    <Text size={15} align="start" style={{ whiteSpace: "break-spaces" }}>
                      Envíos nacionales hasta 1.100 km
                    </Text>
                  </Flex>
                </Flex>
              </Button> */}

              <Button
                fullWidth
                onClick={() => setTypeShipping("Tracking")}
                color="orange"
                variant={typeShipping === "Tracking" ? "filled" : "outline"}
                radius="md"
                h={90}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flex gap={20}>
                  <IconMapPin
                    color={typeShipping === "Tracking" ? "#fff" : "#000"}
                    size={50}
                    style={{ marginBottom: 10 }}
                  />
                  <Flex
                    direction={"column"}
                    gap={0}
                    align="start"
                    justify={"center"}
                  >
                    <Text fw={700} size={18} align="start">
                      Tracking
                    </Text>
                    <Text size={15} align="start" style={{ whiteSpace: "break-spaces" }}>
                      Hacer seguimiento de tu paquete
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </PaddingBox>
      <BackgroundImage
        src="/assets/banner.jpg"
        className={classes.background}
        mb="xl"
      >
        <PaddingBox
          sx={{
            height: "100%",
          }}
        >
          <Container
            size="xxl"
            p={0}
            sx={{
              height: "100%",
            }}
          >
            <Grid
              justify="center"
              align="center"
              py="md"
              sx={{
                height: "100%",
              }}
            >
              <Grid.Col>
                {typeShipping === "express" && (
                  <Box>
                    <SenderandRecipientInformationForm
                      setSteep={setStep}
                      orders={orders}
                      form={form}
                      data={data}
                      typeShipping={typeShipping}
                    />
                  </Box>
                )}

                {/* {typeShipping === "paqueteria" && (
                  <Box>
                    <NewOrderForm
                      setStep={setStep}
                      formValues={form}
                      insuranceValue={insuranceValue}
                      setInsuranceValue={setInsuranceValue}
                      handleRemovePackage={handleRemovePackage}
                      handleAddPackage={handleAddPackage}
                      orders={orders}
                      typeShipping={typeShipping}
                      setSteep={setStep}
                    />
                  </Box>
                )} */}
                {typeShipping === "Tracking" && (
                  <Box mb={0} pb={0}>
                    <AddressTrackSearch />
                  </Box>
                )}
              </Grid.Col>
            </Grid>
          </Container>
        </PaddingBox>
      </BackgroundImage>
    </>
  );
};
