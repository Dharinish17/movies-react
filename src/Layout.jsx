import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout