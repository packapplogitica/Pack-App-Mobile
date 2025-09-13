import { OrderPage } from "@/components/template";
import apiClient from "@/utils/apiClient";
import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import { getSession } from "next-auth/react";
import Head from "next/head";

const MisOfertasPage = ({data}) => {
  return (
    <>
    <Head>
      <title>Mis Ofertas | PackApp Web</title>
    </Head>
      <OrderPage applications= {data} />
    </>
  );
};


export async function getServerSideProps(context) {
  const session = await getSession(context);

  // let applications
  // if(session){
  //    applications = await apiClient.get('application/carrier',token)
  //    if(applications?.error?.statusCode === 401){
  //     return {
  //       redirect: {
  //         destination: '/LoaderAuthhSession', // Cambia esto a la ruta a la que quieras redirigir
  //         permanent: false,
  //       },
  //     }
  //   }else{
  //     return {
  //       props: {
  //         applications,
  //       },
  //     };
  //   }
  // }else{
  //   return {
  //     redirect: {
  //       destination: '/signin', // Cambia esto a la ruta a la que quieras redirigir
  //       permanent: false,
  //     },
  //   };
  // }

  return handleServerSideAuth(context,null,async (token) => {
    return await apiClient.get(`application/carrier`, token);
  });
}
export default MisOfertasPage;
