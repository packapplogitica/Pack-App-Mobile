import { useMemo } from "react";
import Head from "next/head";
import PackDetail from "@/components/template/PackDetail/PackDetail";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

const MiPaquete = ( {data} ) => {
  // const packageId = useMemo(() => data[0]?.id.toString(), [data]);

  return (
    <>
      <Head>
        <title>{`Paquete`}</title>
      </Head>
      {/* <PackDetail order={data} /> */}
    </>
  );
};

// export async function getServerSideProps(context) {
//   const idOrder = context.params.id
  
//   return handleServerSideAuth(context, 'Order',async (token) => {
//     return await apiClient.get(`orders/${idOrder}`, token);
//   });
// }

export default MiPaquete;
