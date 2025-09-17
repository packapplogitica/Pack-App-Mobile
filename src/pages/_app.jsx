// _app.js

import { Layout } from "@/components/template";
import WithAuth from "../components/WithAuth/WithAuth";
import useStaticData from "@/hooks/useStaticData";
import Providers from "@/libs/Providers";
import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SessionProvider } from "../context/SessionProvider";
// import { GoogleOAuthProvider} from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  const { defaultData } = useStaticData();
  const [queryClient] = useState(() => new QueryClient());
  const useLayout = Component.useLayout ?? true;
  const content = <Component {...pageProps} />;
  return (
    <GoogleOAuthProvider clientId="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">
      <Providers>
        <QueryClientProvider client={queryClient}>
          {useLayout ? (
             <SessionProvider>            
              <Layout layout={defaultData.layout}>{content}</Layout>

             </SessionProvider>
          ) : (
            content
          )}
        </QueryClientProvider>
      </Providers>
    </GoogleOAuthProvider>
  );
}
