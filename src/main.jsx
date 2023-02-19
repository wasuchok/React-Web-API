import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      { routes }
    </BrowserRouter>
  </React.StrictMode>,
)
