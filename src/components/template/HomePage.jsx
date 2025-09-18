import { useRouter } from "next/router";
import { Home, OrderConfirmationSession } from "../organisms";
import { useSessionProvider } from "../../context/SessionProvider";
// import DirectAccess from "../organisms/DirectAccess/DirectAccess";

export const HomePage = ({ data, packages }) => {
  const router = useRouter();
  const { paquete } = router.query;
  const { session } = useSessionProvider()
  console.log('la session nueva',session)
  
  return (
    <>
      {/* <DirectAccess /> */}

      <Home />
      <OrderConfirmationSession
        sortedItems={data.sortedItems}
        categories={data.categories}
        packages={packages?.orders}
        total={packages?.total}
        selectedPackageId={paquete}
        session={session}
      />
    </>
  );
};
