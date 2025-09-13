import { createEmotionCache } from "@mantine/core";

// Exposes an emotion cache that can be shared by server and client
// to enable server-side rendering of Mantine styles and avoid
// a flash of unstyled content (FOUC) for SSR routes.
export const emotionCache = createEmotionCache({
  key: "mantine",
  stylisPlugins: [],
});
