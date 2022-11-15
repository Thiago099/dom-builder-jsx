import { defineConfig } from "vite"
import path from "path"
// custom jsx pragma
export default defineConfig({
    esbuild: {
        jsxFactory: 'dom',
        jsxFragment: 'Fragment',
        jsxInject: `import { element, effect, dom } from "~/dom-builder";`,
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '~': path.resolve(__dirname)
        }
      },
})
