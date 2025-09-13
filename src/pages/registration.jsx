import Head from "next/head";
import { RegistrationPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";

const Registration = () => {
  const { defaultData } = useStaticData();

  return (
    <>
      <Head>
        <title>Registrate en PackApp Web</title>
      </Head>
      <RegistrationPage data={defaultData.signUpPage} />
    </>);
  
};

export default Registration;