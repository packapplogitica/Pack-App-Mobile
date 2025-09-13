import {
    ColorSchemeProvider,
    LoadingOverlay,
    MantineProvider,
} from "@mantine/core";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { theme } from "./theme";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { SessionProvider } from "next-auth/react";
import { emotionCache } from "./emotion-cache";
import { DataProvider } from "./DataProvider";

const Providers = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on("routeChangeStart", () => {
            setLoading(true);
        });

        Router.events.on("routeChangeComplete", () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            setLoading(false);
        });

        Router.events.on("routeChangeError", () => {
            setLoading(false);
        });
    });

    return (
        <SessionProvider>
            <DataProvider>
                <ColorSchemeProvider colorScheme="light">
                    <MantineProvider
                        theme={{ ...theme }}
                        withGlobalStyles
                        withNormalizeCSS
                        emotionCache={emotionCache}
                    >
                        <Notifications />
                        <LoadingOverlay
                            style={{ position: "fixed" }}
                            visible={loading}
                            loaderProps={{
                                size: "xl",
                                color: theme.colors.orangePrimary[6],
                            }}
                        />
                        <ModalsProvider
                            modalProps={{
                                size: 850,
                                radius: 8,
                            }}
                        >
                            {children}
                        </ModalsProvider>
                    </MantineProvider>
                </ColorSchemeProvider>
            </DataProvider>
        </SessionProvider>
    );
};

export default Providers;
