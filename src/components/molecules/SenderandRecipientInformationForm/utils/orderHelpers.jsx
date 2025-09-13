import axios from "axios";
import { IconCircleX } from "@tabler/icons-react";
import { handleCatchError, handleOrderSuccess } from "../senderComponent/handles";


const extractAddress = (formattedAddress) => {
    return (
        formattedAddress.locality ||
        formattedAddress.sublocality ||
        formattedAddress.administrative_area_level_2 ||
        formattedAddress.administrative_area_level_3 ||
        formattedAddress.administrative_area_level_4 ||
        formattedAddress.administrative_area_level_5 ||
        formattedAddress.administrative_area_level_6 ||
        formattedAddress.administrative_area_level_7 ||
        formattedAddress.colloquial_area ||
        formattedAddress.neighborhood ||
        formattedAddress.premise ||
        formattedAddress.subpremise ||
        formattedAddress.plus_code
    );
};

const prepareOrderData = ({
    session,
    value,
    formatedOriginAddress,
    formatedDestinationAddress,
    origin,
    destination,
    orders,
    price
}) => {
    console.log('los values', orders, value)
    return {
        userId: session?.user?.id,
        nameSender: value.nameSender,
        lastNameSender: value.lastNameSender,
        emailSender: value?.emailSender.toLowerCase(),
        emailAddresse: value?.emailAddresse.toLowerCase(),
        dniSender: value?.dniSender.toLowerCase(),
        dniAddresse: value?.dniAddresse.toLowerCase(),
        areaCodeSender: value.codeSender,
        phoneSender: value.phoneSender,
        distanceKm:value.distanceKm,
        direccionEntrega:
            formatedOriginAddress.route ||
            formatedOriginAddress.plus_code ||
            formatedOriginAddress.postal_code,
        addressNumberOrigin:
            formatedOriginAddress.street_number || formatedOriginAddress.postal_code,
        provinceSender: formatedOriginAddress.administrative_area_level_1,
        citySender: extractAddress(formatedOriginAddress),
        pisoOrigen: value.pisoOrigen,
        deptoOrigen: value.deptoOrigen,
        latEntrega: origin.lat,
        longEntrega: origin.lng,
        nameAddressee: value.nameAddressee,
        lastNameAddressee: value.lastNameAddressee,
        areaCodeAddresse: value.codeAddresse,
        phoneAddresse: value.phoneAddresse,
        direccionDestino:
            formatedDestinationAddress.route ||
            formatedDestinationAddress.plus_code ||
            formatedDestinationAddress.postal_code,
        addressNumberDestination:
            formatedDestinationAddress.street_number || formatedDestinationAddress.postal_code,
        provinceAddressee: formatedDestinationAddress.administrative_area_level_1,
        cityAddressee: extractAddress(formatedDestinationAddress),
        pisoEntrega: value.pisoEntrega,
        deptoEntrega: value.deptoEntrega,
        latDestino: destination.lat,
        longDestino: destination.lng,
        isUrgent: orders.isUrgent,
        price,

        // 🚀 Nuevo: Lista de paquetes
        packages: orders.packages.map(pkg => ({
            clase: pkg.clase,
            isFragil: pkg.isFragil,
            width: pkg.width,
            length: pkg.length,
            height: pkg.height,
            weight: pkg.weight,
            details: pkg.details || "",
            insuranceValue: pkg.insuranceValue || 0,
        })),
    };
};


const sendOrder = async (orders, token, isUserSession) => {
    console.log('la sessison',isUserSession)
    if (isUserSession) {
        const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders`;
        return await axios.post(baseUrl, orders, {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        });
    } else {
        const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/pre-user`;
        return await axios.post(baseUrl, orders, {
            headers: {
                "content-type": "application/json",
            },
        });
    }
};


/**
 * Función principal para manejar la orden.
 */
export const submitOrder = async (params) => {
    params.setLoading(true);
    console.log('los parama',params)
    try {
        const ordersValuesForm = prepareOrderData(params);
        const orders = { ...params.orders, ...ordersValuesForm }
        const res = await sendOrder(orders, params.token, params?.session);
        const successfullMesassge = "Tu pedido se ha creado correctamente.\n\n te redirijiremos a la pagina de mercado pago para hacer finalizar el pedido."
        const confirmModalRoute = res.data.payment.url_payment
        const confirmModalButton = 'Ir a Mercado Pago'
        console.log('la respuesta', res.data.payment.url_payment)
        if (res.status === 201) {
            return handleOrderSuccess(params.secondForm, params.router, params.session, params.setLoading, successfullMesassge, confirmModalRoute, confirmModalButton);
        } else {
            params.setLoading(false);
            return {
                title: "Oh no!",
                message: "Debes completar el primer paso con todos los campos.",
                icon: <IconCircleX />,
                color: "red",
            };
        }
    } catch (error) {
        return handleCatchError(error, params.setLoading);
    }
};
