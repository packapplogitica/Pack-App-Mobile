import { handleCatchError } from "@/components/molecules/SenderandRecipientInformationForm/senderComponent/handles";
import { IconCircleX } from "@tabler/icons-react";
import axios from "axios";

export const submitState = async (state, existingApplication,setLoading,router) => {
    try {
        const body = {
            status: state,
        };
        const data = await axios.put(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/${existingApplication.order.id}`,
            body,
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        if (data.status === 200) {
            setLoading(false)
            router.reload()
            return
        } else {
            setLoading(false)
            return {
                title: "Ha habido un problema!",
                message: "Intentalo en unos minutos.",
                icon: <IconCircleX />,
                color: "red",
            };
        }
    } catch (error) {
        return handleCatchError(error, setLoading);
    }


}