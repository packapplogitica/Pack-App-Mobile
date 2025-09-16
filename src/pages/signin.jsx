import { SigninPage } from "@/components/template";
import WithAuth from "../components/WithAuth/WithAuth";
import useStaticData from "@/hooks/useStaticData";
import Head from "next/head";

const Signin = () => {
  const { defaultData } = useStaticData();

  return (
    <WithAuth>
      <Head>
        <title>Iniciá Sesión en PackApp Web</title>
      </Head>
      <SigninPage data={defaultData.signInPage} />
    </WithAuth>
  );
};

export default Signin;
