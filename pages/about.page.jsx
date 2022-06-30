export { Page }

import React from 'react'

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>This app showcases a Vite + React 18 SSR streaming integration with:</p>
      <ul>
        <li>
          <a href="https://vitejs.dev/">Vite</a>
        </li>
        <li>
          <a href="https://vite-plugin-ssr.com/">vite-plugin-ssr</a>
        </li>
        <li>
          <a href="https://github.com/brillout/react-streaming">react-streaming</a>
        </li>
      </ul>

      <p>
        See{' '}
        <a href="https://github.com/brillout/vite-3-react-18-ssr-streaming">
          github.com/brillout/vite-3-react-18-ssr-streaming
        </a>
        .
      </p>
    </>
  )
}
