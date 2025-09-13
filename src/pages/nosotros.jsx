import { NosotrosPage } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";

const Nosotros = () => {
  const { defaultData } = useStaticData();
  return <NosotrosPage {...defaultData.nosotrosPage} />;
};

export default Nosotros;
