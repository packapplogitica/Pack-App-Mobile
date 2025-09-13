import { ContactPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";

const Contact = () => {
  const { defaultData } = useStaticData();
  return <ContactPage data={defaultData.contactPage} />;
};

export default Contact;
