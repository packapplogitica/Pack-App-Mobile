import { OrderPage } from "@/components/template";

import Head from "next/head";

const MisOfertasPage = () => {
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["applications"],
  //   queryFn: fetchApplications,
  // });

  // if (isLoading) return <p>Cargando...</p>;
  // if (isError) return <p>Error: {error.message}</p>;
  return (
    <>
      <Head>
        <title>Mis Ofertas | PackApp Web</title>
      </Head>
      {/* <OrderPage /> */}
    </>
  );
};


// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return handleServerSideAuth(context,null,async (token) => {
//     return await apiClient.get(`application/carrier`, token);
//   });
// }
export default MisOfertasPage;
