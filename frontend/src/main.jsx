import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './context/AppProvider.jsx'
import ShopProvider from './context/ShopProvider.jsx'
import './index.css'
import './my_css.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ShopProvider>
  </BrowserRouter>,
)
