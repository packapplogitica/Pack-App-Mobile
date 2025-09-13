import { SignupPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import Head from "next/head";

const Signup = () => {
  const { defaultData } = useStaticData();

  return (
    <>
      <Head>
        <title>Registrate en PackApp Web</title>
      </Head>
      <SignupPage data={defaultData.signUpPage} />
    </>
  );
};

export default Signup;
