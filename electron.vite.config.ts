import path, { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: path.resolve('public'),
    build: {
      outDir: 'out/main',
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'src/main/index.ts')
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'out/preload'
    }
  },
  renderer: {
    publicDir: path.resolve('public'),
    define: {
      'process.platform': JSON.stringify(process.platform)
    },
    build: {
      outDir: 'out/renderer'
    },
    css: {
      postcss: {
        plugins: [ 
          // @ts-ignore
          tailwindcss({
          config: './src/renderer/tailwind.config.js'
        }),
      ],	
      },  
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
