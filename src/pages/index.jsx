import { HomePage } from "@/components/template";
import WithAuth from "../components/WithAuth/WithAuth";
import { useCapacitorSession } from "../hooks/useCapacitorSession";
import useStaticData from "@/hooks/useStaticData";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApiMutation, useApiQuery } from "../utils/apiClient/reactQueryHooks";

const Home = ({ data }) => {
  const { defaultData } = useStaticData();

    const router = useRouter();
  const { page, limit } = router.query;

  console.log('los paramaetro',page,limit)

  // GET órdenes
  const { data: orders, isLoading, error } = useApiQuery(
    ["orders"],
    `/orders/carrier?page=${page ?? 1}&limit=${limit ?? 50}`
  );

  console.log('las nuevas ordenes', orders)
  // POST crear orden
  const createOrder = useApiMutation("/orders/prueba", "POST");

  return (
    <>
      {/* <Head>
        <title>PackApp Web</title>
      </Head>
      <HomePage data={defaultData.homePage} packages={data} /> */}

      <WithAuth isHomePage>
        <Head>
          <title>PackApp Web</title>
        </Head>
        <HomePage data={defaultData.homePage} packages={orders} /> 
      </WithAuth>
    </>
  );
};


// export async function getServerSideProps(context) {

//   const session = await getSession(context); 
//   if (session && !session.isRegistrationComplete) {
//     console.log('entra aca context',session)
//     return {
//       redirect: {
//         destination: '/complete-registration',
//         permanent: false,
//       },
//     };
//   }


//   let packages;

//   try {
//     const data = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/carrier?page=${page ?? 1}&limit=${limit ?? 50}`
//     );
//     packages = await data.json();
//   } catch (error) {
//     console.log(error);
//     packages = [];
//   }

//   return {
//     props: {
//       data: packages,
//     },
//   };

// }

export default Home;
