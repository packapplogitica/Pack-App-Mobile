import { getSession } from "next-auth/react";
import { useMemo } from "react";
import Head from "next/head";
import PackDetail from "@/components/template/PackDetail/PackDetail";
import { PickUpStatus } from "@/components/template/PickUpStatus/PickUpStatus";

const AcceptOrder = () => {
  // console.log('laorder',dataExtracted)
//   const packageId = useMemo(() => order[0]?.id.toString(), [order]);

  return (
    <>
      {/* <PickUpStatus data ={dataExtracted} /> */}
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