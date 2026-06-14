import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <App />
  </StrictMode>,
)
