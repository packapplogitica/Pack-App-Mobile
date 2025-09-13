import { InfoCard, PaddingBox, TitlePage } from "../atoms";
import { RegistrationForm } from "../molecules";

export const RegistrationPage = ({ data }) => {
  const { cards } = data;

  return (
    <>
      <InfoCard data={data.data} />

      <RegistrationForm />
    </>
  );
};
