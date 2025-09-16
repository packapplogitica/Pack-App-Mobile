import { HomePage } from "@/components/template";
import WithAuth from "../components/WithAuth/WithAuth";
import { useCapacitorSession } from "../hooks/useCapacitorSession";
import useStaticData from "@/hooks/useStaticData";
import apiClient from "@/utils/apiClient";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = ({ data }) => {
  const { defaultData } = useStaticData();

  // }
  // const { user, loading } = useAuth();


  // if (loading) return <div>Cargando...</div>;
  //   console.log('el lodign',user)
  // // if (!user) {
  //   router.push('/signin');
  //   return null;
  // }




  return (
    <>
      {/* <Head>
        <title>PackApp Web</title>
      </Head>
      <HomePage data={defaultData.homePage} packages={data} /> */}

      <WithAuth isHomePage>
        <h1>Mis ofertas</h1>
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
//   const { page, limit } = context.query;

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
