import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Registrasi from './pages/Registrasi'
import Employee from '../src/pages/Employee/Show'
import CreateEmployee from '../src/pages/Employee/Create'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/' exact Component={Login}/>
        <Route path='/registrasi' Component={Registrasi}/>
        <Route path='/employee' Component={Employee}/>
        <Route path='/employee/create' Component={CreateEmployee}/>
    </Routes>
   </BrowserRouter>
  )
}