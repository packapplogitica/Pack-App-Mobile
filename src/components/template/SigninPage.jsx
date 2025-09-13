import { useEffect } from "react";
import { useRouter } from 'next/router';
import { InfoCard } from "../atoms";
import { SigninForm } from "../molecules";
import { useSession } from "next-auth/react";
import Loader from "../molecules/Loader/Loader";
export const SigninPage = ({ data }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader visible />;
  }

  return (
    <>
      <InfoCard data={data.data} />
      <SigninForm />
    </>
  );
};
