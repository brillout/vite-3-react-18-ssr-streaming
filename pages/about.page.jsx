export { Page }

import React from 'react'

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>This app showcases a Vite + React 18 SSR streaming integration using:</p>
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
        Source:{' '}
        <a href="https://github.com/brillout/vite-3-react-18-ssr-streaming">
          github.com/brillout/vite-3-react-18-ssr-streaming
        </a>
        .
      </p>
      <p>
        This is a low-level integration meant for seniors and framework builders; <b>the vision here</b> is to have a{' '}
        <em>lot</em> of high-level frameworks built on top of it, see <a href="https://vike.land/">Vike</a>.
      </p>
      <p>
        For a future with a flourishing ecosystem of frameworks; <b>pick your framework like you pick your date picker
        component</b>.
      </p>
    </>
  )
}
