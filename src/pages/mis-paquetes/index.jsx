import Head from "next/head";
// import { PackPage } from "@/components/template";
import { getSession } from "next-auth/react";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

const MisPaquetesPage = ({data}) => {
  return (
    <>
      <Head>
        <title>Mis Paquetes | PackApp Web</title>
      </Head>
      {/* <PackPage orders={data}/> */}
    </>
  );
};

export default MisPaquetesPage;


// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   const token = session ? session?.user?.token : null;
 

//   return handleServerSideAuth(context, 'Offer',async (token) => {
//     return await apiClient.get(`orders/despachante`, token);
//   });
// }

