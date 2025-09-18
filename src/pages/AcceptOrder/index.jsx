// import { getSession } from "next-auth/react";
// import { useMemo } from "react";
// import Head from "next/head";@/components/template/PickUpStatus/PickUpStatus
// import PackDetail from "@/components/template/PackDetail/PackDetail";
import { Loader } from "@mantine/core";
import {PickUpStatus}  from "../../components/template/PickUpStatus/PickUpStatus";
import { useApiQuery } from "../../utils/apiClient/reactQueryHooks";
import { useRouter } from "next/router";

const AcceptOrder = () => {

  const router = useRouter();
  const { orderId, transporterId } = router.query

  const { data, isLoading, error } = useApiQuery(
    ["orderTaken", orderId,transporterId],
    `/orders?orderId=${orderId}&transporterId=${transporterId}`,
    {
      enabled: !!orderId, // <-- no ejecuta hasta que idOrder está definido
    }
  );
  if (!orderId) {
    return <p>Cargando parámetros...</p>;
  }

  if ((!router.isReady && isLoading)) return <Loader />
  if (!data) return <p>No se encontró la orden</p>;


  return (
    <>
      <PickUpStatus data ={data} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   // console.log(context.params.id)
//   const orderId = context.query.orderId
//   const transporterId = context.query.transporterId
//   // const token = context.querry.token

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders?orderId=${orderId}&transporterId=${transporterId}`,
//     {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       },
//     }
//   );

//   const dataExtracted = await data.json();


//   return {
//     props: {
//       dataExtracted,
//     },
//   };
// }

export default AcceptOrder;