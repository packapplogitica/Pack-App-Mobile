import { InfoCard, PaddingBox, TitlePage } from "../atoms";
import { SignupForm } from "../molecules";

export const SignupPage = ({ data }) => {
  const { cards } = data;

  return (
    <>
      <InfoCard data={data.data} />

      <SignupForm />
    </>
  );
};
