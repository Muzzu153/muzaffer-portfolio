// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ 
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
    })
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
  },


  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Keep React and React-DOM together
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          
          // Router separate
          if (id.includes('@tanstack/react-router')) {
            return 'router'
          }
          
          // Sanity separate
          if (id.includes('@sanity/client')) return 'sanity-core';

          if (id.includes('@sanity/image-url')) return 'sanity-image';
          
          if (id.includes('@portabletext') ) {
            return 'content-renderer'
          }

          if(id.includes('refractor') ){
            return 'refractor'
          }

          if( id.includes('SyntaxHighlighter') || id.includes('prism') || id.includes('Prism') || id.includes('react-syntax-highlighter')){
            return 'highlighter'
          }
          
          // Everything else from node_modules
          // if (id.includes('node_modules')) {
          //   return 'vendor'
          // }
        }
      }
    },
  }
})