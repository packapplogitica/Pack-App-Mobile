import { Hero, NationalShippingService, UsePackApp, ContastUs } from "../organisms";

import { HowItWorks } from "../molecules";
import { SocialLinks } from "../atoms";
import { ContactUs } from "../organisms/ContactUs/ContactUs";

export const NosotrosPage = ({
  hero,
  howItWorks,
  usePackApp,
  nationalShipingService,
  socialLinks,
}) => {
  return (
    <>
      <Hero hero={hero} />

      <UsePackApp usePackApp={usePackApp} />

      <HowItWorks howItWorks={howItWorks} />

      <NationalShippingService {...nationalShipingService} />

      <ContactUs />

      {/* <SocialLinks socialLinks={socialLinks} /> */}
    </>
  );
};
