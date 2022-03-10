import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reducer, { initialState } from './util/reducer'
import { StateProvider } from './util/StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
