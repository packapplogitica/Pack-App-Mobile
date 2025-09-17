import { ProfilePage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { handleServerSideAuth } from "../utils/serverSideHelpers/serverSideHelpers";
import WithAuth from "../components/WithAuth/WithAuth";

const Perfil = ({ data }) => {
  // console.log('el profile',profile)
  const { status } = useSession();
  const { defaultData } = useStaticData();
  const session = data;

  return (
    <>
      <WithAuth>
        <Head>
          <title>Perfil | PackApp Web</title>
        </Head>
        {session && <ProfilePage profile={data} info={defaultData.profilePage} />}
      </WithAuth>

    </>
  );
};

// export async function getServerSideProps(context) {

// return handleServerSideAuth(context,null,async (token) => {
//   return await apiClient.get(`profiles/me`, token);
// });

// }



export default Perfil;
