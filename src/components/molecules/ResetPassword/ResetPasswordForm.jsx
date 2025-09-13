import { PaddingBox } from "@/components/atoms";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { Box, Button, Card, Container, Grid, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import { IconCheckbox, IconX } from "@tabler/icons-react";
import { useRouter } from "next/router";
import useStyles from "../form.style";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "@/libs/theme";
import axios from "axios";
import LoaderStyle from "../Loader/Loader";
import { useState } from "react";


export const ResetPasswordForm = ({token}) => {
  // console.log('dentro del compo',token)
  const router = useRouter();
  const { classes } = useStyles();
  const[loading,setLoading] =useState(false)

  const isSmallerThanMd = useMediaQuery(
    `(max-width: ${theme.breakpoints.md}px)`
  );

  const padding = isSmallerThanMd ? 20 : 40;

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (value) => {
        switch (true) {
          case value === "":
            return "La contraseña no puede estar vacia.";
          case value.length < 8:
            return "La contraseña debe tener al menos 8 caracteres";
          case !/[A-Z]/.test(value):
            return "La contraseña debe contener al menos una letra mayúscula";
          case /\s/.test(value):
            return "La contraseña no puede contener espacios";
          default:
            return null;
        }
      },

      confirmPassword: (value, values) => {
        switch (true) {
          case value === "":
            return "El campo esta vacio. Ingrese por favor la contraseña";
          case value !== values.password:
            return "Las contraseñas no coinciden";
          default:
            return null;
        }
      },
    },
  });

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

  const handleSubmit = async() => {
    setLoading(true)
    const body={
      password:form.values.password,
      token
    }
    try {
      const fetchApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`,body)
      if(fetchApi.status === 201){
        setLoading(false)
        notifications.show({
          title: "Solicitud",
          message: "Solicitud enviado correctamente",
          icon: <IconCheck />,
          onClose: 500,
        });
        router.push("/signin");
        form.reset();
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      notifications.show({
        title: "Oh no!",
        message: "Ha habido un problema con el cambio de contraseña,comunicate con soporte para más información",
        icon: <IconCircleX />,
        color: "red",
        styles: notificationStyles,
      });
    }
  };

  if(loading) {
    return <LoaderStyle visible/>
  }
  return (
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
                  <PasswordInput
                      label="Contraseña"
                      placeholder="Constraseña"
                      withAsterisk
                      className={classes.password}
                      size="lg"
                   
                      {...form.getInputProps("password")}
                    />
                  </Grid.Col>
                  <Grid.Col>
                  <PasswordInput
                      label="Contraseña"
                      placeholder="Constraseña"
                      withAsterisk
                      className={classes.password}
                      size="lg"
                  
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
                 Restablecer Contraseña
                </ButtonPackApp>
              </form>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </PaddingBox>
  );
};
