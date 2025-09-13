import { ButtonPackApp } from "@/components/atoms/ButtonPackApp/ButtonPackApp";
import { Flex, Grid, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Image from "next/image";

export const handleRegistrationSuccess = (res, form, router) => {
    const confirmModal = () => {
        form.reset();
        router.push("/signin");
    };
    const closeModal = () => {
        modals.closeAll();
        form.reset();
        router.push("/signin");
    };

    modals.open({
        children: (
            <Flex direction="column" gap={16} align="baseline" w={"100%"}>
                <Image
                    src="/assets/antConfettiVector.svg"
                    width={600}
                    height={500}
                    alt="image"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }} />
                <Grid gutter={25} mt="sm" w={"100%"}>
                    <Grid.Col>
                        <Stack spacing={12}>
                            <Text size={24} weight={500} align="center">
                                Buen trabajo!
                            </Text>
                            <Text size={16} weight={400} align="center" c={"grey.6"}>
                                {res.data.enviroment === "PROD"
                                    ? `¡Te has registrado con éxito, ${form.values.firstName}! Muy pronto vas a tener acceso a la aplicación para usarla, te enviaremos un email cuando esté disponible.`
                                    : `¡Te has registrado con éxito, ${form.values.firstName}! Te enviamos un email de bienvenida para confirmar tu participación. Revisa también tu bandeja de correo no deseado o spam.`}
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col md={12}>
                        {res?.data?.enviroment === "PROD" && (
                            <ButtonPackApp w="100%" size="lg" onClick={closeModal}>
                                {"Iniciar Sesión"}
                            </ButtonPackApp>
                        )}
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
};
