import { defineConfig } from "vite"
// custom jsx pragma
export default defineConfig({
    esbuild: {
        jsxFactory: 'dom',
        jsxFragment: 'Fragment',
        jsxInject: `import { element,effect,dom } from "./dom-builder";`,
    }
})
