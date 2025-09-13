import {
  Box,
  Card,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  List,
  NumberInput,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import useStyles from "./checkoutPage.style";
import { PaddingBox } from "@/components/atoms";
import { HeaderSection } from "@/components/atoms/HeaderSection/HeaderSection";
import Icons from "@/icons";
import Link from "next/link";
import Image from "next/image";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import Loader from "@/components/molecules/Loader/Loader";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { IconCircleX } from "@tabler/icons-react";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";

export default function Chekcout2(application) {
  const { firstName, lastName, DNI, email, areaCode, phone } = application?.application?.user;
  // console.log(firstName)
  const { classes, theme, cx } = useStyles();
  const router = useRouter();
  const init_point = application?.application?.application?.preference?.sandbox_init_point || application?.application?.application?.payment?.url_payment
  const packageCommissionValue = application?.application?.application?.payment?.packageCommission === 0
  const statusAccredited = application?.application?.application?.payment?.status === 'accredited' || application?.application?.application?.existingApplication?.isTaken
  const ensure = application?.application?.application?.existingApplication?.order.ensure
  // const insuranceValue = application?.application.application?.existingApplication.order?.insuranceValue ?? 0
  const totalInsurance = application?.application.application?.existingApplication.order?.packages.reduce((acc, pkg) => {
    return acc + pkg.insuranceValue;
  }, 0);
  const [checked, setChecked] = useState(ensure)
  const [insuranceCost, setInsuranceCost] = useState(totalInsurance);
  const [loading, setLoading] = useState(false);
  const [payed, setPayed] = useState(true);
  const [terms, setTerms] = useState(false);
  const [offerAcepted, setOfferAcepted] = useState(false)
  const parser = (value) => {
    // Remove currency symbol and thousands separators
    return value.replace(/[^\d,]/g, '').replace(',', '.');
  };

  const formatter = (value) => {
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parsedValue);
    }
    return "";
  };



  const form = useForm({
    initialValues: {
      firstName: firstName + ' ' + lastName,
      dniClient: DNI,
      phoneClient: phone,
      insurance: false,
      terms: false,
    },
  });

  const notificationStyles = () => ({
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

  const handelSubmit = async () => {

    if (init_point) {
      if (!terms) {
        setLoading(false)
        return showNotification({
          title: "Por favor",
          message: "Acepta los terminos para poder continuar",
          notificationStyles
        });
      } else {
        router.push(init_point);
      }

    } else {
      notifications.show({
        title: "Oh no!",
        message:
          "Ha habido un problema, debe iniciar sesión para cargar un paquete",
        icon: <IconCircleX />,
        color: "red",
      });
    }
  }



  if (loading) {
    return <Loader visible />
  }

  return (
    <Box className={classes.root}>
      <PaddingBox>
        <Container size={"xxl"} p={0}>
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
        </Container>
        <HeaderSection
          title="Pagina de pago"
          content="Paga por tu servicio de preferencia, siempre."
        />

        <Container size={"xxl"} p={0} mt="xs">
          <Card padding={16} radius={8}>
            <form
              className={classes.form}
              onSubmit={form.onSubmit(handelSubmit)}
            >
              <Grid gutter={25} my="xs">
                <Grid.Col md={6}>
                  <List type="ordered" className={classes.list}>
                    <List.Item>Información de contacto</List.Item>
                    <Grid gutter={16} my={5}>
                      <Grid.Col md={6}>
                        <TextInput
                          label="Nombre y Apellido"
                          placeholder="Nombre y Apellido"
                          size="lg"
                          radius={8}
                          disabled
                          {...form.getInputProps("firstName")}
                        />
                      </Grid.Col>
                      <Grid.Col md={6}>
                        <TextInput
                          label="DNI del cliente"
                          placeholder="DNI"
                          size="lg"
                          radius={8}
                          disabled
                          {...form.getInputProps("dniClient")}
                        />
                      </Grid.Col>
                      <Grid.Col md={6}>
                        <TextInput
                          label="Teléfono de contacto"
                          placeholder="+543624123654"
                          size="lg"
                          radius={8}
                          disabled
                          {...form.getInputProps("phoneClient")}
                        />
                      </Grid.Col>
                      <Grid.Col md={6}>
                        <NumberInput
                          label="Valor declarado del paquete"
                          size="lg"
                          radius={8}
                          disabled
                          parser={parser}
                          formatter={formatter}
                          value={insuranceCost}
                        // onChange={(value) => setInsuranceCost(value)}

                        />
                      </Grid.Col>
                    </Grid>
                    <Grid gutter={16}>
                      <Grid.Col>
                        <List.Item my={10}>Seguro del paquete</List.Item>
                      </Grid.Col>
                      <Grid.Col md={6}>
                        <Flex gap="xxs">
                          <Text className={classes.labelInput}>Asegurado</Text>
                          <Switch
                            color="orangePrimary.6"
                            size="md"
                            checked={checked}
                            disabled
                            onChange={(event) =>
                              setChecked(event.currentTarget.checked)
                            }
                          />
                        </Flex>
                      </Grid.Col>
                      {!packageCommissionValue && (
                        <Grid.Col>
                          <List.Item my={10}>Metodo de Pago</List.Item>
                          <Image
                            src="/assets/mercadopago.png"
                            width={247}
                            height={47}
                            alt="mercado pago "
                            objectFit="cover"
                          />
                        </Grid.Col>
                      )}
                      {!packageCommissionValue && (
                        <Grid.Col>
                          <List.Item my={10}>Términos y condiciones</List.Item>
                          <Box
                            sx={{
                              borderRadius: 8,
                              border: `1px solid ${theme.fn.rgba(
                                theme.colors.grey[6],
                                0.13
                              )}`,
                            }}
                            p={10}
                          >
                            <Stack spacing={12} my={12}>
                              <Text weight={600} size={18} c={"#6D7276"}>
                                IMPORTANTE
                              </Text>
                              <Text size={16} weight={400} c={"#6D7276"}>
                                Vas a pagar una comisión por asegurar tu paquete. El seguro solo cubre el valor que declaraste
                              </Text>
                              <Text size={16} weight={400} c={"#6D7276"}>
                                El precio de la oferta para transportar tu paquete deberas pagar a tu transportista. Recomendamos que lo hagas una vez que figure entregado el paquete en nuestra pagina
                              </Text>
                              <Checkbox
                                mt={15}
                                label="Acepto los términos y condiciones"
                                color="orangePrimary.6"
                                classNames={{
                                  label: classes.labelCheckbox,
                                }}
                                onChange={() => setTerms(true)}
                                value={terms}
                              />
                            </Stack>
                          </Box>
                        </Grid.Col>
                      )}
                    </Grid>

                  </List>
                </Grid.Col>
                <Grid.Col md={6}>
                  <Grid gutter={16} align="center">
                    <Grid.Col md={6}>
                      <Flex gap={16}>
                        <Image
                          src={"/assets/paquete.png"}
                          alt="paquete"
                          width={64}
                          height={64}
                        />
                        <Flex direction={"column"}>
                          <Text size={20} weight={500}>
                            Envío #{application?.application?.application?.existingApplication?.order?.id}
                          </Text>
                          <Text color="#707070" weight={400}>
                            Corrientes, Capital a Buenos Aires, Palermo
                          </Text>
                        </Flex>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Flex align={"center"}>
                        <Text weight={400} size={20}>
                          ${application?.application?.application?.existingApplication?.budget}
                        </Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col>
                      <Divider />
                    </Grid.Col>
                    <Grid.Col>
                      <Text weight={400} color={theme.colors.orangePrimary[6]}>
                        Detalles
                      </Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={400}>Cantidad de paquetes</Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={300} c={"#707070"}>
                        1 paquete
                      </Text>
                    </Grid.Col>


                    {application?.application?.application?.existingApplication?.order.clase != 'envelope' && (
                      <Grid.Col md={6}>
                        <Text weight={400}>Medidas</Text>
                      </Grid.Col>
                    )}
                    {application?.application?.application?.existingApplication?.order?.clase != 'envelope' && (
                      <Grid.Col md={6}>

                        <Text c={"grey.6"}>
                          {application?.application?.application?.existingApplication?.order?.length
                            ? application?.application?.application?.existingApplication?.order?.length && `${application.application.application.existingApplication.order?.length} de largo, `
                            : null}
                          {application?.application?.application?.existingApplication.order?.height
                            ? application?.application?.application?.existingApplication?.order?.height && `${application.application.application.existingApplication.order?.height} de alto, `
                            : null}
                          {application?.application?.application?.existingApplication?.order?.width
                            ? application?.application?.application?.existingApplication?.order?.width && `${application.application.application.existingApplication.order?.width} de ancho`
                            : null}
                        </Text>
                      </Grid.Col>
                    )}
                    {application?.application?.application?.existingApplication?.order.clase != 'envelope' && (
                      <Grid.Col md={6}>
                        <Text weight={400}>Peso</Text>
                      </Grid.Col>
                    )}
                    {application?.application?.application?.existingApplication?.order.clase != 'envelope' && (
                      <Grid.Col md={6}>
                        <Text weight={300} c={"#707070"}>
                          {application?.application?.application?.existingApplication.order?.weight * 0.001}kg
                        </Text>
                      </Grid.Col>
                    )}
                    <Grid.Col md={6}>
                      <Text weight={400}>Estado</Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={300} c={"#707070"}>
                        {application?.application?.application?.existingApplication?.order?.isFragil === true ? "Fragil" : 'Apilable'}
                      </Text>
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <Text weight={400}>Fecha de recogida</Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={300} c={"#707070"}>
                        {application?.application?.application?.existingApplication?.outDate}
                      </Text>
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <Text weight={400}>Fecha de entrega</Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={300} c={"#707070"}>
                        {application?.application?.application?.existingApplication?.comingDate}
                      </Text>
                    </Grid.Col>

                    <Grid.Col>
                      <Divider />
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <Flex direction={"column"}>
                        <Text weight={400}>Paquete asegurado</Text>
                        <Text weight={300} size={13} c={"#354052"}>
                          1% del valor total
                        </Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={400}>${Math.floor(totalInsurance * 0.01)}</Text>
                    </Grid.Col>
                    <Grid.Col>
                      <Divider />
                    </Grid.Col>

                    <Grid.Col md={6}>
                      <Flex direction={"column"}>
                        <Text weight={400}>Comision por servicio</Text>
                        <Text weight={300} size={13} c={"#354052"}>
                          5% del valor total
                        </Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={400}>$0</Text>
                    </Grid.Col>
                    <Grid.Col>
                      <Divider />
                    </Grid.Col>


                    <Grid.Col md={6}>
                      <Text weight={400} size={20}>
                        Total
                      </Text>
                    </Grid.Col>
                    <Grid.Col md={6}>
                      <Text weight={400} size={20}>
                        ${insuranceCost * 0.01}
                      </Text>
                    </Grid.Col>

                    {(!statusAccredited || !payed) && (
                      !offerAcepted && (
                        <Grid.Col>
                          <ButtonPackApp
                            type="submit"
                            w={"100%"}
                            variant="filled"
                            size="xl"
                          // onClick={handelSubmit}
                          >

                            {'Pagar Comision'}

                          </ButtonPackApp>
                        </Grid.Col>
                      )
                    )}

                  </Grid>
                </Grid.Col>
              </Grid>
            </form>
          </Card>
        </Container>
      </PaddingBox>
    </Box>
  );
}