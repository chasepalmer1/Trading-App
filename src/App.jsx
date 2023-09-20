import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import PaperTrading from './pages/PaperTrading.jsx'
import PortfolioTracking from './pages/PortfolioTracking'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signUp" element/>
        <Route path="/paperTrade" element={<PaperTrading/>}/>
        <Route path="/portTrack" element={<PortfolioTracking/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App;