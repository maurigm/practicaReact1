import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import './Style.css'
// import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={10}></CounterApp>
  </React.StrictMode>,
)
