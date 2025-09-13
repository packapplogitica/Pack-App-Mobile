import { useEffect, useRef, useState } from "react";
import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { theme } from "@/libs/theme";
import {
  Card,
  Container,
  Flex,
  Grid,
  NumberInput,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCircleX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import useStyles from "../form.style";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import { modals } from "@mantine/modals";
import { useFormValidation } from "@/hooks/useFormValidation";
import Loader from "../Loader/Loader";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";

export const SignupForm = () => {
  const firstNameRef = useRef(null);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  

  const router = useRouter();
  const { classes } = useStyles();
  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );

  const {
    emptyValidation,
    minimumCharacters,
    emailValidation,
    areaCodeValidation,
    dniValidation,
    passwordValidation,
    confirmPasswordValidation,
  } = useFormValidation();

  const padding = isSmallerThanMd ? 20 : 40;

  const typeUsers = [
    { value: "Transportista", label: "Transportista" },
    { value: "Despachante", label: "Despachante" },
  ];

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

  const validateName = (value) => {
    const emptyError = emptyValidation(value);
    if (emptyError) return emptyError;

    const minCharError = minimumCharacters(value);
    if (minCharError) return minCharError;

    return null;
  };

  const validateDni = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (dniValidation(value)) return dniValidation(value);
  };

  const validateAreacode = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (areaCodeValidation(value)) return areaCodeValidation(value);
  };

  const validateEmail = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (emailValidation(value)) return emailValidation(value);
  };

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      DNI: "",
      areaCode: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      firstName: validateName,
      lastName: validateName,
      DNI: validateDni,
      areaCode: validateAreacode,
      phone: emptyValidation,
      email: validateEmail,
      // password: passwordValidation,
      // confirmPassword: confirmPasswordValidation,
    },
  });

  const handleSubmit = async (value) => {
    setLoading(true)

    try {
      const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`;
      const res = await axios.post(baseUrl, {
        firstName: form.values.firstName,
        lastName: form.values.lastName,
        email: form.values.email.toLowerCase(),
        password: form.values.password,
        phone: form.values.phone,
        DNI: form.values.DNI,
        areaCode: form.values.areaCode,
      });

      if (res?.status === 201 || res?.status === 200) {
        setLoading(false)
        const confirmModal = () => {
          form.reset();
          router.push("/signin");
        };
        const closeModal = () => {
          modals.closeAll();
          form.reset();
          router.push("/signin");
        };
        // notifications.show({
        //   title: "Registro exitoso",
        //   message: "Te has registrado correctamente",
        //   icon: <IconCircleCheck />,
        //   color: "teal",
        //   styles: notificationStylees,
        // });

        modals.open({
          children: (
            <Flex direction="column" gap={16} align="baseline" w={"100%"}>
              <Image
                src="/assets/antConfettiVector.svg"
                alt="image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "1rem",
                }}
              />
              <Grid gutter={25} mt="sm" w={"100%"}>
                <Grid.Col>
                  <Stack spacing={12}>
                    <Text size={24} weight={500} align="center">
                      Buen trabajo!
                    </Text>
                    <Text size={16} weight={400} align="center" c={"grey.6"}>
                      {res.data.enviroment === 'PROD' ?
                        `¡Te has registrado con exito, ${form.values.firstName}! Muy pronto vas a tener acceso a la applicación para usarla, te enviaremos un email cuando esté disponible.`
                        :
                        `¡Te has registrado con exito, ${form.values.firstName}! Te enviamos un email de bienvenida para confirmar tu participación. Revisa también tu bandeja de correo no deseado o spam.`
                      }
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col md={12}>
                  { res?.data?.enviroment === 'PROD' && <ButtonPackApp w="100%" size="lg" onClick={closeModal}>
                    {"Iniciar Sesión"}
                  </ButtonPackApp>}
                  
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
    } catch (error) {
      setLoading(false)
      console.log(error)
      notifications.show({
        title: "Oh no!",
        message: `Ha habido un problema ${error.response.data.message.message}`,
        icon: <IconCircleX />,
        color: "red",
        styles: notificationStylees,
      });
    }
  };


  if (loading) return <Loader visible />

  return (
    <PaddingBox>
      <Container size="xxl" p={0}>
        <Grid justify="center" mb="sm">
          <Grid.Col md={6}>
            <Card withBorder radius={16} className={classes.card} p={padding}>
              <form
                onSubmit={form.onSubmit(handleSubmit)}
                className={classes.form}
              >
                {/* NOMBRE */}
                <Grid gutter={20}>
                  <Grid.Col md={12}>
                    <TextInput
                      label="Nombre"
                      placeholder="Nombre"
                      withAsterisk
                      size="lg"
                      className={classes.generalInput}
                      {...form.getInputProps("firstName")}
                    />
                  </Grid.Col>
                  {/* APELLIDO */}
                  <Grid.Col md={12}>
                    <TextInput
                      label="Apellido"
                      placeholder="Apellido"
                      withAsterisk
                      size="lg"
                      className={classes.generalInput}
                      {...form.getInputProps("lastName")}
                    />
                  </Grid.Col>
                  {/* DOCUMENTO */}
                  <Grid.Col md={12}>
                    <NumberInput
                      withAsterisk
                      label="DNI"
                      placeholder="DNI"
                      size="lg"
                      hideControls
                      className={classes.generalInput}
                      {...form.getInputProps("DNI")}
                    />
                  </Grid.Col>
                  {/* CODIGO DE AREA */}
                  {/* <Grid.Col md={4}>
                    <NumberInput
                      withAsterisk
                      label="Cod. Area."
                      placeholder="11..."
                      size="lg"
                      hideControls
                      className={classes.generalInput}
                      {...form.getInputProps("areaCode")}
                    />
                  </Grid.Col>
                  <Grid.Col md={8}>
                    <NumberInput
                      withAsterisk
                      label="Teléfono"
                      placeholder="2344433..."
                      size="lg"
                      hideControls
                      className={classes.generalInput}
                      {...form.getInputProps("phone")}
                    />
                  </Grid.Col> */}
                  <Grid.Col md={6}>
                                        <PhoneInput
                                            label="Número de Teléfono"
                                            placeholder="Ingrese su número de teléfono"
                                            className="custom-phone-input"
                                            value={
                                                form.values.phoneAddresse
                                            }
                                            onChange={(value) =>
                                                form.setFieldValue(
                                                    "phone",
                                                    value
                                                )
                                            }
                                        />
                                    </Grid.Col>
                                    <Grid.Col
                                        md={6}
                                        style={{ alignSelf: "self-end" }}
                                    >
                                        <Text fontSize={12}>
                                            *Ingrese un número de 10 dígitos,
                                            incluyendo el código de área
                                        </Text>
                                    </Grid.Col>
                  <Grid.Col md={12}>
                    <TextInput
                      withAsterisk
                      label="Email"
                      placeholder="Email"
                      size="lg"
                      className={classes.emailInput}
                      {...form.getInputProps("email")}
                      autoCapitalize="none"
                      type="email"
                    />
                  </Grid.Col>

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
                      {...form.getInputProps("confirmPassword")}
                    />
                  </Grid.Col>
                </Grid>
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
              </form>

              <Flex mt="xs" direction="column" gap={5}>
                <Text className={classes.formContent}>
                  Si ya tienes cuenta?
                  <Text span ml={5}>
                    <Link href="/signin">Iniciar Sesión</Link>
                  </Text>
                </Text>
              </Flex>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </PaddingBox>
  );
};
