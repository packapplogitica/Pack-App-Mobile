import OfferDetailPage from "../../components/template/OfferDetailPage/OfferDetailPage";
// import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import Head from "next/head";
import { useMemo } from "react";
function OfferDetail() {
  // console.log(existingApplication)
  // const orderId = useMemo(() => data.id.toString(), [data]);
  return (
    <>
      <Head>
        <title>{`Oferta `}</title>
      </Head>
      <OfferDetailPage/>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const idApplication = context.params.id

//   return handleServerSideAuth(context, 'Offer', async (token) => {
//     return await apiClient.get(`application/carrier/${idApplication}`, token);
//   });
// }


export default OfferDetail;