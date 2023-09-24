import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        "name": "Menu",
        "short_name": "Menu",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
          {
            "src": "public/32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "public/64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "public/72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "public/96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "public/128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "public/144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "public/152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "public/192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "public/256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "public/384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "public/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
      
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
