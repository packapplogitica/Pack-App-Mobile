import { InfoCard } from "../atoms";
import { ContactForm } from "../molecules";

export const ContactPage = ({ data }) => {
  return (
    <>
      <InfoCard data={data.data} />
      <ContactForm />
    </>
  );
};
