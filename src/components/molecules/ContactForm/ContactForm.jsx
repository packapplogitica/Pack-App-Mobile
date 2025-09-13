import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import {
    Box,
    Button,
    Card,
    Container,
    Grid,
    NumberInput,
    Text,
    TextInput,
    Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useRouter } from "next/router";
import useStyles from "../form.style";
import { PaddingBox } from "@/components/atoms";
import { theme } from "@/libs/theme";
import { useFormValidation } from "@/hooks/useFormValidation";
import { useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import PhoneInput from "@/components/atoms/PhoneInput/PhoneInput";
export const ContactForm = () => {
    const { classes } = useStyles();
    const [loading, setLoading] = useState(false);
    const isSmallerThanMd = useMediaQuery(
        `(max-width: ${theme.breakpoints.md}px)`
    );

    const padding = isSmallerThanMd ? 20 : 40;

    const {
        emptyValidation,
        minimumCharacters,
        noNumbers,
        emailValidation,
        areaCodeValidation,
        dniValidation,
        passwordValidation,
        confirmPasswordValidation,
        phoneValidation,
    } = useFormValidation();

    const validateName = (value) => {
        if (emptyValidation(value)) return emptyValidation(value);
        if (minimumCharacters(value)) return minimumCharacters(value);
    };

    const validatePhone = (value) => {
        if (emptyValidation(value)) return emptyValidation(value);
        if (phoneValidation(value)) return phoneValidation(value);
    };

    const validateEmail = (value) => {
        if (emptyValidation(value)) return emptyValidation(value);
        if (emailValidation(value)) return emailValidation(value);
    };

    const validateAreacode = (value) => {
        if (emptyValidation(value)) return emptyValidation(value);
        if (areaCodeValidation(value)) return areaCodeValidation(value);
    };

    const router = useRouter();
    const form = useForm({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        },

        validate: {
            firstname: (value) => {
                switch (true) {
                    case value === "":
                        return "El campo no puede estar vacio";
                    case value.length < 3:
                        return "Como minimo  debe contener 3 caracteres";
                    default:
                        return null;
                }
            },

            lastname: (value) => {
                switch (true) {
                    case value === "":
                        return "El campo no puede estar vacio";
                    case value.length < 3:
                        return "Como minimo  debe contener 3 caracteres";
                    default:
                        return null;
                }
            },

            email: validateEmail,
            areaCode: validateAreacode,
            phone: validatePhone,

            message: (value) => {
                switch (true) {
                    case value === "":
                        return "El campo no puede estar vacio";
                    case value.length < 20:
                        return "Como minimo  debe contener 20 caracteres";
                    default:
                        return null;
                }
            },
        },
    });

    const handleSubmit = async (e) => {
        setLoading(true);
        try {
            const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/support`;
            const res = await axios.post(baseUrl, {
                firstName: form.values.firstname,
                lastName: form.values.lastname,
                email: form.values.email,
                password: form.values.password,
                phone: form.values.phone,
                areaCode: form.values.areaCode,
                message: form.values.message,
            });
            if (res?.status === 201) {
                setLoading(false);
                notifications.show({
                    title: "Mensaje enviado",
                    message: "En la brevedad nos contactaremos con usted!",
                    icon: <IconCircleCheck />,
                    color: "teal",
                    // styles: notificationStylees,
                });

                form.reset();
            } else {
                setLoading(false);
                notifications.show({
                    title: "Oh no! Hay un error:",
                    message: "Algo ha salido mal",
                    icon: <IconCircleX />,
                    color: "red",
                    // styles: notificationStylees,
                });
                form.reset();
            }
        } catch (error) {
            console.log("el error", error);
            setLoading(false);
            notifications.show({
                title: "Oh no! Hay un error:",
                message: "Internal server error",
                icon: <IconCircleX />,
                color: "red",
                // styles: notificationStylees,
            });
        }
    };

    if (loading) return <Loader visible />;

    return (
        <PaddingBox>
            <Container size="xxl" p={0}>
                <Grid justify="center" mb="sm">
                    <Grid.Col md={6}>
                        <Card
                            withBorder
                            p={padding}
                            radius={16}
                            className={classes.card}
                        >
                            <form
                                onSubmit={form.onSubmit(handleSubmit)}
                                className={classes.form}
                            >
                                <Grid gutter={20}>
                                    <Grid.Col md={6}>
                                        <TextInput
                                            label="Nombre"
                                            placeholder="Nombre"
                                            withAsterisk
                                            size="lg"
                                            {...form.getInputProps("firstname")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col md={6}>
                                        <TextInput
                                            label="Apellido"
                                            placeholder="Apellido"
                                            withAsterisk
                                            size="lg"
                                            {...form.getInputProps("lastname")}
                                        />
                                    </Grid.Col>
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
                                    {/* <Grid.Col md={6}>
                                        <NumberInput
                                            label="Codigo de area"
                                            placeholder="Codigo de area"
                                            withAsterisk
                                            hideControls
                                            size="lg"
                                            {...form.getInputProps("areaCode")}
                                        />
                                    </Grid.Col>
                                    <Grid.Col md={6}>
                                        <NumberInput
                                            label="Telefono"
                                            placeholder="Telefono"
                                            withAsterisk
                                            hideControls
                                            size="lg"
                                            {...form.getInputProps("phone")}
                                        />
                                    </Grid.Col> */}
                                    <Grid.Col md={12}>
                                        <TextInput
                                            label="Email"
                                            placeholder="Email"
                                            withAsterisk
                                            size="lg"
                                            {...form.getInputProps("email")}
                                            autoCapitalize="none"
                                            type="email"
                                        />
                                    </Grid.Col>
                                    <Grid.Col>
                                        <Textarea
                                            placeholder="Mensaje"
                                            label="Mensaje"
                                            withAsterisk
                                            size="lg"
                                            {...form.getInputProps("message")}
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
                                    Enviar Mensaje
                                </ButtonPackApp>
                            </form>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
        </PaddingBox>
    );
};
