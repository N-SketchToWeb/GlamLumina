// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/create-order': 'http://localhost:8000', // Proxy requests to the backend
//     },
//   },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/GlamLumina/", // ✅ Only needed for GitHub Pages
  plugins: [react()],
});


