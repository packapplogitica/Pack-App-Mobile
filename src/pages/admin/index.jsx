import Head from "next/head";
import AdminLogin from "@/components/admin/login";

const Admin = () => {
  return (
    <>
      <Head>
        <title>PackApp</title>
      </Head>
      <AdminLogin />
    </>
  );
};
Admin.useLayout = false;
export default Admin;
