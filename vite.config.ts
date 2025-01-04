import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: './postcss.config.js',
      },
    server: {
        proxy: {
            '/api': 'https://car-search-challengue.vercel.app/', // Redirige las llamadas al backend
        },
    },
});
