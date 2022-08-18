import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './Popup'
import Options from './Options'
import reportWebVitals from './reportWebVitals'

import './style.css'

if (process.env.REACT_APP_TARGET === 'popup') {
  ReactDOM.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
    document.getElementById('popup') || document.createElement('div')
  )
}

if (process.env.REACT_APP_TARGET === 'options') {
  ReactDOM.render(
    <React.StrictMode>
      <Options />
    </React.StrictMode>,
    document.getElementById('options') || document.createElement('div')
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
