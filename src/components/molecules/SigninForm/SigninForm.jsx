import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { PaddingBox } from "@/components/atoms";
import {
    Box,
    Card,
    Container,
    Flex,
    Grid,
    PasswordInput,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useFormValidation } from "@/hooks/useFormValidation";
import useStyles from "../form.style";
import { theme } from "@/libs/theme";
import Loader from "../Loader/Loader";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { showNotification } from "@/components/organisms/ShowNotification/ShowNotification";
import { useSessionProvider } from "../../../context/SessionProvider"

export const SigninForm = () => {
    const router = useRouter();
    const { classes } = useStyles();
    const [loading, setLoading] = useState(false);
    // const { signIn: authSignIn } = useAuth(); // Usa el signIn del hook
    const { login } = useSessionProvider()

    const isSmallerThanMd = useMediaQuery(
        `(max-width: ${theme.breakpoints.md}px)`
    );

    const padding = isSmallerThanMd ? 20 : 40;

    const { emptyValidation, signinPasswordValidation, emailValidation } =
        useFormValidation();

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

    const validateEmail = (value) => {
        if (emptyValidation(value)) return emptyValidation(value);
        if (emailValidation(value)) return emailValidation(value);
    };

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: validateEmail,
            password: signinPasswordValidation,
        },
    });

    const handleSignIn = async (method, credentials = {}) => {
        if (method !== 'credentials') return; // Por ahora, solo credentials

        try {
            // setLoading(true);
            const result = await login(credentials.email, credentials.password);
            console.log('la llaada',result)

            if (result.ok) {
                showNotification({
                    title: 'Inicio de sesión exitoso',
                    message: 'Has iniciado sesión correctamente',
                    type: 'success',
                    // ... notificationStyles
                });
                form.reset();
                router.reload()
                // router.push(result.url);
            } else {
                showNotification({
                    title: 'Oh no! Hay un error:',
                    message: result.error,
                    // ... notificationStyles
                });
            }
        } catch (error) {
            console.error('el error',error)
            showNotification({
                title: 'Oh no! Hay un error:',
                message: 'Error al iniciar sesión',
                // ... notificationStyles
            });
        } finally {
            setLoading(false);
        }
    }


    // if (loading) return <Loader visible />;

    return (
        <PaddingBox>
            <Container p={0} size="xxl">
                <Grid justify="center" mb="sm">
                    <Grid.Col md={6}>
                        <Card
                            withBorder
                            radius={16}
                            className={classes.card}
                            p={padding}
                        >
                            <form
                                onSubmit={form.onSubmit((values) => handleSignIn("credentials", values))}
                                className={classes.form}
                            >
                                <Grid gutter={20}>
                                    <Grid.Col>
                                        <TextInput
                                            className={classes.emailInput}
                                            withAsterisk
                                            label="Email"
                                            size="lg"
                                            placeholder="Email"
                                            {...form.getInputProps("email")}
                                            autoCapitalize="none"
                                            type="email"
                                        />
                                    </Grid.Col>
                                    <Grid.Col>
                                        <PasswordInput
                                            label="Contraseña"
                                            placeholder="Contraseña"
                                            withAsterisk
                                            className={classes.passwordInput}
                                            size="lg"
                                            {...form.getInputProps("password")}
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
                                    Iniciar sesión
                                </ButtonPackApp>
                            </form>

                            <Box mt={12}>
                                <GoogleButton label="Ingresar con Google" onClick={() => handleSignIn("google")} />
                            </Box>

                            <Flex mt="xs" direction="column" gap={5}>
                                <Text className={classes.formContent}>
                                    ¿Todavía no tienes cuenta?
                                    <Text span ml={5}>
                                        <Link href="/registration">
                                            Crear cuenta
                                        </Link>
                                    </Text>
                                </Text>
                                <Text className={classes.formContent}>
                                    ¿Olvidaste tu contraseña?
                                    <Text span ml={5}>
                                        <Link href="/forgot-password">
                                            Recuperar contraseña
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
};
