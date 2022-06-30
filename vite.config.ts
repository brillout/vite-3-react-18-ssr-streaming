import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'

export default {
  plugins: [react(), ssr()],
  resolve: {
    // Only needed for this example
    // TODO: check if still needed
    preserveSymlinks: true,
  },
  ssr: { external: [ 'debug' ] },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: { include: ['react-streaming', 'react-streaming/client'] },
} as UserConfig
