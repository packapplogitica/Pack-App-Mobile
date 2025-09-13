import { HomePage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import apiClient from "@/utils/apiClient";
import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import { getSession, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = ({ data }) => {
  const { defaultData } = useStaticData();
  // const dataSession = useSession()
  // const router = useRouter()
  // console.log('la data desde home', dataSession?.data)

  // if (!dataSession?.data?.isRegistrationComplete) {
  //   router.push('/complete-registration');
  // }

  return (
    <>
      <Head>
        <title>PackApp Web</title>
      </Head>
      <HomePage data={defaultData.homePage} packages={data} />
    </>
  );
};

export async function getServerSideProps(context) {

  const session = await getSession(context); 
  if (session && !session.isRegistrationComplete) {
    console.log('entra aca context',session)
    return {
      redirect: {
        destination: '/complete-registration',
        permanent: false,
      },
    };
  }
  const { page, limit } = context.query;

  let packages;

  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/carrier?page=${page ?? 1}&limit=${limit ?? 50}`
    );
    packages = await data.json();
  } catch (error) {
    console.log(error);
    packages = [];
  }

  return {
    props: {
      data: packages,
    },
  };

}

export default Home;
