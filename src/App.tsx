import { useState } from 'react'

import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {


  return (

    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Dashboard />}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
