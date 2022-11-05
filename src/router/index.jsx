import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Formulario from '../pages/formulario'
import LandingPage from '../pages/landingPage'
import Search from '../pages/search'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/form' element={<Formulario />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
  )
}

export default RoutesComponent
