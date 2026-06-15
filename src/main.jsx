import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeScroll from './components/HomeScroll.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <HomeScroll needBtn={true} heading="Trending"/>
    <HomeScroll heading="Popular"/>
    <HomeScroll heading="Top Rated"/>
    <HomeScroll heading="Upcoming"/>
    <HomeScroll heading="Now Playing"/>
    <App />
  </StrictMode>,
)
