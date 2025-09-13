import { useSession } from "next-auth/react";
import Link from "next/link";

import {
  Box,
  Divider,
  Flex,
  Grid,
  PasswordInput,
  Text,
  TextInput,
  NumberInput,
  Title,
} from "@mantine/core";

import { useForm } from "@mantine/form";

import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

import useStyles from "./myData.styles";

import { useFormValidation } from "@/hooks/useFormValidation";
import axios from "axios";
import { useRouter } from "next/router";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";

import CbuForm from "../CbuForm/CbuForm";

export const MyData = ({ profile }) => {
  // console.log('el profile',profile)
  const { classes } = useStyles();
  const { data, update } = useSession();
  const router = useRouter();

  const {
    emptyValidation,
    minimumCharacters,
    dniValidation,
    //areaCodeValidation,
    phoneValidation,
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
  } = useFormValidation();

  const userData = data?.user;

  const { firstName, lastName, DNI, email, id, areaCode, phone, token } =
    profile.current;

  const validateName = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (minimumCharacters(value)) return minimumCharacters(value);
  };

  const validateDni = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (dniValidation(value)) return dniValidation(value);
  };

  /*     const validateAreacode = (value) => {
      if (emptyValidation(value)) return emptyValidation(value);
      if (areaCodeValidation(value)) return areaCodeValidation(value);
  }; */

  const validatePhone = (value) => {
    if (emptyValidation(value)) return emptyValidation(value); // Verifica si está vacío
    if (phoneValidation(value)) return phoneValidation(value); // Verifica el formato
    return null; // Validación exitosa
  };

  const validateEmail = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (emailValidation(value)) return emailValidation(value);
  };

  const validateNewpassword = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (passwordValidation(value)) return passwordValidation(value);
  };

  // Datos personales
  const myDataForm = useForm({
    initialValues: {
      firstName: firstName || "",
      lastName: lastName || "",
      DNI: DNI || "",
      //  areaCode: Number(areaCode),
      phone: phone || "", // Mantenerlo como cadena para evitar problemas
    },
    validate: {
      firstName: validateName,
      lastName: validateName,
      DNI: validateDni,
      //  areaCode: validateAreacode,
      phone: validatePhone,
    },
  });

  // Email y nueva contraseña
  const passwordForm = useForm({
    initialValues: {
      email: profile.email || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      userType: "",
    },
    validate: {
      email: validateEmail,
      currentPassword: emptyValidation,
      // newPassword: validateNewpassword,
      // confirmPassword: confirmPasswordValidation,
    },
  });

  const handleDataChange = async (value) => {
    const body = {
      firstName: myDataForm.isDirty("firstName")
        ? myDataForm.values.firstName
        : undefined,
      lastName: myDataForm.isDirty("lastName")
        ? myDataForm.values.lastName
        : undefined,
      /*             areaCode: myDataForm.isDirty("areaCode")
          ? myDataForm.values.areaCode
          : undefined, */
      phone: myDataForm.isDirty("phone")
        ? myDataForm.values.phone
        : undefined,
    };

    const filteredBody = Object.entries(body).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    const updateProfile = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profiles/${id}/update`,
      body,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${profile.token}`,
        },
      }
    );

    if (updateProfile?.status === 200 || updateProfile.status === 201) {
      router.reload();
      update({
        ...data,
        user: {
          ...data.user,
          ...filteredBody,
          isRegistrationComplete:false,
          registrationStep:'complete'
        },
      });
    }
  };
  const handlePasswordChange = async (value) => {
    const body = {
      currentPassword: passwordForm.values.currentPassword,
      newPassword: passwordForm.values.newPassword,
      confirmPassword: passwordForm.values.confirmPassword,
    };

    const updateProfile = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profiles/${id}/update`,
      body,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${profile.token}`,
        },
      }
    );

    if (updateProfile?.status === 200 || updateProfile.status === 201) {
      router.reload();
    }
  };

  console.log(myDataForm.errors);
  console.log(myDataForm.values.phone.length);
  return (
    <>
      <Box mt={24} className={classes.box}>
        <Title order={3} className={classes.title}>
          {"Datos de Contacto"}
        </Title>
        <Divider my="xs" />
        <form onSubmit={myDataForm.onSubmit(handleDataChange)}>
          <Grid gutter={16} my={12}>
            <Grid.Col md={6}>
              <TextInput
                disabled
                label="Nombre"
                placeholder="Usuario"
                size="lg"
                className={classes.generalInput}
                {...myDataForm.getInputProps("firstName")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                disabled
                label="Apellido"
                placeholder="Usuario"
                size="lg"
                className={classes.generalInput}
                {...myDataForm.getInputProps("lastName")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                disabled
                label="DNI"
                placeholder="DNI"
                size="lg"
                className={classes.generalInput}
                {...myDataForm.getInputProps("DNI")}
              />
            </Grid.Col>
            <Grid.Col md={12}>
              <Grid gutter={26}>
                <Grid.Col md={12}>
                  <PhoneInput
                    disabled={true}
                    myData={true}
                    label="Número de Teléfono"
                    placeholder="Ingrese su número de teléfono"
                    value={myDataForm.values.phone}
                    onChange={(value) =>
                      myDataForm.setFieldValue(
                        "phone",
                        value
                      )
                    }
                    error={myDataForm.errors.phone}
                  />
                </Grid.Col>
                <Grid.Col md={6}>
                  <ButtonPackApp
                    size="lg"
                    variant="filled"
                    w={"100%"}
                    type="submit"
                  >
                    {"Actualizar Datos"}
                  </ButtonPackApp>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
      <Box mt={24} className={classes.box}>
        <Title order={3} className={classes.title}>
          {"Direcciones de mail y cambio de contraseña"}
        </Title>
        <Divider my="xs" />
        <form onSubmit={passwordForm.onSubmit(handlePasswordChange)}>
          <Grid gutter={16} my={12}>
            <Grid.Col md={6}>
              <TextInput
                label="Email"
                placeholder="example@example.com"
                size="lg"
                disabled
                className={classes.generalInput}
                {...passwordForm.getInputProps("email")}
                autoCapitalize="none"
                type="email"
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <PasswordInput
                label="Contraseña actual"
                placeholder="******"
                size="lg"
                className={classes.passwordInput}
                {...passwordForm.getInputProps(
                  "currentPassword"
                )}
              />
            </Grid.Col>

            <Grid.Col>
              <Flex direction="column" gap={8}>
                <Text c={"#6D7276"} weight={500}>
                  {"Cambiar contraseña"}
                </Text>
                <Text c={"#6D7276"} weight={300}>
                  {
                    "Elegir una contraseña nueva que tenga al menos 8 caracteres."
                  }
                </Text>
              </Flex>
            </Grid.Col>

            <Grid.Col md={6}>
              <PasswordInput
                label="Contraseña nueva"
                placeholder="******"
                size="lg"
                className={classes.passwordInput}
                {...passwordForm.getInputProps("newPassword")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <PasswordInput
                label="Repite tu contraseña nueva"
                placeholder="******"
                size="lg"
                className={classes.passwordInput}
                {...passwordForm.getInputProps(
                  "confirmPassword"
                )}
              />
            </Grid.Col>

            <Grid.Col md={6}>
              <Flex direction="column" mt={10} gap={20}>
                <ButtonPackApp
                  size="lg"
                  variant="filled"
                  w={"100%"}
                  type="submit"
                >
                  {"Guardar cambios"}
                </ButtonPackApp>
              </Flex>
            </Grid.Col>
          </Grid>
        </form>
        <Link href="/forgot-password" className={classes.link}>
          {"¿Has olvidado tu contraseña?"}
        </Link>
          <CbuForm profile={profile} />
      </Box>
    </>
  );
};