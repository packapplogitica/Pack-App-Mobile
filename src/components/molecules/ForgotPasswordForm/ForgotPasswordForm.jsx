import { useRouter } from "next/router";
import axios from "axios";

import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";

import { Card, Container, Grid, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMediaQuery } from "@mantine/hooks";

import { IconCheck, IconX } from "@tabler/icons-react";

import useStyles from "../form.style";
import { theme } from "@/libs/theme";

import { useFormValidation } from "@/hooks/useFormValidation";
import { useState } from "react";
import Loader from "../Loader/Loader";

import Head from "next/head";
import { getErrorMessage } from "@/utils/getError/getError";

export const ForgotPasswordForm = () => {
  // TODO : revisar este router, no se usa.
  const router = useRouter();
  const { classes } = useStyles();
  const[loading,setLoading] =useState(false)

  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );

  const padding = isSmallerThanMd ? 20 : 40;

  const { emptyValidation, emailValidation, confirmemailValidation } =
    useFormValidation();

  const validateEmail = (value) => {
    if (emptyValidation(value)) return emptyValidation(value);
    if (emailValidation(value)) return emailValidation(value);
  };

  const form = useForm({
    initialValues: {
      email: "",
      confirmEmail: "",
    },

    // validate: {
    //   email: validateEmail,
    //   confirmEmail: confirmemailValidation,
    // },
  });

  // const handleSubmit = async () => {
  //   const email = form.values.email;
  //   // Revisar este metodo, no se usa:
  //   const fetchApi = await axios.post(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
  //     { email }
  //   );

  //   notifications.show({
  //     title: "Solicitud",
  //     message: "Solicitud enviada correctamente",
  //     icon: <IconCheck />,
  //     onClose: 500,
  //   });
  //   form.reset();
  // };

  const handleSubmit = async () => {
    setLoading(true)
    const email = form.values.email;
    // Revisar este metodo, no se usa:
    try {
      const fetchApi = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/forgot-password`,
        { email }
      );
      if(fetchApi.status=== 200 || fetchApi.status === 201){
        setLoading(false)
        notifications.show({
          title: "Solicitud",
          message: "Solicitud enviado correctamente,revisa tu correo electronico",
          icon: <IconCheck />,
          onClose: 500,
        });
        form.reset();
      }
    } catch (error) {
      setLoading(false)
      notifications.show({
        title: "Oh no!",
        message: `Ha habido un problema: ${getErrorMessage(error)}`,
        icon: <IconX />,
        onClose: 500,
        color:'red'
      });

    }
   


  };

  if(loading) {
    return <Loader visible/>
  }
  return (
    <>
      <Head>
        <title>Recuperar Contraseña | PackApp Web</title>
      </Head>
      <PaddingBox>
        <Container p={0} size="xxl">
          <Grid justify="center" mb="sm">
            <Grid.Col md={6}>
              <Card withBorder radius={16} className={classes.card} p={padding}>
                <form
                  onSubmit={form.onSubmit(handleSubmit)}
                  className={classes.form}
                >
                  <Grid gutter={20}>
                    <Grid.Col>
                      <TextInput
                        withAsterisk
                        label="Email"
                        size="lg"
                        placeholder="Email"
                        className={classes.generalInput}
                        {...form.getInputProps("email")}
                        autoCapitalize="none"
                        type="email"
                      />
                    </Grid.Col>
                    <Grid.Col>
                      <TextInput
                        withAsterisk
                        label="Repetir email"
                        size="lg"
                        placeholder="Email"
                        className={classes.generalInput}
                        {...form.getInputProps("confirmEmail")}
                        autoCapitalize="none"
                        type="email"
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
                    {"Recuperar contraseña"}
                  </ButtonPackApp>
                </form>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </PaddingBox>
    </>
  );
};
