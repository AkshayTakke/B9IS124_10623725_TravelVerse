import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'travel',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
    scopes: ["profile","email"],
    serverClientId: "160012889513-qkxxxxxxxxxxxxxxxxxxxxxxxxkgubrp5ve.apps.googleusercontent.com"
    }
  },
    
}

export default config;
