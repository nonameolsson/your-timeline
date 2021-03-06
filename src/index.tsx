import React from 'react'
import { render } from 'react-dom'

import './config/i18n'

import GlobalStyles from './styles/global-styles'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
