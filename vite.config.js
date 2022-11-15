import { defineConfig } from "vite"
import  jsxDomBuilderVitePlugin  from "jsx-dom-builder/vite-plugin"
// custom jsx pragma
export default defineConfig({
  plugins:[jsxDomBuilderVitePlugin()],
  base: '/jsx-dom-builder-vite-example /',     
})
