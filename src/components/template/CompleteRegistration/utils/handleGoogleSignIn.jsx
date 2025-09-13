import axios from "axios";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { handleCatchError } from "@/components/molecules/SenderandRecipientInformationForm/senderComponent/handles";


const prepareUserData = ({ form, checkedTransport, checkedSendReceiver ,user}) => {
    
    return {
        firstName: form.values.firstName,
        lastName: form.values.lastName,
        email: user.current.email,
        password: form.values.password,
        phone: form.values.phone,
        state: form.values.state,
        city: form.values.city,
        DNI: form.values.dni,
        areaCode: form.values.areaCode,
        termAndConditions: form.values.termAndConditions,
        transport: checkedTransport,
        sendReceiver: checkedSendReceiver
    };
};

const signup = async (user,token) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/complete-registration`;
    return await axios.post(baseUrl, user, {
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    });
};

/**
 * Función principal para manejar la orden.
 */
export const submitSignUpForm = async (params) => {
    params.setLoading(true);
    console.log('el token',params)
    try {
        const userData = prepareUserData(params,params.user.current.email)
        const res = await signup(userData,params.user.token);
        console.log('la respuesta', res)
        if (res?.status === 201 || res?.status === 200) {
            params.setLoading(false);
            // update({
            //     ...data,
            //     user: {
            //         ...data.user,
            //         ...body,
            //     },
            //     isRegistrationComplete: true,
            //     registrationStep: 'complete'
            // });
            params.signOut()
            return {
                title: "Registro exitoso",
                message: "Te has registrado correctamente, vuelve a iniciar session por favor",
                type:'success'
            };
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