import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './main/Home'
import Contacto from './main/Contacto'
import Perso from './main/Perso'
import Logincc from './creadores/Logincc'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contacto' element={<Contacto />} />
        <Route exact path='/perso' element={<Perso />} />
        <Route exact path='/cc' element={<Logincc />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </main>
  )
}

export default Main