import { ForgotPassswordPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";

const ForgotPassword = () => {
  const { defaultData } = useStaticData();
  return <ForgotPassswordPage data={defaultData.forgotPasswordPage} />;
};

export default ForgotPassword;
