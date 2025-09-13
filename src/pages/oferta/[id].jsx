import OfferDetailPage from "@/components/template/OfferDetailPage/OfferDetailPage";
import apiClient from "@/utils/apiClient";
import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";
import Head from "next/head";
import { useMemo } from "react";
function OfferDetail({ data }) {
  // console.log(existingApplication)
  const orderId = useMemo(() => data.id.toString(), [data]);
  return (
    <>
      <Head>
        <title>{`Oferta ${orderId} `}</title>
      </Head>
      <OfferDetailPage existingApplication={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const idApplication = context.params.id

  return handleServerSideAuth(context, 'Offer', async (token) => {
    return await apiClient.get(`application/carrier/${idApplication}`, token);
  });
}


export default OfferDetail;