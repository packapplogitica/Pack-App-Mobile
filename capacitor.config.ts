import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'packapp.mobile',
  appName: 'packapp-mobile-app',
  webDir: 'out',
  server: {
    url: 'http://192.168.1.135:3001', // Tu IP local + puerto de Next.js
    cleartext: true, // Permite HTTP en dev (no uses en prod)
  },
};

export default config;
