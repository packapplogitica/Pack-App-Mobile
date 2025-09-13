import axios from "axios";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCircleX } from "@tabler/icons-react";

/**
 * Cancela una oferta y muestra una notificación.
 * @param {Object} offer - Objeto de la oferta.
 * @param {Function} setLoading - Estado de carga.
 * @param {Function} router - Router de Next.js.
 */
export const cancelOffer = async (offer, setLoading, router) => {
    setLoading(true);
    
    const orderStatus = offer.order?.status;
    const isOrderDelivered = ["Entregado", "En camino a destino", "No se ha podido entregar", "Paquete Cancelado"].includes(orderStatus);

    if (isOrderDelivered) {
        setLoading(false);
        return notifications.show({
            title: "Error!",
            message: "Ya no puedes cancelar esta oferta",
            icon: <IconCircleX />,
            color: "red",
        });
    }

    try {
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/application/deleteApplication/${offer.id}`,
            { headers: { "content-type": "application/json" } }
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
            message: `Ha habido un problema: ${getErrorMessage(error)}`,
            icon: <IconCircleX />,
            color: "red",
        });
    }
};
