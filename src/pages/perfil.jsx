import { ProfilePage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import apiClient from "@/utils/apiClient";
import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

const Perfil = ( {data}) => {
  // console.log('el profile',profile)
  const { status } = useSession();
  const { defaultData } = useStaticData();
  const session = data;

  return (
    <>
      <Head>
        <title>Perfil | PackApp Web</title>
      </Head>
      {session && <ProfilePage profile={data} info={defaultData.profilePage} />}
    </>
  );
};

export async function getServerSideProps(context) {
  
return handleServerSideAuth(context,null,async (token) => {
  return await apiClient.get(`profiles/me`, token);
});

}



export default Perfil;
