import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'index.html'
        },
        minify: 'esbuild'
    },
    server: {
        open: true,
        port: 3000
    }
});
