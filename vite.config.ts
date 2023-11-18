import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path';


const rootPath = resolve(process.cwd())
const srcPath = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            '~': rootPath,
            '@': srcPath,
            '/images': 'src/assets',
        },
    },
})
