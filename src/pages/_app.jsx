// _app.js

import { Layout } from "@/components/template";
import useStaticData from "@/hooks/useStaticData";
import Providers from "@/libs/Providers";
import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { GoogleOAuthProvider} from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  const { defaultData } = useStaticData();
  const queryClient = new QueryClient();
  const useLayout = Component.useLayout ?? true;
  const content = <Component {...pageProps} />;
  return (
    <GoogleOAuthProvider clientId="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">
      <Providers>
        <QueryClientProvider client={queryClient}>
          {useLayout ? (
            <Layout layout={defaultData.layout}>{content}</Layout>
          ) : (
            content
          )}
        </QueryClientProvider>
      </Providers>
    </GoogleOAuthProvider>
  );
}
