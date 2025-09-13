import axios from "axios";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

/**
 * Cancela una oferta y muestra una notificación.
 * @param {number} orderId - ID de la orden a cancelar.
 * @param {Function} setLoading - Función para manejar el estado de carga.
 * @param {Function} router - Router de Next.js.
 */
export const cancelOffer = async (orderId, setLoading, router, token) => {
    setLoading(true);
    try {
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/application/deleteApplication/${orderId}`,
            {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 200 || response.status === 201) {
            setLoading(false);
            notifications.show({
                title: "Muy bien",
                message: "Cancelaste la oferta exitosamente",
                icon: <IconCheck />,
                onClose: 500,
            });
            return router.push("/mis-ofertas");
        }
        throw new Error();
    } catch (error) {
        setLoading(false);
        notifications.show({
            title: "Oh no!",
            message: `Ha habido un problema: ${error.response?.data?.message || "Error inesperado"}`,
            icon: <IconCircleX />,
            color: "red",
        });
    }
};

/**
 * Envía la solicitud de cancelación y muestra el modal de confirmación.
 * @param {Object} item - Objeto de la oferta a cancelar.
 * @param {Function} setLoading - Función para manejar el estado de carga.
 * @param {Function} router - Router de Next.js.
 */
export const requestCancel = (item, setLoading, router) => {
    const submitCancel = () => {
        cancelOffer(item.id, setLoading, router);
        modals.closeAll();
    };

    const closeModal = () => {
        modals.closeAll();
        router.reload();
    };

    modals.open({
        children: (
            <Flex direction="column" gap={16} align="baseline" w={"100%"}>
                <Grid gutter={25} mt="sm" w={"100%"}>
                    <Grid.Col>
                        <Stack spacing={12}>
                            <Text size={24} weight={500} align="center">
                                ¿Estás seguro de que quieres cancelar esta oferta?
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <ButtonPackApp w="100%" size="lg" onClick={closeModal}>
                            Volver a la web
                        </ButtonPackApp>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <ButtonPackApp
                            w="100%"
                            size="lg"
                            variant="filled"
                            onClick={submitCancel}
                        >
                            Aceptar
                        </ButtonPackApp>
                    </Grid.Col>
                </Grid>
            </Flex>
        ),
        centered: true,
        closeOnClickOutside: false,
        styles: {
            header: { padding: "16px 40px" },
        },
    });
};



