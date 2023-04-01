import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

const filesNeedToExclude = ['src/stores/MealStore.vue', 'src/stores/RandomCounterStore.vue']
const filesPathToExclude = filesNeedToExclude.map((src) => {
    return fileURLToPath(new URL(src, import.meta.url))
})
// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   // plugins: [vue(), commonjs()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig({
    server: {
        port: 7878
    },
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },

    build: {
        manifest: true,
        rollupOptions: {
            external: [...filesPathToExclude]
        }
    }
})
