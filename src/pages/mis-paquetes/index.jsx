import Head from "next/head";
import  {PackPage}  from "../../components/template/PackPage/PackPage";
import { getSession } from "next-auth/react";
import WithAuth from "../../components/WithAuth/WithAuth";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

const MisPaquetesPage = () => {
  return (
    <>
    <WithAuth>
      <Head>
        <title>Mis Paquetes | PackApp Web</title>
      </Head>
      <PackPage/>
       </WithAuth>
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

