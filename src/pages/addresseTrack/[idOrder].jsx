import { getSession } from "next-auth/react";
import { useMemo } from "react";
import Head from "next/head";
import PackDetail from "../../../src/components/template/PackDetail/PackDetail";
// @/components/template/PackDetail/PackDetail
const MiPaquete = () => {
  // const packageId = useMemo(() => order[0]?.id.toString(), [order]);

  return (
    <>
      <Head>
        <title>{`Paquete`}</title>
      </Head>
      <PackDetail />
    </>
  );
};

// export async function getServerSideProps(context) {
//   // console.log(context.params.id)
//   const idOrder = context.params.idOrder
//   // const token = context.querry.token

//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/addresse/${idOrder}`,
//     {
//       method: "GET",
//       headers: {
//         "content-type": "application/json",
//       },
//     }
//   );

//   const order = await data.json();


//   return {
//     props: {
//       order,
//     },
//   };
// }

export default MiPaquete;
