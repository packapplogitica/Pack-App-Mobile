import { useEffect } from "react";
import { useRouter } from 'next/router';
import { InfoCard } from "../atoms";
import { SigninForm } from "../molecules";
import { useSession } from "next-auth/react";
import Loader from "../molecules/Loader/Loader";
import { useCapacitorSession } from "../../hooks/useCapacitorSession";
import { useSessionProvider } from "../../context/SessionProvider";
// import { useAuth } from "@/hooks/useAuth";
export const SigninPage = ({ data }) => {
  // const { user ,loading} = useAuth();
  const router = useRouter();
    const { session } = useSessionProvider();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  // if (loading) {
  //   return <Loader visible />;
  // }

  return (
    <>
      <InfoCard data={data.data} />
      <SigninForm />
    </>
  );
};
