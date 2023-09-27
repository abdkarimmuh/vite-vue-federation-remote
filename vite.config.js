import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './Button': './src/components/Button.vue',
          './Docs': './src/components/Docs.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }
})
