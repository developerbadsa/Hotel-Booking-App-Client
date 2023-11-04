import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="icon" type="image/png" href="/public/home.png" />
      </Helmet>

    hello
    <img src="/public/home.png" alt="" />
    </h1>
  </React.StrictMode>,
)
