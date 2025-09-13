import axios from "axios";
import { IconCircleX } from "@tabler/icons-react";
import { handleCatchError, handleOrderSuccess } from "@/components/molecules/SenderandRecipientInformationForm/senderComponent/handles";




const prepareApplicationData = ({
    userData,
    form,
    item,
    checkedCarrierTerms
}) => {
    return {
        outDate: form.values?.outDate.toISOString().split("T")[0],
        comingDate: form.values?.comingDate.toISOString().split("T")[0],
        // vehicleId: data?.user?.vehicles[0]?.id?? null,
        details: form.values?.details,
        budget: form.values?.budget,
        orderId: item?.id,
        ownerOrderId: userData?.id,
        carrierTerms: checkedCarrierTerms,
    };
};


const sendApplication = async (application, token) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/application`;
    return await axios.post(baseUrl, application, {
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};


/**
 * Función principal para manejar la orden.
 */
export const submitApplication = async (params) => {
    params.setLoading(true);
    try {
        const applicattionValuesForm = prepareApplicationData(params);
        const res = await sendApplication(applicattionValuesForm, params.token);
        const successfullMesassge = "Oferta enviada. 🏹 Mantente atento a tu correo 📬 o visita 'Mis ofertas' 🔍 para saber si el cliente la acepta. ¡A seguir ofertando! 🚀"
        const confirmModalRoute = 'mis-ofertas'
        const confirmModalButton = 'Ir a mis ofertas'
        const secondForm = params.form
        if (res.status === 201) {
            params.setOpenOffer(false)
            return handleOrderSuccess(secondForm, params.router, params.session, params.setLoading, successfullMesassge,confirmModalRoute,confirmModalButton);
        } else {
            params.setLoading(false);
            return {
                title: "Ha habido un problema!",
                message: "Intentalo en unos minutos",
                icon: <IconCircleX />,
                color: "red",
            };
        }
    } catch (error) {
        return handleCatchError(error, params.setLoading);
    }
};