import { Container } from "@mantine/core";
import { InfoCard, TitlePage } from "../atoms";
import { ForgotPasswordForm } from "../molecules";

export const ForgotPassswordPage = ({ data }) => {
  return (
    <>
      <InfoCard data={data.data} />
      <ForgotPasswordForm />
    </>
  );
};
