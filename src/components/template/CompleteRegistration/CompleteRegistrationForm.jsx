import {  useEffect, useState } from "react";
import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { theme } from "@/libs/theme";
import {
  Card,
  Container,
  Flex,
  Grid,
  PasswordInput,
  Text,
  TextInput,
  Select,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/router";
import useStyles from "../../molecules/form.style";
import { useMediaQuery } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import Loader from "@/components/molecules/Loader/Loader";
import { useFormValidation } from "@/hooks/useFormValidation";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";
import Link from "next/link";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";
import { submitSignUpForm } from "./utils/handleGoogleSignIn";

const CompleteRegistrationForm = ({ user }) => {

  const { data, update } = useSession();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkedTransport, setCheckedTransport] = useState(false);
  const [checkedSendReceiver, setCheckedSendReceiver] = useState(false);
  const { classes } = useStyles();
  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );

  const notificationStyles = (theme) => ({
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

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      const provinceData = response.data.provincias
        .filter((prov) => prov.id !== "02")
        .map((prov) => ({
          value: prov.id,
          label: prov.id === "94" ? "Tierra del Fuego" : prov.nombre,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
      setProvinces(provinceData);
    } catch (error) {
      console.error("Error fetching provinces:", error);
      notifications.show({
        title: "Error",
        message:
          "No se pudieron cargar las provincias. Por favor, intente nuevamente.",
        color: "red",
      });
    }
  };

  const handleProvinceChange = async (provinceId) => {
    form.setFieldValue("city", "");
    setCities([]);
    setSelectedProvince(provinceId);
    try {
      const response = await axios.get(
        `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinceId}&campos=id,nombre&max=1000`
      );

      let cityData = response.data.municipios.map((city) => ({
        value: city.id,
        label: city.nombre,
      }));

      if (provinceId === "06") {
        cityData.push({
          value: "02",
          label: "Ciudad Autónoma de Buenos Aires",
        });
      }

      if (provinceId === "78") {
        cityData = [...cityData, ...getStaCruzCities()];
      }

      if (provinceId === "86") {
        cityData = [...cityData, ...getStgoEsteroCities()];
      }

      setCities(cityData.sort((a, b) => a.label.localeCompare(b.label)));
    } catch (error) {
      console.error("Error fetching cities:", error);
      notifications.show({
        title: "Error",
        message:
          "No se pudieron cargar las ciudades. Por favor, intente nuevamente.",
        color: "red",
      });
    }
  };

  // Helper functions (moved outside the component)
  const validateName = (value) => {
    const emptyError = emptyValidation(value);
    if (emptyError) return emptyError;

    const numberError = noNumbers(value);
    if (numberError) return numberError;

    const minCharError = minimumCharacters(value);
    if (minCharError) return minCharError;

    return null;
  };

  const validateEmail = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (emailValidation(value)) return emailValidation(value);
  };

  const validateDni = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (dniValidation(value)) return dniValidation(value);
  };

  /* const validateAreacode = (value) => {
if (emptyValidation(value)) return emptyValidation(value);
if (areaCodeValidation(value)) return areaCodeValidation(value);
}; */

  const validatePhone = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);

    return value.length !== 10 ? "El telefono debe tener 10 carácteres" : null;
    /*   switch (form.getInputProps("areaCode").value.toString().length) {
case 2:
  return value.toString().length != 10 ? 'El telefono debe tener 10 caracteres' : null;
  return value.toString().length != 7 ? 'El telefono debe tener 7 caracteres' : null;
case 4:
  return value.toString().length != 6 ? 'El telefono debe tener 6 caracteres' : null;
} */
  };

  const getStaCruzCities = () => [
    { value: "01", label: "Río Gallegos" },
    { value: "02", label: "Puerto Deseado" },
    { value: "03", label: "Caleta Olivia" },
    { value: "04", label: "Pico Truncado" },
    { value: "05", label: "Las Heras" },
    { value: "06", label: "Perito Moreno" },
    { value: "07", label: "Los Antiguos" },
    { value: "08", label: "Puerto San Julián" },
    { value: "09", label: "Gobernador Gregores" },
    { value: "10", label: "Comandante L. Piedra Buena" },
    { value: "11", label: "Puerto Santa Cruz" },
    { value: "12", label: "El Chaltén" },
    { value: "13", label: "El Calafate" },
    { value: "14", label: "Río Turbio" },
    { value: "15", label: "28 de Noviembre" },
  ];

  const getStgoEsteroCities = () => [
    { value: "1", label: "Añatuya" },
    { value: "2", label: "Bandera" },
    { value: "3", label: "Beltrán" },
    { value: "4", label: "Campo Gallo" },
    { value: "5", label: "Clodomira" },
    { value: "6", label: "Colonia Dora" },
    { value: "7", label: "Fernández" },
    { value: "8", label: "Frías" },
    { value: "9", label: "Ingeniero Forres" },
    { value: "10", label: "La Banda" },
    { value: "11", label: "Loreto" },
    { value: "12", label: "Los Juríes" },
    { value: "13", label: "Los Telares" },
    { value: "14", label: "Monte Quemado" },
    { value: "15", label: "Nueva Esperanza" },
    { value: "16", label: "Pampa de los Guanacos" },
    { value: "17", label: "Pinto" },
    { value: "18", label: "Pozo Hondo" },
    { value: "19", label: "Quimilí" },
    { value: "20", label: "San Pedro de Guasayán" },
    { value: "21", label: "Santiago del Estero" },
    { value: "22", label: "Selva" },
    { value: "23", label: "Sumampa" },
    { value: "24", label: "Suncho Corral" },
    { value: "25", label: "Termas de Río Hondo" },
    { value: "26", label: "Tintina" },
    { value: "27", label: "Villa Atamisqui" },
    { value: "28", label: "Villa Ojo de Agua" },
  ];

  const {
    emptyValidation,
    minimumCharacters,
    noNumbers,
    emailValidation,
    phoneValidation,
    dniValidation,
    passwordValidation,
    confirmPasswordValidation,
  } = useFormValidation();

  const padding = isSmallerThanMd ? 20 : 40;
  const { firstName, lastName, DNI, areaCode, phone, state, city } = user.current.profile || {};

  // console.log('la informacion del ususario',user)

  const form = useForm({
    initialValues: {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      dni: DNI ?? '',
      // areaCode: areaCode ?? null,
      phone: phone ?? null,
      state: state ?? '',
      city: city ?? '',
      email: user.email ?? '',
      password: "",
      confirmPassword: "",
      termAndConditions: false,
    },
    // validate: {
    //   firstName: validateName,
    //   lastName: validateName,
    //   dni: validateDni,
    //   email: validateEmail,
    //   phone: validatePhone,
    //   state: validateName,
    //   city: emptyValidation,
    //   password: passwordValidation,
    //   confirmPassword: confirmPasswordValidation,
    //   termAndConditions: (value) =>
    //     value ? null : "Debes aceptar los términos y condiciones.",
    // },
  });


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

   const handleSubmit = async (value) => {
      const result = await submitSignUpForm({
        form,
        setLoading, 
        checkedTransport, 
        checkedSendReceiver,
        update,
        signOut,
        data,
        user,
      });
  
      if (result) {
        showNotification({
          title: result.title,
          message: result.message, // Ahora esto es un string válido
          icon: result.icon,
          color: result.color,
          type:result.type,
          notificationStyles:notificationStyles
        })
      }
    };

  if (loading) {
    return <Loader visible />
  }

  return (
    <PaddingBox>
      <Container size="xxl" p={0}>
        <Grid justify="center" mb="sm">
          <Grid.Col md={6}>
            <Card
              withBorder
              radius={16}
              className={classes.card}
              p={padding}
            >
              <form
                onSubmit={form.onSubmit(handleSubmit)}
                className={classes.form}
              >
                <Grid gutter={20}>
                  {/* Nomrbre */}
                  <Grid.Col md={6}>
                    <TextInput
                      label="Nombre"
                      placeholder="Nombre"
                      withAsterisk
                      size="lg"
                      {...form.getInputProps("firstName")}
                      className={classes.generalInput}
                    />
                  </Grid.Col>
                  {/* Apellido */}
                  <Grid.Col md={6}>
                    <TextInput
                      label="Apellido"
                      placeholder="Apellido"
                      withAsterisk
                      size="lg"
                      {...form.getInputProps("lastName")}
                      className={classes.generalInput}
                    />
                  </Grid.Col>
                  {/* DNI */}
                  <Grid.Col md={12}>
                    < TextInput
                      withAsterisk
                      label="DNI"
                      placeholder="DNI"
                      size="lg"
                      hideControls
                      {...form.getInputProps("dni")}
                      className={classes.generalInput}
                    />
                  </Grid.Col>
                  <PhoneInput
                    label="Número de Teléfono"
                    placeholder="Ingrese su número de teléfono"
                    className="custom-phone-input"
                    value={form.values.phoneAddresse}
                    onChange={(value) =>
                      form.setFieldValue("phone", value)
                    }
                    error={form.errors.phone}
                  />
                  {/* Provincia */}
                  <Grid.Col md={6}>
                    <Select
                      label="Provincia"
                      placeholder="Selecciona una Provincia"
                      data={provinces}
                      value={selectedProvince}
                      onChange={(provinceId) => {
                        const selectedProv =
                          provinces.find(
                            (prov) =>
                              prov.value ===
                              provinceId
                          );
                        handleProvinceChange(
                          provinceId
                        );
                        form.setFieldValue(
                          "state",
                          selectedProv?.label || ""
                        );
                      }}
                      size="lg"
                      className={classes.generalInput}
                      withAsterisk
                      searchable
                    />
                  </Grid.Col>
                  {/* Ciudad */}
                  <Grid.Col md={6}>
                    <Select
                      label="Ciudad"
                      placeholder="Selecciona una Ciudad"
                      data={cities}
                      onChange={(cityId) => {
                        const selectedCity =
                          cities.find(
                            (city) =>
                              city.value ===
                              cityId
                          )?.label;

                        form.setFieldValue(
                          "city",
                          selectedCity ?? ""
                        );
                      }}
                      disabled={!selectedProvince}
                      size="lg"
                      // {...form.getInputProps("city")}
                      className={classes.generalInput}
                      withAsterisk
                      searchable
                    />
                  </Grid.Col>
                  {/* Password */}
                  <Grid.Col md={6}>
                    <PasswordInput
                      label="Contraseña"
                      placeholder="Constraseña"
                      withAsterisk
                      className={classes.passwordInput}
                      size="lg"
                      classNames={{
                        input: classes.passwordInput,
                      }}
                      {...form.getInputProps("password")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <PasswordInput
                      label="Confirmar"
                      placeholder="Confirmar contraseña"
                      withAsterisk
                      size="lg"
                      classNames={{
                        input: classes.passwordInput,
                      }}
                      className={classes.passwordInput}
                      {...form.getInputProps(
                        "confirmPassword"
                      )}
                    />
                  </Grid.Col>

                  <Grid.Col md={6}>
                    <Checkbox
                      label="Quiero Enviar y Recibir Paquetes"
                      color="orange"
                      {...form.getInputProps(
                        "sendReceiver"
                      )}
                      withAsterisk
                      checked={checkedSendReceiver}
                      onChange={(event) =>
                        setCheckedSendReceiver(
                          event.currentTarget.checked
                        )
                      }
                    />
                  </Grid.Col>

                  <Grid.Col md={6}>
                    <Checkbox
                      label="Quiero Transportar Paquetes"
                      color="orange"
                      {...form.getInputProps("transport")}
                      withAsterisk
                      checked={checkedTransport}
                      onChange={(event) => {
                        setCheckedTransport(
                          event.currentTarget.checked
                        );
                      }}
                    />
                  </Grid.Col>

                  <Grid.Col md={12}>
                    <Checkbox
                      label={
                        <>
                          Acepto los{" "}
                          <Link
                            style={{
                              color: "#F39929",
                            }}
                            href="/terminos-condiciones"
                            target="_blank"
                          >
                            términos y condiciones
                          </Link>
                        </>
                      }
                      color="orange"
                      {...form.getInputProps(
                        "termAndConditions"
                      )}
                      withAsterisk
                    />
                  </Grid.Col>
                </Grid>
                {!loading && (
                  <ButtonPackApp
                    type="submit"
                    mt="sm"
                    w="100%"
                    p={10}
                    uppercase
                    size="md"
                    variant="filled"
                  >
                    Registrate
                  </ButtonPackApp>
                )}
              </form>
              <Flex mt="xs" direction="column" gap={5}>
                <Text className={classes.formContent}>
                  Si ya tienes cuenta?
                  <Text span ml={5}>
                    <Link href="/signin">
                      Iniciar Sesión
                    </Link>
                  </Text>
                </Text>
              </Flex>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </PaddingBox>
  );
}

export default CompleteRegistrationForm


