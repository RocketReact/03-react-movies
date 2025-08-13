import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base:
        process.env.NODE_ENV === 'production'
            ? process.env.VERCEL
                ? '/'
                : './' // ставим относительные пути, чтобы локально тоже работало
            : './',
    build: {
        sourcemap: true,
    },
})
