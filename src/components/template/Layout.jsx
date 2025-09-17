import { Stack, ScrollArea } from "@mantine/core";

import { FooterComponent, HeaderComponent } from "../organisms";
import { useRouter } from 'next/navigation'; // en App Router
import { useCapacitorSession } from "../../hooks/useCapacitorSession";
import { useSessionProvider } from "../../context/SessionProvider";
// import { useAuth } from "@/hooks/useAuth";

export const Layout = ({ children, layout }) => {
  const { header, footer } = layout;
  const router = useRouter()
  const isAdressePage = router?.asPath?.includes('addresseTrack') || router?.asPath?.includes('VeificationUser')

  //  const { user, loading } = useAuth();

  const { session, getPreferences, } = useSessionProvider()
  // if (loading) return <div>Cargando...</div>;


  return (
    <Stack spacing={0} justify="space-between" sx={{ height: "100vh" }}>
      <div>
        {!isAdressePage && <HeaderComponent header={header} user={session}/>}

        <main>{children}</main>
      </div>

      <FooterComponent footer={footer} />
    </Stack>
  );
};
