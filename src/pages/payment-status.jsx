import { PaymentCheck } from "@/components/template";
import apiClient from "@/utils/apiClient";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

import { getSession } from "next-auth/react";

const PaymentStatus = (paymentStatus) => {
    console.log('la data', paymentStatus)
    return (
        <WithAuth>
            <>
                <PaymentCheck paymentStatus={paymentStatus.data.payment} />
            </>
        </WithAuth>
    );
};

// export async function getServerSideProps(context) {
//     const external_reference = context.query.external_reference;

//     let packages
//     try {
//         const data = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${external_reference}`
//         );
//         packages = await data.json();
//     } catch (error) {
//         console.log(error);
//         packages = [];
//     }

//     return {
//         props: {
//             data: packages,
//         },
//     };
// }

export default PaymentStatus;
