import { useRouter } from "next/router";
import { Home, OrderConfirmationSession } from "../organisms";
// import DirectAccess from "../organisms/DirectAccess/DirectAccess";

export const HomePage = ({ data, packages }) => {
  const router = useRouter();
  const { paquete } = router.query;
  
  return (
    <>
      {/* <DirectAccess /> */}
      <Home />
      {/* <OrderConfirmationSession
        sortedItems={data.sortedItems}
        categories={data.categories}
        packages={packages?.orders}
        total={packages?.total}
        selectedPackageId={paquete}
      /> */}
    </>
  );
};
