import Chekcout2 from "@/components/template/CheckOutPage/Chekcout2";
import apiClient from "@/utils/apiClient";
import { handleServerSideAuth } from "@/utils/serverSideHelpers/serverSideHelpers";

const CheckOutDetail = (application) => {
  console.log(application.data)
  return (
    <>
      <Chekcout2 application = {application?.data}/>
    </>
  );
};

export async function getServerSideProps(context) {

  const idApplication = context.params.id
  return handleServerSideAuth(context,null,async (token) => {
    return await apiClient.get(`/application/${idApplication}`, token);
  });

}

export default CheckOutDetail;
