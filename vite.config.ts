import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false
  },
  plugins: [
    vue(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      remotes: {
        material: "http://localhost:5500/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./packages/ui/components/atoms/button",
        './Card': "./packages/ui/components/atoms/card",
        './TextField': './packages/ui/components/atoms/text-field'
      },
      shared: ['vue'],
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
})
