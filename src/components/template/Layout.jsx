import { Stack, ScrollArea } from "@mantine/core";

import { FooterComponent, HeaderComponent } from "../organisms";
import { useRouter } from "next/router";

export const Layout = ({ children, layout }) => {
  const { header, footer } = layout;
  const router = useRouter()
  const isAdressePage = router.asPath.includes('addresseTrack') || router.asPath.includes('VeificationUser')

  return (
    <Stack spacing={0} justify="space-between" sx={{ height: "100vh" }}>
      <div>
        {!isAdressePage && <HeaderComponent header={header} />}

        <main>{children}</main>
      </div>

      <FooterComponent footer={footer} />
    </Stack>
  );
};
