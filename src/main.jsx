import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import newsStore from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={newsStore} >
      <App />
    </Provider>
  </React.StrictMode>,
)
