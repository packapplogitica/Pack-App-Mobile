import { SigninPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import Head from "next/head";

const Signin = () => {
  const { defaultData } = useStaticData();

  return (
    <>
      <Head>
        <title>Iniciá Sesión en PackApp Web</title>
      </Head>
      <SigninPage data={defaultData.signInPage} />
    </>
  );
};

export default Signin;
