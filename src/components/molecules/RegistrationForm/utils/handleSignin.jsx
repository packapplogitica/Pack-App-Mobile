import axios from "axios";
import { IconCircleX } from "@tabler/icons-react";
import { handleRegistrationSuccess } from "../Components/handleRegistrationSuccess.jsx";
import { handleCatchError } from "../../SenderandRecipientInformationForm/senderComponent/handles";


const prepareUserData = ({form,checkedTransport,checkedSendReceiver}) => {
    return {
        firstName: form.values.firstName,
        lastName: form.values.lastName,
        email: form.values.email.toLowerCase(),
        password: form.values.password,
        phone: form.values.phone,
        state:form.values.state,
        city: form.values.city,
        DNI: form.values.DNI,
        areaCode: form.values.areaCode,
        termAndConditions:form.values.termAndConditions,
        transport:checkedTransport,
        sendReceiver:checkedSendReceiver
    };
};

const signup = async (user) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`;
    return await axios.post(baseUrl, user);
};

/**
 * Función principal para manejar la orden.
 */
export const submitSignUpForm = async (params) => {
    params.setLoading(true);
    try {
        const userData = prepareUserData(params)
        const res = await signup(userData);
        console.log('la respuesta',res)
        if (res?.status === 201 || res?.status === 200) {
            params.setLoading(false);
            handleRegistrationSuccess(res, params.form, params.router);
        } else {
            params.setLoading(false);
            return {
                title: "Ha habido un problema!",
                message: "Intentalo en unos minutos.",
                icon: <IconCircleX />,
                color: "red",
            };
        }
    } catch (error) {
        return handleCatchError(error, params.setLoading);
    }
};