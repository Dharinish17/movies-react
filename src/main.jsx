import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import SearchRes from './components/SearchRes.jsx'
import MovieDetails from './components/MovieDetails.jsx'
import ErrorRoute from './components/ErrorRoute.jsx'
import Person from './components/Person.jsx'
import PersonDetails from './components/PersonDetails.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path="search/:type/:name" element={<SearchRes />} />
      <Route path='movieDetails/:movieId' element={<MovieDetails />} />
      <Route path='person' element={<Person />} />
      <Route path='personDetails/:personId' element={<PersonDetails />} />

      <Route path='*' element={<ErrorRoute />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
